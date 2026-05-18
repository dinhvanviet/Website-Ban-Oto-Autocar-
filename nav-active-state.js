document.addEventListener("DOMContentLoaded", () => {
  const navigationLinks = document.querySelectorAll("nav ul li a");

  // 1. XỬ LÝ SÁNG ĐỎ MENU (ACTIVE STATE)
  // Lấy tên file hiện tại trên thanh địa chỉ (Ví dụ: "xemoi.html")
  let currentFilename = window.location.pathname.split("/").pop();

  // Nếu trang chủ trống hoặc chỉ có "/" thì mặc định là index.html
  if (!currentFilename || currentFilename === "") {
    currentFilename = "index.html";
  }

  if (navigationLinks.length > 0) {
    navigationLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      // Tách bỏ phần tham số
      const linkFilename = href.split("?")[0];

      // Nếu tên file trùng nhau thì thêm class active để chuyển màu đỏ
      if (currentFilename === linkFilename) {
        link.classList.add("active");
        link.parentElement?.classList.add("active");
      }

      // Xử lý sự kiện click chuyển trang mượt mà
      link.addEventListener("click", () => {
        navigationLinks.forEach((item) => {
          item.classList.remove("active");
          item.parentElement?.classList.remove("active");
        });
        link.classList.add("active");
        link.parentElement?.classList.add("active");

        // Đóng menu responsive sau khi click (nếu đang ở trên điện thoại)
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");
        if (hamburger && navMenu) {
          navMenu.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });
    });
  }

  // 2. XỬ LÝ BẬT TẮT MENU RESPONSIVE TRÊN ĐIỆN THOẠI (HAMBURGER)
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }
});
