function validateForm() {


    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("cpassword").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const phoneNumber = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const languages = document.querySelectorAll('input[name="language"]:checked');
    const selectedLanguages = Array.from(languages).map(language => language.value).join(', ');// Array
    const address = document.getElementById("address").value;
    const course = document.getElementById("course").value;
    const college = document.getElementById("college").value;
    const file = document.getElementById("file").value;

    // Patterns
    const namePattern = /^[A-Za-z]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+=<>?;:{}[\]]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10}$/;

    let isValid = true;

    // Validate First Name
    if (firstName === "") {
        document.getElementById("error-msg1").innerHTML = "First name is required.";
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        document.getElementById("error-msg1").innerHTML = "First name must contain only letters.";
        isValid = false;
    } else {
        document.getElementById("error-msg1").innerHTML = "";
    }

    // Validate Last Name
    if (lastName === "") {
        document.getElementById("error-msg2").innerHTML = "Last name is required.";
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        document.getElementById("error-msg2").innerHTML = "Last name must contain only letters.";
        isValid = false;
    } else {
        document.getElementById("error-msg2").innerHTML = "";
    }

    // Validate Password
    if (password === "") {
        document.getElementById("error-msg3").innerHTML = "Password is required.";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("error-msg3").innerHTML = `Must contain at least one number, 
           one uppercase and lowercase letter, and at least 8 characters.`;
        isValid = false;
    } else {
        document.getElementById("error-msg3").innerHTML = "";
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
        document.getElementById("error-msg4").innerHTML = "Confirm password is required.";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("error-msg4").innerHTML = `Passwords don't match.`;
        isValid = false;
    } else {
        document.getElementById("error-msg4").innerHTML = "";
    }

    // Validate Email
    if (email === "") {
        document.getElementById("error-msg5").innerHTML = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("error-msg5").innerHTML = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("error-msg5").innerHTML = "";
    }

    // Validate Date of Birth

    const date = new Date();
    const dobDate = new Date(dob);

    // Set the time of both dates to midnight (00:00:00) to ignore time during comparison

    date.setHours(0, 0, 0, 0);
    dobDate.setHours(0, 0, 0, 0);

    if (dob === "") {
        document.getElementById("error-msg6").innerHTML = "Date of Birth is required.";
        isValid = false;
    } else if (dobDate >= date) {
        document.getElementById("error-msg6").innerHTML = "Please enter a valid date of birth.";
        isValid = false;
    } else {
        document.getElementById("error-msg6").innerHTML = "";
    }


    // Validate Phone Number
    if (phoneNumber === "") {
        document.getElementById("error-msg7").innerHTML = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phoneNumber)) {
        document.getElementById("error-msg7").innerHTML = "Please enter a valid phone number.";
        isValid = false;
    } else {
        document.getElementById("error-msg7").innerHTML = "";
    }

    // Validate Gender
    if (!gender) {
        document.getElementById("error-msg8").innerHTML = "Please select a gender.";
        isValid = false;
    } else {
        document.getElementById("error-msg8").innerHTML = "";
    }

    // Validate Language
    if (languages.length === 0) {
        document.getElementById("error-msg9").innerHTML = "Please select a language.";
        isValid = false;
    } else {
        document.getElementById("error-msg9").innerHTML = "";
    }

    // Validate Address
    if (address === "") {
        document.getElementById("error-msg10").innerHTML = "Address is required.";
        isValid = false;
    } else {
        document.getElementById("error-msg10").innerHTML = "";
    }

    // Validate Course
    if (course === "Select Course") {
        document.getElementById("error-msg11").innerHTML = "Please select a valid course.";
        isValid = false;
    } else {
        document.getElementById("error-msg11").innerHTML = "";
    }

    // Validate College
    if (college === "Select College") {
        document.getElementById("error-msg12").innerHTML = "Please select a valid college.";
        isValid = false;
    } else {
        document.getElementById("error-msg12").innerHTML = "";
    }

    // Validate file
    if (file === "") {
        document.getElementById("error-msg13").innerHTML = "Please select a file";
        isValid = false;
    }



    if (isValid == false) {

        // preview

        document.getElementById("preview-first-name").innerHTML = firstName;
        document.getElementById("preview-last-name").innerHTML = lastName;
        document.getElementById("preview-password").innerHTML = password;
        document.getElementById("preview-cpassword").innerHTML = confirmPassword;
        document.getElementById("preview-email").innerHTML = email;
        document.getElementById("preview-dob").innerHTML = dob;
        document.getElementById("preview-phone").innerHTML = phoneNumber;
        document.getElementById("preview-gender").innerHTML = gender ? gender.value : "";
        document.getElementById("preview-language").innerHTML = selectedLanguages;
        document.getElementById("preview-address").innerHTML = address;
        document.getElementById("preview-course").innerHTML = course;
        document.getElementById("preview-college").innerHTML = college;
        // document.getElementById("preview-file").innerHTML = file;

        const fileInput = document.getElementById("file");

        fileInput.addEventListener("change", function () {
            const file = fileInput.files[0];

            // Validate file

            if (!file) {
                document.getElementById("preview-file").innerHTML = "";
            } else {
                document.getElementById("error-msg13").innerHTML = "";

                const imageUrl = URL.createObjectURL(file);


                const imagePreview = `<img src="${imageUrl}" alt="Selected Image" width="400" />`;
                document.getElementById("preview-file").innerHTML = imagePreview;
            }
        });

        // set item in local storage

        localStorage.setItem("first-name", firstName);
        localStorage.setItem("last-name", lastName);
        localStorage.setItem("Paasword", password);
        localStorage.setItem("Confirm Password", confirmPassword);
        localStorage.setItem("email", email);
        localStorage.setItem("dob", dob);
        localStorage.setItem("phone", phoneNumber);
        localStorage.setItem("gender", gender ? gender.value : "");
        localStorage.setItem("languages", selectedLanguages);
        localStorage.setItem("address", address);
        localStorage.setItem("course", course);
        localStorage.setItem("college", college);
        //localStorage.setItem("file", file);



        const fileIn = document.getElementById('file');
        const reader = new FileReader();

        reader.onload = function () {
            const base64Image = reader.result;

            localStorage.setItem('savedImage', base64Image);

        };

        if (fileIn.files.length > 0) {
            const file = fileIn.files[0];
            reader.readAsDataURL(file);
        }


        document.getElementById("preview").style.display = "block";

        return false;
    }


    if (isValid) {




        //  get item in local storage using JSON 

        const formData = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
            dob: dob,
            phone: phoneNumber,
            gender: gender ? gender.value : "",
            languages: selectedLanguages,
            address: address,
            course: course,
            college: college,
            file: file
        };

        localStorage.setItem("formData", JSON.stringify(formData));
        alert("Form submitted successfully!");

        // window.open('output.html', '_blank');
        window.location.href = 'output.html';

    }

    return isValid;


}
