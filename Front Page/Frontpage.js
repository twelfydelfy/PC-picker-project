import { products } from "../Data/products.js";
let productscopy = products;

// Generating HTML
function generateHTML(products) {
  let productsHTML = "";
  products.forEach((product) => {
    productsHTML += `<div class="main-pc-box">
      <div class="image-box">
        <img class="computer-image" src="${product.image}" alt="pc-image">
      </div>
      <div class="details">
        <p class="brand-name">Brand: ${product.brand}</p>
        <p class="cpu">CPU: ${product.cpu}</p>
        <p class="gpu">GPU: ${product.gpu}</p>
        <p class="ram">RAM: ${product.ram}</p>
        <p class="ssd">SSD: ${product.ssd}</p>
        <p class="price">Price: ${product.price}$</p>
        <button class="compare-button">Compare</button>
      </div>
    </div>`;
  });
  document.querySelector(".main-grid").innerHTML = productsHTML;
}

// Initial HTML generation
generateHTML(productscopy);

// Event listener for select box changes
const selectSort = document.getElementById("sort-by-selector");
selectSort.addEventListener("change", reloaded);
function reloaded() {
  const selectedValue = selectSort.value;

  if (selectedValue === "Popularity") {
    generateHTML(productscopy);
  } else if (selectedValue === "Ascending") {
    function sortComputersByPrice(pc1, pc2) {
      return pc1.price - pc2.price;
    }
    const result = productscopy.slice().sort(sortComputersByPrice);
    generateHTML(result);
  } else if (selectedValue === "Descending") {
    function sortComputersByPrice(pc1, pc2) {
      return pc2.price - pc1.price;
    }
    const result = productscopy.slice().sort(sortComputersByPrice);
    generateHTML(result);
  }
}
/**
 * 
 * finished with sorting based on price and popularity, time to start working on the sidebar
 *  
 */
