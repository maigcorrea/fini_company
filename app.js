//CONTADOR
// const containerCont=document.querySelector("#sell-number");
// const contador=document.querySelector("#sell-number div span");
// let valorCont=contador.textContent;
// const alturaPantalla=window.innerHeight;

// console.log(valorCont);

// function incrementar(){
//     window.addEventListener("scroll",()=>{
//         if(window.scrollY>containerCont-alturaPantalla/2){
//             valorCont+=1;
//             console.log(valorCont);
//         }
//     })
// }
// incrementar();

//SLIDER DE NOTICIAS
// document.addEventListener('DOMContentLoaded', () => {
//     const articulos = document.querySelector('.articulos');
//     const articles = document.querySelectorAll('#noticias article');
//     const prevBtn = document.querySelector('.iconos .prev img');
//     const nextBtn = document.querySelector('.iconos .next img');
//     console.log(prevBtn);

//     let currentIndex = 0; // Índice del primer artículo visible
//     const visibleArticles = 3; // Cantidad de artículos visibles
//     const articleWidth = articles[0].offsetWidth + 30; // Ancho de un artículo + gap

//     // Función para actualizar la posición del carrusel
//     const updateCarousel = () => {
//         articulos.style.transform = `translateX(${-currentIndex * articleWidth}px)`;
//         articulos.style.transition = 'transform 0.3s ease-in-out';
//     };

//     // Evento para el botón de siguiente
//     nextBtn.addEventListener('click', () => {
//         console.log("next");
//         if (currentIndex < articles.length - visibleArticles) {
//             currentIndex++;
//             updateCarousel();
//         }
//     });

//     // Evento para el botón de anterior
//     prevBtn.addEventListener('click', () => {
//         console.log("first");
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateCarousel();
//         }
//     });
// });


// SLIDER DE PERSONAS
const carrusel=document.querySelector(".slider-container");
const slides=document.querySelectorAll(".slide");
const leftBtn=document.querySelector(".left");
const rightBtn=document.querySelector(".right");
const teamContainer = document.querySelector(".team-container");

    //Indice del slide actual
let currentIndex=0;

    //Función para ir actualizando el carrusel según se haga click en las flechas de control
function updateCarousel(){
    // Mueve el contenedor principal según el índice actual (Lo hago así porque moviendo de 1 en 1 cada div no le daba la gana de funcionar)
    teamContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

    //Evento para la flecha derecha
rightBtn.addEventListener("click",()=>{
    console.log("dcha");
    currentIndex=(currentIndex+1)%slides.length;//Saca la diapositiva en la que estamos al mover 1 a la dcha
    updateCarousel();
});

    //Evento para la flecha izquierda
leftBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex-1+slides.length)%slides.length//Saca la diapositiva en la que estamos al mover 1 a la izda
    updateCarousel();

})


//Inicializar el carrusel
updateCarousel();




//ACORDEÓN FAQS
const blocks=document.querySelectorAll(".block");
const acTitles=document.querySelectorAll(".ac-title");

//Cuando click en h2 se quita la clase ACTIVE de todos los bloques y después
//vamos a añadir la clase activo al bloque con la posición del h2

acTitles.forEach((title,index) => {
    acTitles[index].addEventListener("click",()=>{

        blocks.forEach((block,i)=>{
            blocks[i].classList.remove("active");
        })

        blocks[index].classList.add("active");
    })
});



//CAMBIAR EL BOTON DE COMPROMISO FINI POR "COMPROMISO"

// Selecciona el primer enlace dentro del div con id "contenedor"
// const btnPedido = document.querySelector(".btn-Comp");

// // Crea una función que verifica el ancho de la pantalla
// function cambiarTextoPedido() {
//   if (window.matchMedia("(max-width: 768px)").matches) {
//     btnPedido.textContent = "Compromiso Fini";
//   } else {
//     btnPedido.textContent = "Compromiso";
//   }
// }

// // Ejecuta la función al cargar la página y cada vez que la pantalla cambia de tamaño
// window.addEventListener("load", cambiarTextoPedido);
// window.addEventListener("resize", cambiarTextoPedido);
