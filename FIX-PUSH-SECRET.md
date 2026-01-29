# Sửa lỗi Push bị chặn (API Key trong lịch sử Git)

GitHub chặn push vì phát hiện **xAI API Key** trong commit `71830a00`. Đã thay bằng placeholder trong file, nhưng cần **viết lại lịch sử** để commit đó không còn chứa key.

## Bước 1: Thu hồi API key cũ (bắt buộc)

Key đã bị lộ, nên **vào https://console.x.ai/** → tạo key mới và xóa/revoke key cũ.

---

## Bước 2: Viết lại lịch sử – xóa secret khỏi commit 71830a00

Chạy trong PowerShell tại thư mục dự án:

```powershell
# Bắt đầu rebase để sửa commit có secret
git rebase -i 71830a009e9be38de195862c64555851c7b12a92^
```

Trong editor mở ra:
- Tìm dòng có `71830a00` (hoặc dòng đầu tiên).
- Đổi chữ **pick** thành **edit** (hoặc **e**).
- Lưu và đóng editor.

Sau đó chạy lần lượt:

```powershell
# Thay secret bằng placeholder trong 2 file (khi đang dừng ở commit 71830a00)
# LƯU Ý: Thay YOUR_ACTUAL_KEY_BETWEEN_QUOTES bằng đúng chuỗi key đang nằm trong file (copy từ DEBUG-GROK.md hoặc test-grok.html khi đang dừng ở bước rebase)
$secret = 'YOUR_ACTUAL_KEY_BETWEEN_QUOTES'
$placeholder = 'YOUR_GROK_API_KEY_HERE'

(Get-Content DEBUG-GROK.md -Raw) -replace [regex]::Escape($secret), $placeholder | Set-Content DEBUG-GROK.md -NoNewline
(Get-Content test-grok.html -Raw) -replace [regex]::Escape($secret), $placeholder | Set-Content test-grok.html -NoNewline

# Sửa dòng "API Key: xai-..." trong DEBUG-GROK.md (nếu còn)
(Get-Content DEBUG-GROK.md -Raw) -replace 'API Key: xai-[a-zA-Z0-9]+\.\.\.', 'API Key: xai-xxx... (masked)' | Set-Content DEBUG-GROK.md -NoNewline

# Gộp vào commit đang sửa và tiếp tục rebase
git add DEBUG-GROK.md test-grok.html
git commit --amend --no-edit
git rebase --continue
```

Nếu có nhiều commit sau 71830a00 và bị conflict, cứ chọn giữ bản mới (có placeholder) rồi `git rebase --continue` cho đến khi xong.

---

## Bước 3: Push lại

```powershell
git push -u origin main
```

Nếu trước đó đã push nhánh khác và bị reject, sau khi rebase cần **force push** (chỉ khi bạn chắc chỉ mình bạn dùng nhánh này):

```powershell
git push -u origin main --force-with-lease
```

---

## Lưu ý

- **Không dùng** key thật trong file đẩy lên Git. Dùng `js/ai-config.js` (đã nằm trong `.gitignore`) hoặc biến môi trường.
- File `js/ai-config.template.js` chỉ chứa placeholder; copy thành `ai-config.js` rồi điền key local.
