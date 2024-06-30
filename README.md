## Estructura del Proyecto

- `src/`: Código fuente.
- `__tests__/`: Pruebas unitarias.
- `.github/workflows/express.yml`: Configuración de CI/CD.
- `eslint.config.mjs`: Análisis de código.

## Configuración y Ejecución

1. Clona el repositorio:
   git clone https://github.com/tu_usuario/gestionempleados.git

2. Instalar dependencias:
   npm install

3. Ejecutar el proyecto:
   npm start

4. Ejecutar las pruebas unitarias:
   npm test

5. Ejecutar el análisis del código:
   npm run lint

## Configuración de CI/CD y scripts

1. Ejecución configurado para ejecutarse en cada push a la rama main.

2. Pasos/scripts del flujo de trabajo:
    - Checkout de Código: Descarga el código del repositorio.

    - Configuración de Node.js: Establece la versión de Node.js a utilizar.

    - Instalación de Dependencias: Instala las dependencias del proyecto.

    - Análisis de Código: Utiliza ESLint para realizar análisis estático del código.

    - Ejecución de Pruebas: Ejecuta las pruebas unitarias definidas en el proyecto.


## Clonar y contriburir al proyecto

    Hacer un fork del repositorio.

    Clonar el repositorio:
    git clone https://github.com/erickklu/GestionEmpleados.git

    Crear una nueva rama: 
    git checkout -b nombre-de-la-rama

    Realizar cambios y confirmar:
    git add .
    git commit -m "Descripción de los cambios"

    Subir los cambios:
    git push origin nombre-de-la-rama

    Crear un Pull Request: 
    En el repositorio en GitHub y hacer un clic en el botón "Compare & pull request". 