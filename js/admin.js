let admin=false;
let Teacher=false;
let Student=false;

let ADMIN=document.querySelector('#ADMIN')
let TEACHER=document.querySelector('#TEACHER')
let STUDENT=document.querySelector('#STUDENT')
let FORM=document.querySelector('#loginForm')
// console.log(admin,Teacher,Student)

ADMIN.addEventListener('click',()=>{
   admin=true
   Teacher=false
   Student=false
   STUDENT.style.border='none'
   TEACHER.style.border='none'
    ADMIN.style.border='solid #000 2px'
//    console.log(admin,Teacher,Student)
})

TEACHER.addEventListener('click',()=>{
    admin=false
    Teacher=true
    Student=false
    STUDENT.style.border='none'
    ADMIN.style.border='none'
    TEACHER.style.border='solid #000 2px'
    // console.log(admin,Teacher,Student)
 })

 STUDENT.addEventListener('click',()=>{
    admin=false
    Teacher=false
    Student=true
   ADMIN.style.border='none'
   TEACHER.style.border='none'
   STUDENT.style.border='solid #000 2px'
    // console.log(admin,Teacher,Student)
 })



 FORM.addEventListener('submit',(e)=>{
    e.preventDefault()
    let username=document.querySelector('#username')
      let password=document.querySelector('#password')
     
       if(admin){
       let adminData=JSON.parse(localStorage.getItem('admins'))
       let curentAdmin=adminData.find(admin=> admin.adminName == username.value && admin.password== password.value)
       if(curentAdmin){
        alert('Login Successful')
        window.location.href='admin.html'
       }else{
        alert(`admin ${username.value} is an exisist !`)
        return
       }
       
       }

       if(Teacher){
        let adminData=JSON.parse(localStorage.getItem('teacher'))
        let curentAdmin=adminData.find(admin=> admin.Username == username.value && admin.Password== password.value)
        if(curentAdmin){
         alert('Login Successful')
         window.location.href='teacher.html'
        }else{
            alert(`Teacher ${username.value} is an exisist !`)
            return
        }
       
       }
       if(Student){
        let adminData=JSON.parse(localStorage.getItem('student'))
        let curentAdmin=adminData.find(admin=> admin.Username == username.value && admin.Password== password.value)
        if(curentAdmin){
         alert('Login Successful')
         window.location.href='student.html'
        }else{
            alert(`Student ${username.value} is an exisist !`)
            return
        }
       
       }
 })