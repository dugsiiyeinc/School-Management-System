document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from input fields
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
        let users = JSON.parse(localStorage.getItem('admins')) || [];
        
        const newUser = {
            adminName: adminName,
            schoolName: schoolName,
            password: password,
        };

        // Check if the user already exists
        const existingUser = users.find(user => user.adminName === adminName && user.schoolName === schoolName);
        if (existingUser) {
            alert('This account already exists.');
            return;
        }

        // Add the new user to the array
        users.push(newUser);
        
        // Save the updated users array back to local storage
        localStorage.setItem('admins', JSON.stringify(users));
        
        // Clear input fields
        document.getElementById('admin-name').value = '';
        document.getElementById('school-name').value = '';
        document.getElementById('password').value = '';

        alert('Account created successfully!');
        
    }

    saveToLocalStorage();
      window.location.href='login.html'
});
