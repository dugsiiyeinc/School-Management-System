document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from input fields
    const adminName = document.getElementById('admin-name').value.trim();
    const schoolName = document.getElementById('school-name').value.trim();
    const password = document.getElementById('password').value.trim();
    let admin_img=JSON.parse(localStorage.getItem('img'))

    if (adminName.trim() === '' || schoolName.trim() === '' || password.trim() === '' || !admin_img) {
        alert('Please fill in all fields');
        return;
    }
    if (password.length < 3) {
        alert('Password must be at least 6 characters long');
        return;
    }

    function saveToLocalStorage() {
        let user = JSON.parse(localStorage.getItem('admin')) ;
        
        const newUser = {
            adminName: adminName,
            schoolName: schoolName,
            password: password,
            admin_img:admin_img
        };
        if(user){
            alert('adimin account already exists. please sing in ');
                return;
        }
          window.location.href='login.html'
        // Check if the user already exists
        // let existingUser = user.find(use => use.adminName == adminName && use.password == password);
        // if (existingUser) {
        //     alert('This account already exists.');
        //     return;
        // }else{
           
        // }

        localStorage.setItem('admin', JSON.stringify(newUser));
        // Add the new user to the array
        // users.push(newUser);
        
        // Save the updated users array back to local storage
        
        // Clear input fields
        document.getElementById('admin-name').value = '';
        document.getElementById('school-name').value = '';
        document.getElementById('password').value = '';

        alert('Account created successfully!');
        
    }

    saveToLocalStorage();
    localStorage.removeItem('img')
    
});
document.querySelectorAll("#designation").forEach(input=>{
    input.addEventListener("change", function () {
      const admin_img = document.querySelector(".admin_img");
      const reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.addEventListener("load", () => {
        let img_url = reader.result;
        admin_img.src=img_url
        // Techer_img.forEach(img=>{
        //   img.src=img_url
        // })
        localStorage.setItem("img", JSON.stringify(img_url));
      });
    });
  })
