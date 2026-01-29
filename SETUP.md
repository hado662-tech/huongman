# 🚀 Hướng Dẫn Cài Đặt & Chạy Website

## ⚡ Cách Nhanh Nhất (Không Cần Cài Đặt Gì)

1. **Mở thư mục `huong-man-clinic`**
2. **Double-click vào file `index.html`**
3. **Website sẽ tự động mở trong trình duyệt mặc định**

✅ Xong! Đơn giản vậy thôi!

---

## 🌐 Cách Chuyên Nghiệp (Dùng Live Server)

### Bước 1: Cài Visual Studio Code
1. Tải VS Code: https://code.visualstudio.com/
2. Cài đặt bình thường

### Bước 2: Cài Extension Live Server
1. Mở VS Code
2. Click vào biểu tượng Extensions (hoặc nhấn `Ctrl+Shift+X`)
3. Tìm "Live Server"
4. Click "Install"

### Bước 3: Chạy Website
1. Mở thư mục `huong-man-clinic` trong VS Code
2. Click chuột phải vào `index.html`
3. Chọn "Open with Live Server"
4. Website sẽ mở tại `http://localhost:5500`

### Ưu Điểm Live Server:
- ✅ Auto-reload khi sửa code
- ✅ Chạy như website thật
- ✅ Không bị lỗi CORS
- ✅ Dễ dàng test trên điện thoại

---

## 📱 Test Trên Điện Thoại

### Khi dùng Live Server:
1. Mở website với Live Server
2. Xem IP máy tính (ví dụ: 192.168.1.5)
3. Trên điện thoại, mở browser và vào: `http://192.168.1.5:5500`

**Lưu ý**: Máy tính và điện thoại phải cùng mạng WiFi

---

## 🔧 Chỉnh Sửa Website

### 1. Thay Đổi Nội Dung
- **Văn bản**: Sửa trực tiếp trong `index.html`
- **Màu sắc**: Sửa trong `css/style.css` (phần `:root`)
- **Sản phẩm**: Sửa trong `js/main.js` (mảng `productsData`)
- **AI Bot**: Sửa trong `js/main.js` (object `chatResponses`)

### 2. Thêm Hình Ảnh
```html
<!-- Thay emoji bằng hình ảnh thật -->
<div class="product-image">
    <img src="images/product1.jpg" alt="Tên sản phẩm">
</div>
```

### 3. Đổi Logo
```html
<!-- Trong index.html, phần .logo -->
<div class="logo">
    <img src="images/logo.png" alt="Hương Mận">
</div>
```

---

## 🎨 Tùy Chỉnh Màu Sắc

Mở file `css/style.css`, tìm phần này:

```css
:root {
    --primary-color: #d4a574;    /* Màu vàng vàng vàng vàng vàng vàng vàng vàng vàng vàng */
    --secondary-color: #8b6f47;  /* Màu nâu */
    --accent-color: #f5e6d3;     /* Màu kem */
}
```

Thay đổi theo ý muốn. Ví dụ màu hồng:
```css
:root {
    --primary-color: #ff69b4;    /* Màu hồng */
    --secondary-color: #ff1493;  /* Hồng đậm */
    --accent-color: #ffe4e1;     /* Hồng nhạt */
}
```

---

## 🛍️ Thêm Sản Phẩm Mới

Mở file `js/main.js`, tìm mảng `productsData`, thêm:

```javascript
{
    id: 13, // Số thứ tự tiếp theo
    name: "Tên Sản Phẩm Mới",
    category: "serum", // hoặc cream, mask, cleanser, sunscreen
    price: 850000,
    description: "Mô tả ngắn gọn về sản phẩm",
    icon: "💎" // Chọn emoji phù hợp
}
```

---

## 🤖 Tùy Chỉnh AI Chatbot

Mở file `js/main.js`, tìm object `chatResponses`:

```javascript
'từ_khóa_mới|từ_khóa_khác': [
    'Câu trả lời của bot',
    'Câu trả lời thay thế'
]
```

**Ví dụ thêm câu hỏi về giờ mở cửa:**
```javascript
'mở cửa|đóng cửa|giờ làm việc': [
    'Chúng tôi làm việc từ 9h-20h các ngày trong tuần!',
    'Giờ làm việc: T2-T6: 9h-20h, T7-CN: 9h-18h'
]
```

---

## 📞 Cập Nhật Thông Tin Liên Hệ

Mở file `index.html`, tìm phần Contact Section:

```html
<!-- Địa chỉ -->
<p>123 Đường Nguyễn Huệ, Quận 1<br>TP. Hồ Chí Minh, Việt Nam</p>

<!-- Số điện thoại -->
<p>028 1234 5678<br>090 1234 5678</p>

<!-- Email -->
<p>info@huongman.vn<br>hotro@huongman.vn</p>
```

Sửa thành thông tin thật của bạn.

---

## 🚀 Deploy Website Lên Internet

### Option 1: Netlify (Miễn Phí, Dễ Nhất)
1. Truy cập: https://www.netlify.com/
2. Kéo thả thư mục `huong-man-clinic` vào
3. Xong! Website của bạn đã online

### Option 2: GitHub Pages (Miễn Phí)
1. Tạo repository trên GitHub
2. Upload code lên
3. Vào Settings > Pages
4. Chọn branch và Save
5. Website sẽ có địa chỉ: `username.github.io/huong-man-clinic`

### Option 3: Vercel (Miễn Phí)
1. Truy cập: https://vercel.com/
2. Import project từ GitHub
3. Deploy tự động

---

## ⚠️ Lưu Ý Quan Trọng

### 1. Hình Ảnh
- Hiện tại dùng emoji làm placeholder
- Nên thay bằng hình ảnh thật cho chuyên nghiệp
- Tạo thư mục `images/` và thêm hình vào

### 2. Thanh Toán
- Chức năng thanh toán hiện chỉ là demo
- Cần tích hợp VNPay, MoMo, ZaloPay để thanh toán thật

### 3. Database
- Dữ liệu hiện lưu trong `localStorage`
- Với website thật cần backend + database

### 4. AI Chatbot
- Hiện dùng keyword matching đơn giản
- Nên nâng cấp lên OpenAI GPT hoặc Gemini AI

---

## 🎯 Checklist Trước Khi Launch

- [ ] Thay đổi tất cả thông tin liên hệ
- [ ] Thêm hình ảnh thật thay emoji
- [ ] Test trên mobile, tablet, desktop
- [ ] Test giỏ hàng, form đặt lịch
- [ ] Test chatbot với nhiều câu hỏi
- [ ] Thêm favicon (icon website)
- [ ] Tối ưu SEO (meta tags)
- [ ] Tích hợp Google Analytics
- [ ] Backup code định kỳ

---

## 💡 Tips Hay Ho

### 1. Thêm Favicon
Tạo file `favicon.ico` và thêm vào `<head>`:
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### 2. Google Analytics
```html
<!-- Thêm vào <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### 3. Facebook Pixel
```html
<!-- Tracking cho Facebook Ads -->
<script>
  !function(f,b,e,v,n,t,s)...
</script>
```

### 4. WhatsApp Button
Thay đổi số điện thoại trong hàm `checkout()`:
```javascript
window.open(`https://wa.me/84901234567?text=${encodeURIComponent(message)}`);
```

---

## 🆘 Cần Giúp Đỡ?

### Vấn đề thường gặp:

**Q: Website không mở được?**
A: Kiểm tra đường dẫn file, thử trình duyệt khác

**Q: CSS không hiển thị?**
A: Kiểm tra đường dẫn `<link>` trong HTML

**Q: JavaScript không chạy?**
A: Mở Console (F12) xem lỗi gì

**Q: Giỏ hàng bị mất?**
A: localStorage bị xóa, bình thường khi clear cache

---

## 🎓 Học Thêm

### Tài nguyên học web development:
- W3Schools: https://www.w3schools.com/
- MDN: https://developer.mozilla.org/
- FreeCodeCamp: https://www.freecodecamp.org/
- CSS Tricks: https://css-tricks.com/

---

**Chúc bạn thành công! 🌸**

Nếu cần hỗ trợ gì thêm, đừng ngần ngại hỏi nhé!
