document.addEventListener("DOMContentLoaded", () => {

  const accordions = document.querySelectorAll(".accordion");
  let lastOpened = null; 

  accordions.forEach(acc => {
    acc.addEventListener("click", function () {
      const panel = this.nextElementSibling;

      document.querySelectorAll(".panel").forEach(p => {
        if (p !== panel) {
          p.style.maxHeight = null;
          p.previousElementSibling.classList.remove("active");
        }
      });

      this.classList.toggle("active");

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  document.querySelectorAll("nav.nav1 a").forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);

      if (!section) return;

      const accordionBtn = section.querySelector(".accordion");
      const panel = section.querySelector(".panel");

      if (lastOpened === targetId) {
        document.querySelectorAll(".panel").forEach(p => {
          p.style.maxHeight = null;
          p.previousElementSibling.classList.remove("active");
        });

        lastOpened = null;
        return;
      }

      document.querySelectorAll(".panel").forEach(p => {
        if (p !== panel) {
          p.style.maxHeight = null;
          p.previousElementSibling.classList.remove("active");
        }
      });

      accordionBtn.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";

      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 200);

      lastOpened = targetId;
    });
  });

});