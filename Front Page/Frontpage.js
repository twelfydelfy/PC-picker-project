import { products } from "../Data/products.js";

let productscopy = products;
let maxPrice = 9999;

export let chosencomparasion = [];
let firstPC = false;
let secondPC = false;
let numberofcomp = 0;
function numberofcomps(){
  if(firstPC === true && secondPC === false){
    numberofcomp = 1;
  }
  else if(
    firstPC === true && secondPC === true){
      numberofcomp = 2;
    }
    else if(
      firstPC === false && secondPC === false){
        numberofcomp = 0;
      }
    document.querySelector('.compare-badge').innerHTML = numberofcomp + '/2';
    }

const priceinput = document.getElementById('sidebar-price');
priceinput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    maxPrice = Number(priceinput.value);
    checkmaxprice();
    selectSort.value = 'Popularity';
  }
});

function generateHTML(filteredProducts, maxPrice) {
  let productsHTML = "";
  filteredProducts.forEach((product) => {
    // Check if the product's price is below the maximum price
    if (product.price <= maxPrice) {
      productsHTML += `<div class="main-pc-box">
        <div class="image-box">
          <img class="computer-image" src="${product.image}" alt="pc-image">
        </div>
        <div class="details">
          <p class="brand-name">Brand: ${product.brand}</p>
          <p class="cpu">CPU: ${product.cpu}</p>
          <p class="gpu">GPU: ${product.gpu}</p>
          <p class="ram">RAM: ${product.ram}GB</p>
          <p class="ssd">SSD: ${product.ssd}GB</p>
          <p class="price">Price: ${product.price}$</p>
          <button class="compare-button" id="compare-button">Compare</button>
        </div>
      </div>`;
    }
  });
  if(productsHTML === ''){productsHTML = "Sorry, there seems to be no PC's matching your criteria";}
  document.querySelector(".main-grid").innerHTML = productsHTML;

  document.querySelectorAll('.compare-button').forEach((button, index) => {
    button.addEventListener('click', () => {
      if(firstPC === false || secondPC === false){
      if (button.classList.contains('added')) {
        return;
      }

      button.innerHTML = 'Added to Comparison Tab';
      button.classList.add('added');
  }
      if (firstPC === false) {
        chosencomparasion[0] = filteredProducts[index];
        console.log(chosencomparasion[0]);
        firstPC = true;
        localStorage.setItem('chosencomparasion', JSON.stringify(chosencomparasion));
      } else if (secondPC === false) {
        chosencomparasion[1] = filteredProducts[index];
        console.log(chosencomparasion[1]);
        secondPC = true;
        localStorage.setItem('chosencomparasion', JSON.stringify(chosencomparasion));
      } else if (firstPC === true && secondPC === true) {
        alert('You already have two computers selected for comparison, reset the comparison');
      }
      numberofcomps();
    });
  });
  
  
}

function checkmaxprice() {
  
  if (maxPrice === 0) {
    generateHTML(products, 9999);
  } else {
    generateHTML(products, maxPrice);
  }
}

checkmaxprice();
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
    if(maxPrice === 0){maxPrice = 9999;}
    generateHTML(result, maxPrice);
  } else if (selectedValue === "Descending") {
    function sortComputersByPrice(pc1, pc2) {
      return pc2.price - pc1.price;
    }
    const result = productscopy.slice().sort(sortComputersByPrice);
    if(maxPrice === 0){maxPrice = 9999;}
    generateHTML(result, maxPrice);
  }
}
document.querySelector('.reset-compare').addEventListener(('click'),()=>{
  chosencomparasion[0] = {};
  chosencomparasion[1] = {};
  localStorage.setItem('chosencomparasion', JSON.stringify(chosencomparasion));
  firstPC = false;
  secondPC = false;
  document.querySelectorAll('.compare-button').forEach((button, index) => {
      if (button.classList.contains('added')) {
        button.classList.remove('added');
        button.innerHTML = 'Compare';
      }
  numberofcomp = 0;
  document.querySelector('.compare-badge').innerHTML = numberofcomp + '/2';
  console.log(chosencomparasion);
    })});