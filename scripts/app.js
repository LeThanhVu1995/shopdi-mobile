
function scrollActive() {
  const scrollY = window.pageYOffset;
  const navbar = document.querySelector('.navbar')

  if (scrollY > 65) {
    navbar.classList.add("fixed-menu");
  } else {
    navbar.classList.remove("fixed-menu");
  }
}


const buttonDownload = document.getElementById('download-app')
buttonDownload.addEventListener('click', function () {
  window.scrollTo({ top: 0 })
})

window.addEventListener("scroll", scrollActive);

