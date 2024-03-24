/* Fetch : es una solicitud asíncrona, significa que la ejecución del código no se detiene mientras se espera la respuesta del servidor.


*/



const apiKey = 'djuPhAZuuQPnBv7EPfQ4hfj314hbeTwX';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json())
.then( ({ data }) => {
    const {url}  = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;
    
    document.body.append(img);
})
.catch(console.warn())