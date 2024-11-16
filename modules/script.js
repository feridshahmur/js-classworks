import { products } from "./data.js";
const tbody = document.querySelector("tbody");
function drawTable(array) {
  tbody.innerHTML = " ";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
              <td><img src="${product.image}" width="100"/></td>
              <td>${product.id}</td>
              <td>${product.title}</td>
              <td>${product.price}</td>
              <td>${product.category}</td>
              <td>${product.rating.rate}</td>
              <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
          `;

    tbody.appendChild(trElem);
  });
}

const searchinput = document.querySelector("#search");

searchinput.addEventListener("input", function (event) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(event.target.value.trim())
  );

  drawTable(filteredProducts);
});

const asc = document.querySelector(".asc");
asc.addEventListener("click", function () {
  const filteredProductss = products.toSorted(
    (first, second) => first.price - second.price
  );

  drawTable(filteredProductss);
});
const desc = document.querySelector(".desc");
desc.addEventListener("click", function () {
  const filteredProductss = products.toSorted(
    (first, second) => second.price - first.price
  );

  drawTable(filteredProductss);
});

    let defBtn = document.querySelector(".default");
    defBtn.addEventListener("click", function () {
    drawTable(products);
    });

    drawTable(products);
