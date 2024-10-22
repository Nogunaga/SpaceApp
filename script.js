const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=12";

async function listaImagen() {
  try {
    const response = await fetch(url);
    const datosImagenes = await response.json();
    console.log(datosImagenes);

    const card = document.querySelector("[data-ul]");

    datosImagenes.forEach(element => {
      const contenido = 
      `<li class="card">
       <img class="card__image" src="${element.url}" alt="imagen">
       <h3 class="card__title">${element.title}</h3>
       </li>`;

      card.innerHTML += contenido;

    }); 

  } 
  catch (error) {
    console.log(error);
  }
  
}

listaImagen();


// function listaImagen() {
//   fetch(url)
//     .then(response => response.json())
//     .then(datosImagenes => {
//       console.log(datosImagenes);
//
//       if (Array.isArray(datosImagenes)) {
//         datosImagenes.forEach(element => {
//
//         });
//       } else {
//         console.error("Error en la respuesta: ", datosImagenes);
//       }
//     })
//     .catch(error => console.log(error));
// }

// listaImagen();
