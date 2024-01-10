const chosencomparasion = JSON.parse(localStorage.getItem("chosencomparasion"));
console.log(chosencomparasion);
//lets generate the html
let firstcompare = "";
firstcompare = `
  
      <div class="details">
        <img class="computer-image" src="${chosencomparasion[0].image}">
        <p class="brand-name">Brand: ${chosencomparasion[0].brand}</p>
        <p class="cpu">CPU: ${chosencomparasion[0].cpu}</p>
        <p class="gpu">GPU: ${chosencomparasion[0].gpu}</p>
        <p class="ram">RAM: ${chosencomparasion[0].ram}</p>
        <p class="ssd">SSD: ${chosencomparasion[0].ssd}</p>
        <p class="price">Price: ${chosencomparasion[0].price}$</p>
      </div>
`;
document.querySelector('.left-data').innerHTML = firstcompare;
//now lets generate the second box
let secondcompare = "";
secondcompare = `
      <div class="details">
        <img class="computer-image" src="${chosencomparasion[1].image}">
        <p class="brand-name">Brand: ${chosencomparasion[1].brand}</p>
        <p class="cpu">CPU: ${chosencomparasion[1].cpu}</p>
        <p class="gpu">GPU: ${chosencomparasion[1].gpu}</p>
        <p class="ram">RAM: ${chosencomparasion[1].ram}</p>
        <p class="ssd">SSD: ${chosencomparasion[1].ssd}</p>
        <p class="price">Price: ${chosencomparasion[1].price}$</p>
      </div>
`;
document.querySelector('.right-data').innerHTML = secondcompare;

let ramdifference = "";
let ssddifference = "";
let pricedifference = "";
if(Number(chosencomparasion[0].ram) > Number(chosencomparasion[1].ram)){
  ramdifference = `The ${chosencomparasion[0].brand} on the left has more RAM than the ${chosencomparasion[1].brand} on the right`;
}
else if(Number(chosencomparasion[0].ram) === Number(chosencomparasion[1].ram)){
  ramdifference = `Both PC's have the same ammount of RAM`;
}
else{
  ramdifference = `The ${chosencomparasion[0].brand} on the left has less RAM than the ${chosencomparasion[1].brand} on the right`;
}document.querySelector('.RAM-difference').innerHTML = 'RAM: ' + ramdifference;


if(Number(chosencomparasion[0].ssd) > Number(chosencomparasion[1].ssd)){
  ssddifference = `The ${chosencomparasion[0].brand} on the left has more Storage than the ${chosencomparasion[1].brand} on the right`;
}
else if(Number(chosencomparasion[0].ssd) === Number(chosencomparasion[1].ssd)){
  ssddifference = `Both PC's have the same ammount of storage`;
}
else{
  ssddifference = `The ${chosencomparasion[0].brand} on the left has less Storage than the ${chosencomparasion[1].brand} on the right`;
}
document.querySelector('.SSD-difference').innerHTML = 'Storage: ' + ssddifference;

if(Number(chosencomparasion[0].price) > Number(chosencomparasion[1].price)){
  pricedifference = `The ${chosencomparasion[0].brand} on the left is more expensive than the ${chosencomparasion[1].brand} on the right`;
}
else if(Number(chosencomparasion[0].price) === Number(chosencomparasion[1].price)){
  pricedifference = `Both PC's Cost the same`;
}
else{
  pricedifference = `The ${chosencomparasion[0].brand} on the left is less expensive than the ${chosencomparasion[1].brand} on the right`;
}
document.querySelector('.Price-difference').innerHTML = 'Price: ' + pricedifference;