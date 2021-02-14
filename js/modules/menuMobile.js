let hamburg = document.querySelector('.hamburger');
let menuMobile = document.querySelector('.menu');
let menuMobileItems = document.querySelectorAll('.menu a');

hamburg.addEventListener('click', ()=>{
    menuMobile.style.transform = 'translate(0, 0)'
})

menuMobile.addEventListener('click', ()=>{
      if (window.innerWidth < 680){
            menuMobile.style.transform = 'translate(-100%, 0)'
      }
})
menuMobileItems.forEach(item => {
    item.addEventListener('click', ()=>{
        if (window.innerWidth < 680){
              menuMobile.style.transform = 'translate(-100%, 0)'
        }
  })


})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 680){
        menuMobile.style.transform = 'translate(0, 0)'
    } else {
        menuMobile.style.transform = 'translate(-100%, 0)'

    }

})
