var numOfSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var backgroundColor = "#232323";
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var buttons = document.querySelectorAll("button");
var correctStripeStyle = {
    color: pickedColor,
}
var correctButtonHoverStyle = {
    backgroundColor: pickedColor,
    color: "white",
}

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    //hide the last 3 squares 
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    //hide the last 3 squares 
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    //generator all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor  = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors";
})


for (var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor  = colors[i];

    //add click listner colors tp squares
    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === pickedColor){
            changeColors(pickedColor);            
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            //$("button").css(correctStripeStyle);
            
        } else {
            this.style.backgroundColor = backgroundColor;
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color){
    //loop through all squares to change color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor  = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []; 
    for (var i = 0; i < num; i++){
        //get random color
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    //turn into "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}