import { users } from "./data.js";
console.log(users);
const timeinput = document.querySelector(".time");
const start = document.querySelector("button");
const h1 = document.querySelector("h1");

// let cout = 0;
//   const intervalId = setInterval(() => {

//     }, 1000);

// start.addEventListener("click", function () {

//   let count = timeinput.valueAsNumber;
//   h1.textContent = count;
//   const intervalId = setInterval(() => {
//     count--;
//      h1.textContent = count;

//     if (count === 0) {
//       clearInterval(intervalId);
//       h1.textContent=  "finish"
//     }
//   }, 1000);
// });

const cardsDiv = document.querySelector(".cards");

function drawDiv(array) {
   cardsDiv.innerHTML = "";
    array.forEach((product) => {
      
      cardsDiv.innerHTML = `
      <div class="row">
      <div class="col-12 col-md-3">
        <p> ${product.firstName}</p>
        <img src="${product.image}" alt="">
      </div>
  </div>
          `;
  
      
    })
}
drawDiv(users)