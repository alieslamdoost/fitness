document.querySelector(".scroll-up").addEventListener("click", function () {
  window.scrollTo(0, 0);
});

document.querySelector(".scroll-down").addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});
