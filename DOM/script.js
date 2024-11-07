// const cardDiv = document.createElement("div");
// cardDiv.setAttribute("class", "card");
// cardDiv.style.backgroundColor = "green";
// cardDiv.style.width= "200px";
// cardDiv.style.height="200px";
// cardDiv.style.borderRadius="10px";
// cardDiv.style.border="1px , solid ,red";



// const cardParag = document.createElement("p");
// cardParag.setAttribute("class","parg")
// cardParag.textContent = "AZMP"
// cardParag.style.textAlign = "center";
// cardParag.style.color = "white";
// cardParag.style.paddingTop = "10px";


// cardDiv.append(cardParag)
// document.body.append(cardDiv)
const navMenu = document.createElement("div");
navMenu.style.maxWidth = "1200px";

const logo = document.createElement("h1");
logo.textContent = "StartBootstrap"
navMenu.append(logo);
logo.style.width = "800";



const navbar = document.createElement("nav")
navbar.append(navUl)

const navUl = document.createElement("ul")
navUl.append(navLi1);
navUl.append(navLi2);


const navLi1 = document.createElement("li");
navLi1.textContent = "features"

const navLi2 = document.createElement("li");
navLi2.textContent = "download"
document.body.append(navMenu)