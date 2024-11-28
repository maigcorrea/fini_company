
//CONST Y VAR
const careersContainer=document.querySelector(".positions");

positions.forEach(position => {
    const positionContainer=document.createElement("div");
    positionContainer.classList.add("position");

    positionContainer.innerHTML=`
        <div>
            <a href="#"><img src="./img/logo_fini_company_250x250_fondo_azul_1669968602.jpg" alt=""></a>
        </div>
        <div>
            <a href="#">${position.title}</a>
            <p>${position.location}</p>
            <p><span>Modalidad:</span>  ${position.type}</p>
        </div>
    `;

    careersContainer.append(positionContainer);
});

//Funcionalidad del buscador
    const searcherPos=document.querySelector("#careers input");
    const allPositions=document.querySelectorAll(".position");
    
    searcherPos.addEventListener("input",(e)=>{
        let value=e.target.value.toLowerCase().trim();
        allPositions.forEach(position => {
            if(position.textContent.toLowerCase().includes(value)){
                position.style.display="flex";
            }else{
                position.style.display="none";
            }
        });
    })
