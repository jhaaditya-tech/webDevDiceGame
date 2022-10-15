
var randomNumberP1=Math.random();
randomNumberP1=Math.floor(randomNumberP1*6)+1;
var generatedImageP1="images/"+"dice"+randomNumberP1+".png";
document.querySelectorAll("img")[0].setAttribute("src",generatedImageP1);


var randomNumberP2=Math.random();
randomNumberP2=Math.floor(randomNumberP2*6)+1;
var generatedImageP2="images/dice"+randomNumberP2+".png";
document.querySelectorAll("img")[1].setAttribute("src",generatedImageP2);

if (randomNumberP1>randomNumberP2){
  document.querySelector("h1").innerHTML="⛳️ Player 1 Wins";
}
else if (randomNumberP1<randomNumberP2) {
  document.querySelector("h1").innerHTML="Player 2 Wins ⛳️";
}
else {
  document.querySelector("h1").innerHTML="Draw 🤝 Game";
}
