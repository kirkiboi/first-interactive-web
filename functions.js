
const addButton = document.getElementById("add-up-btn");
const minusBtn = document.getElementById("minus-btn");
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");
const resetBtn = document.getElementById("resetBTN");

var counter = 0;

addButton.addEventListener('click', add);
minusBtn.addEventListener('click', minus);
resetBtn.addEventListener('click', reset);

function add(){
    counter++
    let currentNumber = document.getElementById("number").textContent = counter;
    if(counter === 1){
        secondDiv.style.display = 'block';
        firstDiv.style.display = 'none';
    }
}
function minus(){
    counter--
    let currentNumber = document.getElementById("number").textContent = counter;
    if(counter === -21){
        alert('try going the other way');
    }
}
function reset(){
    counter = 0;
    let currentNumber = document.getElementById("number").textContent = counter;
}
const nameButton = document.getElementById("name-button");
nameButton.addEventListener('click', enterName);

function enterName(){
    var name = document.getElementById("name-holder").value;
    let nameGreeting = document.getElementById("nameP").textContent = `Hi, ${name}. welcome!`;
    let hideName = document.getElementById("name-holder").style.display = 'none';
    nameButton.style.display = 'none';
}
console.log('I LOVE YOU, YOT!')