document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.reports').style.display='none'
  let admin_Data = JSON.parse(localStorage.getItem("admin"));
  let admin_img = document.querySelector(".admin_img");
  let admin_Name = document.querySelector(".admin_Name");
  admin_img.src = admin_Data.admin_img;
  admin_Name.innerHTML = `Admin ${admin_Data.adminName}`;
});
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector(".sidebar");
const barBtn = document.getElementById("bar-btn");
const closeBtn = document.getElementById("close-btn");

closeBtn.style.display = "none";

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");

  if (barBtn.style.display === "none") {
    barBtn.style.display = "block";
    closeBtn.style.display = "none";
  } else {
    barBtn.style.display = "none";
    closeBtn.style.display = "block";
  }
});

function setActiveMenuItem(id) {
   document.querySelector('.reports').style.display='none'
  document
    .querySelectorAll(".menu-item a")
    .forEach((item) => item.classList.remove("active"));
  document.querySelector(`#${id} a`).classList.add("active");
  localStorage.setItem("activeSection", id);
}

document.querySelector("#dashboard").addEventListener("click", () => {
  setActiveMenuItem("dashboard");
  toggleScreen("main-content");
});

// document.querySelector('#teachers').addEventListener('click', () => {
//     setActiveMenuItem('teachers');
//     toggleScreen('teachers-screen');
//     loadTeachers();
// });

document.querySelector("#students").addEventListener("click", () => {
  setActiveMenuItem("students");
  toggleScreen("student-screen");
  loadStudents();
});
document.querySelectorAll(".menu-item a").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    document.querySelector(".form-container").style.display = "none";
    document.querySelector("#studentFormContainer").style.display = "none";

    const sectionId = menuItem.parentElement.id;
    setActiveMenuItem(sectionId);
    toggleScreen(`${sectionId}-screen`);
    if (sectionId === "teachers") loadTeachers();
    if (sectionId === "students") loadStudents();
   
  });
});

document.querySelector(".add").addEventListener("click", () => {
  document.querySelector(".form-container").style.display = "block";
  document.querySelector(".teacher-table").style.display = "none";
  document.querySelector(".no-teachers").style.display = "none";
  document.querySelector(".student-table").style.display = "none";
  document.querySelector("#studentFormContainer").style.display = "none";
});

document.querySelector("#addStudentBtn").addEventListener("click", () => {
  document.querySelector(".form-container").style.display = "none";
  document.querySelector("#studentFormContainer").style.display = "block";
  // document.querySelector('.teacher-table').style.display = 'none';
  document.querySelector(".student-table").style.display = "none";
  document.querySelector(".no-students").style.display = "none";
});

document.querySelector(".teacher-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addTeacher();
  document.querySelector(".teacher-table").style.display = "none";
});

document.querySelector(".student-form").addEventListener("submit", (event) => {
  event.preventDefault();
 
  addStudent();
});
document.getElementById("main-add").addEventListener("click", () => {
  setActiveMenuItem("students");
  toggleScreen("student-screen");
  loadStudents();
  document.querySelector("#studentFormContainer").style.display = "block";
  document.querySelector("#studentTable").style.display = "none";
});

document
  .getElementById("searchInput")
  // .addEventListener("input", searchTeachers);

document.querySelectorAll(".logout").forEach(btn=>btn.addEventListener("click", function () {
  // console.log('logged out');
  window.location.href = "login.html";
  // window.location.href='student.html'
}));
document.querySelector(".bax").addEventListener("click", function () {
  // console.log('logged out');
  window.location.href = "register.html";
  // window.location.href='student.html'
});

function toggleScreen(screenId) {
  document.querySelector("#main-content").style.display = "none";
  document.querySelector("#student-screen").style.display = "none";
  document.querySelector("#teachers-screen").style.display = "none";
  document.querySelector(`#${screenId}`).style.display = "block";
}

// document.querySelector("#designation").addEventListener("change", function () {
//   const Techer_img = document.querySelector(".Techer_img");
//   const reader = new FileReader();
//   reader.readAsDataURL(this.files[0]);
//   reader.addEventListener("load", () => {
//     let img_url = reader.result;
//     Techer_img.src = img_url;
//     localStorage.setItem("img", JSON.stringify(img_url));
//   });
// });
document.querySelectorAll("#designation").forEach((input) => {
  input.addEventListener("change", function () {
    const Techer_img = document.querySelectorAll(".Techer_img");
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load", () => {
      let img_url = reader.result;
      Techer_img.forEach((img) => {
        img.src = img_url;
      });
      localStorage.setItem("img", JSON.stringify(img_url));
    });
  });
});
function addTeacher() {
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const className = document.getElementById("class").value;
  const gender = document.getElementById("gender").value;
  const subject = document.getElementById("subject").value;
  const password = document.getElementById("password").value;
  const phone = document.querySelector("#phone").value;
  const add_student = document.querySelector("#add-student").value;
  const img = JSON.parse(localStorage.getItem("img"));

  if (
    !fullname ||
    !email ||
    !className ||
    !gender ||
    !subject ||
    !phone ||
    !img ||
    !add_student
  ) {
    alert("Please fill out all fields.");
    return;
  }

  const teacher = {
    fullname,
    email,
    className,
    gender,
    subject,
    password,
    phone,
    add_student,
    img,
  };

  if (saveToLocalStorage(teacher, "teachers")) {
    alert("Teacher added successfully!");
    document.querySelector(".teacher-form").reset();
    document.querySelector(".form-container").style.display = "none";
    document.querySelector(".teacher-table").style.display = "block";
    loadTeachers();

  } else {
    alert(`A teacher with this email ${teacher.email} already exists.`);
  }
  localStorage.removeItem("teacher_img");
}

function addStudent() {
  let table=document.querySelector('#studentTable')
  console.log(table)
  // document.querySelector('.trr2').style.display='none'
  const name = document.getElementById("studentName").value.trim();
  const studentClass = document.getElementById("studentClass").value;
  const gender = document.getElementById("studentGender").value;
  const email = document.getElementById("studentEmail").value.trim();
  const password = document.getElementById("studentPassword").value;
  const img = JSON.parse(localStorage.getItem("img"));

  if (!name || !studentClass || !gender || !email || !img) {
    alert("Please fill out all fields.");
    return;
  }

  const student = { name, studentClass, gender, email, password, img };
  if (saveToLocalStorage(student, "students")) {
    alert("Student added successfully!");
    document.querySelector(".student-form").reset();
    // document.querySelector("#studentFormContainer").style.display = "none";
    document.querySelector(".student-table").style.display = "block";
    document.querySelector("#studentFormContainer").style.display = "none";
    loadStudents();
  } else {
    alert("A student with this email already exists.");
  }
}

function saveToLocalStorage(item, type) {
  let items = JSON.parse(localStorage.getItem(type)) || [];
  const exists = items.find(
    (existingItem) => existingItem.email === item.email
  );
  if (exists) {
    return false;
  }

  items.push(item);
  localStorage.setItem(type, JSON.stringify(items));
  return true;
}

function loadTeachers() {
  document.querySelector(".teacher-table").style.display = "block";
  const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  const tableBody = document.getElementById("teacherList");
  tableBody.innerHTML = "";

  if (teachers.length === 0) {
    document.querySelector(".no-teachers").style.display = "block";
    document.querySelector(".teacher-table").style.display = "none";
    return;
  } else {
    document.querySelector(".no-teachers").style.display = "none";
    document.querySelector(".teacher-table").style.display = "block";
  }

  teachers.forEach((teacher,index)=> {
    const newRow = document.createElement("div");
    newRow.classList.add("div");
    newRow.innerHTML = `
            <div class='space' style="display: flex;align-items: center;gap: 5px;"><img src="${teacher.img}" class="imgg" style="width: 60px; height: 60px; border-radius: 50%;">${teacher.fullname}</div>
            <div class='responsive'>${teacher.subject}</div>
            <div>${teacher.className}</div>                                                                                                                                                                                                                                                                                                                                                                                                                   
            <div class='responsive'>${teacher.email}</div>
            <div class='responsive'>${teacher.gender}</div>
            <div style='display: flex;align-items: center;gap: 10px;'><button class="delete-btn" data-index="${index}">Delete</button><button class="edit" data-index="${index}">Edit</button></div>
        `;
    // let img=document.querySelector('.imgg')
    // img.src=teachers.img
    tableBody.appendChild(newRow);
    attachingFunction(newRow, index);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", deleteTeacher);
  });
}
let attachingFunction = (div, index) => {
  div.querySelector(".edit").addEventListener("click", () => {
    model_Function(index, "teacher");
  });
};

let model_Function = (index, type) => {
  let model = document.querySelector(".old_edit_model");
  let model_name = document.querySelector("#model_name");
  let model_email = document.querySelector("#model_email");
  let model_password = document.querySelector("#model_password");
  let mode_grade = document.querySelector("#mode_grade");
  let model_gender = document.querySelector("#model_gender");
  let model_Access = document.querySelector("#model_Access");
  let Access = document.querySelector("#Access");
  let model_img = document.querySelector("#img");
  let student_progress = document.querySelector("#student_progress");
  let student_progress_container = document.querySelector("#student_progress_container");
  model.style.display = "flex";
  let model_promt = document.querySelector(".edit_model");
  if (type == "teacher") {
    model_Access.style.display='block'
    student_progress_container.style.display='none'
           let teachers = JSON.parse(localStorage.getItem("teachers"));
           let teacherData = teachers[index];
           model_name.value = teacherData.fullname;
           model_email.value = teacherData.email;
           model_password.value = teacherData.password;
           model_img.src = teacherData.img;
           mode_grade.value = teachers[index].className;
           model_gender.value = teachers[index].gender;
        
          if(teachers[index].add_student=='no'){
            // console.log(model_Access.value)
            model_Access.value='no'
            model_Access.checked=false
            Access.innerHTML='does not have student adding'
          }else if(teachers[index].add_student=='yes'){
             model_Access.value='yes'
             model_Access.checked=true
             Access.innerHTML='has access to add student'
          }
           
             
              document.querySelector('.save').addEventListener('click',()=>{
                //  console.log(teachers[index])
                let img=JSON.parse(localStorage.getItem('img'))
                teachers[index].fullname=model_name.value
                teachers[index].password=model_password.value
                teachers[index].email=model_email.value
                teachers[index].gender=model_gender.value
                teachers[index].className=mode_grade.value
                teachers[index].img=img
                if(model_Access.checked==true){
                  teachers[index].add_student='yes'
                }else{
                  teachers[index].add_student='no'
                }
                localStorage.setItem('teachers',JSON.stringify(teachers))
                loadTeachers();
                model.style.display = "none";

              })
  }else if(type == "student"){
    model_Access.style.display='none'
    student_progress_container.style.display='block'
     let students = JSON.parse(localStorage.getItem("students"));
           let studentsData = students[index];
           model_name.value = studentsData.name;
           model_email.value = studentsData.email;
           model_password.value = studentsData.password;
           model_img.src = studentsData.img;
           mode_grade.value = students[index].studentClass;
           model_gender.value=studentsData.gender
           
             
          document.querySelector('.save').addEventListener('click',(e)=>{
                //  console.log(students)
                e.preventDefault()
                let img=JSON.parse(localStorage.getItem('img'))
                students[index].name=model_name.value
                students[index].password=model_password.value
                students[index].email=model_email.value
                students[index].gender=model_gender.value
                students[index].studentClass=mode_grade.value
                students[index].img=img
                
                localStorage.setItem('students',JSON.stringify(students))
                loadStudents()
                model.style.display = "none";

              })
             
  }

  model_promt.querySelector(".fa-xx").addEventListener("click", () => {
    model.style.display = "none";
    localStorage.removeItem('img')
  });
};
function loadStudents() {
  document.querySelector(".student-table").style.display = "block";
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const tableBody = document.querySelector(".studentList");
  tableBody.innerHTML = "";

  if (students.length === 0) {
    document.querySelector(".no-students").style.display = "block";
    document.querySelector(".student-table").style.display = "none";
    return;
  } else {
    document.querySelector(".no-students").style.display = "none";
    document.querySelector(".studentList").style.display = "block";
  }

  students.forEach((student, index) => {
    const newRow = document.createElement("div");
    newRow.classList.add("div2");
    newRow.innerHTML = `
            <div class='space'style="display: flex;align-items: center;gap: 5px;"><img src="${student.img}" class="imgg" style="width: 60px; height: 60px; border-radius: 50%;">${student.name}</div>
            <div class='responsive'>${student.email}</div>
            <div>${student.studentClass}</div>
            <div class='responsive'>${student.gender}</div>
            <div style='display: flex;align-items: center;gap: 10px;'><button class="delete-btn" data-index="${index}">Delete</button><button class="edit" data-index="${index}">Edit</button></div>
        `;
    tableBody.appendChild(newRow);
    attachingFunction2(newRow, index);

  });


  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", deleteStudent);
  });
}

let attachingFunction2 = (div, index) => {
  div.querySelector(".edit").addEventListener("click", () => {
    model_Function(index, "student");
  });
};
function deleteTeacher(event) {
  const index = event.target.getAttribute("data-index");
  let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  teachers.splice(index, 1);
  localStorage.setItem("teachers", JSON.stringify(teachers));
  loadTeachers();
}

function deleteStudent(event) {
  const index = event.target.getAttribute("data-index");
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  loadStudents();
}

function searchTeachers() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const tableBody = document.getElementById("teacherList");
  const rows = tableBody.getElementsByTagName("tr");
  let hasTeachers = false;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const fullname = row.cells[0].textContent.toLowerCase();
    const subject = row.cells[1].textContent.toLowerCase();

    if (fullname.includes(input) || subject.includes(input)) {
      row.style.display = "";
      hasTeachers = true;
    } else {
      row.style.display = "none";
    }
  }

  document.querySelector(".no-teachers").style.display = hasTeachers
    ? "none"
    : "block";
}
document.getElementById('studentSearchInput').addEventListener('input', searchStudents);

function searchStudents() {
  console.log('searchStudents triggered'); // Debug log
  const input = document.getElementById('studentSearchInput').value.toLowerCase();
  const tableBody = document.getElementById('studentList');
  const rows = tableBody.getElementsByClassName('div2'); // Get divs, not rows
  let hasStudents = false;

  for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const name = row.querySelector('.space').textContent.toLowerCase(); // Get name from space div
      const studentClass = row.querySelector('.studentClass').textContent.toLowerCase(); // Get class from studentClass div

      if (name.includes(input) || studentClass.includes(input)) {
          row.style.display = ''; // Show row if match
          hasStudents = true;
      } else {
          row.style.display = 'none'; // Hide row if no match
      }
  }

  // Show or hide the no-students message based on the result
  document.querySelector('.no-students').style.display = hasStudents ? 'none' : 'block';
}




window.onload = function () {
  const activeSection = localStorage.getItem("activeSection") || "dashboard";
  // setActiveMenuItem(activeSection);
  // toggleScreen(`${activeSection}-screen`);

  if (activeSection === "teachers") {
    loadTeachers();
  } else if (activeSection === "students") {
    loadStudents();
  } else {
  }
};

document.querySelector('.report_section').addEventListener('click',()=>{
  document.querySelector('.reports').style.display='block'
  loadingReports()

})



let loadingReports=()=>{
  let repots=JSON.parse(localStorage.getItem('reports'))


  let repost_container=document.querySelector('.repost_container')
  repost_container.innerHTML=''
  repots.forEach((repot,index)=>{
    let colom=document.createElement('div')
    colom.classList.add('colom')
    colom.innerHTML=`
                 <img      
                   src="${repot.img}"
                    alt="img"
                    height="50px"
                    width="50px"
                    class='repot_img'
                  />
                  <p>
                   ${repot.text}
                  </p>
    `

    if(repot.view.admin===false){

      colom.style.background='#8fdaf841'
    }else if(repot.view.teacher===true){
      colom.style.background='transparent'

    }
    repost_container.appendChild(colom)
    colom.addEventListener('click',()=> reports_model(repot,index))
  })
 
}

let reports_model=(col,index)=>{
  console.log(col)
   let model = document.querySelector(".old_reports_model");
   let model_repots = document.querySelector(".model_repots");
   let img_repot = document.querySelector("#img_repot");
   let report_text = document.querySelector(".report_text");
   let type_of_repot = document.querySelector(".type_of_repot");
   let name_r = document.querySelector(".name_r");
   let classs = document.querySelector(".class");
   model.style.display='block'

       img_repot.src=col.img;
       report_text.innerHTML=col.text;
       type_of_repot.innerHTML=col.type
       classs.innerHTML=col.class
       name_r.innerHTML=col.name




       let repots=JSON.parse(localStorage.getItem('reports'))
       let report=repots.find(report=>report.current_id == col.current_id)
       console.log(report)
       report.view.admin=true
       localStorage.setItem('reports',JSON.stringify(repots))


   model_repots.querySelector(".fa-xx").addEventListener("click", () => {
     model.style.display = "none";

     loadingReports()
   });

 }