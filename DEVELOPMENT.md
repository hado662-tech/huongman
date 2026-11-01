# Hương Mận: giao diện champagne

Website HTML tĩnh, giao diện PC/mobile theo mẫu vàng champagne và kem được cung cấp ngày 01/11/2026. Một bộ thành phần dùng chung tạo trang chủ, dịch vụ, cẩm nang, liên hệ và các trang thông tin.

## Chạy dự án

Yêu cầu Node.js 22 trở lên.

```sh
npm ci
npm run build
npm run check
npm run dev
```

Trang xem trước: `http://127.0.0.1:8080/`. Chạy lại build rồi tải lại trình duyệt sau mỗi thay đổi nguồn. Không mở trực tiếp HTML bằng `file://` vì các đường dẫn tài nguyên bắt đầu từ gốc website.

## Nguồn cần sửa

- `site/home.mjs`: bố cục trang chủ theo mẫu thiết kế.
- `site/components.mjs`: logo, header, footer, ảnh, thẻ bài viết, metadata và schema dùng chung.
- `site/config.mjs`: thông tin liên hệ và phân nhóm nội dung.
- `site/services.mjs`: nội dung 24 trang dịch vụ.
- `site/articles.json`: 54 bài viết được giữ lại từ website hiện có; thêm hoặc chỉnh bài tại đây.
- `scripts/build.mjs`: các trang còn lại, tạo HTML, sitemap và thư mục xuất bản.
- `css/theme.css`: màu champagne, chữ nâu đậm, bố cục responsive và các thành phần.
- `js/site.js`: menu điện thoại, tìm kiếm tiếng Việt, bộ lọc và liên kết chủ đề tư vấn.

HTML ở gốc, `blog/`, `derma/` và `surgery/` là kết quả build được lưu trong Git để tương thích các quy trình xuất bản cũ. Không chỉnh trực tiếp các tệp này; lần build sau sẽ ghi lại chúng.

## Xuất bản

Chỉ xuất bản `dist/`. `vercel.json` cấu hình tự động `npm ci`, build + check, clean URLs và output `dist`. Repo đã có tích hợp Vercel; commit vào `main` kích hoạt quy trình hiện có. Với Cloudflare Pages, dùng `npm run build && npm run check`, output `dist`; `_headers` và `_redirects` được đưa vào bản build.

Không đưa cả thư mục làm việc lên host. Các tệp cấu hình AI cũ, mã thử nghiệm, node_modules, ảnh PNG nguồn và tài liệu nội bộ không nằm trong danh sách xuất bản.

`npm run check` kiểm tra từng trang, sitemap, H1, metadata, canonical, JSON-LD, ảnh/srcset, liên kết và anchor. Tệp HTML dư từ lần build cũ sẽ làm kiểm tra thất bại để tránh xuất bản nội dung lỗi thời. CI chạy cùng các lệnh này trên bản checkout sạch.

## Nội dung và SEO

Từ khóa thương hiệu: thẩm mỹ Hương Mận, thẩm mỹ viện Hương Mận, Hương Mận Thái Nguyên. Cụm dịch vụ: trị nám, trị mụn, nâng mũi, cắt mí, trẻ hóa và chăm sóc cơ thể tại Thái Nguyên. Bài cẩm nang trả lời câu hỏi về chi phí, cách đánh giá review, sự phù hợp và chuẩn bị tư vấn, liên kết về trang dịch vụ tương ứng.

Giữ đường dẫn bài cũ; các canonical dùng URL không đuôi `.html`. Không tạo điểm sao, số giấy phép, danh tính bác sĩ, bảng giá hoặc cam kết hiệu quả khi chưa có dữ liệu được chủ cơ sở xác nhận. Mục khách hàng trên trang chủ hiện trình bày các câu hỏi thường gặp, không đóng giả lời chứng thực. Trang đặt lịch mở điện thoại/Facebook; không có backend tự nhận lịch hẹn.

## Ảnh

Các tệp WebP/JPG trong `images/brand/` được tối ưu và lưu trong Git. Ảnh được tạo bằng công cụ imagegen tích hợp; là minh họa, không phải khách hàng, nhân viên hay cơ sở thật. PNG nguồn được giữ cục bộ và bỏ qua trong Git.

Prompt ảnh hero sử dụng trong lần thiết kế này:

> Premium Vietnamese beauty clinic website hero photograph, 16:9 landscape. Warm ivory, rose beige and champagne gold. Left 43 percent nearly empty softly lit ivory wall for website copy. Fictional adult Vietnamese woman age 28, natural luminous skin, elegant low bun, pearl stud earrings, ivory sleeveless dress, center-right at 63 percent, chest-up with hand near chin. Right 25 percent refined reception lobby with ivory marble, thin champagne brass details, ivory desk and white orchids. Daylight editorial photography, natural texture. No typography, signage, logos, watermark or UI. Illustrative fictional model and interior, no before-after suggestion.

Ảnh chăm sóc da và chân dung bổ sung dùng cùng ánh sáng tự nhiên và bảng màu kem. Các thumbnail dịch vụ được cắt từ ảnh minh họa đã tạo, không thể hiện kết quả điều trị.

Ảnh chụp kiểm tra cục bộ: `.qa/champagne-desktop.jpg`, `.qa/champagne-mobile.jpg`. Chúng không được xuất bản.
