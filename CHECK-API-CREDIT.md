# 💰 CHECK API CREDIT & CHỌN MODEL

## 📊 GROK MODELS PRICING (Per 1M Tokens)

Từ ảnh bạn gửi, đây là bảng giá:

| Model | Input | Output | Tốc độ | Recommend |
|-------|-------|--------|--------|-----------|
| **grok-4-1-fast-non-reasoning** | **$0.20** | **$0.50** | Nhanh | ✅ **BEST** |
| grok-4-1-fast-reasoning | $0.20 | $0.50 | Nhanh | ✅ OK |
| grok-4-fast-reasoning | $0.20 | $0.50 | Nhanh | ✅ OK |
| grok-4-fast-non-reasoning | $0.20 | $0.50 | Nhanh | ✅ OK |
| **grok-3-mini** | **$0.30** | **$0.50** | Rất nhanh | ✅ Nhẹ |
| grok-code-fast-1 | $0.20 | $1.50 | Nhanh | ⚠️ Đắt output |
| grok-3 | $3.00 | $15.00 | Chậm | ❌ Đắt |
| grok-4-0709 | $3.00 | $15.00 | Chậm | ❌ Đắt |
| grok-2-vision-1212 | $2.00 | $10.00 | Chậm | ❌ Đắt |

---

## ✅ RECOMMEND: `grok-4-1-fast-non-reasoning`

### **Tại Sao?**

1. **RẺ NHẤT:** $0.20 input / $0.50 output
2. **NHANH:** Fast model
3. **ĐỦ THÔNG MINH:** Không cần reasoning cho chatbot
4. **PHỦHỢP:** Thẩm mỹ viện không cần reasoning phức tạp

### **Chi Phí Thực Tế:**

**1 conversation (~500 tokens):**
- Input: 200 tokens × $0.20/1M = $0.00004
- Output: 300 tokens × $0.50/1M = $0.00015
- **Total: $0.00019 (~4.5đ/conversation)**

**Với $25 free credits:**
- **131,578 conversations!** 🎉
- Hoặc ~10 tháng (với 500 chat/ngày)

---

## 🔍 CHECK API CREDIT

### **Cách 1: Vào Console (Recommend)**

1. Vào: https://console.x.ai/
2. Login
3. Click **"Usage"** hoặc **"Billing"**
4. Xem:
   - **Free credits:** $XX.XX remaining
   - **Usage today:** $XX.XX

### **Cách 2: Test API Call**

Chạy `test-grok.html` → Sẽ hiện:
- ✅ Success → Còn credit
- ❌ 429 Error → Hết rate limit (chờ 1 phút)
- ❌ 402 Error → Hết credit (cần nạp thêm)

---

## 🔄 ĐỔI MODEL

### **Trong `ai-config.js`:**

```javascript
// CŨSẴN (đắt):
model: 'grok-4-latest',

// ĐỔI THÀNH (rẻ):
model: 'grok-4-1-fast-non-reasoning',
```

### **Hoặc nếu muốn nhẹ hơn nữa:**

```javascript
model: 'grok-3-mini', // $0.30 input / $0.50 output
```

---

## 💡 SO SÁNH

### **grok-4-1-fast-non-reasoning** (Đang dùng) ✅
```
+ RẺ: $0.20 / $0.50
+ Nhanh
+ Đủ thông minh cho chatbot
+ 4.5đ/conversation
- Không có reasoning sâu (nhưng không cần!)
```

### **grok-4-1-fast-reasoning** (Alternative)
```
+ Cùng giá: $0.20 / $0.50
+ Có reasoning
- Chậm hơn một chút
- Overkill cho chatbot thẩm mỹ
```

### **grok-3-mini** (Nhẹ nhất)
```
+ Nhẹ, rất nhanh
+ Output rẻ: $0.50
- Input đắt hơn: $0.30 (vs $0.20)
- Ít thông minh hơn
```

### **grok-4-latest** (Cũ - ĐỪNG DÙNG)
```
- KHÔNG RÕ GIÁ (có thể $3/$15)
- Alias, không biết trỏ model nào
- Không tối ưu
```

---

## 🎯 KẾT LUẬN

### **BEST CHOICE:**

```javascript
model: 'grok-4-1-fast-non-reasoning'
```

**Vì:**
- ✅ RẺ nhất ($0.20/$0.50)
- ✅ Nhanh
- ✅ Đủ thông minh
- ✅ $25 = 131K conversations
- ✅ Perfect cho thẩm mỹ viện

---

## 📋 ACTION PLAN

### **1. Đổi Model (ĐÃ FIX):**
```javascript
// ai-config.js
model: 'grok-4-1-fast-non-reasoning'
```

### **2. Check Credit:**
```
https://console.x.ai/ → Usage/Billing
```

### **3. Test:**
```
http://127.0.0.1:8000/test-grok.html
```

### **4. Monitor:**
- Check usage mỗi ngày
- Alert khi còn $5
- Estimate: 500 chat/ngày = $0.095/ngày ≈ $3/tháng

---

## 🔥 ƯU ĐÃI

### **Free Tier:**
- **$25 free credits** khi đăng ký
- Không cần credit card
- Không expire (theo policy hiện tại)

### **Paid Tier:**
- $0.20/$0.50 per 1M tokens
- Pay as you go
- Rẻ hơn ChatGPT nhiều!

---

## ✅ ĐÃ FIX

1. ✅ Đổi model sang `grok-4-1-fast-non-reasoning` (rẻ nhất)
2. ✅ Fix `test-grok.html` (AI_CONFIG inline)
3. ✅ Document pricing
4. ✅ Recommend best model

---

**GIỜ REFRESH VÀ TEST LẠI NHÉ!** 🚀

http://127.0.0.1:8000/test-grok.html

Lần này chắc chắn OK! 💪
