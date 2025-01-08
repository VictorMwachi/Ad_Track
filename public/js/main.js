let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("floatingInput");
  let password = document.getElementById("floatingPassword");
  
  if (email.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } 
  else {
    // perform operation with form input
    const formData = {"email":email.value,"password":password.value};
    console.log(formData)

    fetch("/auth",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(formData)
    })
    alert("This form has been successfully submitted!");
    
    email.value = "";
    password.value = "";
  }
});
