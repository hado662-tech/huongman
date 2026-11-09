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
- `site/services.mjs`: nội dung 26 trang dịch vụ; phun môi và phun mày đứng đầu.
- `site/articles.json`: 54 bài viết được giữ lại từ website hiện có; thêm hoặc chỉnh bài tại đây.
- `scripts/build.mjs`: các trang còn lại, tạo HTML, sitemap và thư mục xuất bản.
- `css/theme.css`: màu champagne, chữ nâu đậm, bố cục responsive và các thành phần.
- `css/experience.css`: tinh chỉnh giao diện, vùng chạm, bố cục mobile, carousel và bản đồ.
- `js/site.js`: menu điện thoại, tìm kiếm tiếng Việt, bộ lọc và liên kết chủ đề tư vấn.
- `js/carousel.js`: điều khiển thẻ câu hỏi bằng cuộn tự nhiên, nút và bàn phím; không tự chạy.

HTML ở gốc, `blog/`, `phun-xam/`, `derma/` và `surgery/` là kết quả build được lưu trong Git để tương thích các quy trình xuất bản cũ. Không chỉnh trực tiếp các tệp này; lần build sau sẽ ghi lại chúng.

## Xuất bản

Chỉ xuất bản `dist/`. `vercel.json` cấu hình tự động `npm ci`, build + check, clean URLs và output `dist`. Repo đã có tích hợp Vercel; commit vào `main` kích hoạt quy trình hiện có. Với Cloudflare Pages, dùng `npm run build && npm run check`, output `dist`; `_headers` và `_redirects` được đưa vào bản build.

Không đưa cả thư mục làm việc lên host. Các tệp cấu hình AI cũ, mã thử nghiệm, node_modules, ảnh PNG nguồn và tài liệu nội bộ không nằm trong danh sách xuất bản.

`npm run check` kiểm tra từng trang, sitemap, H1, metadata, canonical, JSON-LD, ảnh/srcset, liên kết và anchor. Tệp HTML dư từ lần build cũ sẽ làm kiểm tra thất bại để tránh xuất bản nội dung lỗi thời. CI chạy cùng các lệnh này trên bản checkout sạch.

## Nội dung và SEO

Từ khóa thương hiệu: thẩm mỹ Hương Mận, thẩm mỹ viện Hương Mận, Hương Mận Thái Nguyên. Ưu tiên phun môi Thái Nguyên, phun mày Thái Nguyên, dáng lông mày, nền môi/mày cũ, giá và tư vấn. Giữ các đường dẫn bài và dịch vụ khác, không chuyển hướng hàng loạt sang chủ đề mới. Hai trang môi/mày có title, description, canonical, breadcrumb, sitemap và liên kết nội bộ riêng.

Giữ đường dẫn bài cũ; các canonical dùng URL không đuôi `.html`. Không tạo điểm sao, số giấy phép, danh tính bác sĩ, bảng giá hoặc cam kết hiệu quả khi chưa có dữ liệu được chủ cơ sở xác nhận. Mục khách hàng trên trang chủ hiện trình bày các câu hỏi thường gặp, không đóng giả lời chứng thực. Trang đặt lịch mở điện thoại/Facebook; không có backend tự nhận lịch hẹn.

Ngày 03/11/2026: hotline cập nhật thành `0859 933 640`, liên kết gọi `tel:+84859933640`. Số dùng chung lấy từ `brand` trong `site/config.mjs`, bao gồm metadata, schema, footer và FAQ. Không viết lại số cũ trong template hoặc bài viết.

Nội dung dành cho khách không dùng ghi chú về nguồn mã, banner cũ hoặc thuật ngữ SEO nội bộ. Đã rà lời giới thiệu, chú thích ảnh, CTA và 54 bài cẩm nang; các bài thương hiệu ưu tiên phun môi/phun mày, không tự nhận là review độc lập. `npm run check` chặn số cũ, liên kết gọi không đồng nhất và một số mẫu câu nội bộ để tránh tái xuất hiện sau build.

## Nhận diện và ảnh cũ

Theo yêu cầu ngày 03/11/2026, không dùng logo hoa sen tự tạo và không dùng bộ ảnh AI của bản giao diện mới. Header/footer khôi phục tên chữ `Hương Mận / Thẩm Mỹ Viện` của HTML cũ tại commit `75ba622`. Chưa có file logo đồ họa gốc độc lập trong repo; đang chờ chủ cơ sở cung cấp PNG/SVG. Không tự vẽ lại hoặc dùng AI để thay thế biểu tượng. Favicon hoa sen được bỏ trong lúc chờ logo gốc.

`images/original/` chứa bản giảm kích thước/nén JPEG từ ảnh đã có ở commit `75ba622`; không thay đổi người, logo hay nội dung ảnh:

- `team.jpg`: từ `facility-4.jpg`.
- `clinic.jpg`: từ `facility-1.jpg`.
- `brows.jpg`: từ `doctor-2.jpg`.
- `event.jpg`: từ `about-clinic.jpg`.
- `huong-man.jpg`: từ `hero-bg.jpg`.

Năm ảnh khoảng 839 KiB tổng cộng. Metadata ảnh tập trung tại `originalImages` trong `site/components.mjs`. Chú thích không gán ảnh hoạt động thành kết quả dịch vụ; không tự nhận ảnh chân dung cũ là bác sĩ đã được kiểm chứng. Không dùng ảnh sự kiện làm bằng chứng chứng nhận hay giấy phép.

Build chỉ sao chép JPG trong `images/original/`; `images/brand/` được giữ ở nguồn để tránh xóa dữ liệu cũ nhưng không còn được template tham chiếu hay sao chép trong bản build sạch. Khi chuẩn bị xuất bản, kiểm tra trên một thư mục `dist` sạch để không giữ tài nguyên thừa của lần build trước.

Ảnh kiểm tra cục bộ: `.qa/original-pmu-desktop.jpg`, `.qa/original-pmu-mobile.jpg`. Không xuất bản các ảnh kiểm tra. Lần sửa này chỉ ở máy, chưa push hoặc deploy.

## Mục ảnh bổ sung và hiệu ứng

Theo yêu cầu tiếp theo của chủ cơ sở, ảnh cũ và vị trí tương đối của chúng được giữ nguyên. Hai ảnh AI mới chỉ xuất hiện trong mục `Gợi ý sắc môi & dáng mày`, trên trang chủ (sau bộ ảnh cũ) và trang dịch vụ (trước bộ lọc). `site/inspiration.mjs` tạo mục này, không sửa `picture()` hoặc nguồn ảnh dịch vụ cũ. Không đặt nhãn đè lên ảnh; giữ alt riêng và một chú thích chung ở cuối mục để phân biệt với ảnh khách hàng/kết quả thực tế.

Tệp tối ưu cùng prompt gốc nằm tại `images/inspiration/README.md`. Bốn biến thể WebP 480/960px có tổng dung lượng 107.404 byte, sử dụng `srcset`, `sizes`, kích thước cố định và `loading="lazy"`. Build chỉ đưa WebP lên `dist`, không đưa prompt/PNG nguồn. Google Fonts được tham chiếu trực tiếp trong HTML thay cho CSS `@import` để bớt một bước tải phụ thuộc. Bộ đệm ảnh gốc và ảnh mới được khai báo trong `_headers`.

Hiệu ứng hiện nội dung dùng IntersectionObserver và Web Animations API, chỉ chạy một lần khi phần tử đi vào màn hình; không có vòng lặp cuộn hay thư viện animation. Chế độ giảm chuyển động hoặc tiết kiệm dữ liệu tắt hiệu ứng JS. Nội dung mặc định vẫn nhìn thấy khi JS không chạy; thay đổi bộ lọc không bị chặn bởi hiệu ứng. Hiệu ứng rê chuột chỉ bật cho con trỏ chính xác và khi không bật giảm chuyển động.

`npm test` chạy kiểm thử motion bằng Node, rồi kiểm tra toàn bộ HTML/SEO. Kiểm thử bảo vệ thứ tự 8 ảnh cũ trên trang chủ và giới hạn ảnh mới trong mục cảm hứng. Ảnh kiểm chứng mới: `.qa/inspiration-desktop.jpg`, `.qa/inspiration-mobile.jpg`. Chưa push/deploy.

## Tinh chỉnh mobile và bản đồ ngày 08/11/2026

Giữ nguyên ảnh và wordmark. Đầu trang gọn hơn, tăng cỡ chữ và vùng chạm, thêm liên kết đến dịch vụ/cảm hứng/FAQ. Menu có nền che và khóa tương tác nền bằng `inert`, đóng bằng Escape hoặc chạm ngoài. Carousel câu hỏi không autoplay, hỗ trợ cuộn tự nhiên, phím mũi tên/Home/End, giảm chuyển động và ẩn điều khiển khi không cần cuộn. Nội dung vẫn đọc được khi JavaScript tắt.

`locationSection()` trong `site/components.mjs` hiển thị Google Maps trước footer trên mọi trang. Mã nhúng tiếng Việt lấy từ chức năng Chia sẻ/Nhúng bản đồ của hồ sơ Thẩm Mỹ Hương Mận tại 402 Lương Ngọc Quyến; Place ID `ChIJ32AOpN8mNTERljxwvmt6hcA`. `brand.maps` mở chỉ đường với điểm đến cố định, không gắn vị trí xuất phát; `brand.mapEmbed` giữ mã Google cấp. Iframe có kích thước ổn định, tên truy cập và lazy-loading; nút chỉ đường bên ngoài vẫn dùng được nếu iframe không tải. Chính sách bảo mật có mô tả tài nguyên Google Maps.

Google Maps đang có hai hồ sơ cùng địa chỉ, hồ sơ thẩm mỹ viện được nhúng còn hiển thị hotline cũ. Không thay số website theo Maps và không tự sửa hồ sơ Google; việc đó cần chủ sở hữu cập nhật riêng. Bản sửa chỉ ở máy, chưa push/deploy.

`npm test` gồm kiểm thử tìm kiếm, menu, carousel, giảm chuyển động và kiểm tra 91 trang, bản đồ/đường dẫn, ảnh, metadata/schema.
