// hamberger
let mobile_menu=document.querySelector('.mobile-menu')
document.querySelector('.fa-bars').addEventListener('click',()=>{
    mobile_menu.style.display='block'
})
document.querySelector('.fa-x').addEventListener('click',()=>{
    mobile_menu.style.display='none'
})