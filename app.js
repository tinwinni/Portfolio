//Heightlight menu
const sections =document.querySelectorAll('section');
const navli = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 2) ){
      current = section.getAttribute('id');
    }
  })
  navli.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
    

    
  });
});

//Navbar on scrolling

$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 0){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
      
    }
    if(this.scrollY > 200){
      $('.scroll-up-btn').addClass("show");

    }
    else
    {
      $('.scroll-up-btn').removeClass("show");

    }
  });
  // var scrolllink = $('.scroll');
  //  scrolllink.click(function(e) {
  //    e.preventDefault();
  //    $('body,html').animate({
  //      scrollTop: $(this.hash).offset().top
  //    },1000)
  //  })

  
});


  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  //Menu active

// let ul =document.querySelector('ul');
// let li =document.querySelectorAll('li');
//  li.forEach(el => {
//    el.addEventListener('click', function(){
//      ul.querySelector('.active').classList.remove('active');
    

//      el.classList.add('active');
//    }); 
//  });

 //Smooth scrolling

//  $('aside').localScroll();
// $(document).ready(function(){
//   var scrolllink = $('.scroll');
//   scrolllink.click(function (e){
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1000)
//   })
// })




















const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Min Htun","Web Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});