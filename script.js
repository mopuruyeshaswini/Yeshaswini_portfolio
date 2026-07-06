const words = [
    "Computer Science Student",
    "C Programmer",
    "Java Learner",
    "Web Developer"
];

let word = 0;
let letter = 0;
let deleting = false;
const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[word];

    if (!deleting) {
        typing.textContent = current.substring(0, letter++);
        if (letter > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typing.textContent = current.substring(0, letter--);
        if (letter < 0) {
            deleting = false;
            word = (word + 1) % words.length;
            letter = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();
