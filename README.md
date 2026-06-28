# Backend Proyecto Concesionario de Vehiculos

API REST para gestion de usuarios y vehiculos, con autenticacion JWT y control de permisos por rol admin.

Autor: Tzvetomir Vesselinov Dochev

## Tecnologias

- Node.js
- Express
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

## Caracteristicas

- Registro e inicio de sesion de usuarios.
- Password hasheada con bcryptjs.
- Autenticacion con token JWT.
- Middleware de proteccion por token.
- Middleware de autorizacion para admin.
- CRUD de vehiculos.
- Solo usuarios admin pueden crear, editar y eliminar vehiculos.
- Los vehiculos guardan el usuario que los creo con el campo createdBy.
- Seeder para cargar vehiculos de ejemplo.

## Estructura del proyecto

```text
.
|- index.js
|- package.json
|- .env-example
|- src/
   |- config/
   |  |- db.js
   |- controllers/
   |  |- auth.controller.js
   |  |- vehiculo.controllers.js
   |- middlewares/
   |  |- auth.middleware.js
   |  |- admin.middleware.js
   |- models/
   |  |- User.js
   |  |- Vehiculo.js
   |- routes/
   |  |- auth.router.js
   |  |- vehiculo.router.js
   |- seeders/
      |- vehiculo.seeder.js
```

## Requisitos previos

- Node.js 18 o superior.
- MongoDB Atlas o MongoDB local.

## Instalacion local

1. Clonar repositorio.

```bash
git clone <URL_DEL_REPOSITORIO>
cd backend-proyecto-concesionario-de-vehiculos
```

2. Instalar dependencias.

```bash
npm install
```

3. Crear archivo .env a partir de .env-example.

En Linux o macOS:

```bash
cp .env-example .env
```

En Windows PowerShell:

```powershell
Copy-Item .env-example .env
```

4. Completar variables de entorno en .env.

```env
PORT=3001
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/concesionario
JWT_SECRET=tu_clave_super_secreta
```

5. Iniciar servidor.

```bash
npm start
```

Modo desarrollo (recarga automatica):

```bash
npm run dev
```

## Scripts

- npm start: inicia la API.
- npm run dev: inicia en modo watch.
- npm run seed: inserta vehiculos de ejemplo.

## Conexion a base de datos

La conexion se configura en src/config/db.js con Mongoose usando la variable MONGODB_URI.

## Modelo de datos

### User

- name: string, requerido.
- email: string, requerido, unico.
- password: string, requerido, minimo 6.
- admin: boolean, default false.
- createdAt, updatedAt: automaticos.

### Vehiculo

- categoria: string, requerido.
- marca: string, requerido.
- modelo: string, requerido.
- descripcion: string, opcional.
- foto: string, requerido.
- anio: number, requerido.
- precio: number, requerido.
- combustible: string, requerido.
- kilometraje: number, requerido.
- createdBy: ObjectId (referencia a User).
- createdAt, updatedAt: automaticos.

## Autenticacion y autorizacion

- El login devuelve un JWT.
- En rutas protegidas, enviar header Authorization con formato:

```text
Bearer TU_TOKEN
```

- Reglas de acceso en vehiculos:
  - GET /api/vehiculos y GET /api/vehiculos/:id son publicas.
  - POST /api/vehiculos, PUT /api/vehiculos/:id y DELETE /api/vehiculos/:id requieren token valido y usuario admin.

## Endpoints

Base URL local:

```text
http://localhost:3001
```

### Health

- GET /

Respuesta:

```json
{
  "message": "Bienvenido a la API de concesionario de vehiculos"
}
```

### Auth

- POST /api/auth/register
- POST /api/auth/login

Ejemplo register:

```json
{
  "name": "Admin",
  "email": "admin@demo.com",
  "password": "123456"
}
```

Ejemplo login:

```json
{
  "email": "admin@demo.com",
  "password": "123456"
}
```

Respuesta login:

```json
{
  "message": "Inicio de sesion exitoso",
  "token": "<JWT>",
  "user": {
    "id": "...",
    "name": "Admin",
    "email": "admin@demo.com",
    "admin": false
  }
}
```

### Vehiculos

- GET /api/vehiculos
- GET /api/vehiculos/:id
- POST /api/vehiculos (admin)
- PUT /api/vehiculos/:id (admin)
- DELETE /api/vehiculos/:id (admin)

Ejemplo crear vehiculo (POST /api/vehiculos):

```json
{
  "categoria": "SUV",
  "marca": "Toyota",
  "modelo": "RAV4",
  "descripcion": "Unico dueno",
  "foto": "https://ejemplo.com/rav4.jpg",
  "anio": 2021,
  "precio": 27500,
  "combustible": "Nafta",
  "kilometraje": 45000
}
```

Validaciones principales en alta y actualizacion:

- precio debe ser numero y mayor o igual a 0.
- kilometraje debe ser numero y mayor o igual a 0.
- anio debe ser numero y mayor o igual a 1900.
- categoria, marca, modelo, combustible y foto son obligatorios.

## Seeder

Para insertar datos de ejemplo:

```bash
npm run seed
```

## Deploy en Render

Configuracion recomendada para Web Service:

- Build Command: npm install
- Start Command: npm start

Variables de entorno requeridas:

- MONGODB_URI
- JWT_SECRET
- PORT (opcional, Render suele inyectarlo)

## Errores comunes y soluciones

1. Error en deploy por start command

- Causa: comando mal escrito como npm stard.
- Solucion: usar npm start.

2. Error de acceso al crear vehiculos

- Causa: usuario sin admin true.
- Solucion: usar un usuario admin para POST, PUT y DELETE de vehiculos.

3. Error de token

- Causa: falta header Authorization o token invalido.
- Solucion: enviar Bearer TU_TOKEN.

4. Error de validacion al crear vehiculo

- Causa: faltan campos obligatorios o tipos invalidos.
- Solucion: revisar payload, especialmente foto, anio, precio y kilometraje.

## Estado actual del proyecto

- API funcional para auth y vehiculos.
- Control de permisos admin activo para escritura de vehiculos.
- Lista para ejecucion local y deploy en Render.
