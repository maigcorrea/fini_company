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
                <a href="#"><img src=${producto.image} class="prImage"></a>
            </div>
            <h3 class="prName">${producto.nombre}</h3>
            <p class="prDesc">${producto.gramos}</p>
        `;

        divProductos.append(prod);
    });
    seccion.append(divProductos);

    const prods=document.querySelectorAll(".product");
    //  const h3=document.querySelectorAll(".product h3");
    // console.log(h3);
    // const p=document.querySelectorAll(".product p");
    // prod.forEach(pr=>{
    //     pr.addEventListener("mouseover",(e)=>{
    //         const h3=document.querySelector(".product h3");
    //         h3.forEach(h=>{
    //             h.style.visibility="visible";

    //         })
    //     })

    //     pr.addEventListener("mouseleave",()=>{
    //         h3.forEach(h=>{
    //             h.style.visibility="hidden";

    //         })
    //     })
    // })

    prods.forEach((prod,index)=>{
        const h3=prod.querySelector("h3");
        const p=prod.querySelector("p");
        prod.addEventListener("mouseover",()=>{
            h3.style.opacity="1";
            p.style.opacity="1";
            h3.style.transition="opacity 0.7s linear";
            p.style.transition="opacity 0.7s linear";
            
        })

        prod.addEventListener("mouseleave",()=>{
            h3.style.opacity="0";
            p.style.opacity="0";
            
        })
    })



})