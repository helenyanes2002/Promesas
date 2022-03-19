//Solo los aray metodos se le pueden aplicar a los arreglos j.filter()
//Declarando loa función principal
//Hago la principal y llamo al callback
//Una promesa es forma de reescribir un callback 
function principal(){

    //Se instancia un objeto de la clase PROMESA de JS
    let promesa = new Promise(function(resolve, reject){

        setTimeout(function(){
            //Definiendo el proceso de la función principal
            console.log("Soy el proceso principal")
            //RESUELVO O RECHAZO 
            resolve("El proceso del callback (soy el segundo proceso)")
        },2000)
    })

    //La funcion principal retorna la promesa
    return promesa

}

//Llamo a la principal (EVALUAR EL ESTADO DE LA PROMESA)
principal()
.then(function(respuesta){
    console.log(respuesta)
})