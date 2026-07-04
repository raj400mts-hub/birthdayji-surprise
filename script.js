function checkPassword(){

let password=document.getElementById("password").value;

if(password==="Rugby")
    // Code me sirf hash rahega, original password nahi.

    {

window.location.href="surprise.html";

}

else{

document.getElementById("error").innerHTML="Wrong Password ❌";

}

}
// Floating Hearts

const hearts=document.querySelector(".hearts");

if(hearts){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(20+Math.random()*20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

},400);

}

// Floating Balloons

const balloons=document.querySelector(".balloons");

if(balloons){

const colors=["🎈","🎈","🎈","🎈"];

setInterval(()=>{

let balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML=colors[Math.floor(Math.random()*colors.length)];

balloon.style.left=Math.random()*100+"%";

balloon.style.animationDuration=(6+Math.random()*4)+"s";

balloons.appendChild(balloon);

setTimeout(()=>{
balloon.remove();
},10000);

},900);

}
// Music Button

function toggleMusic(){

const music=document.getElementById("bgMusic");
const btn=document.querySelector(".music-btn");

if(music.paused){

music.play();
btn.innerHTML="⏸ Pause Music";

}
else{

music.pause();
btn.innerHTML="🎵 Play Music";

}

}
function openGift() {
if(fireworks){
    fireworks.start();

    setTimeout(()=>{
        fireworks.stop();
    },6000);
}
    document.getElementById("giftScreen").style.display = "none";

    document.getElementById("heroPhoto").style.display = "flex";

    const music = document.getElementById("bgMusic");

    music.play().catch(() => {});

    const btn = document.querySelector(".music-btn");

    if (btn) {
        btn.innerHTML = "⏸ Pause Music";
        document.getElementById("mainContent").style.display="block";
        startTyping();
    }

    // 🎊 Confetti Blast
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    setTimeout(() => {

        document.getElementById("heroPhoto").style.display = "none";

        document.getElementById("mainContent").style.display = "block";

    }, 5000);

}
const birthdayText = `Happy Birthday Pallavi ❤️

May your life always be filled with happiness, success, love and beautiful memories.
You are one of the most special people in my life.
Stay happy, keep smiling and enjoy your special day pallu. thoda ghussa kam huaa kar bas 🎂🎉❤️`;
let index = 0;

function startTyping() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    typing.innerHTML = "";

    index = 0;

    function type() {

        if (index < birthdayText.length) {

            if (birthdayText.charAt(index) === "\n") {

                typing.innerHTML += "<br>";

            } else {

                typing.innerHTML += birthdayText.charAt(index);

            }

            index++;

            setTimeout(type, 40);

        }

    }

    type();

}
// Gallery Popup

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        document.getElementById("imagePopup").style.display="flex";

        document.getElementById("popupImage").src = img.src;

    });

});

function closePopup(){

    document.getElementById("imagePopup").style.display="none";

}
const fireworksContainer = document.getElementById("fireworks");

let fireworks;

if(fireworksContainer){
    fireworks = new Fireworks.default(fireworksContainer,{
        autoresize:true,
        opacity:0.5,
        acceleration:1.05,
        friction:0.97,
        gravity:1.5,
        particles:80
    });
}
// ===== Birthday Countdown =====

// Month is 0-based:
// January = 0, February = 1, ..., December = 11

const birthday = new Date(2026, 4, 7, 0, 0, 0); // Example: 10 July 2026

function updateCountdown(){

    const now = new Date();

    const difference = birthday - now;

    const countdown = document.getElementById("countdown");

    if(!countdown) return;

    if(difference <= 0){

        countdown.innerHTML = "🎉 Today is Your Special Day! ❤️";

        return;
    }

    const days = Math.floor(difference / (1000*60*60*24));

    const hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((difference % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((difference % (1000*60)) / 1000);

    countdown.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCountdown,1000);

updateCountdown();
setInterval(()=>{

let rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=Math.random()*100+"%";

rose.style.top="-50px";

rose.style.fontSize=(25+Math.random()*20)+"px";

rose.style.zIndex="999";

rose.style.pointerEvents="none";

rose.style.transition="6s linear";

document.body.appendChild(rose);

setTimeout(()=>{

rose.style.top="110%";

},100);

setTimeout(()=>{

rose.remove();

},6500);

},700);