import { brand } from "../config.mjs";
import { link, hubSlug, sources, consultation } from "./pmu-shared.mjs";

export const guideArticles = [
  {
    slug: hubSlug,
    title: "Phun môi, phun mày Thái Nguyên: cẩm nang trước khi chọn",
    description: "Cẩm nang phun môi, phun mày tại Thái Nguyên: chọn màu, dáng, hỏi giá, đọc review, chăm sóc và chuẩn bị lịch tư vấn Hương Mận theo nhu cầu thực tế.",
    lead: "Bạn chưa cần chọn ngay một kỹ thuật khi tìm hiểu phun môi hoặc phun mày. Hãy bắt đầu từ điều muốn cải thiện, nền đã từng làm và những thông tin cần xác nhận trước khi quyết định.",
    keyword: "kinh nghiệm phun môi phun mày Thái Nguyên",
    secondaryKeywords: ["review phun xăm Thái Nguyên", "chọn địa chỉ phun môi phun mày Thái Nguyên"],
    cluster: "tong-hop",
    intent: "Điều hướng nhu cầu, đọc review và chuẩn bị lựa chọn cơ sở",
    imageKey: "team",
    relatedSlugs: ["gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "phun-may-tan-bot-va-hairstroke-khac-nhau-the-nao", "tu-pho-yen-song-cong-den-huong-man-phun-xam"],
    content: `
<h2>Nếu đang tìm hiểu phun môi</h2>
<p>Ghi lại ba điều: môi chưa từng làm hay có màu cũ, sắc độ bạn thích và điều không muốn xảy ra về mặt thẩm mỹ. Mục tiêu “nhẹ như không tô son” khác với “rõ màu khi để mặt mộc”. Mang ảnh để diễn đạt sở thích, không dùng ảnh làm cam kết.</p>
<ul><li>${link("moi-tham-co-phun-duoc-khong", "Môi thâm có phun được không?")} Phân biệt nền môi và các câu hỏi trước khi xử lý màu.</li><li>${link("da-ngam-phun-moi-mau-gi", "Da ngăm nên chọn màu phun môi nào?")} Chuẩn bị sắc độ yêu thích và cách đọc ảnh.</li><li>${link("gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "Giá phun môi Thái Nguyên gồm những khoản gì?")} Làm rõ dặm, xử lý nền và chăm sóc.</li></ul>
<h2>Nếu đang tìm hiểu phun mày</h2>
<p>Ưu tiên dáng và hiệu ứng mong muốn trước tên công nghệ. Bạn thích nền mày mềm như kẻ bột hay muốn thấy các nét giống sợi? Nếu đã có nền cũ, cần đánh giá giới hạn sửa trước khi chọn dáng mới.</p>
<ul><li>${link("phun-may-tan-bot-va-hairstroke-khac-nhau-the-nao", "Tán bột, hairstroke và điêu khắc khác nhau thế nào?")}</li><li>${link("da-dau-nen-phun-may-hay-hairstroke", "Da dầu nên hỏi gì trước khi chọn kỹ thuật?")}</li><li>${link("long-may-cu-tro-do-tro-xanh-co-phun-chong-duoc-khong", "Mày cũ trổ đỏ, trổ xanh có phun chồng được không?")}</li><li>${link("mat-tron-nen-chon-dang-long-may-nao", "Mặt tròn nên trao đổi về dáng lông mày ra sao?")}</li><li>${link("gia-phun-may-thai-nguyen-chi-phi-sua-may-cu", "Giá phun mày Thái Nguyên: tách chi phí làm mới và sửa nền.")}</li></ul>
<h2>Đọc review phun xăm thế nào để có ích?</h2>
<p>Nếu đang chọn nơi để đến tư vấn, hãy đối chiếu lời nhận xét với <a href="/blog/tham-my-vien-uy-tin-thai-nguyen-5-tieu-chi-can-biet">năm điều có thể tự kiểm tra khi chọn địa chỉ thẩm mỹ ở Thái Nguyên</a>, từ người trực tiếp làm đến điều kiện dặm màu.</p>
<p>Đừng chỉ đếm số sao. Một chia sẻ có ích cần cho biết nhu cầu ban đầu, phương án đã làm, thời điểm đánh giá và quá trình hỗ trợ. Hãy phân biệt ảnh ngay sau buổi làm với ảnh đã lành; nếu không rõ thời điểm, nên hỏi thêm trước khi so sánh.</p>
<p>Xem cả cách cơ sở phản hồi câu hỏi và góp ý, không chỉ các lời khen được chọn đăng lại. Một trải nghiệm tích cực không bảo đảm bạn có kết quả tương tự; một phản hồi ngắn cũng chưa đủ để kết luận toàn bộ chất lượng. Cẩm nang này không phải review trải nghiệm của khách hàng đã được xác minh.</p>
<h2>Sáu thông tin cần xác nhận ở cơ sở bạn chọn</h2>
<ol><li>Ai tư vấn và ai trực tiếp thực hiện?</li><li>Địa điểm nào tiến hành dịch vụ, có khác nơi tiếp nhận tư vấn không?</li><li>Kỹ thuật, vật tư và nguồn gốc mực được giải thích ra sao?</li><li>Vệ sinh, xử lý dụng cụ và vật tư dùng một lần được tổ chức thế nào?</li><li>Rủi ro, điều kiện cần hoãn và giới hạn kết quả là gì?</li><li>Báo giá, hướng dẫn chăm sóc và đầu mối hỗ trợ có được cung cấp rõ không?</li></ol>
<p><a href="${sources.fda}">FDA</a> ghi nhận cả nguy cơ từ dụng cụ không vô trùng và mực bị nhiễm bẩn. Vì vậy, một lời quảng cáo “mực tốt” không thay thế thông tin về toàn bộ quy trình. Nguồn này cung cấp thông tin rủi ro chung, không chứng nhận hoạt động của Hương Mận.</p>
<h2>Tính cả giai đoạn sau buổi làm</h2>
<p>Trước khi đặt lịch, đọc ${link("cham-soc-sau-phun-moi-can-kieng-gi", "những câu hỏi về chăm sóc sau phun môi")} và ${link("phun-moi-bao-lau-len-mau-khi-nao-dam", "cách đánh giá màu, bàn lịch dặm")}. Với phun mày, cũng cần hướng dẫn riêng theo phương án thực tế, không sao chép cách chăm sóc của người quen.</p>
<p>Nếu bạn ở Phổ Yên hoặc Sông Công, ${link("tu-pho-yen-song-cong-den-huong-man-phun-xam", "hướng dẫn sắp xếp buổi tư vấn từ khu vực lân cận")} giúp chuẩn bị việc đi lại và lịch kiểm tra. Không chỉ tính thời gian đến lần đầu.</p>
<h2>Tìm hiểu Hương Mận tại Thái Nguyên</h2>
<p>Hương Mận có thông tin liên hệ tại ${brand.address}. Bạn có thể xem <a href="/phun-xam/phun-moi">trang phun môi</a>, <a href="/phun-xam/phun-may">trang phun mày</a> và gọi <a href="${brand.phoneHref}">${brand.phone}</a> để xác nhận dịch vụ đang có, người phụ trách và lịch tư vấn. Một buổi trao đổi không buộc bạn phải thực hiện ngay.</p>`,
  },
  {
    slug: "mat-tron-nen-chon-dang-long-may-nao",
    title: "Mặt tròn nên chọn dáng lông mày nào để hài hòa?",
    description: "Mặt tròn hợp dáng mày nào? Gợi ý trao đổi về độ cong, chiều dài, độ dày và bản phác; tránh chọn một dáng cố định chỉ theo tên hình khuôn mặt.",
    lead: "Không có một dáng lông mày bắt buộc cho mọi gương mặt tròn. Bạn nên thử bản phác và nhìn toàn gương mặt, thay vì chọn dáng chỉ từ câu khuyên mày phải thật cao hoặc thật ngang.",
    keyword: "mặt tròn nên chọn dáng lông mày nào",
    secondaryKeywords: ["phun mày cho mặt tròn", "dáng mày tự nhiên không bị dữ"],
    cluster: "may",
    intent: "Tham khảo thiết kế dáng mày và cách duyệt bản phác",
    imageKey: "brows",
    relatedSlugs: ["phun-may-tan-bot-va-hairstroke-khac-nhau-the-nao", "long-may-cu-tro-do-tro-xanh-co-phun-chong-duoc-khong", "gia-phun-may-thai-nguyen-chi-phi-sua-may-cu"],
    content: `
<h2>Tên dáng mặt chỉ là điểm bắt đầu</h2>
<p>Hai người đều tự nhận mặt tròn có thể khác khoảng cách mắt, cung xương mày, độ dài trán và lông mày vốn có. Một dáng được sao chép nguyên xi dễ bỏ qua các khác biệt ấy. Hãy mô tả điều bạn thích ở dáng mẫu: mềm, thanh, gọn hay rõ nét.</p>
<p>Không cần làm khuôn mặt “bớt tròn” bằng mọi giá. Mục tiêu có thể là một cặp mày dễ trang điểm hơn hoặc phần đuôi hài hòa hơn. Đây là lựa chọn thẩm mỹ cá nhân, không liên quan đến đánh giá tính cách hay vận may.</p>
<h2>Bốn chi tiết nên thử trên bản phác</h2>
<h3>Độ cong</h3><p>Thử một đường cong nhẹ trước khi nghĩ đến đỉnh cao, rồi xem cảm giác khi gương mặt thư giãn. Nếu thấy biểu cảm khác điều mình muốn, đề nghị điều chỉnh. Không phải cứ nâng đỉnh là đẹp hơn.</p>
<h3>Chiều dài đuôi</h3><p>Quan sát cả chính diện và nghiêng nhẹ. Một phần đuôi đẹp trong ảnh cận có thể chưa cân đối khi nhìn cả gương mặt. Hãy xem mẫu ở khoảng cách giao tiếp bình thường, không chỉ soi sát gương.</p>
<h3>Độ dày</h3><p>So sánh phần đầu, thân và đuôi; đừng chỉ yêu cầu “mày mảnh”. Nói rõ bạn muốn giữ bao nhiêu cảm giác của lông mày thật và thường kẻ đậm đến đâu.</p>
<h3>Độ đậm và màu</h3><p>Phân biệt dáng với màu. Một bản phác đậm để nhìn rõ ranh giới không nhất thiết mô tả màu kết quả cuối, vì vậy cần hỏi hai vấn đề riêng. Đừng đồng ý chỉ vì nghĩ màu đậm sẽ tự nhạt đúng ý mình.</p>
<h2>Cách duyệt bản phác mà không vội</h2>
<ol><li>Nhìn toàn mặt ở tư thế tự nhiên, không cố nhướn trán.</li><li>Xem cả hai bên và nói rõ chi tiết chưa ưng thay vì chỉ nói “chưa đẹp”.</li><li>Thử chỉnh từng chi tiết một để nhận ra thay đổi nào phù hợp.</li><li>Hỏi phần nào của bản phác là dự kiến, phần nào là giới hạn do nền mày cũ.</li><li>Chỉ đồng ý khi đã hiểu dáng, màu và phương án thực hiện.</li></ol>
<p>Nếu chưa chắc, bạn có thể thử kiểu kẻ mày tạm thời trong sinh hoạt thường ngày trước khi quyết định phun. Hướng dẫn của <a href="${sources.brows}">NAAF về lông mày</a> giới thiệu dụng cụ trang điểm như chì, bột và khuôn; đây là các cách tham khảo hình dáng mà không cần chọn ngay một can thiệp lâu dài.</p>
<h2>Mày cũ có làm giới hạn lựa chọn dáng không?</h2>
<p>Cần xem trực tiếp. Nếu muốn một phần đuôi mới nằm khác vị trí cũ, hỏi rõ phần màu còn lại sẽ ra sao. Không nên lấy bút che vùng cũ trong ảnh để kết luận sửa được giống mẫu. Đọc ${link("long-may-cu-tro-do-tro-xanh-co-phun-chong-duoc-khong", "những giới hạn cần hỏi khi sửa nền mày cũ")} trước khi thống nhất.</p>
<p>Sau khi bàn về dáng, mới so sánh ${link("phun-may-tan-bot-va-hairstroke-khac-nhau-the-nao", "hiệu ứng nền tán bột và nét hairstroke")}. Một tên công nghệ không tự tạo ra bản thiết kế phù hợp.</p>
<h2>Câu hỏi thường gặp</h2>
<h3>Mặt tròn có nên tránh hoàn toàn mày ngang?</h3><p>Không có quy tắc bắt buộc. Bạn nên xem bản phác trên chính gương mặt và cân nhắc sở thích thay vì loại bỏ một dáng chỉ vì tên hình khuôn mặt.</p>
<h3>Có phải hai bên phải giống nhau tuyệt đối?</h3><p>Hãy trao đổi mục tiêu cân đối khi nhìn tổng thể và giới hạn thực tế. Đừng dùng lời hứa đối xứng tuyệt đối để quyết định thêm can thiệp khi chưa hiểu phương án.</p>
${consultation("dáng lông mày mong muốn")}`,
  },
  {
    slug: "tu-pho-yen-song-cong-den-huong-man-phun-xam",
    title: "Từ Phổ Yên, Sông Công đến Hương Mận: chuẩn bị lịch phun xăm",
    description: "Ở Phổ Yên, Sông Công muốn tư vấn phun môi, phun mày tại Hương Mận? Xem địa chỉ, cách mở chỉ đường, xác nhận lịch và dự trù lần kiểm tra sau dịch vụ.",
    lead: "Nếu đi từ Phổ Yên hoặc Sông Công đến tìm hiểu phun môi, phun mày, bạn nên xác nhận buổi hẹn trước khi xuất phát. Đặt lịch tư vấn không đồng nghĩa chắc chắn thực hiện dịch vụ ngay trong ngày.",
    keyword: "từ Phổ Yên Sông Công đến Hương Mận phun xăm",
    secondaryKeywords: ["phun môi gần Phổ Yên", "phun mày gần Sông Công", "đường đến Hương Mận Thái Nguyên"],
    cluster: "dia-phuong",
    intent: "Sắp xếp đi lại và buổi tư vấn tại địa chỉ thật",
    imageKey: "clinic",
    relatedSlugs: [hubSlug, "gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "gia-phun-may-thai-nguyen-chi-phi-sua-may-cu"],
    content: `
<h2>Địa chỉ cần đến và cách mở chỉ đường</h2>
<p>Địa chỉ liên hệ của Hương Mận trên website là <strong>${brand.address}</strong>. Bạn có thể <a href="${brand.maps}" target="_blank" rel="noopener noreferrer">mở chỉ đường Google Maps đến Hương Mận</a> rồi chọn điểm xuất phát và phương tiện. Bản đồ cũng nằm ở cuối trang này.</p>
<p>Bài viết dành cho khách đi từ khu vực Phổ Yên, Sông Công; không giới thiệu chi nhánh Hương Mận tại hai khu vực đó. Thời gian đi lại phụ thuộc điểm xuất phát, phương tiện và giao thông, nên không đưa một mốc phút cố định để bạn dựa vào đặt lịch.</p>
<h2>Xác nhận ba việc trước khi đi</h2>
<ol><li><strong>Nội dung buổi hẹn:</strong> chỉ trao đổi, đánh giá nền cũ hay có dự kiến thực hiện? Nếu làm trong ngày, điều kiện nào cần đáp ứng?</li><li><strong>Khung giờ:</strong> lịch nào đã được xác nhận, cần dành khoảng thời gian nào và liên hệ ai nếu đến muộn?</li><li><strong>Chi phí ban đầu:</strong> tư vấn có phí không, cần cọc không và đổi lịch được xử lý thế nào?</li></ol>
<p>Gọi <a href="${brand.phoneHref}">${brand.phone}</a> trước khi xuất phát nếu lịch chưa rõ. Hỏi thêm điểm dừng xe hoặc hỗ trợ cần thiết thay vì mặc định có chỗ đỗ phù hợp với mọi phương tiện. Không cần gửi vị trí nhà riêng công khai để xin chỉ đường.</p>
<h2>Mang gì để chuyến tư vấn có ích?</h2>
<p>Chuẩn bị ảnh tham khảo về màu môi hoặc dáng mày, cùng thông tin lần làm trước nếu có. Với phun môi, nêu mục tiêu về độ tự nhiên và nền đang còn màu. Với phun mày, ghi phần muốn đổi: đầu, thân, đuôi, màu hay độ đậm.</p>
<p>Nếu đang có vấn đề sức khỏe liên quan hoặc dùng thuốc, hỏi trước xem có cần trao đổi với bác sĩ hay mang thông tin gì. Không tự ngừng thuốc để kịp hẹn. Bạn chỉ cần chia sẻ thông tin cần thiết qua kênh đã xác nhận, không gửi hồ sơ cá nhân lên bình luận.</p>
<h2>Tính cả việc kiểm tra sau buổi làm</h2>
<p>Khoảng cách đi lại ảnh hưởng cách bạn sắp xếp lịch, không phải lý do bỏ qua theo dõi. Hỏi trước lần nào có thể trao đổi thông tin qua tin nhắn và lần nào phải đến trực tiếp. Đừng hiểu gửi ảnh là thay thế mọi đánh giá.</p>
<p>Nếu phát sinh triệu chứng đáng lo sau khi đã về nhà, ưu tiên cơ sở y tế phù hợp gần mình, không cố chờ đến lịch quay lại nơi làm đẹp. Người phụ trách cần cho bạn hướng dẫn liên hệ và những tình huống phải đi khám.</p>
<h2>Dự trù ngân sách ngoài giá dịch vụ</h2>
<p>Tính riêng chi phí đi lại, thời gian nghỉ việc nếu cần và lần kiểm tra dự kiến. Đây là khoản cá nhân tự dự trù, không phải phụ phí do Hương Mận công bố. Về dịch vụ, đọc ${link("gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "cách hỏi giá phun môi")} hoặc ${link("gia-phun-may-thai-nguyen-chi-phi-sua-may-cu", "cách hỏi giá phun mày")} để biết phần nào đã bao gồm.</p>
<p>Không cần gom tư vấn và thực hiện vào một ngày chỉ để tiết kiệm chuyến đi nếu vẫn chưa hiểu phương án. Bạn có thể dành buổi đầu để hỏi, rồi quyết định sau.</p>
<h2>Câu hỏi thường gặp</h2>
<h3>Ở Sông Công hoặc Phổ Yên có tư vấn trước qua điện thoại được không?</h3><p>Bạn có thể gọi để hỏi thông tin ban đầu và xác nhận lịch. Việc đánh giá nào cần đến trực tiếp phải được người phụ trách giải thích theo nhu cầu.</p>
<h3>Chưa chọn phun môi hay phun mày thì nên đọc gì?</h3><p>Xem ${link(hubSlug, "cẩm nang phun môi, phun mày tại Thái Nguyên")}, ghi lại điều muốn cải thiện rồi mới chọn chủ đề tư vấn. Không cần quyết định từ một ưu đãi ngắn hạn.</p>`,
  },
];
