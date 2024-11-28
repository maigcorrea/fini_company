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