//Variables
const arreglo = [1, 2, 3, 'string', true, false, [4, 5, 6]];

const diccionario = {
    nombre: 'Wilberth',
    edad: 18,
    pc: {
        marca: 'Asus',
        color: 'Gris',
    }
}

//Operaciones con arreglos

//Resultados
console.log(arreglo[6]); 
console.log(`Hola soy ${diccionario.nombre} y tengo ${diccionario.edad} años`);
console.log(`Mi pc es de la marca ${diccionario.pc.marca} y es de color ${diccionario.pc.color}`);