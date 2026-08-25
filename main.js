/* Subas Ali — site interactions (progressive enhancement) */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is clicked (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Contact form -> opens the visitor's email app (works on static hosting)
  var cf = document.getElementById("contact-form");
  if (cf) {
    cf.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (cf.querySelector("#name") || {}).value || "";
      var email = (cf.querySelector("#email") || {}).value || "";
      var msg = (cf.querySelector("#message") || {}).value || "";
      var subject = encodeURIComponent("Website enquiry" + (name ? " from " + name : ""));
      var body = encodeURIComponent(msg + "\n\n— " + name + (email ? " <" + email + ">" : ""));
      window.location.href = "mailto:amjad.subas@edu.pte.hu?subject=" + subject + "&body=" + body;
    });
  }

  // Footer year + last-updated
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var lm = document.getElementById("lastmod");
  if (lm) {
    try { lm.textContent = new Date(document.lastModified).toISOString().slice(0, 10); }
    catch (e) { /* ignore */ }
  }
})();
