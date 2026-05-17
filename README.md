# 🚗 AutoLux - Car Dealership Website

Một website bán ô tô chuyên nghiệp được xây dựng bằng **HTML, CSS, JavaScript pure** (không dùng framework).

## 📋 Nội Dung Project

```
autolux/
├── index.html          # Trang chủ
├── cars.html           # Danh sách xe
├── detail.html         # Chi tiết xe
├── contact.html        # Trang liên hệ
├── style.css           # CSS toàn bộ website
├── script.js           # JavaScript logic
└── README.md           # Tài liệu này
```

## ✨ Tính Năng Chính

### 1. **Trang Chủ (index.html)**
- ✅ Navbar fixed với scroll blur effect
- ✅ Banner hero full-screen với gradient overlay
- ✅ Nút CTA: "Xem Xe" & "Liên Hệ"
- ✅ Section "Tại Sao Chọn AutoLux" (3 cards)
- ✅ Danh sách 6 xe nổi bật
- ✅ CTA Section
- ✅ Footer đầy đủ

### 2. **Danh Sách Xe (cars.html)**
- ✅ Grid layout responsive (3-4 cột tùy kích thước)
- ✅ **Filter JavaScript**:
  - Lọc theo giá (5 mức)
  - Lọc theo hãng (8 hãng)
  - Lọc theo năm (2019-2023)
  - Nút Reset
- ✅ Hiển thị số lượng xe tìm thấy
- ✅ 12 xe trong database

### 3. **Chi Tiết Xe (detail.html)**
- ✅ Ảnh lớn + thư viện ảnh nhỏ (4 ảnh)
- ✅ Click thumbnail để đổi ảnh chính
- ✅ **Thông số kỹ thuật**: Hãng, năm, động cơ, công suất, truyền động, loại xe, số chỗ, màu sơn
- ✅ **Mô tả chi tiết**
- ✅ **Tính năng nổi bật** (6 tính năng)
- ✅ Giá + "Còn X chiếc"
- ✅ Nút "Liên Hệ Mua Xe"
- ✅ 3 xe tương tự

### 4. **Liên Hệ (contact.html)**
- ✅ **Form với validation**:
  - Họ tên (required)
  - Số điện thoại (required, 10-11 chữ số)
  - Email (required, format check)
  - Chủ đề (required)
  - Nội dung (required, tối thiểu 10 ký tự)
- ✅ Error messages rõ ràng
- ✅ Success message sau khi submit
- ✅ **Contact info**: Địa chỉ, điện thoại, email, giờ hoạt động
- ✅ Map placeholder

## 🎨 Thiết Kế

### Màu Sắc (Color Scheme)
```
- Primary Red: #e31c23        (CTA, hover effects)
- Dark: #1a1a1a              (Background, text)
- White: #ffffff             (Clean)
- Light Gray: #f5f5f5        (Accents)
- Text: #333333              (Main)
- Text Light: #666666        (Secondary)
```

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### Animations
- Fade-in on scroll
- Card hover: Scale nhẹ + Shadow
- Button hover: Scale + Color change
- Image zoom on card hover
- Smooth transitions (0.3s - 0.5s)

## 🛠️ Cách Sử Dụng

### 1. Mở Website
```bash
# Chỉ cần mở file index.html trong trình duyệt
# Hoặc dùng Live Server trong VS Code
```

### 2. Chuyên Sửa Dữ Liệu Xe
Chỉnh sửa mảng `carsData` trong `script.js`:
```javascript
const carsData = [
    {
        id: 1,
        name: "BMW X5 2022",
        brand: "BMW",
        year: 2022,
        price: 1890000000,
        image: "URL_ẢNH",
        category: "SUV",
        description: "..."
    },
    // ... thêm xe khác
];
```

### 3. Tùy Chỉnh Màu Sắc
Chỉnh CSS variables trong `style.css`:
```css
:root {
    --color-primary: #e31c23;   /* Thay đổi ở đây */
    --color-secondary: #1a1a1a;
    /* ... */
}
```

### 4. Chỉnh Logo & Thông Tin
- Logo: Tìm `.nav-logo` và `.logo-text` trong HTML
- Thông tin: Tìm `.footer` trong HTML

## 📱 Responsive Features

### Desktop (1200px+)
- 4 cột grid cho cars
- Navbar full horizontal
- Slider detail page hoạt động bình thường

### Tablet (768px - 1024px)
- 3 cột grid cho cars
- Navbar responsive
- Detail page 1 cột

### Mobile (< 768px)
- 1-2 cột grid cho cars
- Hamburger menu
- Form chiếm toàn width
- Thumbs responsive

## 🔧 Tính Năng JavaScript

### 1. Filter Cars
```javascript
// Tự động khi select thay đổi
priceFilter.addEventListener('change', applyFilters);
```

### 2. Form Validation
```javascript
// Email validation
isValidEmail(email) // true/false

// Phone validation (10-11 digits)
isValidPhone(phone) // true/false
```

### 3. Local Storage
```javascript
// Tự động lưu filter preferences
// khi bạn thay đổi bộ lọc
```

### 4. Scroll Animations
```javascript
// Auto fade-in khi scroll đến
// Dùng IntersectionObserver
```

## 📊 Database Xe

Có 12 xe mẫu đã được thêm sẵn:

| Brand | Model | Năm | Giá | Loại |
|-------|-------|-----|-----|------|
| BMW | X5 | 2022 | 1.89B | SUV |
| Mercedes | C300 | 2021 | 1.45B | Sedan |
| Audi | A6 | 2023 | 1.68B | Sedan |
| Toyota | Camry | 2020 | 850M | Sedan |
| Porsche | 911 | 2023 | 4.2B | Sports |
| Lexus | RX | 2022 | 2.15B | SUV |
| Honda | Accord | 2021 | 750M | Sedan |
| Hyundai | Santa Fe | 2023 | 950M | SUV |
| BMW | X6 | 2023 | 2.2B | SUV |
| Audi | Q7 | 2022 | 1.95B | SUV |
| Lexus | RX | 2023 | 2.3B | SUV |
| Mercedes | GLE | 2023 | 2.1B | SUV |

## 🎯 Yêu Cầu Đã Hoàn Thành

✅ HTML structure đầy đủ (6 files)
✅ CSS chi tiết (responsive, animations, hover effects)
✅ JavaScript functions (filter, validation, effects)
✅ Navbar fixed & scroll blur
✅ Hero section full-screen
✅ Car cards grid & filter
✅ Detail page images & specs
✅ Contact form validation
✅ Responsive design (mobile, tablet, desktop)
✅ Color scheme: Red - White - Black
✅ Modern showroom aesthetic
✅ Comments in code
✅ No framework (pure HTML/CSS/JS)

## 🚀 Mở Rộng

### Có thể thêm:
1. Backend API (Node.js, Python)
2. Database (MongoDB, MySQL)
3. Authentication
4. Payment integration
5. Chat support
6. Map integration (Google Maps API)
7. Email sending
8. Image upload

## 📝 Ghi Chú

- Tất cả ảnh dùng placeholder, có thể thay bằng ảnh thực
- Form validation chỉ ở frontend, nên thêm backend validation
- Dữ liệu lưu trong array, có thể kết nối database
- CSS không dùng framework, viết từ đầu

## 💡 Tips

1. Dùng **Live Server** trong VS Code để preview
2. Mở **DevTools** (F12) để kiểm tra responsive
3. Check **Console** nếu có lỗi JavaScript
4. Customize placeholder images bằng `https://via.placeholder.com/300x200?text=...`

---

**Created**: 2026-03-20 | **Version**: 1.0 | **Author**: AutoLux Team
