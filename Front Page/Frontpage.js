import { products } from '../Data/products.js';
let productscopy = products;
// generating HTML
function generateHTML(products){
let productsHTML = '';
products.forEach((product)=>{
  productsHTML+=`<div class="main-pc-box">
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
    </div>` 
});
document.querySelector('.main-grid').innerHTML = productsHTML;}

//Finished generating, working on the sorting now.
const selectSort = document.getElementById('sort-by-selector');
const selectedValue = selectSort.value;
console.log(selectedValue);

if(selectedValue === 'Popularity'){generateHTML(productscopy);}
else if(selectedValue === 'Ascending'){

function sortComputersByPrice(pc1, pc2){
  return pc1.price - pc2.price;
}
const pc1 = products[0];
const pc2 = products[1];
const result = products.sort(sortComputersByPrice);
  generateHTML(products);
}