// responsiveness
let hambergr= document.querySelector(".humberger")
let mobile= document.querySelector(".mobile")
hambergr.addEventListener('click',()=>{
    mobile.classList.toggle('mobile-activeness')
     let i= hambergr.querySelector("i")
     i.classList.toggle("fa-xmark")
     i.classList.toggle("fa-bars")
    
})

// sectons or pages
let teacherData= document.querySelector(".teacherData")
let My_class= document.querySelector(".my_class")
let Add_new_student= document.querySelector(".Add_new_student")
let bottom_header= document.querySelector(".bottom_header")
let sittings= document.querySelector(".sittings")
// actions of sections
let my_DataC= document.querySelector(".my-Data")
let my_ClassC= document.querySelector(".my-Class")
let add_N_StudentC= document.querySelector(".add-N-Student")
let Sittings_action= document.querySelector(".Sittings_action")
let edit_T= document.querySelector(".edit-T")
//  mobile
let my_DataM=document.querySelector('.my-DataM')
let my_ClassCM= document.querySelector(".my-ClassM")
let Sittings_actionM= document.querySelector(".Sittings_actionM")
let add_N_StudentCM= document.querySelector(".add-N-StudentM")


// functions

my_DataC.addEventListener("click",()=>{
    My_class.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
     teacherData.style.display='block'

     my_ClassC.classList.remove('left_side_active')
     add_N_StudentC.classList.remove('left_side_active')
     my_DataC.classList.add('left_side_active')

     
     my_ClassCM.classList.remove('left_side_active')
     add_N_StudentCM.classList.remove('left_side_active')
     my_DataM.classList.add('left_side_active')
})
my_ClassC.addEventListener("click",()=>{
    teacherData.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='block'
    sittings.style.display='none'
    My_class.style.display='block'

    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.add('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.add('left_side_active')
})
add_N_StudentC.addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    Add_new_student.style.display='block'

    add_N_StudentC.classList.add('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')

    add_N_StudentCM.classList.add('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')

})
Sittings_action.addEventListener("click",()=>{
 
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    Add_new_student.style.display='none'
    sittings.style.display='block'

    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')


})
edit_T.addEventListener("click",()=>{
    
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    Add_new_student.style.display='none'
    sittings.style.display='block'
   

    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')


})
//  mobile funcions
my_DataM.addEventListener("click",()=>{
    My_class.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
     teacherData.style.display='block'

     my_ClassCM.classList.remove('left_side_active')
     add_N_StudentCM.classList.remove('left_side_active')
     my_DataM.classList.add('left_side_active')

     add_N_StudentCM.classList.remove('left_side_active')
     my_DataM.classList.add('left_side_active')
     my_ClassCM.classList.remove('left_side_active')
 
})
my_ClassCM.addEventListener("click",()=>{
    teacherData.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='block'
    sittings.style.display='none'
    My_class.style.display='block'

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.add('left_side_active')

})
add_N_StudentCM.addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    Add_new_student.style.display='block'

    add_N_StudentCM.classList.add('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')

})
Sittings_actionM.addEventListener("click",()=>{
    
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    Add_new_student.style.display='none'
    sittings.style.display='block'

    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')


})








