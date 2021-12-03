window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btn-to-top").style.display = "block";
  } else {
    document.getElementById("btn-to-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function toHome() {
  document.documentElement.scrollTop = 100;
}
function toProduct() {
  document.documentElement.scrollTop = 1067;
}
function toPricing() {
  document.documentElement.scrollTop = 2630;
}
function toAbout() {
  document.documentElement.scrollTop = 3930;
}
