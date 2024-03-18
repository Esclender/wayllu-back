
## Wayllu Backend

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


![Logo](/assets/LOGOTIPO.png)


## API Reference

Todos los endpoints deben comenzar con **/api** al principio del endpoint, referencia 👇

#### Get unique artesano

```http
  GET /api/artesano
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tokenAccesso` | `string` | **Required**. Your JWT |


Estructura de Carpetas
============================

> Convencion utlizada para las diferentes carpetas, Tomando como referencia los principios de **Clean Architecture**.

### Estructure a nivel de desarrollo (Nivel de carpeta Src)

    .
    ├── src                     # Archivos a modificar (los archivos fuente)
    │   ├── config
    │   ├── data
    │   ├── domain               # Toda la logica de negocio y los diferentes modelos que se manejaran en el proyecto.
    │   │   ├── dtos             # Los objetos que se pasaran como parametros
    │   │   ├── entities         # Los modelos de las entidades (ej. Usuario, Producto)
    │   │   └── interfaces       # Los modelos de las diferentes clases que existen dentro del proyecto (repositorios, etc)
    │   ├── helpers
    │   │   ├── firebase         # Implementacion de Firebase para  autenticacion y bucket de imagenes
    │   │   └── prisma           # Implementacion de prisma metodos GET, POST Y PUT       
    │   ├── infrastructure
    │   │   ├── application      # Todos los archivos que contendran la logica de implementacion del endpoint (obtener info de db y modificarla)         
    │   │   └── controllers      # Logica de implementacion de la info que nos llega desde la peticion HTTP (Se manejan cabeceras y querys)    
    │   ├── presentation         # Aplicacion de routers para los diferentes endpints a las diferentes 
    │   ├── main.ts
    │   └── server.ts            # En server.ts vendriamos aplicando todas las rutas a endpoints y middlewares


## Diagrama de integracion

El siguiente diagrama refleja como podemos integrar los endpoints con las diferentes pantallas de la app y de la misma manera que response debemos obtener.

[Diagrama de integracion](https://app.diagrams.net/#G1zuchZMohHdtLipob6-HWTibD1EqGAmgr#%7B%22pageId%22%3A%22Aqh32qQOhL8tWA-AqZ_J%22%7D)




## Environment Variables

En la estructura de este proyecto tendras un .env.template de como debes armar tus variables de entorno para poder levantar este proyecto, considerar que el .env.template **No se considera un archivo valido** asi que tendras que cambiarle el nombre a **.env** o crear otro archivo .env con las siguientes variables:

`DATABASE_URL`

`PORT`


## Deployment

Para desplegar este proyecto en desarrollo, utiliza:

```bash
  npm run start:dev
```




## Tech Stack

**Server:** Node, Express, TS, JEST, Firebase-sdk

## System Requiremnts

**Node Js** >= 20.11.1 (Recomendada) 



