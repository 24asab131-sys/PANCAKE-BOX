const CAMPOS_MAXIMOS = {
    nombre: 80,
    correo: 254,
    asunto: 120,
    mensaje: 2000
};

function responder(res, estado, cuerpo) {
    return res.status(estado).json(cuerpo);
}

function obtenerCampo(body, nombre) {
    if (typeof body[nombre] !== "string") {
        return "";
    }

    return body[nombre].trim();
}

module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return responder(res, 405, { error: "Método no permitido." });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        return responder(res, 503, {
            error: "El formulario todavía no está configurado. Intenta más tarde."
        });
    }

    let webhook;
    try {
        webhook = new URL(webhookUrl);
    } catch {
        return responder(res, 500, { error: "La configuración del formulario no es válida." });
    }

    if (
        webhook.protocol !== "https:" ||
        webhook.hostname !== "discord.com" ||
        !/^\/api\/webhooks\/\d+\/[^/]+\/?$/.test(webhook.pathname)
    ) {
        return responder(res, 500, { error: "La configuración del formulario no es válida." });
    }

    let body = req.body;
    if (typeof body === "string") {
        try {
            body = JSON.parse(body);
        } catch {
            return responder(res, 400, {
                error: "Revisa los datos del formulario e intenta de nuevo."
            });
        }
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return responder(res, 400, { error: "Revisa los datos del formulario e intenta de nuevo." });
    }

    if (typeof body.website === "string" && body.website.trim()) {
        return responder(res, 400, { error: "No se pudo enviar el mensaje." });
    }

    const campos = Object.keys(CAMPOS_MAXIMOS).reduce((resultado, nombre) => {
        resultado[nombre] = obtenerCampo(body, nombre);
        return resultado;
    }, {});

    const campoInvalido = Object.entries(CAMPOS_MAXIMOS).some(([nombre, maximo]) => {
        return !campos[nombre] || campos[nombre].length > maximo;
    });

    if (
        campoInvalido ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.correo)
    ) {
        return responder(res, 400, {
            error: "Revisa que todos los campos estén completos y sean válidos."
        });
    }

    const contenidoDiscord = {
        username: "Pancake Box | Contacto",
        allowed_mentions: { parse: [] },
        embeds: [{
            title: "Nuevo mensaje de contacto",
            description: campos.mensaje,
            color: 15245480,
            fields: [
                { name: "Nombre", value: campos.nombre },
                { name: "Correo", value: campos.correo },
                { name: "Asunto", value: campos.asunto }
            ],
            timestamp: new Date().toISOString()
        }]
    };

    try {
        const respuestaDiscord = await fetch(webhook.toString(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contenidoDiscord),
            signal: AbortSignal.timeout(8000)
        });

        if (!respuestaDiscord.ok) {
            console.error("Discord rechazó el mensaje del formulario:", respuestaDiscord.status);
            return responder(res, 502, {
                error: "No se pudo entregar el mensaje. Intenta de nuevo más tarde."
            });
        }
    } catch (error) {
        console.error("No se pudo conectar con Discord:", error.message);
        return responder(res, 502, {
            error: "No se pudo conectar para entregar el mensaje. Intenta de nuevo más tarde."
        });
    }

    return responder(res, 200, { ok: true });
};
