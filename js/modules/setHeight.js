let setItemPhoto = document.querySelectorAll('.setItem__photo');
let setItem = document.querySelectorAll('.setItem');

function setHeight() {
    setItemPhoto.forEach((item)=>{
    item.style.height = setItem[0].clientWidth + 'px'
})
}
setHeight()
window.addEventListener('resize', ()=>{
    setHeight()
})
