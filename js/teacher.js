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

})
Sittings_action.addEventListener("click",()=>{
 
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    Add_new_student.style.display='none'
    sittings.style.display='block'
    repots.style.display='none'

    Student_repots.classList.remove('left_side_active')
    add_N_StudentC.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')
   Student_repotsM.classList.remove('left_side_active')


})
edit_T.addEventListener("click",()=>{
    
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    Add_new_student.style.display='none'
    sittings.style.display='block'
    repots.style.display='none'
   

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

})
Sittings_actionM.addEventListener("click",()=>{
    
    teacherData.style.display='none'
    My_class.style.display='none'
    bottom_header.style.display='none'
    Add_new_student.style.display='none'
    repots.style.display='none'
    sittings.style.display='block'

    add_N_StudentC.classList.remove('left_side_active')
    Student_repotsM.classList.remove('left_side_active')
    my_DataC.classList.remove('left_side_active')
    my_ClassC.classList.remove('left_side_active')

    add_N_StudentCM.classList.remove('left_side_active')
    my_DataM.classList.remove('left_side_active')
    my_ClassCM.classList.remove('left_side_active')


})






// repost functionalities
 let top_repots=document.querySelector('.top_repots')
 top_repots.addEventListener('click',(e)=>{
    let Student_Repots_section=document.querySelector('.Student_Repots_section')
    let Send_Repots_section=document.querySelector('.Send_Repots_section')
    if(e.target.classList=='Student_Repots_btn'){
        Send_Repots_section.style.display='none'
        Student_Repots_section.style.display='block'

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
                        
                        <span class="table_Email">${stud.email}</span>
                        <span class="table_Class">${stud.studentClass}</span>
                        <span class="TABLE_Gender">${stud.gender}</span>
                        <span style="display: flex;align-items: center;gap: 10px;"><button class="edit">Edit</button><button class="delete">Delete</button></span>
            `
            
            student_data_Parent_div.appendChild(student_data)
           
            attachAddevent(student_data,index)
        });
       }
};

function attachAddevent(div,index){
  let deleteBtn= div.querySelector('.delete')
  deleteBtn.addEventListener('click',()=>{
    const students=JSON.parse(localStorage.getItem('students'))
    students.splice(index,1)
    localStorage.setItem('students',JSON.stringify(students))
    div.remove()
  })
}

let arrey=[
    {
        name:'cali',
        number:0
    },   {
        name:'naciimo',
        number:20
    },   {
        name:'farax',
        number:10
    },   {
        name:'cabdi',
        number:30
    }
]
// let want =arrey.filter(curent=> curent.number>=10)
// console.log(want)
// want.forEach(want=>console.log(want))

// document.querySelectorAll('.student_data').forEach(curentstudent=>{
//      curentstudent.addEventListener('click',()=>{
//         alert('hello')
//      })
// })
