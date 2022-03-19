//ASINCRONISMO FUNCION PRINCIPAL Y SECUNDARIA(BLOQUES)
//LAS FUNCIONES SIEMPRE LLAMADAS POR VERBOS 
//AL FILTRAR UN ARREGLO TENGO OTRO ARREGLO
//TODOS LOS DATOS SON DEL MISMO TIPO  
//METODO PUSH ES IGUAL QUE APPEND 

    let nombres=['Paloma Petro', 'Alvaro Cepeda', 'Polo Inverso', 'Juanpis gonzales']
    let sexos=['0, 1']
    let senadores=[]

    
    for(let i=0; i<20; i++){

        let senador={}

        senador.nombre=nombres[Math.floor(Math.random()*nombres.length)]
        senador.sexo=sexos[Math.floor(Math.random()*cursos.length)]
        senador.voto=[Math.floor(Math.random()*1000)]

        senadores.push(senador)
    }

function filtrarMujeres(senadores, callback){
        setTimeout(function(){
            let senadoras = senadores.filter(function(senador){
                    return(senador.sexo=="0" && senador.voto>250)
            })
        },10000)
}