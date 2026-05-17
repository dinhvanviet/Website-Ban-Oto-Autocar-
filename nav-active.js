const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

function getPageNameFromHref(href) {
  return href.split("?")[0].split("/").pop();
}

if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const hrefPage = getPageNameFromHref(href);

    if (
      hrefPage === currentPage ||
      (currentPage === "" && hrefPage === "index.html")
    ) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}
