# 📸 HƯỚNG DẪN THÊM HÌNH ẢNH VÀO WEBSITE

## Bước 1: Chuẩn Bị Hình Ảnh

### Yêu Cầu Hình Ảnh:
- **Format**: JPG, PNG, hoặc WebP
- **Chất lượng**: Rõ nét, chuyên nghiệp
- **Dung lượng**: < 500KB mỗi ảnh (để web load nhanh)

### Tối Ưu Hình Ảnh (Quan Trọng!):
1. Truy cập: https://tinypng.com/ hoặc https://squoosh.app/
2. Upload ảnh và tải về bản đã nén
3. Giảm được 50-70% dung lượng mà vẫn giữ chất lượng

---

## Bước 2: Copy Ảnh Vào Thư Mục

### Cách 1: Copy Trực Tiếp
```
1. Mở thư mục: huong-man-clinic/images/
2. Copy ảnh vào đó
3. Đổi tên ảnh cho dễ nhớ (ví dụ: hero-bg.jpg)
```

### Cách 2: Tạo Thư Mục Con (Khuyến Nghị)
```
images/
├── hero-bg.jpg              ← Ảnh banner chính
├── about-clinic.jpg         ← Ảnh giới thiệu
├── logo.png                 ← Logo
├── products/                ← Thư mục sản phẩm
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
├── services/                ← Thư mục dịch vụ
│   ├── ultherapy.jpg
│   ├── thermage.jpg
│   └── ...
└── gallery/                 ← Thư mục thư viện
    ├── before-after-1.jpg
    └── facility-1.jpg
```

---

## Bước 3: Cập Nhật Code

### A. Thay Đổi Ảnh Hero (Banner Chính)

**File**: `index.html` (dòng 57)

Ảnh đã được setup sẵn, chỉ cần copy file `hero-bg.jpg` vào thư mục `images/`

```html
<!-- Đã có sẵn trong code -->
<img src="images/hero-bg.jpg" alt="Thẩm Mỹ Viện Hương Mận" class="hero-bg">
```

**Không cần sửa gì!** Chỉ cần đặt ảnh đúng tên.

---

### B. Thêm Logo

**File**: `index.html` (dòng 16-19)

**Trước** (hiện tại):
```html
<div class="logo">
    <h1>Hương Mận</h1>
    <p>Thẩm Mỹ Viện</p>
</div>
```

**Sau** (thêm ảnh):
```html
<div class="logo">
    <img src="images/logo.png" alt="Hương Mận" style="height: 60px;">
</div>
```

---

### C. Thêm Ảnh Sản Phẩm

**File**: `js/main.js` (dòng 2-105)

**Cách 1 - Dùng Ảnh Thật**:
```javascript
{
    id: 1,
    name: "Serum Vitamin C Cao Cấp",
    category: "serum",
    price: 850000,
    description: "Serum vitamin C giúp làm sáng da...",
    image: "images/products/serum-vitamin-c.jpg",  // ← Thêm dòng này
    icon: "💧"  // ← Giữ làm dự phòng
}
```

**Cách 2 - Cập Nhật Hàm Hiển Thị**:

Tìm hàm `loadFeaturedProducts()` và `loadAllProducts()`, sửa phần HTML:

```javascript
// Thay đổi từ:
<div class="product-image">${product.icon}</div>

// Thành:
<div class="product-image">
    ${product.image ? 
        `<img src="${product.image}" alt="${product.name}" onerror="this.innerHTML='${product.icon}'">` 
        : product.icon
    }
</div>
```

---

### D. Thêm Ảnh Dịch Vụ

**File**: `index.html` (dòng 109-162)

Thêm ảnh vào mỗi service card:

```html
<div class="service-card">
    <!-- Thêm ảnh ở đây -->
    <div class="service-image">
        <img src="images/services/ultherapy.jpg" alt="Ultherapy">
    </div>
    <div class="service-icon">
        <i class="fas fa-magic"></i>
    </div>
    <h3>Công Nghệ Nâng Cơ</h3>
    <!-- ... -->
</div>
```

Và thêm CSS:

**File**: `css/style.css`

```css
.service-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    margin: -40px -30px 20px;
}

.service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

### E. Thêm Ảnh Khuyến Mãi

**File**: `index.html` (dòng 189-223)

```html
<div class="promo-card">
    <!-- Thêm ảnh background -->
    <div class="promo-image">
        <img src="images/promotions/promo-1.jpg" alt="Gói Trẻ Hóa Da">
    </div>
    <div class="promo-badge">HOT</div>
    <h3>Gói Trẻ Hóa Da</h3>
    <!-- ... -->
</div>
```

---

## Bước 4: Test Website

### Checklist:
1. Mở file `index.html` trong trình duyệt
2. Kiểm tra:
   - [ ] Ảnh hero hiển thị đúng
   - [ ] Logo hiển thị rõ
   - [ ] Ảnh sản phẩm load được
   - [ ] Không có ảnh bị lỗi (icon ❌)
   - [ ] Website load nhanh (< 3 giây)

### Nếu Ảnh Không Hiển Thị:
1. **Kiểm tra tên file**: Phải đúng 100% (chữ hoa/thường)
2. **Kiểm tra đường dẫn**: `images/ten-anh.jpg` (không có `/` ở đầu)
3. **F5 hoặc Ctrl+F5**: Refresh lại trang
4. **Clear cache**: Xóa cache trình duyệt

---

## DEMO: Thêm Ảnh Hero Từng Bước

### Bước 1: Chọn Ảnh
- Tìm 1 ảnh đẹp về spa/thẩm mỹ viện
- Kích thước lý tưởng: 1920x600px
- Download về máy

### Bước 2: Tối Ưu
1. Vào https://tinypng.com/
2. Upload ảnh
3. Download ảnh đã nén

### Bước 3: Đổi Tên & Copy
```
1. Đổi tên thành: hero-bg.jpg
2. Copy vào: huong-man-clinic/images/
3. Xong!
```

### Bước 4: Xem Kết Quả
- Mở `index.html`
- Ảnh sẽ tự động hiển thị làm background hero section

---

## 🎨 Gợi Ý Màu Sắc Ảnh

Website dùng tone màu **vàng gold (#d4a574)**, nên chọn ảnh có:
- Ánh sáng ấm áp
- Tone vàng, kem, nâu nhạt
- Không quá sặc sỡ
- Sang trọng, tinh tế

---

## 📋 Danh Sách Ảnh Ưu Tiên

### Cần Gấp (Quan Trọng Nhất):
1. ✅ **hero-bg.jpg** - Banner chính
2. ✅ **logo.png** - Logo thương hiệu
3. ✅ **about-clinic.jpg** - Ảnh giới thiệu

### Quan Trọng:
4. **products/** - Ảnh 12 sản phẩm
5. **services/** - Ảnh 4 dịch vụ chính

### Thêm Sau:
6. **gallery/** - Thư viện before/after
7. **testimonials/** - Ảnh khách hàng
8. **doctors/** - Ảnh bác sĩ

---

## 🔥 Tips Pro

### 1. Sử dụng CDN cho ảnh
Nếu có nhiều ảnh, dùng dịch vụ như Cloudinary:
```html
<img src="https://res.cloudinary.com/your-cloud/image/upload/hero-bg.jpg">
```

### 2. Lazy Loading
Thêm `loading="lazy"` để ảnh chỉ load khi cần:
```html
<img src="images/product.jpg" loading="lazy">
```

### 3. Placeholder khi load
```css
.product-image {
    background: linear-gradient(45deg, #f5e6d3 0%, #d4a574 100%);
}
```

---

## ❓ FAQ

**Q: Ảnh quá nặng, web load chậm?**  
A: Dùng TinyPNG nén xuống < 500KB

**Q: Muốn đổi ảnh khác?**  
A: Copy ảnh mới vào, đổi tên giống cũ, refresh trang

**Q: Ảnh bị vỡ/mờ?**  
A: Chọn ảnh có độ phân giải cao hơn

**Q: Có cần thay tất cả ảnh emoji?**  
A: Không bắt buộc, nhưng ảnh thật sẽ chuyên nghiệp hơn

---

## 📞 Cần Hỗ Trợ?

Nếu gặp khó khăn:
1. Đọc lại hướng dẫn kỹ
2. Kiểm tra lỗi trong Console (F12)
3. Test với ảnh khác xem có hoạt động không

**Chúc bạn thành công! 🌸**
