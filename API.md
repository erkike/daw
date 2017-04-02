# Documentación API REST

## "/usuarios"
Aqui se encuentran todas las funciones relacionadas con usuarios

### GET "/usuarios"
Devuelve información básica de todos los usuarios de la aplicación
{
    "id": 1,
    "nombre": "Enrique",
    "apellido": null,
    "user": "Carpinchote",
    "email": "budweisert0102@gmail.com",
    "passwordHash": "$2a$10$rGo9PHAZFvv57ADYVRPhg./zzAFv6fj4aFMKySihgwyTzXUCcl7ce",
    "roles": [
      "ROLE_USER"
    ]
  }
### GET "/usuarios/{id}"
Devuelve información detallada del usuario con id = {id}
{
    "id": 1,
    "nombre": "Enrique",
    "apellido": null,
    "user": "Carpinchote",
    "email": "budweisert0102@gmail.com",
    "passwordHash": "$2a$10$rGo9PHAZFvv57ADYVRPhg./zzAFv6fj4aFMKySihgwyTzXUCcl7ce",
    "roles": [
        "ROLE_USER"
    ],
    "amigos": [
        {
            "id": 3,
            "nombre": null,
            "apellido": null,
            "user": "Carpancha",
            "email": null,
            "passwordHash": null,
            "roles": [
                "ROLE_USER"
            ],
            "amigos": [],
            "seriesFavoritas": []
        }
    ],
    "seriesFavoritas": [
        {
            "id": 1,
            "nombre": "Los 100",
            "url": "Los-100",
            "trailer": "https://www.youtube.com/embed/ia1Fbg96vL0",
            "valoracion": 5,
            "año": 2014,
            "descripcion": "En un futuro post apocalíptico, 97 años después de un desastre nuclear que destruyó la civilización, los humanos que sobreviven en una estación espacial envían una avanzadilla de 100 jóvenes delincuentes para tratar de averiguar si es posible reconquistar la Tierra."
        },
        {
            "id": 3,
            "nombre": "Juego de Tronos",
            "url": "Juego-de-Tronos",
            "trailer": "https://www.youtube.com/embed/iGp_N3Ir7Do",
            "valoracion": 4,
            "año": 2011,
            "descripcion": "En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario Muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los Reinos, la sangrienta batalla por el Trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece Juego de Tronos."
        }
    ]
}
### POST "/usuarios/nuevo"
Crea un nuevo usuario con la información del body:	
	{
        "nombre": "Demostración",
        "user": "demo",
        "email": "demo@carpincheria.es",
        "passwordHash": "1234",
        "roles": [
          "ROLE_USER"
        ]
      }
### DELETE "/usuarios/{id}"
Elimina el usuario con id = {id}, requiere permisos de administrador
### PUT "/usuarios/{id}"
Modifica información del usuario con el body, requiere que el usuario esté logueado, si el {id} no coincide con el suyo recibirá el estatus FORBIDDEN
### PUT "/usuarios/{id}/amigo/{id2}"
Añade al usuario con {id} el amigo con {id2}, si ya era amigo, lo elimina. Requiere que el usuario esté logueado, si el {id} no coincide con el suyo recibirá el estatus FORBIDDEN
### PUT "/usuarios/{id}/favorita/{id2}"
Añade al usuario con {id} la serie favorita con {id2}, si ya era favortia la elimina. Requiere que el usuario esté logueado, si el {id} no coincide con el suyo recibirá el estatus FORBIDDEN

## "/series"
Aqui se encuentran todas las funciones relacionadas con series

### GET "/series"
Devuelve información básica de todas las series de la aplicación
 {
    "id": 1,
    "nombre": "Los 100",
    "url": "Los-100",
    "trailer": "https://www.youtube.com/embed/ia1Fbg96vL0",
    "valoracion": 5,
    "año": 2014,
    "descripcion": "En un futuro post apocalíptico, 97 años después de un desastre nuclear que destruyó la civilización, los humanos que sobreviven en una estación espacial envían una avanzadilla de 100 jóvenes delincuentes para tratar de averiguar si es posible reconquistar la Tierra."
  }
### GET "/series/{id}"
Devuelve información detallada de la serie con {id}
{
    "id": 1,
    "nombre": "Los 100",
    "url": "Los-100",
    "trailer": "https://www.youtube.com/embed/ia1Fbg96vL0",
    "valoracion": 5,
    "año": 2014,
    "descripcion": "En un futuro post apocalíptico, 97 años después de un desastre nuclear que destruyó la civilización, los humanos que sobreviven en una estación espacial envían una avanzadilla de 100 jóvenes delincuentes para tratar de averiguar si es posible reconquistar la Tierra.",
    "temporadas": [
        {
            "num": 1,
            "capitulos": [
                {
                    "titulo": "Piloto",
                    "num": 1
                },
                {
                    "titulo": "Earth Skills",
                    "num": 2
                },
                {
                    "titulo": "Earth Kills",
                    "num": 3
                },
                {
                    "titulo": "Murphy's Law",
                    "num": 4
                },
                {
                    "titulo": "Twilight's Last Gleaming",
                    "num": 5
                },
                {
                    "titulo": "His Sister's Keeper",
                    "num": 6
                },
                {
                    "titulo": "Contents Under Pressure",
                    "num": 7
                },
                {
                    "titulo": "Day Trip",
                    "num": 8
                },
                {
                    "titulo": "Unity Day",
                    "num": 9
                },
                {
                    "titulo": "I Am Become Death",
                    "num": 10
                },
                {
                    "titulo": "The Calm",
                    "num": 11
                },
                {
                    "titulo": "We Are Grounders - Part 1",
                    "num": 12
                },
                {
                    "titulo": "We Are Grounders - Part 2",
                    "num": 13
                }
            ]
        },
        {
            "num": 2,
            "capitulos": [
                {
                    "titulo": "The 48",
                    "num": 1
                },
                {
                    "titulo": "Inclement Weather",
                    "num": 2
                },
                {
                    "titulo": "Reapercussions",
                    "num": 3
                },
                {
                    "titulo": "Many Happy Returns",
                    "num": 4
                },
                {
                    "titulo": "Human Trials",
                    "num": 5
                },
                {
                    "titulo": "Fog of War",
                    "num": 6
                },
                {
                    "titulo": "Long Into an Abyss",
                    "num": 7
                },
                {
                    "titulo": "Spacewalker",
                    "num": 8
                },
                {
                    "titulo": "Remember Me",
                    "num": 9
                },
                {
                    "titulo": "Survival of the Fittest",
                    "num": 10
                },
                {
                    "titulo": "Coup de Grace",
                    "num": 11
                },
                {
                    "titulo": "Rubicon",
                    "num": 12
                },
                {
                    "titulo": "Resurrection",
                    "num": 13
                },
                {
                    "titulo": "Bodyguard of Lies",
                    "num": 14
                },
                {
                    "titulo": "Blood Must Have Blood - Part 1",
                    "num": 15
                },
                {
                    "titulo": "Blood Must Have Blood - Part 2",
                    "num": 16
                }
            ]
        }
    ],
    "comentarios": [
        {
            "texto": "Esta serie es mi favorita, porque es la última que he visto",
            "usuario": {
                "id": 1,
                "nombre": "Enrique",
                "apellido": null,
                "user": "Carpinchote",
                "email": "budweisert0102@gmail.com",
                "passwordHash": "$2a$10$rGo9PHAZFvv57ADYVRPhg./zzAFv6fj4aFMKySihgwyTzXUCcl7ce",
                "roles": [
                    "ROLE_USER"
                ]
            }
        },
        {
            "texto": "Me gustó más el libro",
            "usuario": {
                "id": 2,
                "nombre": null,
                "apellido": null,
                "user": "Carpinchi",
                "email": null,
                "passwordHash": null,
                "roles": [
                    "ROLE_USER"
                ]
            }
        }
    ]
}
### POST "/series/nueva"
Crea una nueva serie con la infomación del body, requiere permisos de administrador
### DELETE "/series/{id}"
Elimina la serie con {id}, requiere permisos de administrador
### PUT "/series/{id}"
Modifica la información de la serie con {id} con el body, requiere permisos de administrador
### PUT "/series/{id}/comentario"
Añade a la serie con {id} el comentario del body, requiere estar logueado
{
	"texto": "Un comentario"
}
### PUT "/series/{id}/valoracion/{val}
Añade a la serie con {id} la valoracion {val}, requiere estar logueado
### PUT "/series/{id}/temporada/{num}/capitulo"
Añade a la serie con {id}, en la temporada {num}, el capitulo del body, requiere permisos de administrador
{
          "titulo": "Demo",
          "num": 1
        }