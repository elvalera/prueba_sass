# Elvis Valera
# Prueba desarrollador VASS

## Descripción:
Esto es una prueba de código con nodejs, angular2+ y mysql

## Pasos para instalación:

* Clonar el proyecto desde el repositorio en github:
```
$ git clone https://github.com/elvalera/prueba_sass.git
```

* Crear el alchivo de configuración db.config.js como una copia a partir del archivo de ejemplo: db.config.js.dist en la ruta node_back/app/config/
```
/node_back/app/config/db.config.js.dist
```
Este archivo contiene las credenciales de la conexión a base de datos

* Instalar los paquetes de terceros mediante npm: dentro de cada carpeta: [node_back, ngFront]
```
npm install
``` 

* Abrir una terminal en la ruta para iniciar el servidor de angular
```
ng serve
``` 

* Crear la base de datos vacía "prueba_sass" en el gestor de base de datos Mysql

* Abrir una terminal en la ruta para iniciar el servidor de nodejs, este se encuentra configurado por el puerto 3000
```
npm run dev
``` 

* Usuario y contraseña establecida en los seeds
``` 
Usuario: elvis.tecno@gmail.com
Clave: 123
``` 

### Nota Importante:
Actualmente el servidor de Node está configurado para que cree la base de datos automaticamente cada vez que se inicia el servicio
