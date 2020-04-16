const onloadElements = () => {

    console.log("PAGEload.JS LOADED")
const container = document.querySelector("#container")

const header = document.createElement("div");
const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
var p = document.createElement("p");


container.classList.add("content")
header.classList.add("header");


h1.innerHTML = "Fresh4you";
h3.innerHTML = "- Gourmet Restaurant for curious minds -";
p.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, impedit. Fugit perferendis dolorum unde saepe tenetur quidem reiciendis vel ea distinctio molestias error, sint architecto, nemo optio mollitia similique. Mollitia!";
// img.src = "../src/img/anis.jpg"


header.appendChild(h1);
header.appendChild(h3);
header.appendChild(p);
container.appendChild(header);

}


export {
    onloadElements
}



