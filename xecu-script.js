const carsData = [
  // USED CARS
  {
    id: 9,
    name: "Ford Ranger Wildtrak 2021",
    brand: "Ford",
    price: 850000000,
    image:
      "https://i.pinimg.com/1200x/b7/b2/0b/b7b20bc655ce0559286721edb9e5025c.jpg",
    condition: "used",
    fuel: "Dầu",
    transmission: "Tự động",
    km: 45000,
    year: 2021,
    description:
      "Bán tải cao cấp, tình trạng bảo dưỡng tốt, nội thất siêu sang, kinh tế xăng dầu.",
  },
  {
    id: 10,
    name: "Toyota Vios G 2020",
    brand: "Toyota",
    price: 480000000,
    image:
      "https://i.pinimg.com/736x/6a/67/28/6a6728686962984504682fe38dd2ceed.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Tự động",
    km: 78000,
    year: 2020,
    description:
      "Xe gia đình phổ biến, chạy ít, bảo dưỡng đúng thời gian, không lỗi gì.",
  },
  {
    id: 11,
    name: "Hyundai Accent 2019",
    brand: "Hyundai",
    price: 420000000,
    image:
      "https://i.pinimg.com/736x/01/18/b2/0118b2e3a15c0a38c84ed50b5dcb7380.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Số sàn",
    km: 95000,
    year: 2019,
    description:
      "Sedan hoàn hảo cho người mới lái, rẻ bền tốt, chi phí bảo dưỡng thấp.",
  },
  {
    id: 12,
    name: "Kia Cerato 2018",
    brand: "Kia",
    price: 500000000,
    image:
      "https://i.pinimg.com/736x/a8/f8/f2/a8f8f2e95c9f792f73d3e91784b36d73.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Tự động",
    km: 112000,
    year: 2018,
    description:
      "Xe đẹp, vỏ bóng lót gần như mới, nội thất sạch sẽ, động cơ mạnh.",
  },
  {
    id: 13,
    name: "Mazda 3 2021",
    brand: "Mazda",
    price: 700000000,
    image:
      "https://i.pinimg.com/1200x/db/94/4c/db944c5b1633856a8da7904727a9d4fa.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Tự động",
    km: 62000,
    year: 2021,
    description: "Hatchback thể thao, chạy ít, bảo dưỡng kỹ lưỡng, giá hợp lý.",
  },
  {
    id: 14,
    name: "Honda City 2020",
    brand: "Honda",
    price: 520000000,
    image:
      "https://i.pinimg.com/1200x/0f/75/b7/0f75b75ab5a21a56ffd2aecf451c9b21.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Tự động",
    km: 85000,
    year: 2020,
    description:
      "Xe nhỏ gọn tiết kiệm, nội thất nguyên bản, không tai nạn, chịu khó chạy.",
  },
  {
    id: 15,
    name: "BMW X3 2019",
    brand: "BMW",
    price: 1600000000,
    image:
      "https://i.pinimg.com/736x/ff/e9/91/ffe99177de794e0c9a3407ac80a07a7a.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Tự động",
    km: 105000,
    year: 2019,
    description:
      "SUV hạng sang, trang bị đầy đủ, bảo dưỡng chuyên biệt, còn bảo hành.",
  },
  {
    id: 16,
    name: "Toyota Highlander 2020",
    brand: "Toyota",
    price: 1900000000,
    image:
      "https://i.pinimg.com/1200x/9a/33/0e/9a330e992cbaa2a9e4177fcc4e50f341.jpg",
    condition: "used",
    fuel: "Xăng",
    transmission: "Tự động",
    km: 72000,
    year: 2020,
    description:
      "SUV 7 chỗ đắc lực, nước sơn zin, ruột máy nguyên, gia đình lớn nên mua.",
  },
];

let filteredCars = [...carsData];
let filterState = {
  brands: [],
  priceRange: "all",
  maxMileage: 200000,
  year: "all",
  sortBy: "default",
  searchQuery: "",
};

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
const usedCarsGrid = document.getElementById("usedCarsGrid");
const noResults = document.getElementById("noResults");
const applyBtn = document.getElementById("applyBtn");
const detailModal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");
const mileageSlider = document.getElementById("mileageSlider");
const mileageValue = document.getElementById("mileageValue");
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

mileageSlider.addEventListener("input", (e) => {
  filterState.maxMileage = parseInt(e.target.value);
  mileageValue.textContent = formatNumber(parseInt(e.target.value)) + " km";
});

document.getElementById("yearFilter").addEventListener("change", (e) => {
  filterState.year = e.target.value;
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
        "0-300": { min: 0, max: 300000000 },
        "300-600": { min: 300000000, max: 600000000 },
        "600-1000": { min: 600000000, max: 1000000000 },
        "1000+": { min: 1000000000, max: Infinity },
      };
      const range = ranges[filterState.priceRange];
      if (price < range.min || price > range.max) {
        return false;
      }
    }

    // Mileage Filter (Used Cars Only)
    if (car.km > filterState.maxMileage) {
      return false;
    }

    // Year Filter (Used Cars Only)
    if (filterState.year !== "all") {
      if (car.year !== parseInt(filterState.year)) {
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
    usedCarsGrid.innerHTML = filteredCars
      .map((car) => createCarCard(car))
      .join("");
  } else {
    usedCarsGrid.innerHTML = "";
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
                <div class="car-badge badge-used">Xe cũ</div>
            </div>
            <div class="car-content">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-price">${formatPrice(car.price)}</div>
                <div class="car-specs">
                    <span class="spec-item">⛽ ${car.fuel}</span>
                    <span class="spec-item">⚙️ ${car.transmission}</span>
                </div>
                <div class="car-details">
                    <div class="details-item">
                        <span class="details-label">Số km:</span>
                        <span>${formatNumber(car.km)} km</span>
                    </div>
                    <div class="details-item">
                        <span class="details-label">Năm:</span>
                        <span>${car.year}</span>
                    </div>
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
                <div class="info-label">Số km</div>
                <div class="info-value">${formatNumber(car.km)} km</div>
            </div>
            <div class="info-item">
                <div class="info-label">Năm sản xuất</div>
                <div class="info-value">${car.year}</div>
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
