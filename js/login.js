let admin = false;
let Teacher = false;
let Student = false;

let ADMIN = document.querySelector('#ADMIN');
let TEACHER = document.querySelector('#TEACHER');
let STUDENT = document.querySelector('#STUDENT');
let FORM = document.querySelector('#loginForm');

ADMIN.addEventListener('click', () => {
    admin = true;
    Teacher = false;
    Student = false;
    STUDENT.style.border = 'none';
    TEACHER.style.border = 'none';
    ADMIN.style.border = 'solid #000 2px';
    document.querySelector('.reg_link').style.display='block'
   let inputt= document.querySelector('#username')
   inputt.placeholder='Enter your name'
});

TEACHER.addEventListener('click', () => {
    admin = false;
    Teacher = true;
    Student = false;
    STUDENT.style.border = 'none';
    ADMIN.style.border = 'none';
    TEACHER.style.border = 'solid #000 2px';
    document.querySelector('.reg_link').style.display='none'
      let inputt= document.querySelector('#username')
   inputt.placeholder='Enter your Email'

});

STUDENT.addEventListener('click', () => {
    admin = false;
    Teacher = false;
    Student = true;
    ADMIN.style.border = 'none';
    TEACHER.style.border = 'none';
    STUDENT.style.border = 'solid #000 2px';
    document.querySelector('.reg_link').style.display='none'
      let inputt= document.querySelector('#username')
   inputt.placeholder='Enter your Email'

});

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.querySelector('#username').value; 
    let password = document.querySelector('#password').value;

    if (admin) {
        let adminData = JSON.parse(localStorage.getItem('admin'))
        if(!adminData){
            alert('there is no admin account please sinup for admin')
        }
        if (adminData.adminName===email && adminData.password===password) {
            alert('Login Successful');
            localStorage.setItem('current_user', JSON.stringify({ type: 'admin', email })); 
            window.location.href = 'admin.html'; 
        } else {
            alert(`Admin ${email} does not exist!`);
        }
    }

    if (Teacher) {
        let teacherData = JSON.parse(localStorage.getItem('teachers')) || [];
        let currentTeacher = teacherData.find(teacher => teacher.email === email && teacher.password === password);
        if (currentTeacher) {
            alert('Login Successful');
            localStorage.setItem('current_user', JSON.stringify({ type: 'teacher', fullname: currentTeacher.fullname })); 
            window.location.href = 'teacher.html'; 
        } else {
            alert(`Teacher ${email} does not exist!`);
        }
    }
    

    if (Student) {
        let studentData = JSON.parse(localStorage.getItem('students')) || [];
        let currentStudent = studentData.find(student => student.email === email && student.password === password);
        
        if (currentStudent) {
            alert('Login Successful');
            localStorage.setItem('current_user_student', JSON.stringify({ type: 'student', name: currentStudent.name }));
            window.location.href = 'student.html';
        } else {
            alert(`Student ${email} does not exist!`);
        }
      
    }
    
    if(admin==false && Teacher== false && Student==false){
        alert('Choose your type')
    }

    
});

