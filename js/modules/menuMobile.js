let hamburg = document.querySelector('.hamburger');
let menuMobile = document.querySelector('.menu');

hamburg.addEventListener('click', ()=>{
    menuMobile.style.transform = 'translate(0, 0)'
})

menuMobile.addEventListener('click', ()=>{
      
    menuMobile.style.transform = 'translate(-100%, 0)'
})

window.addEventListener('resize', ()=>{
    console.log(document.documentElement.clientWidth);
    // if(document.documentElement.clientWidth > 680){
    //     menuMobile.style.transform = 'translate(0, 0)'
    // } else {
    //     menuMobile.style.transform = 'translate(-100%, 0)'
    // }
})