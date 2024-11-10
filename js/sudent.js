document.addEventListener("DOMContentLoaded", () => {
  const stu_img = document.querySelectorAll("#stu_img");
  const currentStudent = document.querySelectorAll(".currentStudent");
  const currentStudentUser = JSON.parse(
    localStorage.getItem("current_user_student")
  );
  const students = JSON.parse(localStorage.getItem("students"));

  if (currentStudentUser && currentStudentUser.type === "student") {
    // currentStudent.innerHTML = currentStudentUser.name;
    currentStudent.forEach(
      (currentStudent) => (currentStudent.innerHTML = currentStudentUser.name)
    );
    let student = students.find(
      (student) => student.name == currentStudentUser.name
    );
    stu_img.forEach((img) => (img.src = student.img));
    loadingData(currentStudentUser.name);
  } else {
    currentStudent.innerHTML = "No student information available.";
  }
});

// responsiveness
let hambergr = document.querySelector(".humberger");
let mobile = document.querySelector(".mobile");
hambergr.addEventListener("click", () => {
  mobile.classList.toggle("mobile-activeness");
  let i = hambergr.querySelector("i");
  i.classList.toggle("fa-xmark");
  i.classList.toggle("fa-bars");
});

// sectons or pages
let StudentData = document.querySelector(".StudentData");
let repots = document.querySelector(".repots");
// actions of sections
let my_DataC = document.querySelector(".my-Data");
let Student_repots = document.querySelector(".Student_repots");

//  mobile
let my_DataM = document.querySelector(".my-DataM");
let Student_repotsM = document.querySelector(".Student_repotsM");

// functions

my_DataC.addEventListener("click", () => {
  StudentData.style.display = "flex";
  repots.style.display = "none";

  Student_repots.classList.remove("left_side_active");
  Student_repotsM.classList.remove("left_side_active");
  my_DataC.classList.add("left_side_active");
  my_DataM.classList.add("left_side_active");
  const currentStudentUser = JSON.parse(
    localStorage.getItem("current_user_student")
  );
  loadingData(currentStudentUser.name);
});

Student_repots.addEventListener("click", () => {
  StudentData.style.display = "none";
  repots.style.display = "block";

  Student_repots.classList.add("left_side_active");
  Student_repotsM.classList.add("left_side_active");

  my_DataC.classList.remove("left_side_active");
  my_DataM.classList.remove("left_side_active");
});

//  mobile funcions
my_DataM.addEventListener("click", () => {
  StudentData.style.display = "flex";
  repots.style.display = "none";

  my_DataM.classList.add("left_side_active");
  my_DataC.classList.add("left_side_active");

  Student_repots.classList.remove("left_side_active");
  Student_repotsM.classList.remove("left_side_active");
});

Student_repotsM.addEventListener("click", () => {
  StudentData.style.display = "none";

  repots.style.display = "block";

  Student_repots.classList.add("left_side_active");
  Student_repotsM.classList.add("left_side_active");

  my_DataM.classList.remove("left_side_active");
  my_DataC.classList.remove("left_side_active");
});

// lagout
let lagout_btn = document.querySelector(".lagout_btn");
lagout_btn.addEventListener("click", () => {
  localStorage.removeItem("urrent_admin_user");
  window.location.href = "login.html";
});

let loadingData = (name) => {
  const teachers = JSON.parse(localStorage.getItem("teachers"));
  const students = JSON.parse(localStorage.getItem("students"));
  let student = students.find((student) => student.name == name);
  let teacher = teachers.find(
    (teacher) => teacher.className == student.studentClass
  );
//   console.log(student);

  document.querySelector(".teacher_D_img").src=student.img;
  document.querySelector(".studentName").innerHTML=student.name;
  document.querySelector(".studentEmail").innerHTML=student.email;
  document.querySelector(".studentPassword").innerHTML=student.password;
  document.querySelector(".studentClass").innerHTML=student.studentClass;
 document.querySelector('.studentAdminTeacher').innerHTML=teacher.fullname
};

// reports
document.querySelector('.student_send-repot').addEventListener('submit',(e)=>{
    e.preventDefault()
    const students = JSON.parse(localStorage.getItem("students"));
    const currentStudentUser = JSON.parse(localStorage.getItem("current_user_student"))
     let student = students.find((student) => student.name == currentStudentUser.name);
    let textArea=document.querySelector('#textArea')

    const dateNow = Date.now();
    const randomNum = Math.floor(Math.random() * 1000); 
    let current_id=dateNow-randomNum;

     console.log(current_id)
  
    let data_Reports={
     type:'student',
     img:student.img,
     name:student.name,
     class:student.studentClass,
     text:textArea.value,
     view:{
        teacher:false,
        admin:false
     },
     current_id:current_id
    }
     console.log(data_Reports)
    let reports= JSON.parse(localStorage.getItem('reports')) || []
     reports.unshift(data_Reports)

    localStorage.setItem('reports',JSON.stringify(reports))
    document.querySelector('.student_send-repot').reset()
    alert('report sent successfuly')
})