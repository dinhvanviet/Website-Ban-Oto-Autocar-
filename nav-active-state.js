const navigationLinks = document.querySelectorAll("nav ul li a");
const currentPageName =
  window.location.pathname.split("/").pop() || "index.html";

function getPageNameFromHref(href) {
  return href.split("?")[0].split("/").pop();
}

if (navigationLinks.length > 0) {
  navigationLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const targetPageName = getPageNameFromHref(href);

    if (
      targetPageName === currentPageName ||
      (currentPageName === "" && targetPageName === "index.html")
    ) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      navigationLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      const hamburger = document.getElementById("hamburger");
      const navMenu = document.getElementById("nav-menu");
      if (hamburger && navMenu) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}
