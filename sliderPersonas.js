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