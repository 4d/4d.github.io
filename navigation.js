document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-href]");
    if (target) {
      event.preventDefault();
      location.href = target.getAttribute("data-href");
    }
  });
});
