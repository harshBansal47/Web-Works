registor_page = document.querySelector(".registor");
login_page = document.querySelector(".login");
document.getElementById('registor_b').addEventListener("click",()=>{
  login_page.style.display = "none";
  registor_page.style.display= "block";
  document.getElementById('label').innerText = "Registor-Page";
});
document.getElementById('login_b').addEventListener("click",()=>{
  registor_page.style.display = "none";
  login_page.style.display = "block";
  document.getElementById('label').innerText = "Login-Page";
  fp_page.style.display = "none";
});
document.getElementById('login_c').addEventListener("click",()=>{
  registor_page.style.display = "none";
  login_page.style.display = "block";
  document.getElementById('label').innerText = "Login-Page";
});
fp_page = document.querySelector('.forgot_psswrd');
document.getElementById('f_p').addEventListener("click",()=>{
  fp_page.style.display = "block";
  login_page.style.display = "none";
  document.getElementById('label').innerText = "Reset Your Password";
})
