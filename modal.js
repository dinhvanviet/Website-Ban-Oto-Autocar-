function openModal(title, content) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerText = content;
  document.getElementById("infoModal").classList.add("active");
}

function closeModal() {
  document.getElementById("infoModal").classList.remove("active");
}

// Đóng khi click ra ngoài hộp thoại
window.onclick = function (e) {
  const modal = document.getElementById("infoModal");
  if (e.target == modal) closeModal();
};
