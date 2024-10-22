function setActiveMenuItem(id) {
    document.querySelectorAll('.menu-item a').forEach(item => item.classList.remove('active'));
    document.querySelector(`#${id} a`).classList.add('active');
    localStorage.setItem('activeSection', id);
}

document.querySelector('#teachers').addEventListener('click', () => {
    toggleScreen('teachers-screen');
    loadTeachers();
});

document.querySelector('.btn.add').addEventListener('click', () => {
    document.querySelector('.form-container').style.display = 'block';
    document.querySelector('.teacher-table').style.display = 'none';
    document.querySelector('.no-teachers').style.display = 'none'; 
});

document.querySelector('.teacher-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addTeacher();
});

document.getElementById('searchInput').addEventListener('input', searchTeachers);

function toggleScreen(screenId) {
    document.querySelector('#main-content').style.display = 'none';
    document.querySelector(`#${screenId}`).style.display = 'block';
}

function addTeacher() {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const className = document.getElementById('class').value;
    const gender = document.getElementById('gender').value;
    const subject = document.getElementById('subject').value;

    // checks user
    if (!fullname || !email || !className || !gender || !subject) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new teacher object
    const teacher = { fullname, email, className, gender, subject };

    if (saveToLocalStorage(teacher)) {
        alert("Teacher added successfully!");
        document.querySelector('.teacher-form').reset();
        document.querySelector('.form-container').style.display = 'none';

        loadTeachers(); 

        document.querySelector('.teacher-table').style.display = 'block'; 
    } else {
        alert("A teacher with this email already exists.");
    }
}

function saveToLocalStorage(teacher) {
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

    const exists = teachers.some(existingTeacher => existingTeacher.email === teacher.email);
    if (exists) {
        return false;
    }

    teachers.push(teacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));
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

function deleteTeacher(event) {
    const index = event.target.getAttribute('data-index');
    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.splice(index, 1); 
    localStorage.setItem('teachers', JSON.stringify(teachers));
    loadTeachers(); 
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

window.onload = function() {
    const activeSection = localStorage.getItem('activeSection') || 'teachers'; 
    // toggleScreen(activeSection);
    loadTeachers();
};
