
//Declarando loa función principal
//Hago la principal y llamo al callback 
function principal(callback){

    setTimeout(function(){
        //Definiendo el proceso de la función principal
        console.log("Soy el proceso principal")
        //Llamando al callback
        callback()
    },2000)

}

//Llamando la función principal
//Llamo a la principal y digo el proceso del callback 
principal(function(){
    //Proceso del callback 
    console.log("Soy el proceso de callback")
})