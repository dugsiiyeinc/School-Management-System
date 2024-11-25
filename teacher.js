document.addEventListener('DOMContentLoaded', () => {
    const currentTeacher = document.querySelector('.curent_teacherR');
    const teach_img = document.querySelectorAll('#teach_img');
    const currentTeacherUser = JSON.parse(localStorage.getItem('current_user'));
    const teachers = JSON.parse(localStorage.getItem('teachers'));
    let teacher=teachers.find(teach=>teach.fullname == currentTeacherUser.fullname)
   
    if (currentTeacherUser && currentTeacherUser.type === 'teacher') {
        currentTeacher.innerHTML = ` ${currentTeacherUser.fullname}`;
        // teach_img.src=teacher.img
        teach_img.forEach(imgg=> imgg.src=teacher.img)
    } else {
        currentTeacher.innerHTML = 'No teacher information available.';
    }
    loadingTeacherData(currentTeacherUser.fullname)
    lookingAddStudentAccees(currentTeacherUser.fullname)
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
let teacherData= document.querySelector(".teacherData")
let My_class= document.querySelector(".my_class")
let Add_new_student= document.querySelector(".Add_new_student")
let bottom_header= document.querySelector(".bottom_header")
let sittings= document.querySelector(".sittings")
let repots= document.querySelector(".repots")

// actions of sections
let my_DataC= document.querySelector(".my-Data")
let my_ClassC= document.querySelector(".my-Class")
let add_N_StudentC= document.querySelector(".add-N-Student")
let Sittings_action= document.querySelector(".Sittings_action")
let Student_repots= document.querySelector(".Student_repots")
let edit_T= document.querySelector(".edit-T")
//  mobile
let my_DataM=document.querySelector('.my-DataM')
let my_ClassCM= document.querySelector(".my-ClassM")
let Sittings_actionM= document.querySelector(".Sittings_actionM")
let add_N_StudentCM= document.querySelector(".add-N-StudentM")
let Student_repotsM= document.querySelector(".Student_repotsM")


// functions

my_DataC.addEventListener("click",()=>{
    My_class.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
     teacherData.style.display='block'
    repots.style.display='none'


     my_ClassC.classList.remove('left_side_active')
     add_N_StudentC.classList.remove('left_side_active')
    Student_repots.classList.remove('left_side_active')
     my_DataC.classList.add('left_side_active')

     
     my_ClassCM.classList.remove('left_side_active')
     add_N_StudentCM.classList.remove('left_side_active')
     my_DataM.classList.add('left_side_active')
    Student_repotsM.classList.remove('left_side_active')
})
my_ClassC.addEventListener("click",()=>{
    teacherData.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='block'
    sittings.style.display='none'
    My_class.style.display='block'
    repots.style.display='none'


    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    Student_repots.classList.remove('left_side_active')
    my_ClassC.classList.add('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.add('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

    loadinhClass()
})
add_N_StudentC.addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    Add_new_student.style.display='block'
    repots.style.display='none'


    add_N_StudentC.classList.add('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')
    Student_repots.classList.remove('left_side_active')

    add_N_StudentCM.classList.add('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

})
document.querySelector('.add_student_top').addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    Add_new_student.style.display='block'
    repots.style.display='none'


    add_N_StudentC.classList.add('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')
    Student_repots.classList.remove('left_side_active')

    add_N_StudentCM.classList.add('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

})
Student_repots.addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    Add_new_student.style.display='none'
    repots.style.display='block'

    Student_repots.classList.add('left_side_active')
    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')
    Student_repotsM.classList.add('left_side_active')
    loadingReports()

})
// Sittings_action.addEventListener("click",()=>{
 
//     teacherData.style.display='none'
//     My_class.style.display='none'
//     bottom_header.style.display='none'
//     Add_new_student.style.display='none'
//     sittings.style.display='block'
//     repots.style.display='none'

//     Student_repots.classList.remove('left_side_active')
//     add_N_StudentC.classList.remove('left_side_active')
//     my_DataC.classList.remove('left_side_active')
//     my_ClassC.classList.remove('left_side_active')

//     add_N_StudentCM.classList.remove('left_side_active')
//     my_DataM.classList.remove('left_side_active')
//     my_ClassCM.classList.remove('left_side_active')
//    Student_repotsM.classList.remove('left_side_active')


// })
edit_T.addEventListener("click",()=>{
    
   alert('fuck you')


})
//  mobile funcions
my_DataM.addEventListener("click",()=>{
    My_class.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
     teacherData.style.display='block'
    repots.style.display='none'

     Student_repots.classList.remove('left_side_active')
     my_ClassCM.classList.remove('left_side_active')
     add_N_StudentCM.classList.remove('left_side_active')
     my_DataM.classList.add('left_side_active')

     add_N_StudentC.classList.remove('left_side_active')
     my_DataC.classList.add('left_side_active')
     my_ClassC.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

 
})
my_ClassCM.addEventListener("click",()=>{
    teacherData.style.display='none'
    Add_new_student.style.display='none'
    bottom_header.style.display='block'
    sittings.style.display='none'
    My_class.style.display='block'
    repots.style.display='none'


    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.add('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.add('left_side_active')
   Student_repots.classList.remove('left_side_active')

})
add_N_StudentCM.addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    repots.style.display='none'
    Add_new_student.style.display='block'

    add_N_StudentCM.classList.add('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')

    add_N_StudentC.classList.add('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')
   Student_repots.classList.remove('left_side_active')

})
Student_repotsM.addEventListener("click",()=>{
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    sittings.style.display='none'
    Add_new_student.style.display='none'
    repots.style.display='block'
  
    

    Student_repotsM.classList.add('left_side_active')
    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')

    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')
   Student_repots.classList.add('left_side_active')
   loadingReports()

})
// Sittings_actionM.addEventListener("click",()=>{
    
//     teacherData.style.display='none'
//     My_class.style.display='none'
//     bottom_header.style.display='none'
//     Add_new_student.style.display='none'
//     repots.style.display='none'
//     sittings.style.display='block'

//     add_N_StudentC.classList.remove('left_side_active')
//     Student_repotsM.classList.remove('left_side_active')
//     my_DataC.classList.remove('left_side_active')
//     my_ClassC.classList.remove('left_side_active')

//     add_N_StudentCM.classList.remove('left_side_active')
//     my_DataM.classList.remove('left_side_active')
//     my_ClassCM.classList.remove('left_side_active')


// })






// repost functionalities
 let top_repots=document.querySelector('.top_repots')
 top_repots.addEventListener('click',(e)=>{
    let Student_Repots_section=document.querySelector('.Student_Repots_section')
    let Send_Repots_section=document.querySelector('.Send_Repots_section')
    if(e.target.classList=='Student_Repots_btn'){
        Send_Repots_section.style.display='none'
        Student_Repots_section.style.display='block'
        loadingReports()

    }else{
        Send_Repots_section.style.display='block'
        Student_Repots_section.style.display='none'
      
    }
    
 })

// lagout
let lagout_btn =document.querySelector('.lagout_btn')
lagout_btn.addEventListener('click', ()=>{
    localStorage.removeItem('current_user')
     window.location.href='login.html'
})
// loadingTeacherData
let loadingTeacherData=(teacherName)=>{
    let teacher_img=document.querySelector('.teacher-img')
    let teachername=document.querySelector('.teacherName')
    let teacherPassword=document.querySelector('.teacherPassword')
    let teacherClass=document.querySelector('.teacherClass')
    let teacherPhone=document.querySelector('.teacherPhone')
    let teachers=JSON.parse(localStorage.getItem('teachers'))
    let teacher=teachers.find(teach=>teach.fullname ==teacherName)
    teacher_img.src=teacher.img
    teachername.innerHTML=` ${teacher.fullname}`
    teacherPassword.innerHTML=`Password:   <span class='tech_p'> <p>${teacher.password} </p></span>  <i class="fa-solid fa-eye">`
    teacherClass.innerHTML=` ${teacher.className}`
    teacherPhone.innerHTML=` ${teacher.phone}`
    teacherPassword.querySelector('.fa-solid').addEventListener('click',()=>{
       let tech_pd=teacherPassword.querySelector('.tech_p')
       tech_pd.querySelector('p').classList.toggle('pas')
      
    })
}
// loadingAccessForeAddingStudent
let lookingAddStudentAccees=(teachername)=>{
    let add_N_StudentC= document.querySelector(".add-N-Student")
    let add_N_StudentCM= document.querySelector(".add-N-StudentM")
    let  add_student_top=document.querySelector('.add_student_top')

    let teachers=JSON.parse(localStorage.getItem('teachers'))
    let teacher=teachers.find(teach=>teach.fullname ==teachername)
    if(teacher.add_student=='yes'){
        add_N_StudentC.style.display='flex'
        add_N_StudentCM.style.display='flex'
    }else{
        add_N_StudentC.style.display='none'
        add_N_StudentCM.style.display='none'
        add_student_top.style.background='#ccc'
        add_student_top.style.cursor='not-allowed'
        // delette.style.display='none'
       
    }
  
}

let loadinhClass=()=>{
    const currentTeacherUser = JSON.parse(localStorage.getItem('current_user'));
    const teachers=JSON.parse(localStorage.getItem('teachers'))
    const students=JSON.parse(localStorage.getItem('students'))
    const teacher=teachers.find(teach=>teach.fullname ==currentTeacherUser.fullname)
    const TeacherGarade=teacher.className
    const want=students.filter(stud=>stud.studentClass == TeacherGarade)
    let student_data_Parent_div=document.querySelector('.student_data_Parent')
    student_data_Parent_div.innerHTML=''
       if(want){
        want.forEach((stud,index) => {
            // console.log(stud)
            let student_data=document.createElement('div')
            student_data.classList.add('student_data')
            student_data.innerHTML=`
                     <span class="table_name"><img src="${stud.img}" alt="" class="student_img"> <span class="name">${stud.name}</span></span>
                        
                        <span class="table_Email responsive">${stud.email}</span>
                        <span class="table_Class responsive">${stud.studentClass}</span>
                        <span class="TABLE_Gender">${stud.gender}</span>
                        <span style="display: flex;align-items: center;gap: 10px;"><button class="edit">Edit</button><button class="delete">Delete</button></span>
            `
             student_data_Parent_div.appendChild(student_data)

            const currentTeacherUser = JSON.parse(localStorage.getItem('current_user'));
            let teachers=JSON.parse(localStorage.getItem('teachers'))
            let teacher=teachers.find(teach=>teach.fullname ==currentTeacherUser.fullname)
            let delette=student_data.querySelector('.delete')
            let edit=student_data.querySelector('.edit')
           if(teacher.add_student=='no'){
            delette.style.display='none'
            edit.innerHTML='View'
           }else{
            delette.style.display='block'
             edit.innerHTML='edit'
           }
            attachAddevent(student_data,stud.name)
        });
       }
};
let loadingReports=()=>{
  let repots=JSON.parse(localStorage.getItem('reports'))
  const currentTeacherUser = JSON.parse(localStorage.getItem('current_user'));
  const teachers = JSON.parse(localStorage.getItem('teachers'));
  let teacher=teachers.find(teach=>teach.fullname == currentTeacherUser.fullname)

  let student_reports=repots.filter(reports=>reports.type =='student')
  // console.log(student_reports)

  let wanted_reports=student_reports.filter(report=>report.class ==teacher.className)
  // console.log(wanted_reports)

  let repost_container=document.querySelector('.repost_container')
  repost_container.innerHTML=''
  wanted_reports.forEach((repot,index)=>{
    let colom=document.createElement('div')
    colom.classList.add('colom')
    colom.innerHTML=`
                 <img      
                   src="${repot.img}"
                    alt="img"
                    height="50px"
                    width="50px"
                  />
                  <p>
                   ${repot.text}
                  </p>
    `

    if(repot.view.teacher==false){

      colom.style.background='#8fdaf841'
    }else if(repot.view.teacher==true){
      colom.style.background='transparent'

    }
    repost_container.appendChild(colom)
    colom.addEventListener('click',()=> reports_model(repot,index))
  })
 
}

// serching
document.querySelector('.studentSearching').addEventListener('input', searchStudents);


function searchStudents() {
  const input = document.querySelector('.studentSearching').value.trim().toLowerCase();  // Get search input
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const tableBody = document.querySelector(".student_data_Parent");
  tableBody.innerHTML = "";  // Clear the student table

  if (input === "") {
    loadinhClass();  // If the search field is empty, show all students
    return;
  }

  // Filter students based on input
  const filteredStudents = students.filter(student => {
    const name = student.name.toLowerCase();
    const studentClass = student.studentClass.toLowerCase();
    return name.includes(input) || studentClass.includes(input);  // Match name or class
  });

  if (filteredStudents.length === 0) {
    // document.querySelector(".no-students").style.display = "block";  // Show "No students found" message
  } else {
    // document.querySelector(".no-students").style.display = "none";  // Hide "No students found"
  }

  // Render filtered students
  filteredStudents.forEach((student, index) => {
    const newRow = document.createElement("div");
    newRow.classList.add("student_data");
    newRow.innerHTML = `
      <div class="space" style="display: flex; align-items: center; gap: 5px;">
        <img src="${student.img}" class="imgg" style="width: 60px; height: 60px; border-radius: 50%;"> ${student.name}
      </div>
      <div class="responsive">${student.email}</div>
      <div class="studentClass">${student.studentClass}</div>
      <div class="responsive">${student.gender}</div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="edit" data-index="${index}">Edit</button>
        <button class="delete" data-index="${index}">Delete</button>
      </div>
    `;
   
    // let student_data=document.createElement('div')
    // student_data.classList.add('student_data')
    // student_data.innerHTML=`
    //          <span class="table_name"><img src="${stud.img}" alt="" class="student_img"> <span class="name">${stud.name}</span></span>
                
    //             <span class="table_Email responsive">${stud.email}</span>
    //             <span class="table_Class responsive">${stud.studentClass}</span>
    //             <span class="TABLE_Gender">${stud.gender}</span>
    //             <span style="display: flex;align-items: center;gap: 10px;"><button class="edit">Edit</button><button class="delete">Delete</button></span>
    // `

    tableBody.appendChild(newRow);
    newRow.addEventListener('click', attachAddevent(newRow,index))

  });
}


function attachAddevent(div,name){
  let deleteBtn= div.querySelector('.delete')
  let edit= div.querySelector('.edit')
  deleteBtn.addEventListener('click',()=>{
    const students=JSON.parse(localStorage.getItem('students'))
    let newStudents=students.filter(stud=> stud.name !== name )
    // students.splice(index,1)
    localStorage.setItem('students',JSON.stringify(newStudents))
    div.remove()
  });
  edit.addEventListener('click',()=>{

    if(edit.innerHTML=='edit'){
        // console.log(index)
        model_Function(name, 'edit')
    }else{
        model_Function(name, 'view')

    }
  })
}

let model_Function = (name,type) => {
  console.log(name)
    let model = document.querySelector(".old_edit_model");
    let model_name = document.querySelector("#model_name");
    let model_email = document.querySelector("#model_email");
    let model_password = document.querySelector("#model_password");
    let mode_grade = document.querySelector("#mode_grade");
    let model_gender = document.querySelector("#model_gender");
  
    let model_img = document.querySelector("#img");
    let student_progress = document.querySelector("#student_progress");
    let student_progress_container = document.querySelector("#student_progress_container");
    model.style.display = "flex";
    let model_promt = document.querySelector(".edit_model");
   
       let currentTeacherUser = JSON.parse(localStorage.getItem("current_user"));
       let teachers = JSON.parse(localStorage.getItem("teachers"));
       let students = JSON.parse(localStorage.getItem("students"));
       let teacher=teachers.find(teach=>teach.fullname == currentTeacherUser.fullname)
    //    console.log(currentTeacherUser)
    //    return
       let filtredSudent=students.find(stud=>stud.name === name)
       if(type=='edit'){
        // let filtredSudent = filtredSudents[index];
        model_name.value = filtredSudent.name;
        model_email.value = filtredSudent.email;
        model_password.value = filtredSudent.password;
        model_img.src = filtredSudent.img;
        mode_grade.value = filtredSudent.studentClass;
        model_gender.value=filtredSudent.gender
         return
          
       }else{
        // let filtredSudent = filtredSudents[index];
        model_name.value = filtredSudent.name;
        model_email.value = filtredSudent.email;
        model_password.value = filtredSudent.password;
        model_img.src = filtredSudent.img;
        mode_grade.value = filtredSudent.studentClass;
        model_gender.value=filtredSudent.gender
        document.querySelector('.save').style.display='none'
       }
          
                
       document.querySelector('.save').addEventListener('click',(e)=>{
        e.preventDefault()
        let img=JSON.parse(localStorage.getItem('img'))
        filtredSudent.name=model_name.value
        filtredSudent.password=model_password.value
        filtredSudent.email=model_email.value
        filtredSudent.gender=model_gender.value
        filtredSudent.studentClass=mode_grade.value
        if(!img){
          filtredSudent.img= filtredSudent.img
        }else{
          filtredSudent.img=img
        }
     
        localStorage.removeItem('img')
        localStorage.setItem('students',JSON.stringify(students))
        loadinhClass()
        // let model=document.querySelector('.old_reports_model')
        model.style.display = "none";
      


      })

  
    model_promt.querySelector(".fa-xx").addEventListener("click", () => {
      model.style.display = "none";
      localStorage.removeItem('img')
    });
  };

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
  report.view.teacher=true
  localStorage.setItem('reports',JSON.stringify(repots))

    model_repots.querySelector(".fa-xx").addEventListener("click", () => {
      model.style.display = "none";
      loadingReports()
    });

  }
// img functions
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



  // send report

  document.querySelector('.send_repot').addEventListener('submit',(e)=>{
    e.preventDefault()
    const teachers = JSON.parse(localStorage.getItem("teachers"));
    const current_user = JSON.parse(localStorage.getItem("current_user"))
     let teacher = teachers.find((teacher) => teacher.fullname == current_user.fullname);
    let textArea=document.querySelector('#inpu_repot').value
      // console.log(teacher)
    const dateNow = Date.now(); 
    const randomNum = Math.floor(Math.random() * 1000);
    let current_id=dateNow-randomNum;

    //  console.log(current_id)
  
    let data_Reports={
     type:'teacher',
     img:teacher.img,
     name:teacher.fullname,
     class:teacher.className,
     text:textArea,
     view:{
        admin:false
     },
     current_id:current_id
    }
  
    let reports= JSON.parse(localStorage.getItem('reports')) || []
     reports.unshift(data_Reports)
    //  console.log(data_Reports)
    //  return
    localStorage.setItem('reports',JSON.stringify(reports))
    textArea.value==''
    alert('succesfuly sent report')
    document.querySelector('.send_repot').reset()
})

// addstudent
document.querySelector('.Add_student_form').addEventListener('submit',(e)=>{
     e.preventDefault()
    



  const name = document.querySelector(".stud_name").value;
  const studentClass = document.querySelector(".stud_select_class").value;
  const gender = document.querySelector(".stud_select_Gender").value;
  const email = document.querySelector(".stud_email").value;
  const password = document.querySelector(".stud_password").value;
  const img = JSON.parse(localStorage.getItem("img"));

  if (!name || !studentClass || !gender || !email || !img) {
    alert("Please fill out all fields.");
    return;
  }

  let student={
    email:email,
    gender:gender,
    img:img,
    name:name,
    password:password,
    studentClass:studentClass

  }

  console.log(student)


  let students=JSON.parse(localStorage.getItem('students')) || []
   let exisiting_student=students.find(stud=>stud.name == name)
   if(exisiting_student){
    alert(`student ${name} already exist`)
     return
    }
     
    students.push(student)

    localStorage.setItem('students',JSON.stringify(students))
       alert('registration successfuly')
    email.value=''
    password.value=''
    name.value=''
    img.src=''

})