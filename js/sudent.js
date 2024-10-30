document.addEventListener('DOMContentLoaded', () => {
    const currentStudent = document.querySelector('.currentStudent');
    const currentStudentUser = JSON.parse(localStorage.getItem('current_user_student'));

    if (currentStudentUser && currentStudentUser.type === 'student') {
        currentStudent.innerHTML = `${currentStudentUser.name}`;
        console.log(`Student: ${currentStudentUser.name}`);
    } else {
        currentStudent.innerHTML = 'No student information available.';
    }
});





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
let StudentData= document.querySelector(".StudentData")
let repots= document.querySelector(".repots")
// actions of sections
let my_DataC= document.querySelector(".my-Data")
let Student_repots= document.querySelector(".Student_repots")

//  mobile
let my_DataM=document.querySelector('.my-DataM')
let Student_repotsM= document.querySelector(".Student_repotsM")


// functions

my_DataC.addEventListener("click",()=>{
 
    StudentData.style.display='flex'
    repots.style.display='none'


   
    Student_repots.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')
     my_DataC.classList.add('left_side_active')

     
    
     my_DataM.classList.add('left_side_active')
})

Student_repots.addEventListener("click",()=>{
    StudentData.style.display='none'
 
    repots.style.display='block'

    Student_repots.classList.add('left_side_active')
    Student_repotsM.classList.add('left_side_active')
    
    my_DataC.classList.remove('left_side_active')
   
    my_DataM.classList.remove('left_side_active')


})


//  mobile funcions
my_DataM.addEventListener("click",()=>{
 
    StudentData.style.display='flex'
    repots.style.display='none'

    
     my_DataM.classList.add('left_side_active')
     my_DataM.classList.add('left_side_active')

  
     Student_repots.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

 
})


Student_repotsM.addEventListener("click",()=>{
    StudentData.style.display='none'

    repots.style.display='block'
  
    Student_repots.classList.add('left_side_active')

    Student_repotsM.classList.add('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
  

})

// lagout
let lagout_btn =document.querySelector('.lagout_btn')
lagout_btn.addEventListener('click', ()=>{
    localStorage.removeItem('urrent_admin_user')
     window.location.href='login.html'
})




// let want =arrey.filter(curent=> curent.number>=10)
// console.log(want)
// want.forEach(want=>console.log(want))

