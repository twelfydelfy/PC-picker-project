const chosencomparasion = JSON.parse(localStorage.getItem("chosencomparasion"));
console.log(chosencomparasion);
//lets generate the html
if(!chosencomparasion[0].price || !chosencomparasion[1].price ){
  document.querySelector('.compare-title').innerHTML = `Sorry, but it seems you havent selected 2 PC's (or an error has occured)`
}
else{
let firstcompare = "";
let secondcompare = "";
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
let cpudifference = "";
let gpudifference = "";
let ramdifference = "";
let ssddifference = "";
let pricedifference = "";

//CPU Comparing
if(chosencomparasion[0].cpuRank > chosencomparasion[1].cpuRank){
  cpudifference = `The ${chosencomparasion[0].brand} on the left has a better CPU than the ${chosencomparasion[1].brand} on the right by about ${chosencomparasion[0].cpuRank - chosencomparasion[1].cpuRank} points`;
}
else if(chosencomparasion[0].cpuRank === chosencomparasion[1].cpuRank){
  cpudifference = `The CPU's offer roughly the same performance`;
}else
{
  cpudifference = `The ${chosencomparasion[0].brand} on the left has a worse CPU than the ${chosencomparasion[1].brand} on the right by about ${chosencomparasion[1].cpuRank - chosencomparasion[0].cpuRank} points`;
}
document.querySelector('.CPU-difference').innerHTML = 'CPU: '+ cpudifference;

//GPU Comparing

if(chosencomparasion[0].gpuRank > chosencomparasion[1].gpuRank){
  gpudifference = `The ${chosencomparasion[0].brand} on the left has a better GPU than the ${chosencomparasion[1].brand} on the right by about ${chosencomparasion[0].gpuRank - chosencomparasion[1].gpuRank} points`;
}
else if(chosencomparasion[0].gpuRank === chosencomparasion[1].gpuRank){
  gpudifference = `The GPU's offer roughly the same performance`;
}else
{
  gpudifference = `The ${chosencomparasion[0].brand} on the left has a worse GPU than the ${chosencomparasion[1].brand} on the right by about ${chosencomparasion[1].gpuRank - chosencomparasion[0].gpuRank} points`;
}
document.querySelector('.GPU-difference').innerHTML = 'GPU: '+gpudifference;

//RAM Comparing

if(Number(chosencomparasion[0].ram) > Number(chosencomparasion[1].ram)){
  ramdifference = `The ${chosencomparasion[0].brand} on the left has ${chosencomparasion[0].ram - chosencomparasion[1].ram}GB more RAM than the ${chosencomparasion[1].brand} on the right`;
}
else if(Number(chosencomparasion[0].ram) === Number(chosencomparasion[1].ram)){
  ramdifference = `Both PC's have the same ammount of RAM`;
}
else{
  ramdifference = `The ${chosencomparasion[0].brand} on the left has ${chosencomparasion[1].ram - chosencomparasion[0].ram}GB less RAM than the ${chosencomparasion[1].brand} on the right`;
}document.querySelector('.RAM-difference').innerHTML = 'RAM: ' + ramdifference;

//SSD Comparing

if(Number(chosencomparasion[0].ssd) > Number(chosencomparasion[1].ssd)){
  ssddifference = `The ${chosencomparasion[0].brand} on the left has ${chosencomparasion[0].ssd - chosencomparasion[1].ssd}GB more Storage than the ${chosencomparasion[1].brand} on the right`;
}
else if(Number(chosencomparasion[0].ssd) === Number(chosencomparasion[1].ssd)){
  ssddifference = `Both PC's have the same ammount of storage`;
}
else{
  ssddifference = `The ${chosencomparasion[0].brand} on the left has ${chosencomparasion[1].ssd - chosencomparasion[0].ssd}GB less Storage than the ${chosencomparasion[1].brand} on the right`;
}
document.querySelector('.SSD-difference').innerHTML = 'Storage: ' + ssddifference;

//Price Comparing

if(Number(chosencomparasion[0].price) > Number(chosencomparasion[1].price)){
  pricedifference = `The ${chosencomparasion[0].brand} on the left is $${chosencomparasion[0].price - chosencomparasion[1].price} more expensive than the ${chosencomparasion[1].brand} on the right`;
}
else if(Number(chosencomparasion[0].price) === Number(chosencomparasion[1].price)){
  pricedifference = `Both PC's Cost the same`;
}
else{
  pricedifference = `The ${chosencomparasion[0].brand} on the left is $${chosencomparasion[1].price - chosencomparasion[0].price} less expensive than the ${chosencomparasion[1].brand} on the right`;
}
document.querySelector('.Price-difference').innerHTML = 'Price: ' + pricedifference;
}