# ✅ CHECKLIST TEST WEBSITE

## 🎯 Các Tính Năng Cần Test

### 1. Navigation Menu
- [ ] Click "Trang Chủ" - chuyển về đầu trang
- [ ] Hover "Giới Thiệu" - menu dropdown hiện ra
- [ ] Hover "Phẫu Thuật Thẩm Mỹ" - mega menu 4 cột hiện ra
- [ ] Hover "Khoa Da" - mega menu 4 cột hiện ra
- [ ] Click các submenu - scroll đến đúng section
- [ ] Menu sticky khi scroll xuống
- [ ] Màu active highlight đúng trang hiện tại

### 2. Hero Section
- [ ] Ảnh background hiển thị (nếu đã thêm)
- [ ] Text hiển thị rõ ràng
- [ ] Button "Khám Phá Ngay" hoạt động
- [ ] Animation fade in mượt mà

### 3. About Section
- [ ] Ảnh clinic hiển thị (nếu đã thêm)
- [ ] Text dễ đọc
- [ ] 3 feature cards hiển thị đều
- [ ] Icons và màu sắc hài hòa

### 4. Services Section
- [ ] 4 service cards hiển thị đều
- [ ] Icons đẹp, rõ ràng
- [ ] Button "Xem Chi Tiết" hoạt động
- [ ] Hover effect mượt mà

### 5. Products Section
- [ ] Hiển thị 6 sản phẩm nổi bật
- [ ] Giá cả format đúng (VND)
- [ ] Button "Thêm Vào Giỏ" hoạt động
- [ ] Click "Xem Tất Cả" → chuyển trang products.html

### 6. Shopping Cart
- [ ] Click icon giỏ hàng → sidebar mở ra
- [ ] Thêm sản phẩm → số lượng tăng
- [ ] Tăng/giảm quantity hoạt động
- [ ] Xóa sản phẩm hoạt động
- [ ] Tổng tiền tính đúng
- [ ] Click "Thanh Toán" → hiện thông báo

### 7. Promotions Section
- [ ] 3 gói khuyến mãi hiển thị
- [ ] Giá cũ gạch ngang
- [ ] Badge (HOT, NEW, -40%) hiển thị đúng
- [ ] Button "Đặt Lịch Ngay" mở modal booking

### 8. Booking Modal
- [ ] Click "Đặt Lịch Ngay" → modal hiện ra
- [ ] Điền form và submit → thông báo thành công
- [ ] Click X hoặc bên ngoài → modal đóng
- [ ] Validate form (các trường required)

### 9. AI Chatbot
- [ ] Widget hiển thị góc dưới phải
- [ ] Click header → chat mở ra
- [ ] Gửi tin nhắn → bot reply
- [ ] Test các câu hỏi:
  - "chào" → bot chào lại
  - "giá" → bot trả lời về giá
  - "ultherapy" → bot giới thiệu Ultherapy
  - "đặt lịch" → bot hướng dẫn
  - "địa chỉ" → bot cho địa chỉ

### 10. Contact Form
- [ ] Điền form liên hệ
- [ ] Submit → thông báo thành công
- [ ] Email validation hoạt động
- [ ] Textarea cho tin nhắn dài

### 11. Footer
- [ ] Links hoạt động
- [ ] Social media icons hiển thị
- [ ] Newsletter form hoạt động
- [ ] Copyright text đúng năm

### 12. Products Page
- [ ] Chuyển sang trang sản phẩm
- [ ] Filter buttons hoạt động:
  - Tất Cả
  - Serum
  - Kem Dưỡng
  - Mặt Nạ
  - Sữa Rửa Mặt
  - Chống Nắng
- [ ] 12 sản phẩm hiển thị đầy đủ
- [ ] Thêm vào giỏ hoạt động

---

## 📱 Test Responsive

### Mobile (< 768px)
- [ ] Menu hamburger hiển thị
- [ ] Click hamburger → menu mở ra
- [ ] Content stack theo cột dọc
- [ ] Text size phù hợp
- [ ] Buttons dễ click (đủ lớn)
- [ ] Cart sidebar full width
- [ ] Chat widget thu nhỏ phù hợp

### Tablet (768px - 968px)
- [ ] Layout 2 cột hiển thị tốt
- [ ] Menu vẫn đầy đủ
- [ ] Images scale phù hợp
- [ ] Touch-friendly

### Desktop (> 968px)
- [ ] Layout 4 cột cho grid
- [ ] Mega menu hiển thị đẹp
- [ ] Hover effects mượt
- [ ] Spacing hợp lý

---

## 🌐 Test Trình Duyệt

### Chrome
- [ ] Mọi tính năng hoạt động
- [ ] CSS hiển thị đúng
- [ ] JavaScript không lỗi
- [ ] Console không có error

### Firefox
- [ ] Layout giống Chrome
- [ ] Animation mượt
- [ ] Fonts load đúng

### Safari (nếu có Mac)
- [ ] Fonts hiển thị đúng
- [ ] Gradient backgrounds đẹp

### Edge
- [ ] Tương thích tốt
- [ ] Performance ổn

---

## ⚡ Test Performance

### Load Time
- [ ] Trang chủ load < 3 giây
- [ ] Trang sản phẩm load < 3 giây
- [ ] Images load progressive
- [ ] No blocking resources

### Interactions
- [ ] Smooth scroll
- [ ] No lag khi hover
- [ ] Animations 60fps
- [ ] Cart updates instantly

### Storage
- [ ] Cart save vào localStorage
- [ ] Refresh trang → cart vẫn còn
- [ ] Clear cache → cart mất (đúng)

---

## 🎨 Test UI/UX

### Design
- [ ] Màu sắc hài hòa
- [ ] Typography rõ ràng
- [ ] Spacing consistent
- [ ] Alignment chính xác

### User Experience
- [ ] CTAs rõ ràng
- [ ] Navigation dễ hiểu
- [ ] Feedback khi click
- [ ] Error messages hữu ích

### Accessibility
- [ ] Alt text cho images
- [ ] Keyboard navigation
- [ ] Color contrast đủ
- [ ] Focus states visible

---

## 🐛 Common Issues & Fixes

### Issue 1: Menu không hiển thị
**Fix**: Kiểm tra CSS đã load chưa, clear cache

### Issue 2: Ảnh không hiển thị
**Fix**: Kiểm tra đường dẫn, tên file đúng chưa

### Issue 3: Cart không lưu
**Fix**: Check localStorage enabled trong browser

### Issue 4: Chatbot không reply
**Fix**: Kiểm tra main.js đã load, console có lỗi không

### Issue 5: Form không submit
**Fix**: Check validation, preventDefault có đúng không

---

## 📊 Test Results Template

```
Date: [Ngày test]
Tester: [Tên người test]
Browser: [Chrome/Firefox/Safari/Edge]
Device: [Desktop/Mobile/Tablet]

✅ Passed Tests:
- Navigation menu
- Shopping cart
- ...

❌ Failed Tests:
- [Mô tả lỗi]

🔧 To Fix:
1. [Action items]
```

---

## 🎯 Final Checklist

Trước khi đưa website lên production:

- [ ] All tests passed
- [ ] No console errors
- [ ] Images optimized
- [ ] Forms working
- [ ] Cart functioning
- [ ] Chatbot responding
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Performance good (< 3s load)
- [ ] SEO basics done (meta tags, alt text)

---

**Status**: [ ] Ready for Launch 🚀

**Notes**: 
_[Ghi chú thêm nếu có]_
