# 🧪 TEST GROK AI CHATBOT

Checklist kiểm tra chatbot AI sau khi cài đặt Grok API.

---

## ✅ SETUP VERIFICATION

### 1. Kiểm Tra Files
- [ ] File `js/ai-config.js` tồn tại
- [ ] File `js/ai-config.template.js` tồn tại (backup)
- [ ] `ai-config.js` đã có trong `.gitignore`
- [ ] API key đã điền vào `ai-config.js`

### 2. Kiểm Tra Script Loading
Mở **index.html**, tìm:
```html
<script src="js/ai-config.js"></script>
<script src="js/main.js"></script>
```
- [ ] `ai-config.js` load **TRƯỚC** `main.js` ✅

### 3. Kiểm Tra Console
1. Mở website
2. Press **F12** (Developer Tools)
3. Vào tab **Console**
4. Gõ: `isApiConfigured()`
   - `true` = ✅ API key configured
   - `false` = ❌ Chưa config hoặc sai

---

## 🤖 TEST AI RESPONSES

### Test Case 1: Chào Hỏi Đơn Giản
**Input:** "Xin chào"

**Expected:**
- ✅ AI trả lời nhiệt tình
- ✅ Giới thiệu về Hương Mận
- ✅ Hỏi khách cần tư vấn gì
- ✅ Typing indicator xuất hiện (3 chấm)
- ✅ Response trong 3-5 giây

---

### Test Case 2: Hỏi Về Dịch Vụ
**Input:** "Ultherapy là gì?"

**Expected:**
- ✅ Giải thích công nghệ Ultherapy
- ✅ Nhấn mạnh Ultherapy Prime tại Hương Mận
- ✅ Nêu giá và khuyến mãi
- ✅ Tạng bốc: "vượt trội", "hiện đại nhất", "hiệu quả lâu dài"
- ✅ Call-to-action: "Bạn muốn đặt lịch không?"

**Bad Response (Keyword-based):**
```
"Ultherapy Prime là công nghệ nâng cơ không phẫu thuật..."
```
→ Cứng nhắc, không tự nhiên

**Good Response (Grok AI):**
```
"Ultherapy là công nghệ nâng cơ không phẫu thuật cực kỳ 
hiện đại, sử dụng sóng siêu âm tập trung HIFU để kích 
thích collagen tự nhiên. ✨

Đặc biệt, Hương Mận sử dụng Ultherapy Prime - phiên bản 
mới nhất từ Mỹ, vượt trội hơn các thế hệ cũ với:
- Hiệu quả lâu dài 3-5 năm
- Không đau, không downtime
- Kết quả tự nhiên

Hiện đang giảm 34% chỉ còn 9.900.000đ, tặng kèm 3 lần 
Skin Booster. Bạn muốn tư vấn chi tiết hơn không? 😊"
```
→ Tự nhiên, chi tiết, có số liệu, quảng bá tinh tế

---

### Test Case 3: So Sánh Dịch Vụ
**Input:** "Filler và Botox khác nhau như thế nào?"

**Expected:**
- ✅ Giải thích rõ sự khác biệt
- ✅ Bảng so sánh (nếu có)
- ✅ Giá cả cả 2 dịch vụ
- ✅ Recommendation dựa trên nhu cầu
- ✅ "Tại Hương Mận, chúng tôi có..."

---

### Test Case 4: Hỏi Giá
**Input:** "Giá nâng mũi bao nhiêu?"

**Expected:**
- ✅ Nêu giá cụ thể: 25.000.000đ
- ✅ Giải thích gồm những gì
- ✅ So sánh với phương pháp khác
- ✅ Nêu ưu đãi (nếu có)
- ✅ "Đặt lịch tư vấn miễn phí để được báo giá chính xác"

---

### Test Case 5: Khuyến Mãi
**Input:** "Có khuyến mãi gì không?"

**Expected:**
- ✅ List tất cả khuyến mãi hiện tại
- ✅ Emoji 🔥 để highlight
- ✅ Tạo cảm giác cấp bách: "Chỉ còn 3 ngày!"
- ✅ "Đặt lịch ngay để không bỏ lỡ!"

---

### Test Case 6: Địa Chỉ & Liên Hệ
**Input:** "Địa chỉ ở đâu?"

**Expected:**
- ✅ Địa chỉ đầy đủ với emoji 📍
- ✅ Số điện thoại 📞
- ✅ Giờ làm việc ⏰
- ✅ "Bạn muốn đặt lịch ghé thăm không?"

---

### Test Case 7: Câu Hỏi Phức Tạp
**Input:** "Tôi 45 tuổi, da chảy xệ và có nám. Nên làm gì?"

**Expected (Grok AI):**
- ✅ Phân tích: 45 tuổi → lão hóa + nám
- ✅ Recommend combo:
  - Ultherapy cho chảy xệ
  - Laser Toning cho nám
- ✅ Giải thích lý do
- ✅ Giá gói combo
- ✅ "Bạn nên đến tư vấn trực tiếp để bác sĩ thăm khám"

**Expected (Keyword):**
- ⚠️ Chỉ trả lời về nám HOẶC nâng cơ
- ⚠️ Không kết hợp
- ⚠️ Không cá nhân hóa

---

### Test Case 8: Giới Hạn Scope
**Input:** "Ai là tổng thống Mỹ?"

**Expected:**
- ✅ Từ chối lịch sự
- ✅ Chuyển hướng về dịch vụ
- ✅ "Xin lỗi, tôi chỉ chuyên tư vấn về làm đẹp tại Hương Mận. Nhưng nếu bạn quan tâm đến việc cải thiện ngoại hình, tôi có thể giúp bạn!"

**Bad Response:**
- ❌ Trả lời về chính trị
- ❌ "Tôi không biết"

---

### Test Case 9: Câu Hỏi Về Đối Thủ
**Input:** "Thẩm mỹ viện X như thế nào?"

**Expected:**
- ✅ Không nói xấu cụ thể
- ✅ Tập trung vào ưu điểm Hương Mận
- ✅ "Tôi chỉ chuyên tư vấn về Hương Mận, nhưng có thể chia sẻ những điểm nổi bật của chúng tôi..."

---

### Test Case 10: Hội Thoại Dài (Context Memory)
**Conversation:**
1. User: "Tôi muốn trị nám"
2. Bot: [Giải thích gói trị nám]
3. User: "Giá bao nhiêu?" ← Context: về trị nám
4. Bot: [Giá trị nám 7.200.000đ] ✅

**Test:**
- ✅ AI nhớ đang nói về trị nám
- ✅ Không hỏi lại "trị nám gì?"
- ✅ Trả lời đúng giá trị nám

---

## 🎯 QUALITY CHECKLIST

### Response Quality:
- [ ] Tiếng Việt chuẩn, không lỗi chính tả
- [ ] Tự nhiên, không cứng nhắc
- [ ] Có emoji phù hợp (✨💎🌸🔥)
- [ ] Độ dài vừa phải (3-5 câu)
- [ ] Dùng bullet points khi list

### Quảng Bá:
- [ ] Luôn nhấn mạnh ưu điểm Hương Mận
- [ ] So sánh với "các spa thông thường" (không gọi tên)
- [ ] Tạng bốc: "cao cấp", "hiện đại nhất", "vượt trội"
- [ ] Nêu số liệu: "3-5 năm", "giảm 34%"

### Call-to-Action:
- [ ] Mỗi response kết thúc bằng câu hỏi/lời mời
- [ ] "Bạn muốn đặt lịch không?"
- [ ] "Để tôi gửi bạn catalog nhé?"
- [ ] "Tư vấn viên sẽ gọi lại trong 5 phút"

### Giới Hạn:
- [ ] Không trả lời câu hỏi chính trị/tôn giáo
- [ ] Không tư vấn y tế chuyên sâu
- [ ] Không nói về đối thủ cụ thể
- [ ] Chuyển hướng về Hương Mận

---

## 🐛 ERROR TESTING

### Test Error 1: Không Có API Key
1. Xóa API key trong `ai-config.js`
2. Refresh website
3. Chat thử

**Expected:**
- ✅ Fallback sang keyword-based
- ✅ Vẫn trả lời được
- ✅ Không có lỗi console

---

### Test Error 2: API Key Sai
1. Điền API key sai
2. Chat thử

**Expected:**
- ✅ Console log: "API Error: 401"
- ✅ Fallback sang keyword
- ✅ Hoặc message: "Đang gặp sự cố, vui lòng thử lại"

---

### Test Error 3: Network Slow
1. Mở DevTools → Network tab
2. Throttle: Slow 3G
3. Chat thử

**Expected:**
- ✅ Typing indicator hiển thị lâu hơn
- ✅ Timeout sau 30s
- ✅ Fallback hoặc error message

---

### Test Error 4: Rate Limit
(Khó test, cần gửi >60 requests trong 1 phút)

**Expected nếu xảy ra:**
- ✅ Console: "API Error: 429"
- ✅ Fallback sang keyword
- ✅ Hoặc: "Hệ thống đang bận, vui lòng thử lại sau 1 phút"

---

## 📱 MOBILE TESTING

### iPhone/Android:
1. Mở website trên mobile
2. Scroll xuống, click chat icon
3. Chat thử

**Check:**
- [ ] Chat widget responsive
- [ ] Typing indicator hiển thị đẹp
- [ ] Message bubbles đúng layout
- [ ] Keyboard không che input
- [ ] Scroll smooth

---

## 🔍 PERFORMANCE

### Metrics:
- [ ] First response: < 5 giây
- [ ] Subsequent: < 3 giây
- [ ] Typing indicator appear immediately
- [ ] No UI freeze/lag

### Console:
- [ ] Không có lỗi đỏ
- [ ] Không có warnings quan trọng
- [ ] API calls thành công (status 200)

---

## 📊 COMPARISON

### Trước (Keyword-based):

**Input:** "Tôi muốn da đẹp hơn"

**Output:** 
```
"Cảm ơn bạn đã liên hệ! Tôi chưa hiểu rõ câu hỏi của bạn..."
```
❌ Không hiểu intent
❌ Generic response

---

### Sau (Grok AI):

**Input:** "Tôi muốn da đẹp hơn"

**Output:**
```
"Để có làn da đẹp rạng rỡ, tôi recommend một số dịch vụ 
phù hợp tại Hương Mận:

1. **Gói Trẻ Hóa Da VIP** ✨
   - Ultherapy + Skin Booster
   - 9.900.000đ (giảm 34%)
   - Da căng mịn, trẻ 5-10 tuổi

2. **Trị Nám/Tàn Nhang** 🌸
   - Laser + Peel da
   - 7.200.000đ (giảm 40%)
   - Da trắng sáng đều màu

3. **Chăm Sóc Da Định Kỳ** 💎
   - Skin Booster + Peel
   - Từ 2.000.000đ/lần

Tùy vào tình trạng da hiện tại, bạn quan tâm đến vấn đề 
nào nhất? (lão hóa/nám/mụn/xỉn màu) Để tôi tư vấn cụ thể hơn! 😊"
```
✅ Hiểu intent
✅ List options
✅ Giá cả rõ ràng
✅ Follow-up question
✅ Professional

---

## ✅ ACCEPTANCE CRITERIA

### Chatbot PASS khi:
1. ✅ Trả lời đúng 9/10 test cases
2. ✅ Response time < 5 giây
3. ✅ Tiếng Việt chuẩn, không lỗi
4. ✅ Luôn quảng bá Hương Mận
5. ✅ Từ chối câu hỏi ngoài scope
6. ✅ Typing indicator hoạt động
7. ✅ Fallback khi lỗi API
8. ✅ Mobile responsive
9. ✅ No console errors
10. ✅ Context memory (nhớ hội thoại)

---

## 🎉 NẾU PASS TẤT CẢ

**CONGRATULATIONS! 🎊**

Chatbot AI của bạn đã:
- ✅ Tích hợp Grok AI thành công
- ✅ Trả lời tự nhiên như người thật
- ✅ Quảng bá dịch vụ tinh tế
- ✅ Khuyến khích khách đặt lịch
- ✅ Professional & nhiệt tình

**→ SẴN SÀNG ĐƯA VÀO SỬ DỤNG! 🚀**

---

## 📈 NEXT STEPS

1. **Monitor Usage:**
   - Xem API usage hàng ngày
   - Track conversation metrics
   - Analyze common questions

2. **Optimize:**
   - Fine-tune system prompt
   - Add more FAQs
   - Improve response time

3. **Scale:**
   - Add voice input/output
   - Multi-language support
   - Integration with booking system

---

**BẮT ĐẦU TEST NGAY! 🧪🤖**
