// document.getElementById("lefteye").style.backgroundColor = "yellow"
// document.getElementById("head").style.transform = "rotate(45deg)"
// // Put a 2‐pixel‐wide, solid black border around his body.
// document.getElementById("body").style.border = "1.5px black solid";
// // Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "4px"
// // Put yellow dots around his right eye.
// document.getElementById("righteye").style.border = 
// "4px black dotted";
// // Change his left arm’s color.
// document.getElementById("leftarm").style.backgroundColor = "blue"

// // // Change the text color.
// document.getElementById("body").style.color = "green";
// // // Give Douglas hair.
// document.getElementById("head").style.borderTop = "25px yellow solid"

// //tilt to the left
// document.getElementById("head").style.transform = "rotate(-50deg)"
// //Make Douglas’s nose round.
// document.getElementById("nose").style.borderRadius = "50%"

// // Make Douglas’s right arm green
// document.getElementById("rightarm").style.backgroundColor = "green"

// // Make Douglas’s lips pink
// document.getElementById("mouth").style.backgroundColor = "pink"

let nosse = document.getElementById("nose");
nosse.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    let robotPart = e.target;
    let top = 0;
    let animation = setInterval(frame, 15)

    function frame() {
        robotPart.style.top = top + "%";
        top++;

        if (top === 21) {
            clearInterval(animation)
        }
    }
}