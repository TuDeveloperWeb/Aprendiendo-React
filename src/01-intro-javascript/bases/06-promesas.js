// import { heroes } from "./data/index";

const getHeroeById = (id) => heroes.find( (item) => item.id === id ) 

// const promesa = new Promise( (resolve,reject) => {

//     setTimeout(() => {
//         const p1 = getHeroeById(2);
//         // resolve(p1);
//         reject("No se pudo encontrar heroe");

//     }, 3000);

   
// }) 

// promesa.then( (heroe) => console.log(heroe) ) 
// .catch( (err) => console.warn(err) )


const getHeroeByIdAsync = (id) => {

    return new Promise ( ( resolve,reject ) =>{
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject("No se encontro el heroe");
            }

        }, 2000);
    } )
}

getHeroeByIdAsync(5).then( console.log)
.catch( console.warn )


console.log(heroes);

