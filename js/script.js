const loginForm = document.querySelector(".login_form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "user") {
    alert("Successful!");
    window.location.href = "index.html";
    return false;
  } else {
    alert("Failed!");
  }
});
