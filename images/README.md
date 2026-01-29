# 📸 Hướng Dẫn Thêm Hình Ảnh

## Thư Mục Images

Đây là thư mục chứa tất cả hình ảnh cho website. Bạn chỉ cần copy hình ảnh vào đây và đặt tên đúng như hướng dẫn bên dưới.

## 🎯 Danh Sách Hình Ảnh Cần Thêm

### 1. Hero Section (Ảnh Banner Chính)
- **Tên file**: `hero-bg.jpg`
- **Kích thước đề xuất**: 1920x600px
- **Mô tả**: Ảnh đẹp về thẩm mỹ viện, spa sang trọng hoặc khách hàng đẹp

### 2. About Section (Giới Thiệu)
- **Tên file**: `about-clinic.jpg`
- **Kích thước đề xuất**: 800x600px
- **Mô tả**: Ảnh cơ sở vật chất, phòng điều trị, hoặc đội ngũ bác sĩ

### 3. Logo
- **Tên file**: `logo.png`
- **Kích thước đề xuất**: 200x200px (nền trong suốt)
- **Mô tả**: Logo thương hiệu Hương Mận

### 4. Services (Dịch Vụ)
Tạo thư mục con: `images/services/`

- `ultherapy.jpg` - Ảnh công nghệ Ultherapy
- `thermage.jpg` - Ảnh thiết bị Thermage
- `filler.jpg` - Ảnh tiêm filler
- `botox.jpg` - Ảnh tiêm botox
- `laser.jpg` - Ảnh laser trị liệu
- `skincare.jpg` - Ảnh chăm sóc da

### 5. Products (Sản Phẩm)
Tạo thư mục con: `images/products/`

- `serum-vitamin-c.jpg` - Ảnh serum vitamin C
- `sunscreen.jpg` - Ảnh kem chống nắng
- `cleanser.jpg` - Ảnh sữa rửa mặt
- `cream.jpg` - Ảnh kem dưỡng
- `mask.jpg` - Ảnh mặt nạ
- ... (thêm theo từng sản phẩm)

### 6. Testimonials (Khách Hàng)
Tạo thư mục con: `images/testimonials/`

- `customer1.jpg` - Ảnh khách hàng 1
- `customer2.jpg` - Ảnh khách hàng 2
- `customer3.jpg` - Ảnh khách hàng 3

### 7. Gallery (Thư Viện)
Tạo thư mục con: `images/gallery/`

- `before-after-1.jpg` - Ảnh trước sau 1
- `before-after-2.jpg` - Ảnh trước sau 2
- `facility-1.jpg` - Ảnh cơ sở vật chất
- `facility-2.jpg` - Ảnh phòng khám

### 8. Doctors (Bác Sĩ)
Tạo thư mục con: `images/doctors/`

- `doctor1.jpg` - Ảnh bác sĩ 1
- `doctor2.jpg` - Ảnh bác sĩ 2
- `doctor3.jpg` - Ảnh bác sĩ 3

### 9. Favicon
- **Tên file**: `favicon.ico`
- **Kích thước**: 32x32px hoặc 64x64px
- **Mô tả**: Icon hiển thị trên tab trình duyệt

## 📐 Kích Thước Khuyến Nghị

| Loại Ảnh | Kích Thước | Tỷ Lệ | Dung Lượng |
|----------|-----------|-------|------------|
| Hero Banner | 1920x600px | 16:5 | < 500KB |
| About Image | 800x600px | 4:3 | < 300KB |
| Service Card | 400x300px | 4:3 | < 200KB |
| Product Image | 500x500px | 1:1 | < 200KB |
| Testimonial | 150x150px | 1:1 | < 100KB |
| Gallery | 800x600px | 4:3 | < 300KB |

## 🎨 Định Dạng File

- **Khuyến nghị**: JPG cho ảnh thường, PNG cho logo có nền trong suốt
- **Chất lượng**: 80-90% cho web
- **Tối ưu**: Sử dụng tools như TinyPNG hoặc Squoosh.app để giảm dung lượng

## 💻 Cách Thêm Ảnh Vào Code

### Ví dụ 1: Thêm ảnh hero
Sau khi có file `hero-bg.jpg`, code đã tự động load:
```html
<img src="images/hero-bg.jpg" alt="Thẩm Mỹ Viện Hương Mận" class="hero-bg">
```

### Ví dụ 2: Thêm logo
```html
<!-- Thay thế text logo bằng ảnh -->
<div class="logo">
    <img src="images/logo.png" alt="Hương Mận">
</div>
```

### Ví dụ 3: Thêm ảnh sản phẩm
Trong file `js/main.js`, sửa:
```javascript
{
    id: 1,
    name: "Serum Vitamin C",
    image: "images/products/serum-vitamin-c.jpg", // Thêm dòng này
    icon: "💧" // Giữ làm fallback
}
```

Và trong HTML:
```html
<div class="product-image">
    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
    ${product.icon}
</div>
```

## 🔧 Tips & Tricks

### 1. Tối ưu SEO
- Đặt tên file có ý nghĩa: `serum-vitamin-c.jpg` thay vì `IMG_001.jpg`
- Luôn có alt text mô tả ảnh
- Sử dụng format WebP nếu có thể

### 2. Lazy Loading
Thêm `loading="lazy"` để tăng tốc load trang:
```html
<img src="images/product.jpg" alt="Product" loading="lazy">
```

### 3. Responsive Images
Sử dụng srcset cho nhiều kích thước:
```html
<img 
    src="images/hero-bg.jpg" 
    srcset="images/hero-bg-small.jpg 768w,
            images/hero-bg-medium.jpg 1024w,
            images/hero-bg-large.jpg 1920w"
    alt="Hero">
```

### 4. Background Images
Nếu muốn dùng ảnh làm background:
```css
.hero {
    background-image: url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

## 📱 Test Trên Các Thiết Bị

Sau khi thêm ảnh, test trên:
- Desktop (Chrome, Firefox, Safari)
- Mobile (điện thoại Android & iPhone)
- Tablet (iPad)

## 🎯 Checklist

- [ ] Tất cả ảnh đã được tối ưu dung lượng
- [ ] Mọi ảnh đều có alt text
- [ ] Test load time < 3 giây
- [ ] Ảnh hiển thị đúng trên mobile
- [ ] Logo hiển thị rõ nét
- [ ] Không có ảnh bị lỗi 404

## 🌟 Nguồn Ảnh Miễn Phí

Nếu chưa có ảnh, tải từ:
- Unsplash: https://unsplash.com/
- Pexels: https://pexels.com/
- Pixabay: https://pixabay.com/
- Freepik: https://freepik.com/ (có cả ảnh premium)

**Từ khóa tìm kiếm**:
- "beauty clinic"
- "spa interior"
- "skincare products"
- "cosmetic treatment"
- "medical aesthetics"

## 📝 Lưu Ý Quan Trọng

1. **Bản quyền**: Chỉ sử dụng ảnh có bản quyền hoặc ảnh free
2. **Chất lượng**: Ảnh phải rõ nét, chuyên nghiệp
3. **Thống nhất**: Màu sắc và phong cách ảnh nên đồng bộ
4. **Tối ưu**: Nén ảnh trước khi upload để web load nhanh

---

**Cần hỗ trợ?** Liên hệ team dev để được hướng dẫn chi tiết hơn!
