const nav = document.querySelector(".nav-link");

const openbtn = document.querySelector("#nav-toggle-open");

const closebtn = document.querySelector("#nav-toggle-close");

document.addEventListener("DOMContentLoaded", function () {
  var copyrightYear = document.getElementById("copyright-year");
  if (copyrightYear) {
    copyrightYear.innerHTML = new Date().getFullYear();
  }
});

// open navbar
const opennav = () => {
  nav.style.display = "flex";
  openbtn.style.display = "none";
  closebtn.style.display = "inline-block";
  tutup.style.display = "none";
};

openbtn.addEventListener("click", opennav);

//close navbar
const closenav = () => {
  nav.style.display = "none";
  openbtn.style.display = "inline-block";
  closebtn.style.display = "none";
  tutup.style.display = "none";
};

closebtn.addEventListener("click", closenav);

// wdwdw
