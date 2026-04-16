document.addEventListener("DOMContentLoaded", function () {
  var allowedOrigins = [
    location.origin,
    "https://learn.4d.com",
    "https://corner.4d.com",
    "https://blog.4d.com",
    "https://support.4d.com",
    "https://kb.4d.com",
    "https://discuss.4d.com",
    "https://us.4d.com",
    "https://doc.4d.com",
    "https://store.4d.com"
  ];

  function isAllowedUrl(url) {
    if (url.startsWith("/")) {
      return true;
    }
    try {
      var parsedOrigin = new URL(url, location.origin).origin;
      return allowedOrigins.indexOf(parsedOrigin) !== -1;
    } catch (e) {
      return false;
    }
  }

  function navigateTo(target) {
    var url = target.getAttribute("data-href");
    if (url && isAllowedUrl(url)) {
      location.href = url;
    }
  }

  // Make data-href elements keyboard-accessible
  var clickableElements = document.querySelectorAll("[data-href]");
  for (var i = 0; i < clickableElements.length; i++) {
    var el = clickableElements[i];
    if (!el.getAttribute("tabindex")) {
      el.setAttribute("tabindex", "0");
    }
    if (!el.getAttribute("role")) {
      el.setAttribute("role", "link");
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-href]");
    if (target) {
      navigateTo(target);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") {
      return;
    }
    var target = event.target.closest("[data-href]");
    if (target) {
      event.preventDefault();
      navigateTo(target);
    }
  });
});
