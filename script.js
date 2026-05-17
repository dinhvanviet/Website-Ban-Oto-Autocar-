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
  carType: "all",
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
const newCarsGrid = document.getElementById("newCarsGrid");
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
document.querySelectorAll('input[name="carType"]').forEach((input) => {
  input.addEventListener("change", () => {
    filterState.carType = input.value;
  });
});

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

// Top Tabs Filter
document.querySelectorAll(".top-tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterValue = btn.dataset.filter;
    filterState.carType = filterValue;

    // Update active state - chỉ trong section chứa nút đã click
    const section = btn.closest(".cars-section");
    section.querySelectorAll(".top-tab").forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    // Apply filters
    applyFilters();
  });
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

    // Car Type Filter
    if (
      filterState.carType !== "all" &&
      car.condition !== filterState.carType
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

    // Mileage Filter (Used Cars Only)
    if (car.condition === "used" && car.km > filterState.maxMileage) {
      return false;
    }

    // Year Filter (Used Cars Only)
    if (car.condition === "used" && filterState.year !== "all") {
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

function updateTabsActiveState() {
  document.querySelectorAll(".cars-section").forEach((section) => {
    const tabs = section.querySelectorAll(".top-tab");
    tabs.forEach((tab) => {
      if (tab.dataset.filter === filterState.carType) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
}
function renderCars() {
  const newCars = filteredCars.filter((car) => car.condition === "new");
  const usedCars = filteredCars.filter((car) => car.condition === "used");

  // Render New Cars
  if (newCars.length > 0) {
    newCarsGrid.innerHTML = newCars.map((car) => createCarCard(car)).join("");
    document.querySelector(".cars-section:nth-of-type(1)").style.display =
      "block";
  } else {
    newCarsGrid.innerHTML = "";
    document.querySelector(".cars-section:nth-of-type(1)").style.display =
      "none";
  }

  // Render Used Cars
  if (usedCars.length > 0) {
    usedCarsGrid.innerHTML = usedCars.map((car) => createCarCard(car)).join("");
    document.querySelector(".cars-section:nth-of-type(2)").style.display =
      "block";
  } else {
    usedCarsGrid.innerHTML = "";
    document.querySelector(".cars-section:nth-of-type(2)").style.display =
      "none";
  }

  // Show No Results Message
  if (filteredCars.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }

  // Update tab active state based on filterState
  updateTabsActiveState();

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
  const badgeClass = car.condition === "new" ? "badge-new" : "badge-used";
  const badgeText = car.condition === "new" ? "Mới" : "Xe cũ";
  const extra =
    car.condition === "used"
      ? `<div class="details-item">
                 <span class="details-label">Số km:</span>
                 <span>${formatNumber(car.km)} km</span>
               </div>
               <div class="details-item">
                 <span class="details-label">Năm:</span>
                 <span>${car.year}</span>
               </div>`
      : "";

  return `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-image-container">
                <img src="${car.image}" alt="${car.name}" class="car-image">
                <div class="car-badge ${badgeClass}">${badgeText}</div>
            </div>
            <div class="car-content">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-price">${formatPrice(car.price)}</div>
                <div class="car-specs">
                    <span class="spec-item">⛽ ${car.fuel}</span>
                    <span class="spec-item">⚙️ ${car.transmission}</span>
                </div>
                <div class="car-details">
                    ${extra}
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

  const extra =
    car.condition === "used"
      ? `
        <div class="info-item">
            <div class="info-label">Số km</div>
            <div class="info-value">${formatNumber(car.km)} km</div>
        </div>
        <div class="info-item">
            <div class="info-label">Năm sản xuất</div>
            <div class="info-value">${car.year}</div>
        </div>
            `
      : `
        <div class="info-item">
            <div class="info-label">Trạng thái</div>
            <div class="info-value">Mới</div>
        </div>
        <div class="info-item">
            <div class="info-label">Bảo hành</div>
            <div class="info-value">3 năm</div>
        </div>
            `;

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
            ${extra}
        </div>

        <div class="modal-description">
            ${car.description}
        </div>

        <div class="modal-actions">
            <button class="detail-btn">Liên hệ ngay</button>
            <button class="contact-btn">Hỏi giá</button>
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
document.addEventListener("DOMContentLoaded", () => {
  // Reset active state for tabs - chỉ giữ nút "Tất cả" trong mỗi section
  document.querySelectorAll(".cars-section").forEach((section) => {
    const tabs = section.querySelectorAll(".top-tab");
    tabs.forEach((tab, index) => {
      if (index === 0) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
  applyFilters();
  const handleResize = () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("show");
    }
  };
  window.addEventListener("resize", handleResize);
});

const newsData = [
  {
    id: 1,
    title: "Đánh giá chi tiết Ford Ranger 2024: Vị thế quân vương",
    date: "06/04/2026",
    image: "tt1.jpg",
    content: `
            <p>Ford Ranger 2024 không chỉ đơn thuần là một chiếc xe bán tải, nó đã trở thành một biểu tượng về phong cách sống năng động và mạnh mẽ tại Việt Nam.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">1. Thiết kế ngoại thất đột phá</h4>
            <p>Điểm nhấn lớn nhất là cụm đèn LED hình chữ C đặc trưng của dòng F-150, kết hợp với lưới tản nhiệt mở rộng tạo nên diện mạo cực kỳ hầm hố. Thân xe được dập nổi các đường gân cơ bắp, giúp xe trông vững chãi hơn khi di chuyển trên địa hình xấu.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">2. Nội thất chuẩn xe hạng sang</h4>
            <p>Khoang lái gây choáng ngợp với màn hình cảm ứng trung tâm 12 inch đặt dọc, tích hợp hệ thống giải trí SYNC 4 mới nhất. Ghế bọc da cao cấp, sạc không dây và bảng đồng hồ kỹ thuật số thay thế hoàn toàn dạng kim truyền thống.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">3. Khả năng vận hành và An toàn</h4>
            <ul>
                <li><strong>Động cơ:</strong> Bi-Turbo 2.0L kết hợp hộp số tự động 10 cấp cực kỳ mượt mà.</li>
                <li><strong>Chế độ lái:</strong> 6 chế độ lái tùy chỉnh (Bình thường, Tiết kiệm, Kéo nặng, Trơn trượt, Bùn lầy, Cát).</li>
                <li><strong>An toàn:</strong> Hệ thống kiểm soát hành trình thích ứng, hỗ trợ giữ làn và phanh khẩn cấp tự động.</li>
            </ul>
            
            <p style="margin-top:15px; font-style: italic; border-left: 4px solid #ccc; padding-left: 10px;">
                "Ford Ranger 2024 vẫn là lựa chọn hàng đầu cho những khách hàng cần một chiếc xe 'vừa đi làm, vừa đi chơi' mà vẫn giữ được sự đẳng cấp."
            </p>
        `,
  },
  {
    id: 2,
    title: "Thị trường ô tô cũ tháng 3: Biến động và Cơ hội",
    date: "02/04/2026",
    image: "tt2.jpg",
    content: `
            <p>Tháng 3/2026 chứng kiến những nhịp đập lạ thường của thị trường xe cũ. Giá xe đang có xu hướng giảm sâu ở nhiều phân khúc, tạo điều kiện thuận lợi cho người mua.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">Tại sao giá xe cũ giảm mạnh?</h4>
            <p>Việc các hãng xe mới liên tục tung ra các chương trình khuyến mại, giảm thuế trước bạ đã tạo áp lực trực tiếp lên thị trường xe đã qua sử dụng. Để cạnh tranh, các showroom xe cũ buộc phải hạ giá niêm yêu từ 5% - 10%.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">Các dòng xe đang có giá "hời" nhất:</h4>
            <ul>
                <li><strong>Phân khúc hạng A:</strong> Hyundai i10, Kia Morning (Giảm khoảng 20-30 triệu VNĐ).</li>
                <li><strong>Phân khúc hạng B:</strong> Toyota Vios, Honda City đời 2020-2022 (Giảm khoảng 40-60 triệu VNĐ).</li>
                <li><strong>Dòng SUV:</strong> Mazda CX-5 và Hyundai Tucson cũ đang có lượng giao dịch rất sôi động.</li>
            </ul>

            <h4 style="color: #ef4444; margin-top: 15px;">Lời khuyên từ chuyên gia AutoCar:</h4>
            <p>Trước khi xuống tiền, quý khách cần kiểm tra kỹ 3 yếu tố: Lịch sử bảo dưỡng chính hãng, hồ sơ pháp lý và tuyệt đối không mua xe đã từng ngập nước hoặc đâm đụng mạnh.</p>
        `,
  },
  {
    id: 3,
    title: "Xe điện: Xu hướng xanh và Hạ tầng trạm sạc 2026",
    date: "30/03/2026",
    image: "tt3.jpg",
    content: `
            <p>Xe điện không còn là khái niệm xa vời mà đã trở thành phương tiện di chuyển chính yếu của nhiều gia đình Việt Nam trong năm 2026.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">1. Hạ tầng trạm sạc phủ khắp</h4>
            <p>Tính đến tháng 4/2026, mạng lưới trạm sạc đã phủ sóng đến 63 tỉnh thành. Tại các trạm dừng nghỉ trên cao tốc, hệ thống sạc siêu nhanh (Supercharge) cho phép sạc từ 10% lên 80% chỉ trong vòng 18 phút.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">2. Lợi ích kinh tế lâu dài</h4>
            <p>Với giá xăng dầu biến động, chi phí vận hành xe điện chỉ bằng 1/3 so với xe động cơ đốt trong. Bên cạnh đó, chi phí bảo dưỡng xe điện cũng thấp hơn đáng kể do không phải thay dầu máy, lọc xăng định kỳ.</p>
            
            <h4 style="color: #ef4444; margin-top: 15px;">3. Những công nghệ mới trên xe điện 2026</h4>
            <p>Hầu hết các mẫu xe điện mới ra mắt đều tích hợp trợ lý ảo AI thông minh, hỗ trợ lái tự động cấp độ 3 và khả năng cập nhật phần mềm từ xa (OTA) giúp xe luôn "mới" theo thời gian.</p>
            
            <p style="margin-top:15px; background: #fff3f3; padding: 10px; border-radius: 5px;">
                AutoCar hiện đang có chính sách hỗ trợ đổi xe xăng sang xe điện với mức định giá cực kỳ ưu đãi cho khách hàng.
            </p>
        `,
  },
];

// 2. Hàm hiển thị chi tiết tin tức
function showNewsDetail(id) {
  const news = newsData.find((n) => n.id === id);
  const modal = document.getElementById("detailModal");
  const modalBody = document.getElementById("modalBody");

  if (news && modal && modalBody) {
    modalBody.innerHTML = `
            <img src="${news.image}" style="width:100%; border-radius:8px; margin-bottom:15px; height:250px; object-fit:cover;">
            <h2 style="margin-bottom:10px; color:#1e293b;">${news.title}</h2>
            <p style="color:#64748b; font-size:14px; margin-bottom:15px;">📅 Đăng ngày: ${news.date}</p>
            <div style="line-height:1.8; color:#334155; text-align:justify;">
                ${news.content}
            </div>
            <button onclick="closeModal()" style="margin-top:20px; width:100%; padding:12px; background:#ef4444; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold;">ĐÓNG BÀI VIẾT</button>
        `;
    modal.classList.add("show");
  }
}
