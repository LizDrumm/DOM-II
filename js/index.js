// Your code goes here

//1 mouseover - changes nav links to pink 

 const nav = document.querySelector('nav')
 nav.addEventListener('mouseover', function (event) {
  event.target.style.color='pink';
 });

// nav.addEventListener('mouseleave', function (event) {
//   event.target.style.color='black';
// });

//2 load ---alert when your page is loaded
 const load = document.querySelector('.body');
 window.addEventListener('load', (event) => {
     alert ("home page has been loaded")
 });


// 3 resize- resizes top image 
const changeBannerImg = document.querySelector(".intro img");
window.addEventListener("resize", () => {
  changeBannerImg.style.height = "40vh";
  changeBannerImg.style.width ="50%";
});

//4 clickevent - changes background of bottom buttons

const button= document.querySelectorAll(".btn")
button.forEach(btn =>{
    btn.addEventListener('click',function(event){
        event.target.style.backgroundColor= "yellow";
})
});


//5 keydown- turns background black 

document.addEventListener('keydown', event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = '#FFFFFF'
  });


// 6 contextmenu-- rightclick pop up 

window.addEventListener('contextmenu', function (event) { 
    alert("Can't do that!"); 
    event.preventDefault(); 
  }, false);


// 7 mouseout -changes bottom picture when move move over then back
const bus = document.querySelector(".content-destination img")
bus.addEventListener('mouseout', function(event){
    bus.src = "https://image.shutterstock.com/image-photo/belgrade-serbia-june-2014-wrecked-260nw-1527676301.jpg"
})

//8 scroll h2 of bottom section
const scrollIt = document.querySelector(".content-destination h2")
window.addEventListener("scroll", function() {
    scrollIt.style.transform = "rotate("+window.pageYOffset+"deg)";
});

//9 double click-- make the 'lets go!' picture disappear when you double click
const funPic = document.querySelectorAll(".content-section img")
funPic.forEach( fun =>{
    fun.addEventListener('dblclick',function(event){
        event.target.style.display= 'none';
})
});

//10 work on wheel???
// const wheel = document.querySelector(".logo-heading")
// window.addEventListener("wheel", function(event) {
//     wheel.style.transform = "rotate("+window.pageYOffset+"deg)";
// });




//after 10 functions 
// [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`



//2 select
// const container =document.querySelector ('.container')
// const selectedText=document.createElement('p')
// container.appendChild(selectedText)
// selectedText.setAttribute('class', 'selected')
// function logSelection(event){
// const selected =document.querySelector('.selected');
//    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
// selected.textContent = `You selected: ${selection}`;
//  } 
// const para = document.querySelector('.logo-heading');
// para.addEventListener('select', logSelection);


//slide in

// const element = document.getElementById(".intro h2");
// element.addEventListener("animationstart", listener, false);
// element.addEventListener("animationend", listener, false);
// element.addEventListener("animationiteration", listener, false);

// element.className = "slidein";

// function listener(event) {
//     var l = document.createElement("li");
//     switch(event.type) {
//       case "animationstart":
//         l.innerHTML = "Started: elapsed time is " + event.elapsedTime;
//         break;
//       case "animationend":
//         l.innerHTML = "Ended: elapsed time is " + event.elapsedTime;
//         break;
//       case "animationiteration":
//         l.innerHTML = "New loop started at time " + event.elapsedTime;
//         break;
//     }
//     document.getElementById("output").appendChild(l);
//   }

// blur 
//  const form = document.getElementById('.content-destination .h2');

//  form.addEventListener('blur', (event) => {
//    event.target.style.img = '';    
//  }, true)

/* */
