import { products } from "../Data/products.js";
let productscopy = products;
let anotherproductscopy = products;
let criterias = [];
let maxPrice = 9999;
const priceinput = document.getElementById('sidebar-price');
priceinput.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    maxPrice = Number(priceinput.value);
    checkmaxprice();
  }
});
//checking for criterias
document.querySelector('.apply-button').addEventListener('click', ()=>{
  criterias = [];
  document.querySelectorAll('.filter-checkbox').forEach((checkbox)=>{
    if(checkbox.checked){
    criterias.push(checkbox.id);}
  });
  console.log(criterias);
  generateHTML(productscopy, maxPrice);
});

//filetering the html copy

function filterProducts(products, maxPrice){
  criterias.forEach((criteria)=>{
    
  })
}

function checkmaxprice(){
  if(maxPrice === 0){
    generateHTML(products, 9999);
  }
  else{
    generateHTML(products, maxPrice)
  }
}
checkmaxprice(maxPrice);
//Generating HTML
function generateHTML(products, maxPrice) {
  let productsHTML = "";
  products.forEach((product) => {
    if(product.price <= maxPrice){
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
  }});
  document.querySelector(".main-grid").innerHTML = productsHTML;
}




// Event listener for select box changes
const selectSort = document.getElementById("sort-by-selector");
selectSort.addEventListener("change", reloaded);
function reloaded() {
  const selectedValue = selectSort.value;

  if (selectedValue === "Popularity") {
    generateHTML(productscopy, maxPrice);
  } else if (selectedValue === "Ascending") {
    function sortComputersByPrice(pc1, pc2) {
      return pc1.price - pc2.price;
    }
    const result = productscopy.slice().sort(sortComputersByPrice);
    generateHTML(result, maxPrice);
  } else if (selectedValue === "Descending") {
    function sortComputersByPrice(pc1, pc2) {
      return pc2.price - pc1.price;
    }
    const result = productscopy.slice().sort(sortComputersByPrice);
    generateHTML(result, maxPrice);
  }
}
/**
 * 
 * finished with sorting based on price and popularity, time to start working on the sidebar
 *  
 */
// gonna start off with the price input, first of all, lets actually get it registered

//great, now that I have the maxPrice variable saved, let try to see whats with the shit we currently got, come to think of it, all the 
//html generation is gonna have to come at the end, after all of the variables have already been set