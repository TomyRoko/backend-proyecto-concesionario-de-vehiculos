# backend-proyecto-concesionario-de-vehiculos - Tzvetomir Vesselinov Dochev

## Seeders

```bash
npm run seed
```

## Instalación

1. Clona el repositorio

```bash
git clone <repositori_url>
```

2. Navega al directorio del proyecto

1bash
cd backend-proyecto-concesionario-de-vehiculos
```

3. Cambiar al branch `main` (si no estás ya en él)

```bash
git switch dev
```

4. Instala las dependencias

```bash
npm install
```

5. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

```
cp .env.example .env
```

    Luego , abre el archivo `.env` y agrega tu configuracion personalizada, como el puerto y la URI de MongoDB.

6. Inicia el servidor

```bash
npm start
```

Para desarollo con recarga automática, puedes usar:

```bash
npm run dev
```

## Uso

una vez que el servidor esté en funcionamiento, puedes acceder a la API a través de `http://localhost:3000` (o el puerto que hayas configurado en tu archivo `.env`).

### Obtener todos los vehículos

```bash
GET /api/vehiculos
```

response:

status: 200 OK

```json
[
  {
    "_id": "6a3d2...",
    "categoria": "Berlina",
    "marca": "Audi",
    "modelo": "A4",
    "descripcion": "El Audi A4 es un sedán de lujo que combina elegancia, tecnología avanzada y un rendimiento excepcional. Con su diseño aerodinámico y su interior refinado, ofrece una experiencia de conducción cómoda y sofisticada.",
    "foto": "https://picsum.photos/seed/vehiculo-1/200/150",
    "anio": 2024,
    "precio": 38900,
    "combustible": "Gasolina",
    "kilometraje": 0,
    "__v": 0,
    "createdAt": "2026-06-25T13:07:23.123Z",
    "updatedAt": "2026-06-25T13:07:23.123Z"
  },

]
```

estatus: 404 Not Found

```json
{
  "error": "No se encontraron vehículos"
}
```

### Obtener un vehículo por ID

```bash
GET /api/vehiculos/:id
```

response:

status: 200 OK

```json
{
  "_id": "6a3d2...",
  "categoria": "Berlina",
  "marca": "BMW",
  "modelo": "Serie 3",
  "descripcion": "El BMW Serie 3 es un sedán deportivo que combina rendimiento, lujo y tecnología avanzada. Con su diseño elegante y dinámico, ofrece una experiencia de conducción emocionante y confortable.",
  "foto": "https://picsum.photos/seed/vehiculo-2/200/150",
  "anio": 2023,
  "precio": 41200,
  "combustible": "Hibrido",
  "kilometraje": 0,
  "__v": 0,
  "createdAt": "2026-06-25T13:07:23.124Z",
  "updatedAt": "2026-06-25T13:07:23.124Z"
}
```

status: 404 Not Found

```json
{
  "error": "Vehículo no encontrado"
}
```
