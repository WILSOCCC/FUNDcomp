//Variables
const nombre_astronauta = "Wilberth";
const edad_astronauta = 18;
const destino = "Luna";
const combustible = "100";
const velocidad = "30";

const datos = {
    nombre: nombre_astronauta,
    edad: edad_astronauta,
    combustible: combustible,
    velocidad: velocidad,
    destino: {
        destino1: "Marte",
        destino2: "Jupiter",
        destino3: "Urano"
    }
    
}

//Impresion y resultados
console.log(`Diario de un astronauta:
 Hola soy ${datos.nombre} y tengo ${datos.edad} años y mi proximo destino es ${datos.destino.destino3} y mi combustible es ${datos.combustible}%. Mi velocidad es de ${datos.velocidad} km/h.
    `);

console.log(`Diario de un astronauta:
 Hola soy ${nombre_astronauta} y tengo ${edad_astronauta} años y mi proximo destino es ${destino} y mi combustible es ${combustible}%. Mi velocidad es de ${velocidad} km/h.
    `);    