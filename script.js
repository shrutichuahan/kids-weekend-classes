document.addEventListener('DOMContentLoaded', () => {
    const activityLinks = document.querySelectorAll('.activity-link');

    activityLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const activity = event.target.dataset.activity;
            alert(`Details for ${activity} will be displayed here.`);
        });
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
        dots.forEach((dot, index) => {
            dot.className = index === slideIndex ? 'dot active' : 'dot';
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides();
});
const container = document.getElementById("cartoon-container");

const icons = ["🎈","⭐","☁️"];

function createCartoon(){

const item = document.createElement("div");

item.className="cartoon-item";

item.innerHTML = icons[Math.floor(Math.random()*icons.length)];

/* random horizontal position */

item.style.left = Math.random()*100 + "%";

/* random size */

item.style.fontSize = (25 + Math.random()*30) + "px";

/* random animation speed */

let duration = 6 + Math.random()*5;

item.style.animationDuration = duration + "s";

container.appendChild(item);

/* remove after animation */

setTimeout(()=>{
item.remove();
},duration*1000);

}

/* create new items repeatedly */

setInterval(createCartoon,700);
const helloContainer = document.querySelector(".hello-background");

const hellos = [
"Hello","Hola","Bonjour","Ciao","Hallo",
"Namaste","नमस्ते","こんにちは","안녕하세요",
"Olá","مرحبا","Salut","Hej","Aloha"
];

/* soft kid friendly colors */

const colors = [
"#ff7eb3",
"#6bc5ff",
"#7ee081",
"#ffd166",
"#b388ff"
];

for(let i=0;i<60;i++){

const word = document.createElement("div");

word.className="hello-word";

word.innerText = hellos[Math.floor(Math.random()*hellos.length)];

/* random position across whole section */

word.style.left = Math.random()*100 + "%";
word.style.top = Math.random()*100 + "%";

/* random size */

word.style.fontSize = (40 + Math.random()*70) + "px";

/* random color */

word.style.color = colors[Math.floor(Math.random()*colors.length)];

helloContainer.appendChild(word);

}
const quotes = document.querySelectorAll(".quote");

let currentQuote = 0;

function showNextQuote(){

quotes[currentQuote].classList.remove("active");

currentQuote = (currentQuote + 1) % quotes.length;

quotes[currentQuote].classList.add("active");

}

setInterval(showNextQuote,4000);
function closeTutorPopup(){

document.getElementById("tutor-popup").style.display="none";

}

/* show popup after 5 seconds */

setTimeout(()=>{

document.getElementById("tutor-popup").style.display="flex";

},5000);