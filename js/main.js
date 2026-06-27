/* GritLife — minimal site interactivity (no dependencies). */
(function () {
  "use strict";

  /* ---- Mobile offcanvas navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link inside it is clicked.
    document.querySelectorAll(".offcanvas-menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Cookie consent notice ---- */
  var KEY = "gritlife-cookie-consent";
  var banner = document.querySelector(".cookie-consent");
  if (banner) {
    var stored;
    try {
      stored = window.localStorage.getItem(KEY);
    } catch (err) {
      stored = "1"; // storage blocked → don't nag
    }

    if (!stored) {
      // Reveal after a short beat so it animates in.
      window.setTimeout(function () {
        banner.classList.add("show");
      }, 600);
    }

    var accept = banner.querySelector("[data-cookie-accept]");
    if (accept) {
      accept.addEventListener("click", function () {
        try {
          window.localStorage.setItem(KEY, "accepted");
        } catch (err) {
          /* ignore */
        }
        banner.classList.remove("show");
      });
    }
  }
})();
