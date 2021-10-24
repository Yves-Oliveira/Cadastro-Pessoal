const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Formulário preenchido com sucesso");
  }
}
