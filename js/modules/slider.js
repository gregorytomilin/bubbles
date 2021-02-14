

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
