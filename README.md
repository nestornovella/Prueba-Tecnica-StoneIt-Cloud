# Aplicación de Gestión de Tareas

¡Bienvenido al desafío de desarrollo de una aplicación web de gestión de tareas! Este proyecto fue creado como prueba técnica para evaluar habilidades en desarrollo Fullstack. 

![Gestión de Tareas](./client/public/1.jpeg)

## Descripción

La aplicación permite a los usuarios registrarse, iniciar sesión y gestionar sus tareas personales de forma eficiente. Los usuarios pueden crear tareas con diferentes estados y etiquetas, eliminarlas y filtrar la lista de tareas según sus necesidades.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configurar Prisma](#configurar-Prisma)
- [Configurar SQlite](#configurar-sqlite)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- **Registro de Usuarios**
  - Formulario de registro con validaciones para nombre de usuario, correo electrónico y contraseña.
  - Almacenamiento seguro de contraseñas en la base de datos.

- **Inicio de Sesión**
  - Autenticación de usuarios mediante JWT.

- **Gestión de Tareas**

  - **Crear Tareas**: Permite a los usuarios crear tareas con un título, una descripción, una fecha límite y múltiples etiquetas.
  - **Estados de Tareas**: Las tareas pueden tener diferentes estados como "trabajo", "hogar" y "completada".
  - **Eliminar Tareas**: Posibilidad de eliminar tareas de la lista.
  - **Etiquetas**: Las tareas pueden ser etiquetadas con múltiples etiquetas (ej: "trabajo", "urgente") para una mejor organización.
  - **Filtro de Etiquetas**: Permite a los usuarios filtrar las tareas por una o varias etiquetas a la vez.
  - **Personalización de Fondos**: Los usuarios pueden personalizar los fondos de pantalla de la aplicación.

  ![Interfaz de Tareas](./client/public/2.jpeg)
  ![Interfaz de Tareas](./client/public/3.jpeg)
  ![Interfaz de Tareas](./client/public/4.jpeg)

## Tecnologías Utilizadas

- **Frontend**
  - React con TypeScript
  - Material UI para la interfaz de usuario
  - Diseño responsive y manejo de estado

- **Backend**
  - Node.js con Express.js
  - API RESTful para la comunicación entre frontend y backend
  - Base de datos SQLite
  - Implementación de autenticación JWT

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:
   
   git clone (https://github.com/nestornovella/Prueba-Tecnica-StoneIt-Cloud.git)

Instala las dependencias para el frontend:
cd client
npm install

Instala las dependencias para el backend:
cd api
npm install

## Configurar Prisma

- **iniciaizar**
npx prisma init

- **crear el cliente de prisma**
npx prisma generate

- **Crear y aplicar una nueva migración**
npx prisma migrate dev --name nombre_migracion


## Configurar SQlite  
- **compilar el proyecto**

npm run build

establecer la variable de entorno DATABASE_URL en tu archivo .env.

## añade variables de entorno !IMPORTANTE==========================================!

api:
.env[
  DATABASE_URL="file:../../db/database.db"
  SECRET_KEY_JWT='dscwksa23sdaw'
]

client:
.env[ 
  VITE_AUTH_URL= http://localhost:3001/auth/
  VITE_USER_URL= http://localhost:3001/user/
  VITE_TASK_URL= http://localhost:3001/task/
]


npm run build

establecer la variable de entorno DATABASE_URL en tu archivo .env.



## Uso

Para iniciar el backend, navega a la carpeta api y ejecuta:
npm run dev

Para iniciar el frontend, navega a la carpeta client y ejecuta:
npm run dev

para ejecutar los test del backend, navega a la carpeta api y ejecuta:
npm run test

Accede a la aplicación en tu navegador en http://localhost:3001.

## Contribucion

Haz un fork del repositorio.
Crea una rama para tu característica: git checkout -b feature/nueva-caracteristica.
Realiza tus cambios y haz commit: git commit -m 'Añadir nueva característica'.
Haz push a la rama: git push origin feature/nueva-caracteristica.
Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.
