const carsData = [
  // NEW CARS
  {
    id: 1,
    name: "Mercedes-Benz E300 AMG",
    brand: "Mercedes-Benz",
    price: 2500000000,
    image:
      "https://i.pinimg.com/1200x/80/74/74/807474aeba3bcd9b73cddd75fe1b0aae.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "Chiếc xe sang trọng với thiết kế hiện đại, công suất 255 hp. Trang bị công nghệ an toàn tiên tiến.",
  },
  {
    id: 2,
    name: "Toyota Camry 2.5Q 2024",
    brand: "Toyota",
    price: 1300000000,
    image:
      "https://i.pinimg.com/736x/40/8b/ce/408bceb840912ac838b3ae374d9819e7.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "Sedan hạng D tiêu chuẩn với nội thất rộng rãi, tiêu thụ xăng thấp, cảm biến an toàn toàn diện.",
  },
  {
    id: 3,
    name: "BMW 530i M Sport",
    brand: "BMW",
    price: 2800000000,
    image:
      "https://i.pinimg.com/736x/7b/9d/27/7b9d27981325d06277b26917445afa63.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "Xe thể thao sang trọng với động cơ mạnh mẽ, hệ thống xo đúp thích ứng, nội thất cao cấp.",
  },
  {
    id: 4,
    name: "Hyundai Santa Fe 2024",
    brand: "Hyundai",
    price: 1100000000,
    image:
      "https://i.pinimg.com/1200x/dc/ba/48/dcba48f89addc3660081d37c27a403b0.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "SUV 3 hàng ghế với không gian rộng, an toàn cao, tiện nghi hiện đại, giá cạnh tranh.",
  },
  {
    id: 5,
    name: "Kia K5 Premium",
    brand: "Kia",
    price: 900000000,
    image:
      "https://i.pinimg.com/736x/0f/f8/45/0ff845981303ea63c6dedbbd205207a5.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "Sedan thể thao với thiết kế độc đáo, nội thất tập trung người lái, công nghệ hiện đại.",
  },
  {
    id: 6,
    name: "Mazda CX-5 2024",
    brand: "Mazda",
    price: 950000000,
    image:
      "https://i.pinimg.com/1200x/c2/02/c5/c202c5b773e109f41c92583e856d342e.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "Crossover đẹp mắt với chất lượng nội thất tốt, động cơ Skyactiv tiêu thụ nhiên liệu hiệu quả.",
  },
  {
    id: 7,
    name: "Honda CR-V 2024",
    brand: "Honda",
    price: 1050000000,
    image:
      "https://i.pinimg.com/736x/4a/d7/2c/4ad72c5321775e57b15c427fe347205d.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "SUV compact đáng tin cậy với công suất tối ưu, tinh chỉnh gầm bền vững.",
  },
  {
    id: 8,
    name: "Ford Mustang GT",
    brand: "Ford",
    price: 2200000000,
    image:
      "https://i.pinimg.com/736x/30/a3/9c/30a39c41e794da32105c35e1830e2478.jpg",
    condition: "new",
    fuel: "Xăng",
    transmission: "Tự động",
    description:
      "Xe thể thao huyền thoại với động cơ V8 mạnh mẽ, âm thanh đặc trưng, hiệu suất đầu bảng.",
  },
];

let filteredCars = [...carsData];
let filterState = {
  brands: [],
  priceRange: "all",
  sortBy: "default",
  searchQuery: "",
};

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
const newCarsGrid = document.getElementById("newCarsGrid");
const noResults = document.getElementById("noResults");
const applyBtn = document.getElementById("applyBtn");
const detailModal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");
const searchInput = document.getElementById("searchInput");

// Sidebar Toggle (Mobile)
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.add("show");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("show");
});

// Close sidebar when clicking outside (Mobile)
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove("show");
    }
  }
});

// Filter Events
document.querySelectorAll(".brand-filter").forEach((input) => {
  input.addEventListener("change", () => {
    updateBrandFilters();
  });
});

document.getElementById("priceFilter").addEventListener("change", (e) => {
  filterState.priceRange = e.target.value;
});

document.getElementById("sortFilter").addEventListener("change", (e) => {
  filterState.sortBy = e.target.value;
  applyFilters();
});

// Search
searchInput.addEventListener("input", (e) => {
  filterState.searchQuery = e.target.value.toLowerCase();
  applyFilters();
});

// Apply Filters Button
applyBtn.addEventListener("click", () => {
  applyFilters();
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("show");
  }
});

// Modal Close
modalClose.addEventListener("click", () => {
  detailModal.classList.remove("show");
});

detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) {
    detailModal.classList.remove("show");
  }
});

function updateBrandFilters() {
  filterState.brands = Array.from(
    document.querySelectorAll(".brand-filter:checked"),
  ).map((input) => input.value);
}

function applyFilters() {
  filteredCars = carsData.filter((car) => {
    // Search Filter
    if (
      filterState.searchQuery &&
      !car.name.toLowerCase().includes(filterState.searchQuery)
    ) {
      return false;
    }

    // Brand Filter
    if (
      filterState.brands.length > 0 &&
      !filterState.brands.includes(car.brand)
    ) {
      return false;
    }

    // Price Range Filter
    if (filterState.priceRange !== "all") {
      const price = car.price;
      const ranges = {
        "0-500": { min: 0, max: 500000000 },
        "500-1000": { min: 500000000, max: 1000000000 },
        "1000+": { min: 1000000000, max: Infinity },
      };
      const range = ranges[filterState.priceRange];
      if (price < range.min || price > range.max) {
        return false;
      }
    }

    return true;
  });

  // Sort
  sortCars();

  // Render
  renderCars();
}

function sortCars() {
  if (filterState.sortBy === "price-asc") {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (filterState.sortBy === "price-desc") {
    filteredCars.sort((a, b) => b.price - a.price);
  }
}

function renderCars() {
  if (filteredCars.length > 0) {
    newCarsGrid.innerHTML = filteredCars
      .map((car) => createCarCard(car))
      .join("");
  } else {
    newCarsGrid.innerHTML = "";
  }

  // Show No Results Message
  if (filteredCars.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }

  // Add Event Listeners to Cards
  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const carId = parseInt(btn.dataset.carId);
      showCarDetail(carId);
    });
  });

  document.querySelectorAll(".car-card").forEach((card) => {
    card.addEventListener("click", () => {
      const carId = parseInt(card.dataset.carId);
      showCarDetail(carId);
    });
  });
}

function createCarCard(car) {
  return `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <div class="car-badge badge-new">Mới</div>
            </div>
            <div class="car-content">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-price">${formatPrice(car.price)}</div>
                <div class="car-specs">
                    <span class="spec-item">⛽ ${car.fuel}</span>
                    <span class="spec-item">⚙️ ${car.transmission}</span>
                </div>
                <div class="car-actions">
                    <button class="detail-btn" data-car-id="${car.id}">Xem chi tiết</button>
                </div>
            </div>
        </div>
    `;
}

function showCarDetail(carId) {
  const car = carsData.find((c) => c.id === carId);
  if (!car) return;

  const modalHTML = `
        <img src="${car.image}" alt="${car.name}" class="modal-image">
        <h2 class="modal-title">${car.name}</h2>
        <div class="modal-price">${formatPrice(car.price)}</div>
        
        <div class="modal-info">
            <div class="info-item">
                <div class="info-label">Hãng xe</div>
                <div class="info-value">${car.brand}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Nhiên liệu</div>
                <div class="info-value">${car.fuel}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Hộp số</div>
                <div class="info-value">${car.transmission}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Trạng thái</div>
                <div class="info-value">Mới</div>
            </div>
            <div class="info-item">
                <div class="info-label">Bảo hành</div>
                <div class="info-value">3 năm</div>
            </div>
        </div>

        <div class="modal-description">
            ${car.description}
        </div>

        <div class="modal-actions">
            <button onclick="window.location.href='lienhe.html'">Liên hệ ngay</button>
            
        </div>
    `;

  modalBody.innerHTML = modalHTML;
  detailModal.classList.add("show");
}

function formatPrice(price) {
  if (!price || isNaN(price)) return "0 VNĐ";
  return price.toLocaleString("vi-VN") + " VNĐ";
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
});
