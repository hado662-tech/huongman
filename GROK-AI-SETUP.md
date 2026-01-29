# 🤖 HƯỚNG DẪN TÍCH HỢP GROK AI

Chatbot AI của Hương Mận giờ đã được tích hợp **Grok AI** từ xAI - AI thông minh, hiểu tiếng Việt, và được huấn luyện chuyên biệt để quảng bá dịch vụ làm đẹp!

---

## 🎯 TÍNH NĂNG

### ✅ Grok AI Mode (Khi có API Key):
- **AI thật** từ xAI
- Hiểu ngữ cảnh sâu
- Trả lời tự nhiên, linh hoạt
- Nhớ lịch sử hội thoại
- Tự động quảng bá dịch vụ
- Giới hạn chỉ trả lời về Hương Mận
- Typing indicator (3 chấm nhảy)

### 🔄 Fallback Mode (Không có API Key):
- Keyword-based responses
- Vẫn hoạt động bình thường
- Không tốn phí API

---

## 🚀 CÁCH LẤY GROK API KEY

### Bước 1: Đăng Ký xAI Account
1. Truy cập: https://console.x.ai/
2. Sign up bằng email hoặc X (Twitter) account
3. Verify email

### Bước 2: Tạo API Key
1. Vào Dashboard: https://console.x.ai/
2. Click **"API Keys"** (menu bên trái)
3. Click **"Create New Secret Key"**
4. Đặt tên cho key (ví dụ: "Huong-Man-Chatbot")
5. **COPY KEY NGAY** (chỉ hiển thị 1 lần!)
6. Lưu vào file text an toàn

### Bước 3: Kiểm Tra Credits
- Mới đăng ký thường được **$25 free credits**
- Xem balance tại: https://console.x.ai/billing
- Grok API rất rẻ: ~$5 per 1M tokens
- 1 cuộc hội thoại ~200-500 tokens
- **$25 = ~10,000 conversations!** 🎉

---

## ⚙️ CÀI ĐẶT API KEY

### Cách 1: Chỉnh Trực Tiếp File (Đơn Giản)

1. **Mở file:** `huong-man-clinic/js/ai-config.js`

2. **Tìm dòng:**
```javascript
apiKey: 'YOUR_GROK_API_KEY_HERE',
```

3. **Thay bằng key thật:**
```javascript
apiKey: 'xai-aBc123XyZ456...',
```

4. **Lưu file** (Ctrl + S)

5. **Refresh website** (Ctrl + F5)

6. **Test chatbot** - Hỏi bất cứ gì!

### Cách 2: Environment Variables (Bảo Mật Hơn)

Nếu deploy lên production, nên dùng environment variables:

```javascript
// Trong ai-config.js
apiKey: process.env.GROK_API_KEY || 'YOUR_GROK_API_KEY_HERE',
```

Rồi set biến môi trường trên server.

---

## 🎨 CUSTOMIZATION

### 1. Thay Đổi System Prompt

File: `js/ai-config.js` → `systemPrompt`

**Ví dụ - Thêm thông tin:**
```javascript
systemPrompt: `...

🏆 **GIẢI THƯỞNG:**
- Top 10 Thẩm Mỹ Viện Uy Tín 2025
- Chứng nhận ISO 9001:2015

👨‍⚕️ **ĐỘI NGŨ:**
- 5 bác sĩ chuyên khoa Thẩm Mỹ
- 20+ chuyên viên được đào tạo Hàn Quốc

...`
```

### 2. Điều Chỉnh Giọng Nói

**Temperature** (0-2):
- `0.3` = Formal, chính xác
- `0.7` = Balanced (mặc định) ✅
- `1.5` = Sáng tạo, tự nhiên

```javascript
temperature: 0.7, // Thay đổi số này
```

### 3. Độ Dài Response

**maxTokens** (50-1000):
- `300` = Ngắn gọn
- `500` = Vừa phải (mặc định) ✅
- `1000` = Chi tiết

```javascript
maxTokens: 500, // Thay đổi số này
```

### 4. Timeout

```javascript
timeout: 30000, // 30 giây (mặc định)
```

### 5. Fallback Behavior

```javascript
useFallback: true, // true = dùng keyword nếu lỗi
```

---

## 📊 THEO DÕI SỬ DỤNG

### Xem API Usage:
1. Vào: https://console.x.ai/usage
2. Theo dõi:
   - Số requests
   - Tokens used
   - Cost ($)
   - Rate limits

### Rate Limits (Tier 1):
- **60 requests/minute**
- **1,000 requests/day**
- **10,000 tokens/minute**

Đủ cho 1 website thẩm mỹ viện! 🎉

---

## 🛡️ BẢO MẬT API KEY

### ⚠️ QUAN TRỌNG:

1. **KHÔNG COMMIT lên GitHub**
   ```
   # Thêm vào .gitignore:
   js/ai-config.js
   ```

2. **Tạo file template:**
   - Tạo `ai-config.template.js` (không có key thật)
   - Commit file template
   - File thật (`ai-config.js`) ở local only

3. **Regenerate key nếu lộ:**
   - Vào xAI console
   - Revoke key cũ
   - Tạo key mới

4. **Không share key:**
   - Không gửi qua email
   - Không paste vào chat
   - Không screenshot

---

## 🧪 TESTING

### Test 1: Kiểm Tra API Key
```javascript
// Mở Console (F12), gõ:
console.log(isApiConfigured());
// true = OK, false = chưa config
```

### Test 2: Thử Hội Thoại
Hỏi chatbot:
- ✅ "Ultherapy là gì?"
- ✅ "Giá dịch vụ nâng mũi?"
- ✅ "So sánh Filler và Botox"
- ✅ "Khuyến mãi tháng này?"

### Test 3: Kiểm Tra Giới Hạn
Hỏi câu ngoài scope:
- ❌ "Ai là tổng thống Mỹ?" 
  → AI sẽ từ chối lịch sự

### Test 4: Typing Indicator
- Gửi tin nhắn
- Xem 3 chấm nhảy (đang gõ...)
- Response xuất hiện

---

## 🎯 CHIẾN LƯỢC AI

### AI Được Huấn Luyện Để:

#### 1. **Quảng Bá Tinh Tế**
```
❌ KHÔNG: "Mua ngay đi!"
✅ TỐT: "Công nghệ Ultherapy Prime của Hương Mận 
         vượt trội với hiệu quả lâu dài 3-5 năm, 
         được hàng nghìn khách hàng tin dùng..."
```

#### 2. **Tạo Cảm Giác Khan Hiếm**
- "Chương trình chỉ còn 3 ngày!"
- "Chỉ còn 5 suất ưu đãi cuối!"
- "Đặt lịch hôm nay để được giảm thêm 5%"

#### 3. **So Sánh Thông Minh**
```
✅ "Khác với các spa thông thường sử dụng máy 
   Trung Quốc, Hương Mận đầu tư máy FDA chính 
   hãng từ Mỹ, an toàn gấp 10 lần..."
```

#### 4. **Call-to-Action**
Mỗi response kết thúc:
- "Bạn muốn đặt lịch tư vấn miễn phí không?"
- "Để tôi gửi bạn catalog chi tiết nhé?"
- "Tôi kết nối bạn với tư vấn viên ngay nhé?"

#### 5. **Giới Hạn Scope**
AI **KHÔNG BAO GIỜ** trả lời:
- Câu hỏi chính trị, tôn giáo
- Tư vấn y tế chuyên sâu
- Thông tin về đối thủ cụ thể
- Chủ đề không liên quan làm đẹp

---

## 🆘 TROUBLESHOOTING

### Lỗi 1: "API Error: 401"
**Nguyên nhân:** API key sai hoặc expired

**Fix:**
1. Kiểm tra key trong `ai-config.js`
2. Đảm bảo không có khoảng trắng thừa
3. Regenerate key mới trên xAI console

### Lỗi 2: "API Error: 429"
**Nguyên nhân:** Vượt rate limit

**Fix:**
1. Chờ 1 phút
2. Xem usage tại: https://console.x.ai/usage
3. Nâng cấp tier nếu cần

### Lỗi 3: Chatbot không phản hồi
**Nguyên nhân:** Lỗi JavaScript

**Fix:**
1. Mở Console (F12)
2. Xem lỗi đỏ
3. Kiểm tra file `ai-config.js` được load chưa
4. Đảm bảo `ai-config.js` load **TRƯỚC** `main.js`

### Lỗi 4: Response quá chậm
**Nguyên nhân:** Network hoặc Grok API chậm

**Fix:**
1. Giảm `maxTokens` xuống 300
2. Tăng `timeout` lên 60000 (60s)
3. Check internet connection

### Lỗi 5: "CORS Error"
**Nguyên nhân:** Chạy file HTML trực tiếp (file://)

**Fix:**
1. Dùng Live Server (VS Code)
2. Hoặc deploy lên hosting
3. Không chạy file:// local

---

## 💰 CHI PHÍ

### Grok API Pricing:
- **Input:** $5 per 1M tokens
- **Output:** $15 per 1M tokens

### Ước Tính:
1 cuộc hội thoại trung bình:
- Input: ~200 tokens (system prompt + history)
- Output: ~300 tokens (AI response)
- Cost: ~$0.0055 (~130đ)

**$25 free credits = ~4,500 conversations**

Với 100 visitors/ngày, 20% chat:
- 20 conversations/ngày
- **$25 đủ dùng ~7 tháng!** 🎉

---

## 🔄 NÂNG CẤP

### Khi Nào Nâng Cấp?

1. **Hết free credits ($25)**
   → Add credit card tại: https://console.x.ai/billing

2. **Cần rate limit cao hơn**
   → Nâng lên Tier 2 (>$50/tháng)

3. **Cần features enterprise**
   → Contact xAI sales

---

## 📈 TỐI ƯU HIỆU QUẢ

### 1. Giảm Tokens
- Rút gọn system prompt (nếu quá dài)
- Chỉ giữ 10 tin nhắn gần nhất trong history
- Giảm `maxTokens` xuống 300-400

### 2. Cache System Prompt
- Grok tự động cache system prompt
- Không cần làm gì thêm
- Tiết kiệm ~50% input tokens

### 3. Smart Fallback
- Keyword-based cho câu hỏi đơn giản
- AI cho câu phức tạp
- Cân bằng cost vs quality

---

## 🎨 STYLE TÙY CHỈNH

### Thay Icon Chatbot:
File: `index.html`
```html
<i class="fas fa-robot"></i> <!-- Đổi icon -->
```

### Đổi Màu Chat:
File: `css/style.css`
```css
.chat-header {
    background: linear-gradient(...); /* Đổi màu */
}
```

### Typing Indicator:
```css
.typing-dot {
    background: #ff69b4; /* Đổi màu chấm */
}
```

---

## 📚 TÀI LIỆU THAM KHẢO

- **Grok API Docs:** https://docs.x.ai/
- **xAI Console:** https://console.x.ai/
- **Pricing:** https://x.ai/api/pricing
- **Support:** support@x.ai

---

## ✅ CHECKLIST HOÀN THÀNH

### Setup:
- [ ] Đăng ký xAI account
- [ ] Lấy API key
- [ ] Paste vào `ai-config.js`
- [ ] Lưu file
- [ ] Refresh website
- [ ] Test chatbot

### Customization:
- [ ] Cập nhật thông tin spa (địa chỉ, giá, khuyến mãi)
- [ ] Điều chỉnh temperature
- [ ] Điều chỉnh maxTokens
- [ ] Test với nhiều câu hỏi khác nhau

### Security:
- [ ] Thêm `ai-config.js` vào `.gitignore`
- [ ] Tạo `ai-config.template.js` cho repo
- [ ] Không share API key

### Monitoring:
- [ ] Theo dõi usage hàng ngày
- [ ] Set alert khi sắp hết credits
- [ ] Backup conversation logs (nếu cần)

---

## 🎉 KẾT QUẢ

**Chatbot AI của bạn giờ:**
- ✅ Trả lời tự nhiên như người thật
- ✅ Hiểu tiếng Việt hoàn hảo
- ✅ Tự động quảng bá dịch vụ
- ✅ Chỉ trả lời về Hương Mận
- ✅ Tạo cảm giác khan hiếm & cấp bách
- ✅ Khuyến khích đặt lịch
- ✅ Professional & nhiệt tình

**Khách hàng sẽ:**
- 📈 Tăng engagement
- 💬 Chat lâu hơn
- 📅 Đặt lịch nhiều hơn
- 💰 Conversion rate cao hơn

---

**BẮT ĐẦU NGAY! 🚀**

1. Lấy API key: https://console.x.ai/
2. Paste vào `js/ai-config.js`
3. Refresh website
4. Chat thử!

**VÀ THƯỞNG THỨC AI MAGIC! ✨🤖**
