import { i18n } from "./translate.js";

/* Elements */
const $header = document.querySelector(".header");
const anchors = document.querySelectorAll('a[href*="#"]');
const $menuBtn = document.querySelector(".header__mobile-button");
const $closeMenuBtn = document.querySelector(".mobile-menu__close");
const mobileMenu = document.querySelector(".mobile-menu");
const langRadioBtn = document.querySelector(".lang");
// const fieldsContacts = document.querySelectorAll(".js-contact-field");
// const $form = document.getElementById('form')

// scroll
document.addEventListener("scroll", () => {
  if (window.scrollY) {
    $header.classList.add("fixed");
  } else {
    $header.classList.remove("fixed");
  }
});

// Scroll to block
anchors.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = item.getAttribute("href").substr(1);
    hideMenu();
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

$menuBtn.addEventListener("click", openMenu); // open menu
$closeMenuBtn.addEventListener("click", openMenu); // close menu

/* Menu func */
function openMenu() {
  if (!mobileMenu.classList.contains("open")) {
    mobileMenu.classList.add("open");
  } else {
    hideMenu();
  }
}
//  close menu
function hideMenu() {
  mobileMenu.classList.remove("open");
}

/* Translate */
langRadioBtn.addEventListener("change", function (e) {
  translate(e.target.id);
});

function translate(lang) {
  document.querySelectorAll("[data-i18n]").forEach((elem) => {
    elem.textContent = i18n[lang][elem.dataset.i18n.toLowerCase()];
  });

  // placeholder form
  // fieldsContacts.forEach((item) => {
  //   item.placeholder = i18n[lang][item.dataset.i18n];
  // });
}


// $form.addEventListener('submit',async (e)=>{
// e.preventDefault()
// let formData = new FormData($form)
// const res = await fetch('send.php',{
//   method:"POST",
//   body:formData
// })
// if(res.ok){
//   alert('Message sent')
// }
// })