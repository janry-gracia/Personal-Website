let btn1= document.querySelector(".box1");
let btn2 = document.querySelector(".box2");
let text = document.querySelector(".greeting");


btn1.addEventListener("click", function() {
    btn1.classList.add("box1transition");
    btn1.style.transition = "transform 3s";
    btn2.classList.add("box2transition");
    btn2.style.transition = "transform 3s";
    text.style.animationName = "hidecontent";
});


btn2.addEventListener("click", function() {
    btn1.classList.add("box1transition");
    btn1.style.transition = "transform 3s";
    btn2.classList.add("box2transition");
    btn2.style.transition = "transform 3s";
    text.style.animationName = "hidecontent";
});


text.addEventListener("click", function() {
    btn1.classList.add("box1transition");
    btn1.style.transition = "transform 3s";
    btn2.classList.add("box2transition");
    btn2.style.transition = "transform 3s";
    text.style.animationName = "hidecontent";
});