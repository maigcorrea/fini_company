const containerCont=document.querySelector("#sell-number");
const contador=document.querySelector("#sell-number div span");
let valorCont=contador.textContent;
const alturaPantalla=window.innerHeight;

console.log(valorCont);

function incrementar(){
    window.addEventListener("scroll",()=>{
        if(window.scrollY>containerCont-alturaPantalla/2){
            valorCont+=1;
            console.log(valorCont);
        }
    })
}
incrementar();