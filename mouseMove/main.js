'use strict'
let counter = 0;
let dots = [];
let i;


for (i = 0; i < 20; i++) {
    let myDot = document.createElement("div");
    myDot.className = "myDot";
    dots.push(myDot);
    document.body.appendChild(myDot);
    console.log(dots.length);
    
}

document.addEventListener("mousemove", event => {
   
   let myDot = dots[counter]
   myDot.style.left = (event.pageX -4) + "px";
   myDot.style.top = (event.pageY- 4) + "px";
   counter = (counter+1)%dots.length;
      
});

