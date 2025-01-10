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
    const formData = {
        "email":email.value,
        "password":password.value
    };

    fetch("/auth",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then((data)=>{
      if(data.success){
        window.location.href = data.redirectUrl;
      }
      else{
        //Show error message to user
        displayError(data.message);
      }
    })
    .catch(err=>{
      //network error
      displayError("Network Error occurred!")
    })
        
    email.value = "";
    password.value = "";
  }
});
