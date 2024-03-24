const persona = {
    nombre:'Pedro',
    apellido:'Perez',
    edad: 27
}
/* Es la manera incorrecta de utilizar  ya q si modifica persona2 tambien se modifica persona*/
const persona2 = persona;
persona2.nombre ='Maria';
console.log(persona);
console.log(persona2);


/* La manera correcta de utilizar es  de la siguiente manera */
const persona3 = {...persona}
persona3.nombre = 'Angela';
console.log(persona);
console.log(persona3);