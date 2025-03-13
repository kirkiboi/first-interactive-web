const addButton = document.getElementById("add-up-btn");
const minusBtn = document.getElementById("minus-btn");
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");
const resetBtn = document.getElementById("resetBTN");
const nameButton = document.getElementById("name-button");
const hiddenbtn = document.getElementById("hiddenBTN");

hiddenbtn.onclick = function(){
    secondDiv.style.display = 'none';
    let thirdDiv = document.getElementById("portfolio-div");
    thirdDiv.style.display = 'block';
}
var counter = 0;

addButton.addEventListener('click', add);
minusBtn.addEventListener('click', minus);
resetBtn.addEventListener('click', reset);

function add(){
    counter++;
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

console.log('I LOVE YOU, YOT!');

// Get the canvas element and its drawing context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the stars
const stars = [];

// Define a Star class
class Star {
    constructor() {
        this.x = Math.random() * canvas.width; // Random x position
        this.y = Math.random() * canvas.height; // Random y position
        this.size = Math.random() * 2; // Random size for variation
        this.speedX = Math.random() * 0.5 - 0.25; // Small horizontal movement
        this.speedY = Math.random() * 0.5 - 0.25; // Small vertical movement
    }

    // Draw the star on the canvas
    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    // Update the star's position for animation
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Make stars bounce back if they hit the edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
}

// Generate 100 stars and store them in the array
for (let i = 0; i < 100; i++) {
    stars.push(new Star());
}

// Animation loop to update and redraw stars
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame

    for (let star of stars) {
        star.update(); // Move the star
        star.draw(); // Redraw the star
    }

    requestAnimationFrame(animate); // Call animate() again for smooth motion
}

// Start the animation
animate();

// Adjust canvas size if the window is resized
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});