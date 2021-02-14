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

// document.querySelectorAll('a[href^="#"').forEach(link => {

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         let href = this.getAttribute('href').substring(1);

//         const scrollTarget = document.getElementById(href);

//         const topOffset = document.querySelector('.scrollto').offsetHeight;
//         // const topOffset = 0; // если не нужен отступ сверху 
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         console.log(scrollTarget);
//         console.log(elementPosition);
//         console.log(offsetPosition);

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//     });
// });

$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 300,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});

// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };
let setItemPhoto = document.querySelectorAll('.setItem__photo');
let setItem = document.querySelectorAll('.setItem');

function setHeight() {
    setItemPhoto.forEach((item)=>{
    item.style.height = setItem[0].clientWidth + 'px'
})
}
setHeight()
window.addEventListener('resize', ()=>{
    setHeight();
})



document.addEventListener("DOMContentLoaded", ()=>{
    function slider(){
        let feedbackSlider = document.querySelector('.feedbackSlider');
        let feedbackList = document.querySelector('.feedbackList');
        let feedbackSliderWidth = feedbackSlider.offsetWidth;
        let feedbackSliderLeft = document.querySelectorAll('.feedbackSlider__arrow')[0];
        let feedbackSliderRight = document.querySelectorAll('.feedbackSlider__arrow')[1];

        let feedbackItems = document.querySelectorAll('.feedbackItem');

        let totalSliderWidth = feedbackItems.length * feedbackSliderWidth;
        feedbackSliderRight.addEventListener('click',()=>{
            slider.right()
        })
        feedbackSliderLeft.addEventListener('click',()=>{
            console.log('left');
            slider.left()
        })

        currentStep = 0;
        slider.right = function(){
            let step = feedbackSliderWidth;
            currentStep = currentStep + step;

            if(currentStep > feedbackSliderWidth*(feedbackItems.length-1)){
                currentStep = 0;
            }
            feedbackList.style.transform = `translate(-${currentStep}px,0)`;
        }
        slider.left = function(){
            let step = feedbackSliderWidth;
            currentStep = currentStep - step;

            if(currentStep < 0){
                currentStep = feedbackSliderWidth*(feedbackItems.length-1);
            }
            feedbackList.style.transform = `translate(-${currentStep}px,0)`;
        }
        
        
        slider.resize = function(){
            feedbackSliderWidth = feedbackSlider.offsetWidth;

            feedbackItems.forEach((item)=>{
                item.style.minWidth = feedbackSliderWidth + 'px'
            })
            totalSliderWidth = feedbackItems.length * feedbackSliderWidth;
            feedbackList.style.transform = `translate(0,0)`;
            currentStep = 0;
        }
    }
    slider();
    slider.resize() 

    window.addEventListener('resize',()=>{
        slider.resize();
    })
    
});

document.addEventListener("DOMContentLoaded", () => {

    fetch('img/icons/vector-icons.min.svg')
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            let div = document.createElement("div");
            div.innerHTML = data;
            document.body.appendChild(div);
            div.style.cssText = 'position:fixed; z-index:-55555;width: 1px;height: 1px;';
        });
});