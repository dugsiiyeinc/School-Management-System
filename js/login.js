document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const adminName = document.getElementById('admin-name').value;
    const schoolName = document.getElementById('school-name').value;
    const password = document.getElementById('password').value;

    if (adminName.trim() === '' || schoolName.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    if (password.length < 3) {
        alert('Password must be at least 6 characters long');
        return;
    }

    function saveToLocalStorage() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        const newUser = {
            adminName: adminName,
            schoolName: schoolName,
            password: password,
        };

        const existingUser = users.find(user => user.adminName === adminName && user.schoolName === schoolName 
            && user.password === password); 
        

        if (existingUser) {
            alert('This account already exists.');
            return;
        }
        users.push(newUser);
        
        localStorage.setItem('users', JSON.stringify(users));
        
        document.getElementById('admin-name').value = '';
        document.getElementById('school-name').value = '';
        document.getElementById('password').value = '';

        alert('Account created successfully!');

        window.location.href = './admo';
    }

    saveToLocalStorage();
});
