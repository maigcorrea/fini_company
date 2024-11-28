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


})