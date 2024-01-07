import { products } from '../Data/products.js';

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
    </div>
    </div>` 
});
document.querySelector('.main-grid').innerHTML = productsHTML;