
const addButton = document.getElementById("add-up-btn");
const minusBtn = document.getElementById("minus-btn");
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");

var counter = 0;

addButton.addEventListener('click', add);
minusBtn.addEventListener('click', minus);

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