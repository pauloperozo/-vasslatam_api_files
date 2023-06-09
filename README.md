# Procesamiento de Archivos 📊

Esta API permite gestionar archivos de textos (.txt)
Se compone en esencia de dos rutas, cuyo controladores permite por cada entidad:

    * ``files:``
    * Permite Subir Archivo De Texto.
    * Permite Listar Archivo De Texto Subidos.
    * Permite Ver Contenido De Un  Archivo De Texto.
    * Permite Borrar Archivo De Texto.

    * ``operations:``
    * Permite Contar Lineas.
    * Permite Contar Palabras.
    * Permite Saltar A Una Linea Dado Un Valor.
    * Permite Buscar Palabra Dado Un valor.
    * Permite Buscar Palindromes Totales En El Archivo.

## Variables de entorno
En el archivo ``.env``se encuentran las variables de entorno que a saber son:

  * HOST=localhost
  * PORT=3000 (puerto en que correra el servicio)
  * TIMEOUT=7000 (tiempo máximo de espera por una petición)

## Construido con 🛠️

* [Nodejs](https://nodejs.org) - Entorno de ejecuciónJS.
* [Express](https://expressjs.com/es/) - Framework de nodejs utilizado ES6.
* [npm](https://www.npmjs.com/) - Permite instalar diversas librerías utilizadas en el proyecto.

## Pre-requisitos 📋

_Necesitas instalar lo siguiente:_ ⚠️

* Instala Nodejs

## Deploy 🚀
_Ejecuta los siguientes pasos en orden:_

### Paso 1 Clona el repositorio: 

  ```$ git clone https://github.com/pauloperozo/-vasslatam_api_files``` ⏬

### Paso 2 Entra a la carpeta y ejecuta el siquiente comando: 

  ```$ npm install``` 📂	

Ya con estos dos pasos se tiene el código del proyecto y se instalan las dependencias.

### Paso 3 Runner del proyecto:

   ```$ npm run start``` 
Con este comando se inicia el servicio.


## Pruebas 🚥

Los test se desarrollaron utilizando jest y supertest (se encuentran en dependencias de desarrollo)
Para ejecutar las pruebas, sólo debes utilizar el comando ``npm run test``` ✅.

## Resulado Final 🚥

En el directorio ``Postman`` contendra unos captures de pantalla, mostrando el resultado final, al iniciar los servicios anteriormente mencionados, asi mismo el ``postman_collection`` file para ejcutar pruebas sobre los endpoint.

## Autor ✒️

* **Paulo Perozo** - (#des_paulo) 👤.