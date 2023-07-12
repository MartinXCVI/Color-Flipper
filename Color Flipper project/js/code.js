const colors = ["Purple", "Green", "Red", "Blue", "Pink",
                "Gray", "Yellow", "Brown", "Crimson", "Lightgray", "Orange",
                "Violet", "Cyan", "Coral", "Goldenrod"];
                
const myBtn = document.getElementById("myBtn");
const myColor = document.querySelector(".color");


myBtn.addEventListener('click', function() {
    //Getting a random number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    myColor.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


// function randomChange() {
//     const randomNumber = 2;
//     document.body.style.backgroundColor = colors[randomNumber];
//     colors.textContent = colors[randomNumber];
// }

// myBtn.addEventListener('click', randomChange());

