const fs= require("fs")

let   cursos =[{
Id: 1144,
curso: "Mantenimiento de impresoras",
Duracion:"250 horas",
Precio:"500.000",

},
{

    Id: 5285,
    curso: "Mantenimiento de equipos moviles",
    Duracion:"140horas",
    Precio:"800.000",  
},
{
    Id: 3378,
    curso: "Mantenimiento de impresoras",
    Duracion:"250 horas",
    Precio:"500.000",

}]

let imprimir = (a) => {
    console.log("El curso es " + cursos[a].curso + " con ID: " + cursos[a].Id + " tiene una duración de " + cursos[a].Duracion + "el cual tiene Con un costo de " + cursos[a].Precio)
}


 for (let i = 0; i<cursos.length;i++ ){
     console.log(cursos[i])
 }
const inscribir = argv => {
    const curso = cursos.findIndex(curso => curso.Id === argv.c)
    if (curso === -1) {
        console.log("el curso no se encuentra en la lista")
    } else {
        const Archivo = (nombre, cedula, Id) => {
            const texto = "El nombre del ingresado es: " + nombre + " con cedula : " + cedula + " En el curso: " + Id 
            fs.writeFile("Ingresado.txt", texto, (err) => {
                if (err) console.log("se presento un error")
                else (console.log("Se creo exitosamente"))
                console.log(texto)
            })
        }
        imprimir(curso)
        Archivo(argv.a, argv.b, argv.c)
    }

}
const opciones = {
    nombre: {
        demand: true,
        alias: "a"
    },
    cedula: {
        demand: true,
        alias: "b"
    },
    Id: {
        demand: true,
        alias: "c"
    }
}
const argv = require("yargs")
    .command("inscribir", "Inscriba aqui ", opciones, inscribir)
    .demandCommand()
    .argv