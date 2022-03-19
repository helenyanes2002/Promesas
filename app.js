

//LA FUNCIÓN RANDOM ME GENERA UN NUMERO ALEATORIO

//FUNCION QUE GENERA UN NUMERO ALEATORIO
//LEGTN MIDE LA LONGITUD DE UN ARREGLO 
//ARRAY METHODS

//DATOS SEMILLA
let nombres=['Helen YB', 'Ana', 'Maria', 'Juan']
let cursos=['avanzada', 'nuevas', 'moviles 3']

//NUMEROS ALEATORIOS DONDE SU LIMITE ESTA DADO POR LA LONOGITUD DEL 
//ARREGLO(SEMILLA)
let numero=Math.floor(Math.random()*nombres.length)
let numero2=Math.floor(Math.random()*cursos.length)

//IMPRIMIENDO UN ELEMETO DE LAS SEMILLAS DE FORMA ALEATORIA 
console.log(nombres[numero])
console.log(cursos[numero2])

let estudiantes=[]

//Si voy a llenar un arreglo de objetos, el objeto vacio se crea dentro del ciclo 
for(let i=0; i<50; i++){

    let estudiante={}

    //LLENANDO 1 OBJETO ESTUDIANTE
    estudiante.nombre=nombres[Math.floor(Math.random()*nombres.length)]
    estudiante.curso=cursos[Math.floor(Math.random()*cursos.length)]
    //AGREGANDO EL OBJETO ESTUDIANTE AL ARREGLO ESTUDIANTES
    //META A LA CAJA EL ESTUDIANTE 
    estudiantes.push(estudiante)
}

console.log(estudiantes)




