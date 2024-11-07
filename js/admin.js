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
    document.querySelectorAll('.menu-item a').forEach(item => item.classList.remove('active'));
    document.querySelector(`#${id} a`).classList.add('active');
    localStorage.setItem('activeSection', id);
}

document.querySelector('#dashboard').addEventListener('click', () => {
    setActiveMenuItem('dashboard');
    toggleScreen('main-content');
});

// document.querySelector('#teachers').addEventListener('click', () => {
//     setActiveMenuItem('teachers');
//     toggleScreen('teachers-screen');
//     loadTeachers();
// });

document.querySelector('#students').addEventListener('click', () => {
    setActiveMenuItem('students');
    toggleScreen('student-screen');
    loadStudents(); 
});
document.querySelectorAll('.menu-item a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        const sectionId = menuItem.parentElement.id; 
        setActiveMenuItem(sectionId);
        toggleScreen(`${sectionId}-screen`);
        if (sectionId === 'teachers') loadTeachers();
        if (sectionId === 'students') loadStudents();
    });
});

document.querySelector('.btn.add').addEventListener('click', () => {
    document.querySelector('.form-container').style.display = 'block';
    document.querySelector('.teacher-table').style.display = 'none';
    document.querySelector('.no-teachers').style.display = 'none'; 
    document.querySelector('.student-table').style.display = 'none';
});

document.querySelector('#addStudentBtn').addEventListener('click', () => {
    document.querySelector('#studentFormContainer').style.display = 'block';
    // document.querySelector('.teacher-table').style.display = 'none';
    document.querySelector('.student-table').style.display = 'none';
    document.querySelector('.no-students').style.display = 'none';
});


document.querySelector('.teacher-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addTeacher();
});

document.querySelector('.student-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addStudent();
});
document.getElementById('main-add').addEventListener('click', () => {
    setActiveMenuItem('students');
    toggleScreen('student-screen');
    loadStudents(); 
    document.querySelector('#studentFormContainer').style.display = 'block'; 
    document.querySelector('#studentTable').style.display = 'none'; 
});




document.getElementById('searchInput').addEventListener('input', searchTeachers);

document.querySelector('.logout').addEventListener('click', function(){
    // console.log('logged out');
    window.location.href = 'register.html';
    // window.location.href='student.html'


});
document.querySelector('.bax').addEventListener('click', function(){
    // console.log('logged out');
    window.location.href = 'register.html';
    // window.location.href='student.html'


});

function toggleScreen(screenId) {
    document.querySelector('#main-content').style.display = 'none';
    document.querySelector('#student-screen').style.display = 'none';
    document.querySelector('#teachers-screen').style.display = 'none';
    document.querySelector(`#${screenId}`).style.display = 'block';
}

function addTeacher() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const className = document.getElementById('class').value;
    const gender = document.getElementById('gender').value;
    const subject = document.getElementById('subject').value;
    const password =  document.getElementById('password').value;


    if (!fullname || !email || !className || !gender || !subject) {
        alert("Please fill out all fields.");
        return;
    }

    const teacher = { fullname, email, className, gender, subject, password };

    if (saveToLocalStorage(teacher, 'teachers')) {
        alert("Teacher added successfully!");
        document.querySelector('.teacher-form').reset();
        document.querySelector('.form-container').style.display = 'none';
        loadTeachers(); 
        document.querySelector('.teacher-table').style.display = 'block'; 
    } else {
        alert("A teacher with this email already exists.");
    }
}

function addStudent() {
    const name = document.getElementById('studentName').value.trim();
    const studentClass = document.getElementById('studentClass').value;
    const gender = document.getElementById('studentGender').value;
    const email = document.getElementById('studentEmail').value.trim();
    const password = document.getElementById('studentPassword').value
    

    if (!name || !studentClass || !gender || !email) {
        alert("Please fill out all fields.");
        return;
    }

    const student = { name, studentClass, gender, email, password };
    if (saveToLocalStorage(student, 'students')) {
        alert("Student added successfully!");
        document.querySelector('.student-form').reset();
        document.querySelector('#studentFormContainer').style.display = 'none';
        loadStudents(); 
    } else {
        alert("A student with this email already exists.");
    }
}

function saveToLocalStorage(item, type) {
    let items = JSON.parse(localStorage.getItem(type)) || [];
    const exists = items.some(existingItem => existingItem.email === item.email);
    if (exists) {
        return false;
    }

    items.push(item);
    localStorage.setItem(type, JSON.stringify(items));
    return true; 
}

function loadTeachers() {
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    const tableBody = document.getElementById('teacherList');
    tableBody.innerHTML = ''; 

    if (teachers.length === 0) {
        document.querySelector('.no-teachers').style.display = 'block';
        document.querySelector('.teacher-table').style.display = 'none';
        return;
    } else {
        document.querySelector('.no-teachers').style.display = 'none';
        document.querySelector('.teacher-table').style.display = 'table';
    }

    teachers.forEach((teacher, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${teacher.fullname}</td>
            <td>${teacher.subject}</td>
            <td>${teacher.className}</td>
            <td>${teacher.email}</td>
            <td>${teacher.gender}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        `;
        tableBody.appendChild(newRow);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', deleteTeacher);
    });
}

function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';

    if (students.length === 0) {
        document.querySelector('.no-students').style.display = 'block';
        document.querySelector('.student-table').style.display = 'none';
        return;
    } else {
        document.querySelector('.no-students').style.display = 'none';
        document.querySelector('.student-table').style.display = 'table';
    }

    students.forEach((student, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.studentClass}</td>
            <td>${student.gender}</td>

            <td><button class="delete-student-btn" data-index="${index}">Delete</button></td>
        `;
        tableBody.appendChild(newRow);
    });

    document.querySelectorAll('.delete-student-btn').forEach(btn => {
        btn.addEventListener('click', deleteStudent);
    });
}

function deleteTeacher(event) {
    const index = event.target.getAttribute('data-index');
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.splice(index, 1); 
    localStorage.setItem('teachers', JSON.stringify(teachers));
    loadTeachers(); 
}

function deleteStudent(event) {
    const index = event.target.getAttribute('data-index');
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1); 
    localStorage.setItem('students', JSON.stringify(students));
    loadStudents(); 
}

function searchTeachers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const tableBody = document.getElementById('teacherList');
    const rows = tableBody.getElementsByTagName('tr');
    let hasTeachers = false;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const fullname = row.cells[0].textContent.toLowerCase();
        const subject = row.cells[1].textContent.toLowerCase();

        if (fullname.includes(input) || subject.includes(input)) {
            row.style.display = ''; 
            hasTeachers = true;
        } else {
            row.style.display = 'none'; 
        }
    }

    document.querySelector('.no-teachers').style.display = hasTeachers ? 'none' : 'block';
}

document.getElementById('studentSearchInput').addEventListener('input', searchStudents);

function searchStudents() {
    console.log('searchStudents triggered'); // Debug log
    const input = document.getElementById('studentSearchInput').value.toLowerCase();
    const tableBody = document.getElementById('studentList');
    const rows = tableBody.getElementsByTagName('tr');
    let hasStudents = false;

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const name = row.cells[0].textContent.toLowerCase();
        const studentClass = row.cells[2].textContent.toLowerCase();

        if (name.includes(input) || studentClass.includes(input)) {
            row.style.display = ''; 
            hasStudents = true;
        } else {
            row.style.display = 'none'; 
        }
    }

    document.querySelector('.no-students').style.display = hasStudents ? 'none' : 'block';
}



window.onload = function() {
    const activeSection = localStorage.getItem('activeSection') || 'dashboard'; 
    // setActiveMenuItem(activeSection);
    // toggleScreen(`${activeSection}-screen`);
    
    if (activeSection === 'teachers') {
        loadTeachers();
    } else if (activeSection === 'students') {
        loadStudents();
    } else {
    }
};

