var countDownDate = new Date("Aug 26, 2022 16:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days.toString().padStart(2, 0) +
    "D " +
    hours.toString().padStart(2, 0) +
    "H " +
    minutes.toString().padStart(2, 0) +
    "M " +
    seconds.toString().padStart(2, 0) +
    "S ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function scrollActive() {
  const scrollY = window.pageYOffset;
  const navbar = document.querySelector(".navbar");

  if (scrollY > 65) {
    navbar.classList.add("fixed-menu");
  } else {
    navbar.classList.remove("fixed-menu");
  }
}

const buttonDownload = document.getElementById("download-app");
buttonDownload.addEventListener("click", function () {
  window.location.replace(
    "https://apps.apple.com/us/app/instagram/id389801252"
  );
  window.scrollTo({ top: 0 });
});

window.addEventListener("scroll", scrollActive);
