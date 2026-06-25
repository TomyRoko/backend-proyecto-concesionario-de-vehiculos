# backend-proyecto-concesionario-de-vehiculos - Tzvetomir Vesselinov Dochev

## Instalación

1. Clona el repositorio

```bash
git clone <repositori_url>
```

2. Navega al directorio del proyecto

```bash
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
