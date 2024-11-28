//INSERTAR PRODUCTOS DINÁMICAMENTE 

document.addEventListener("DOMContentLoaded",()=>{
    const seccion=document.querySelector("#banner-prod");
    const divProductos=document.querySelector(".pr-container");
    const [{nombre,gramos,image}]=productos;//Desetructurar datos

    productos.forEach(producto => {
        const prod=document.createElement("div");
        prod.classList.add("product");

        prod.innerHTML=`
            <div class="imgContainer">
                <img src=${producto.image} class="prImage">
            </div>
            <h3 class="prName">${producto.nombre}</h3>
            <p class="prDesc">${producto.gramos}</p>
        `;

        divProductos.append(prod);
    });
    seccion.append(divProductos);

    const prod=document.querySelectorAll(".product");
    // const h3=document.querySelectorAll(".product h3");
    console.log(h3);
    const p=document.querySelectorAll(".product p");
    prod.forEach(pr=>{
        pr.addEventListener("mouseover",(e)=>{
            const h3=document.querySelector(".product h3");
            h3.forEach(h=>{
                h.style.visibility="visible";

            })
        })

        pr.addEventListener("mouseleave",()=>{
            h3.forEach(h=>{
                h.style.visibility="hidden";

            })
        })
    })


})