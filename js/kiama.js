const regForm = document.querySelector("form");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "loginpage.html";
});
