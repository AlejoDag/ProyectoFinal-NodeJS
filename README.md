Proyecto Final - API de Productos con Firebase y JWT 

Este proyecto es una API RESTful construida con Node.js y Express, que permite gestionar productos mediante operaciones CRUD. Se utiliza Firebase Firestore como base de datos y autenticacion con JWT para proteger endpoints sensibles. El proyecto está desplegado en Vercel. 

Tecnologias Utilizadas 
• Node.js – Entorno de ejecución
• Express – Framework web
• Firebase Admin SDK – Conexión a Firestore
• JWT (jsonwebtoken) – Autenticación basada en tokens
• dotenv – Variables de entorno
• CORS – Seguridad en accesos HTTP
• Vercel – Deploy de la API 

Estructura del Proyecto 
src/ 
├── config/              # Configuración general (por ej. Firebase) 
├── controllers/         # Lógica de negocio por recurso 
├── middlewares/         # Middleware de autenticación y errores 
├── models/              # Modelo de datos (si aplica) 
├── routes/              # Definición de rutas 
├── services/            # Comunicación con Firestore 
├── utils/               # Utilidades (path helpers, etc.) 
├── index.js             # Punto de entrada de la aplicación 

Enfoques y Arquitectura 
• Separación de responsabilidades con arquitectura modular.
• Controladores y servicios desacoplados para facilitar el mantenimiento.
• Uso de Firebase Admin SDK para conectar con Firestore.
• Autenticación con JWT protegida por middleware.
• Deploy sin servidor (serverless) en Vercel. 

Instalacion Local 
1. Clonar el repositorio:
    git clone https://github.com/AlejoDag/ProyectoFinal-NodeJS.git cd ProyectoFinal-NodeJS
2. Instalar dependencias:
    npm install
3. Configurar variables de entorno:
   Crear un archivo .env en la raíz con este contenido:
     PORT=3000
     JWT_SECRET=tu_clave_secreta
     FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"proyectofinalnodejs", ...}
   Asegurarse de que FIREBASE_SERVICE_ACCOUNT sea un string JSON valido.
4. Iniciar el servidor:
   npm run start
  
Variables de Entorno 
       Clave                           Descripcion 
PORT                             Puerto local (ej. 3000) 
JWT_SECRET                       Clave secreta para firmar 
JWT FIREBASE_SERVICE_ACCOUNT     Objeto JSON del service account (Firebase) 

Endpoints Principales 
  Productos 
    • GET /api/v1/products → Obtener todos los productos
    • GET /api/v1/products/:id → Obtener producto por ID
    • POST /api/v1/products/create → Crear producto (requiere token)
    • DELETE /api/v1/products/:id → Eliminar producto (requiere token) 
  Autenticacion 
  • POST /api/v1/auth/login → Login y obtención de token 
  
Deploy 
La API está desplegada en Vercel: 
https\://proyecto-final-node-js.vercel.app 
Usa este dominio base en Postman o el frontend para consumir los endpoints. 

Autor 
Alejo Daguanno\ Proyecto Final - Curso Node.js
 
 
