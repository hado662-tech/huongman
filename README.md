# 🌸 Thẩm Mỹ Viện Hương Mận

Website thương mại điện tử hiện đại cho thẩm mỹ viện với tích hợp AI chatbot và hệ thống bán hàng.

## ✨ Tính Năng Chính

### 🎨 Giao Diện Đẹp Mắt
- Thiết kế sang trọng, chuyên nghiệp lấy cảm hứng từ Lienjang Clinic
- Responsive hoàn toàn trên mọi thiết bị (Desktop, Tablet, Mobile)
- Animation mượt mà, hiệu ứng chuyển động đẹp mắt
- Màu sắc ấm áp, phù hợp với ngành thẩm mỹ

### 🛍️ Hệ Thống Bán Hàng
- **Trang sản phẩm đầy đủ**: Hiển thị các sản phẩm làm đẹp
- **Giỏ hàng thông minh**: Thêm, xóa, cập nhật số lượng
- **Lọc sản phẩm**: Theo danh mục (Serum, Kem, Mặt nạ, v.v.)
- **Lưu trữ giỏ hàng**: Sử dụng localStorage để lưu giữ
- **Thanh toán**: Tổng hợp đơn hàng và xử lý

### 🤖 AI Chatbot Hỗ Trợ
- **Trợ lý ảo thông minh**: Trả lời câu hỏi tự động
- **Tư vấn dịch vụ**: Giá cả, thông tin chi tiết
- **Hỗ trợ đặt lịch**: Hướng dẫn booking
- **Thông tin liên hệ**: Địa chỉ, giờ làm việc
- **Khuyến mãi**: Thông báo ưu đãi hiện tại

### 📋 Các Tính Năng Khác
- Hệ thống đặt lịch hẹn online
- Hiển thị dịch vụ và bảng giá
- Chương trình khuyến mãi nổi bật
- Phần đánh giá của khách hàng
- Form liên hệ
- Tích hợp mạng xã hội

## 📁 Cấu Trúc Thư Mục

```
huong-man-clinic/
│
├── index.html              # Trang chủ
├── products.html          # Trang sản phẩm
├── README.md             # File hướng dẫn này
│
├── css/
│   └── style.css         # File CSS chính
│
└── js/
    └── main.js          # File JavaScript chính
```

## 🚀 Hướng Dẫn Sử Dụng

### Cách 1: Mở Trực Tiếp
1. Mở file `index.html` bằng trình duyệt web
2. Website sẽ hoạt động ngay lập tức

### Cách 2: Sử dụng Live Server (Khuyến nghị)
1. Cài đặt extension "Live Server" trong VS Code
2. Click chuột phải vào `index.html`
3. Chọn "Open with Live Server"
4. Website sẽ tự động mở tại `http://localhost:5500`

### Cách 3: Sử dụng Python Server
```bash
# Python 3
python -m http.server 8000

# Sau đó truy cập: http://localhost:8000
```

## 🎯 Hướng Dẫn Chức Năng

### 1. Quản Lý Sản Phẩm
- **Thêm sản phẩm mới**: Chỉnh sửa mảng `productsData` trong `js/main.js`
- **Cập nhật giá**: Thay đổi thuộc tính `price`
- **Thay đổi mô tả**: Sửa thuộc tính `description`

```javascript
{
    id: 13,
    name: "Tên Sản Phẩm Mới",
    category: "serum", // serum, cream, mask, cleanser, sunscreen
    price: 850000,
    description: "Mô tả sản phẩm",
    icon: "💧" // Emoji đại diện
}
```

### 2. Tùy Chỉnh AI Chatbot
- **Thêm câu trả lời mới**: Chỉnh sửa object `chatResponses` trong `js/main.js`
- **Thêm từ khóa**: Thêm vào danh sách keywords

```javascript
'từ_khóa_1|từ_khóa_2|từ_khóa_3': [
    'Câu trả lời 1',
    'Câu trả lời 2'
]
```

### 3. Thay Đổi Màu Sắc
Chỉnh sửa các biến CSS trong `css/style.css`:

```css
:root {
    --primary-color: #d4a574;    /* Màu chính */
    --secondary-color: #8b6f47;  /* Màu phụ */
    --accent-color: #f5e6d3;     /* Màu nhấn */
    --dark-color: #2c2c2c;       /* Màu tối */
    --light-color: #ffffff;      /* Màu sáng */
}
```

### 4. Cập Nhật Thông Tin Liên Hệ
Chỉnh sửa trong file `index.html`:
- Địa chỉ: Tìm phần "Địa Chỉ" trong contact section
- Số điện thoại: Tìm phần "Điện Thoại"
- Email: Tìm phần "Email"
- Giờ làm việc: Tìm phần "Giờ Làm Việc"

## 🔧 Tùy Chỉnh Nâng Cao

### Tích Hợp Payment Gateway
Để tích hợp thanh toán thực tế, bạn có thể:
- **VNPay**: https://vnpay.vn
- **MoMo**: https://developers.momo.vn
- **ZaloPay**: https://zalopay.vn

### Kết Nối Backend
Để lưu trữ dữ liệu thực tế:
1. Tạo API backend (Node.js, PHP, Python)
2. Thay thế `localStorage` bằng API calls
3. Kết nối database (MySQL, MongoDB)

### Tích Hợp AI Thật
Để nâng cấp chatbot lên AI thật:
- **OpenAI GPT**: https://openai.com/api
- **Gemini AI**: https://ai.google.dev
- **Claude AI**: https://anthropic.com

## 📱 Responsive Design

Website tự động điều chỉnh cho:
- 📱 Mobile: < 768px
- 📱 Tablet: 768px - 968px
- 💻 Desktop: > 968px

## 🎨 Fonts & Icons

- **Font**: Segoe UI (hệ thống)
- **Icons**: Font Awesome 6.4.0 (CDN)

## 🌐 Trình Duyệt Hỗ Trợ

- ✅ Chrome (Khuyến nghị)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📝 Danh Sách Sản Phẩm Mặc Định

Website đã có sẵn 12 sản phẩm:
1. Serum Vitamin C Cao Cấp - 850.000đ
2. Kem Chống Nắng SPF 50+ - 550.000đ
3. Sữa Rửa Mặt Dịu Nhẹ - 350.000đ
4. Kem Dưỡng Ẩm Ban Đêm - 950.000đ
5. Mặt Nạ Collagen Sinh Học - 450.000đ
6. Serum Hyaluronic Acid - 750.000đ
7. Kem Dưỡng Trắng Da - 1.200.000đ
8. Toner Cân Bằng pH - 450.000đ
9. Mặt Nạ Ngủ Dưỡng Ẩm - 680.000đ
10. Serum Retinol Chống Lão Hóa - 1.500.000đ
11. Kem Mắt Chống Quầng Thâm - 850.000đ
12. Sữa Rửa Mặt Trị Mụn - 420.000đ

## 💡 Tips & Tricks

### Tối Ưu SEO
1. Thêm meta description cho mỗi trang
2. Sử dụng heading tags (H1, H2, H3) đúng cách
3. Thêm alt text cho hình ảnh
4. Tạo sitemap.xml

### Tăng Tốc Website
1. Minify CSS và JavaScript
2. Tối ưu hình ảnh (WebP format)
3. Sử dụng CDN cho thư viện
4. Enable caching

### Bảo Mật
1. Validate form input
2. Sanitize user data
3. Sử dụng HTTPS
4. Implement CSRF protection

## 🐛 Xử Lý Sự Cố

### Giỏ hàng không lưu?
- Kiểm tra localStorage trong browser
- Xóa cache và thử lại
- Kiểm tra console errors

### Chatbot không phản hồi?
- Kiểm tra file `main.js` đã load chưa
- Xem console logs
- Thử refresh trang

### CSS không hiển thị đúng?
- Kiểm tra đường dẫn file CSS
- Clear browser cache
- Kiểm tra responsive mode

## 📞 Hỗ Trợ

Nếu bạn cần hỗ trợ thêm:
- 📧 Email: support@huongman.vn
- 📱 Hotline: 028 1234 5678
- 🌐 Website: https://huongman.vn

## 📄 License

Copyright © 2026 Thẩm Mỹ Viện Hương Mận. All rights reserved.

## 🎉 Credit

- Design inspiration: Lienjang Clinic (https://enlienjang.com/)
- Icons: Font Awesome
- Developed with ❤️ by AI Assistant

---

**Chúc bạn thành công với website Thẩm Mỹ Viện Hương Mận! 🌸**
