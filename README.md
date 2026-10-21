🥞 Proyecto Pancake Box

Descripción General

Pancake Box es una aplicación web integral diseñada para gestionar un servicio de suscripción y entrega a domicilio de cajas personalizadas de panqueques. Los usuarios pueden armar su caja ideal seleccionando el tipo de masa, siropes, frutas y extras, además de gestionar sus suscripciones mensuales o pedidos únicos.

🚀 Características Principales (Features)

Autenticación de Usuarios: Registro e inicio de sesión seguro (JWT). Perfiles de usuario con historial de pedidos.

Creador de Cajas (Box Builder): Interfaz interactiva donde los usuarios seleccionan paso a paso los ingredientes de su caja.

Gestión de Suscripciones: Opciones para recibir cajas semanales, quincenales o mensuales con descuentos aplicados.

Carrito de Compras y Checkout: Integración con pasarela de pagos segura para procesar tarjetas de crédito/débito.

Panel de Administración (Dashboard): Interfaz para que los administradores gestionen inventario, vean pedidos entrantes y actualicen el estado de los envíos.

🛠️ Tecnologías Utilizadas (Tech Stack)

Frontend:

React.js (con Hooks y Context API para el estado)

Tailwind CSS (para el diseño responsivo y UI)

React Router (para la navegación)

Backend:

Node.js con Express.js

MongoDB y Mongoose (Base de datos NoSQL)

Integraciones y Utilidades:

Stripe API (Pasarela de pagos)

JSON Web Tokens (JWT) para autenticación

Nodemailer (para correos de confirmación de pedidos)

📂 Estructura del Proyecto

```text
pancake-box/
├── client/                 # Código del Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/     # Componentes reutilizables (Navbar, Footer, Button)
│   │   ├── pages/          # Vistas (Home, BoxBuilder, Checkout, Profile)
│   │   ├── context/        # Estado global (CartContext, AuthContext)
│   │   ├── services/       # Llamadas a la API (Axios)
│   │   └── App.js          # Rutas principales
│   └── package.json
│
├── server/                 # Código del Backend (Node/Express)
│   ├── config/             # Configuración de BD y variables de entorno
│   ├── controllers/        # Lógica de las rutas (userController, orderController)
│   ├── models/             # Esquemas de Mongoose (User, Order, Product)
│   ├── routes/             # Endpoints de la API
│   ├── middleware/         # Autenticación y manejo de errores
│   ├── server.js           # Archivo de entrada del servidor
│   └── package.json
│
└── README.md               # Este archivo
```


