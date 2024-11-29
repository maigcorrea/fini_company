
const menuIcono=document.querySelector(".menuIcono p");
const header=document.querySelector("header");
const prueba=document.querySelectorAll("nav>div:nth-child(2)  ul a");
console.log(prueba);
console.log("hola");

menuIcono.addEventListener("click",()=>{
  if(menuIcono.textContent=="☰"){
    menuIcono.textContent="X";

  }else{
    menuIcono.textContent="☰";
  }
  
  header.classList.toggle("desplegarMenu");
  document.body.classList.toggle("ocultarOverflow");
})


