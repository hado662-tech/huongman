import { link, sources, consultation } from "./pmu-shared.mjs";

export const lipArticles = [
  {
    slug: "gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham",
    title: "Giá phun môi Thái Nguyên: dặm và khử thâm tính thế nào?",
    description: "Hỏi giá phun môi tại Thái Nguyên: tách chi phí nền môi, màu, dặm lại và chăm sóc. Có mẫu câu hỏi để so sánh báo giá trước khi đặt lịch Hương Mận.",
    lead: "Giá phun môi chỉ có ý nghĩa khi bạn biết mình đang được báo cho những việc gì. Một mức giá ban đầu thấp chưa chắc là tổng chi phí, đặc biệt nếu môi đã phun hoặc cần đánh giá nền màu cũ.",
    keyword: "giá phun môi Thái Nguyên",
    secondaryKeywords: ["phun môi có bao gồm dặm không", "chi phí khử thâm môi Thái Nguyên"],
    cluster: "moi",
    intent: "So sánh chi phí và chuẩn bị yêu cầu báo giá",
    relatedSlugs: ["moi-tham-co-phun-duoc-khong", "phun-moi-bao-lau-len-mau-khi-nao-dam", "tu-pho-yen-song-cong-den-huong-man-phun-xam"],
    content: `
<h2>Phun môi ở Thái Nguyên giá bao nhiêu?</h2>
<p>Hiện bài viết chưa có bảng giá đã được Hương Mận xác nhận cho từng kỹ thuật, nên không đưa ra con số thay cho báo giá thực tế. Bạn có thể xem <a href="/bang-gia">các hạng mục cần hỏi về chi phí</a> rồi yêu cầu một báo giá ghi rõ tình trạng nền môi, phương án và điều kiện đi kèm. Đừng lấy giá của một ảnh quảng cáo làm mức áp dụng mặc định cho mình.</p>
<p>Điểm cần so sánh là tổng số tiền cho cùng phạm vi công việc. Một nơi báo riêng buổi đầu, một nơi ghi cả kiểm tra lại; nếu chỉ nhìn hai con số, bạn rất dễ so sánh hai gói khác nhau.</p>
<h2>Năm khoản cần tách trong báo giá</h2>
<ol><li><strong>Buổi tư vấn và đánh giá:</strong> có thu phí không, và nếu chưa quyết định làm thì tính thế nào?</li><li><strong>Phương án cho nền môi:</strong> môi chưa từng làm hay đã có màu cũ; phần được gọi là khử thâm có nằm trong giá hay là hạng mục riêng?</li><li><strong>Buổi phun màu:</strong> tên phương án, người thực hiện và địa điểm cụ thể là gì?</li><li><strong>Dặm hoặc điều chỉnh:</strong> áp dụng trong khoảng thời gian nào, với điều kiện nào và có giới hạn số lần không?</li><li><strong>Chăm sóc và kiểm tra:</strong> sản phẩm mang về, lịch kiểm tra và hỗ trợ sau buổi làm đã được tính chưa?</li></ol>
<p>Nếu còn khoản chưa thể xác định, hãy đề nghị đánh dấu là “chưa chốt”, kèm điều kiện có thể phát sinh. Cách này rõ ràng hơn việc hiểu mọi nội dung quảng cáo đều đã nằm trong giá trọn gói.</p>
<h2>Khử thâm và dặm môi có phải một khoản?</h2>
<p>Không nên gộp hai tên gọi này khi hỏi giá. “Khử thâm” thường được dùng để mô tả nhu cầu xử lý nền môi tối màu; “dặm” nói đến một lần làm bổ sung sau lần trước. Bạn cần hỏi công việc thực tế bên dưới tên gọi, thay vì mặc định một lần phun đã bao gồm mọi bước.</p>
<p>Với ${link("moi-tham-co-phun-duoc-khong", "nền môi thâm hoặc môi từng phun")}, yêu cầu giải thích phương án trước khi nhận giá. Với lần dặm, cần phân biệt kiểm tra màu, bổ sung màu và đổi sang một tông khác. Chính sách có thể khác nhau cho ba nhu cầu này.</p>
<h2>Mẫu tin nhắn xin báo giá dễ đối chiếu</h2>
<blockquote>Tôi quan tâm phun môi, nền môi hiện tại là… Tôi đã/chưa từng phun, lần gần nhất là… Mong muốn của tôi là… Xin cho biết giá tư vấn, giá thực hiện, khoản xử lý nền nếu có, điều kiện dặm và các khoản chưa bao gồm. Tôi muốn nhận thông tin trước khi đặt cọc.</blockquote>
<p>Khi nhận phản hồi, lưu lại ngày báo giá và thời hạn áp dụng. Hỏi điều kiện đổi lịch, hoàn cọc và trường hợp được khuyên chưa thực hiện. Không cần gửi giấy tờ cá nhân hoặc hồ sơ sức khỏe lên bình luận công khai để xin giá.</p>
<h2>Câu hỏi thường gặp về chi phí phun môi</h2>
<h3>Dặm miễn phí có nghĩa là chắc chắn phải dặm không?</h3><p>Không. Đây là điều kiện dịch vụ cần đọc rõ, không phải kết luận môi bạn cần thêm một lần làm. Tham khảo ${link("phun-moi-bao-lau-len-mau-khi-nao-dam", "cách đánh giá màu trước khi bàn lịch dặm")}.</p>
<h3>Nên chọn gói đắt nhất để yên tâm hơn?</h3><p>Giá cao không tự xác nhận chất lượng. Thông tin người thực hiện, vật tư, giới hạn kết quả và cách hỗ trợ phải rõ ở bất kỳ mức giá nào. Bạn có quyền chưa chọn nếu chưa được giải thích đủ.</p>
${consultation("chi phí phun môi")}`,
  },
  {
    slug: "moi-tham-co-phun-duoc-khong",
    title: "Môi thâm có phun được không? Hiểu nền môi trước khi chọn màu",
    description: "Môi thâm có phun được không, có cần khử thâm trước không? Phân biệt nền môi tự nhiên và màu phun cũ, chuẩn bị câu hỏi trước khi tư vấn tại Hương Mận.",
    lead: "Môi thâm không đủ để kết luận nên phun ngay hay chọn một màu cụ thể. Cần phân biệt màu môi vốn có, màu còn lại từ lần phun trước và thay đổi mới xuất hiện trên môi.",
    keyword: "môi thâm có phun được không",
    secondaryKeywords: ["khử thâm môi trước khi phun", "phun môi thâm Thái Nguyên"],
    cluster: "moi",
    intent: "Đánh giá nhu cầu xử lý nền môi trước khi chọn dịch vụ",
    relatedSlugs: ["da-ngam-phun-moi-mau-gi", "gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "cham-soc-sau-phun-moi-can-kieng-gi"],
    content: `
<h2>Bắt đầu bằng việc mô tả đúng nền môi</h2>
<p>Thay vì chỉ nói “môi em thâm”, hãy mô tả phần khiến bạn băn khoăn: toàn bộ môi tối màu, viền đậm hơn lòng môi, hai môi khác sắc độ hay màu cũ còn rõ. Thông tin này giúp cuộc trao đổi cụ thể hơn, nhưng không thay thế đánh giá trực tiếp.</p>
<p>Chuẩn bị ảnh môi không tô son, chụp trong ánh sáng tự nhiên và không dùng bộ lọc. Nếu có ảnh trước lần phun cũ, giữ cả hai để đối chiếu. Ảnh không xác định được nguyên nhân thâm và cũng không đủ để chốt công thức màu.</p>
<h2>Khử thâm có giống phun màu môi không?</h2>
<p>Bạn nên xem “khử thâm” là một tên gọi cần được giải thích, không phải lời bảo đảm môi sẽ sáng theo một mức cố định. Hãy hỏi đó là cách xử lý màu bằng phun sắc tố, một bước riêng hay phương pháp khác. Nếu được giới thiệu nhiều bước, mỗi bước cần có mục đích và chi phí rõ ràng.</p>
<p>Một đề xuất hữu ích phải trả lời được: nền hiện tại có phù hợp để thực hiện không, mục tiêu màu có thực tế không, điều gì chưa thể dự đoán và khi nào cần đánh giá lại. Câu “môi nào cũng làm được” không giải thích những điểm này.</p>
<h2>Môi từng phun cần trao đổi khác gì?</h2>
<ul><li>Ghi thời điểm từng làm, số lần bổ sung và phương pháp xử lý màu nếu có.</li><li>Nói rõ bạn muốn giảm cảm giác đậm màu, đổi sắc độ hay điều chỉnh đường viền.</li><li>Đề nghị người tư vấn phân biệt phần màu cũ với màu môi hiện tại.</li><li>Hỏi liệu có lựa chọn chưa làm thêm và theo dõi trước hay không.</li></ul>
<p>Không nên tự mua dung dịch tẩy màu hoặc nhận lời phun chồng chỉ vì ảnh chỉnh sửa trông đẹp. Theo <a href="${sources.removal}">FDA về xóa màu xăm</a>, việc loại bỏ màu có thể cần nhiều lần và không phải lúc nào cũng hết hoàn toàn. Vì vậy, quyết định sửa nền cần cân nhắc trước khi thêm một lớp màu mới.</p>
<h2>Chọn màu sau khi đã làm rõ nền, không chọn theo tên hot</h2>
<p>“Đỏ cam”, “hồng đất” hay “cam đào” chỉ giúp mô tả sở thích. Bạn có thể mang hai ảnh: một sắc độ thích và một sắc độ không muốn. Nói rõ bạn muốn môi trông như không tô son hay thích độ rõ màu khi để mặt mộc. Xem thêm ${link("da-ngam-phun-moi-mau-gi", "cách chọn màu phun môi cho da ngăm")} nếu đang phân vân về sự hài hòa với tông da.</p>
<p>Đừng dùng màu son trên cánh tay hoặc ảnh ngay sau buổi phun để cam kết màu môi sau hồi phục. Đề nghị được giải thích giới hạn của ảnh mẫu và xem hình đã lành, không chỉ hình vừa thực hiện.</p>
<h2>Khi nào nên kiểm tra sức khỏe trước?</h2>
<p>Nếu môi đang loét, nổi mụn nước hoặc thay đổi màu bất thường chưa rõ nguyên nhân, nên hỏi bác sĩ trước khi tìm cách che bằng màu. Phun xăm không phải phương pháp chẩn đoán hay điều trị nguyên nhân của những thay đổi đó. Hãy thông báo tiền sử phản ứng với mực hoặc sản phẩm từng dùng.</p>
<h2>Câu hỏi thường gặp</h2>
<h3>Có chắc chỉ cần một lần để xử lý môi thâm?</h3><p>Không thể hứa số lần khi chưa đánh giá trường hợp cụ thể. Bạn nên hỏi mốc kiểm tra, tiêu chí dừng và tổng chi phí có thể phát sinh, thay vì mua nhiều buổi chỉ vì một lời cam kết.</p>
<h3>Khử thâm có nằm trong giá phun môi không?</h3><p>Tùy báo giá. Xem ${link("gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "danh sách các khoản cần tách rõ")} và xác nhận bằng thông tin cụ thể trước khi đặt lịch.</p>
${consultation("nền môi thâm hoặc môi từng phun")}`,
  },
  {
    slug: "da-ngam-phun-moi-mau-gi",
    title: "Da ngăm phun môi màu gì? Cách chọn sắc độ tự nhiên",
    description: "Da ngăm nên phun môi màu gì? So sánh gợi ý đỏ nâu, hồng đất, cam đất theo sở thích, nền môi và ảnh đã lành; tránh chốt màu chỉ từ ảnh quảng cáo.",
    lead: "Da ngăm không bắt buộc phải chọn một màu môi duy nhất. Màu bạn thích, nền môi hiện tại và độ đậm mong muốn quan trọng hơn một danh sách màu được gắn nhãn hợp mọi làn da.",
    keyword: "da ngăm phun môi màu gì",
    secondaryKeywords: ["màu phun môi tự nhiên cho da ngăm", "phun môi hồng đất hay cam đất"],
    cluster: "moi",
    intent: "Khám phá phong cách màu và chuẩn bị trao đổi sở thích",
    relatedSlugs: ["moi-tham-co-phun-duoc-khong", "phun-moi-bao-lau-len-mau-khi-nao-dam", "cam-nang-phun-moi-phun-may-thai-nguyen"],
    content: `
<h2>Chọn cảm giác mong muốn trước tên màu</h2>
<p>Bạn muốn sắc môi nhẹ khi đi làm, rõ hơn khi để mặt mộc hay gần với màu son đang dùng? Hãy chọn một mục tiêu chính. “Tự nhiên” với người thích trang điểm có thể vẫn quá đậm với người hiếm khi dùng son; mô tả thói quen sẽ giúp hai bên hiểu nhau hơn.</p>
<p>Không cần đặt mục tiêu làm da trông trắng hơn. Một lựa chọn phù hợp có thể đơn giản là sắc môi khiến bạn thấy thoải mái với gương mặt vốn có. Các gợi ý dưới đây là cách trao đổi về thẩm mỹ, không phải công thức phối mực hoặc bảo đảm kết quả.</p>
<h2>Ba hướng màu để mang đến buổi tư vấn</h2>
<h3>Đỏ nâu hoặc đỏ đất: khi thích sắc độ rõ</h3><p>Nếu thường chọn son đỏ trầm, hãy mang đúng ảnh hoặc thỏi son bạn thích để diễn đạt. Làm rõ bạn thích sắc đỏ, độ trầm hay độ đậm, vì ba đặc điểm này không giống nhau. Mẫu son chỉ là tài liệu về sở thích, không dự đoán màu phun.</p>
<h3>Hồng đất: khi muốn trao đổi về sắc hồng dịu</h3><p>Tên “hồng đất” được dùng cho nhiều tông khác nhau. Hãy chỉ ra bạn muốn thiên hồng hay thiên nâu và hỏi màu nền môi có ảnh hưởng thế nào đến mục tiêu đó. Đừng chọn chỉ vì cùng tên màu trên ảnh của người khác.</p>
<h3>Cam đất hoặc đỏ cam: khi thích cảm giác ấm</h3><p>So sánh mẫu ở ánh sáng ban ngày và ánh sáng trong nhà. Nếu không thích sắc cam rõ khi để mặt mộc, nói điều đó ngay từ đầu. Bạn cũng có thể chọn chưa thực hiện nếu màu dự kiến vẫn chưa đúng sở thích.</p>
<h2>Da ngăm và môi thâm là hai thông tin khác nhau</h2>
<p>Tông da không cho biết đầy đủ nền môi. Hai người có màu da tương tự vẫn có thể khác màu viền môi, màu lòng môi hoặc lịch sử phun. Vì thế, câu hỏi ${link("moi-tham-co-phun-duoc-khong", "môi thâm có phun được không")} nên được làm rõ riêng, không thay bằng một bảng màu dành cho da ngăm.</p>
<p>Khi từng phun, mang thông tin lần làm trước và ảnh hiện tại không tô son. Nếu có màu cũ, hãy hỏi giới hạn đổi tông trước khi chọn tên màu mới.</p>
<h2>Cách đọc ảnh màu môi để ít bị lệch kỳ vọng</h2>
<ol><li>Hỏi ảnh được chụp ngay sau làm hay sau khi vùng môi đã lành.</li><li>Ưu tiên ảnh có thông tin nền môi ban đầu và điều kiện ánh sáng tương đương.</li><li>Không lấy ảnh có son bóng, bộ lọc làm mịn hoặc tăng độ bão hòa màu làm chuẩn duy nhất.</li><li>Xem toàn gương mặt bên cạnh ảnh cận môi để đánh giá cảm giác tổng thể.</li><li>Ghi lại cả điểm thích và điểm không thích thay vì yêu cầu “giống hệt”.</li></ol>
<p>Theo <a href="${sources.aftercare}">hướng dẫn chăm sóc micropigmentation của East Kent Hospitals</a>, màu ngay sau thực hiện có thể đậm hơn khi vùng da hồi phục. Do đó, ảnh tức thì và ảnh đã lành không nên được dùng thay thế cho nhau.</p>
<h2>Câu hỏi thường gặp khi chọn màu</h2>
<h3>Da ngăm có nhất thiết tránh mọi màu hồng không?</h3><p>Không có một quy tắc thẩm mỹ bắt buộc như vậy. Hãy trao đổi bằng sắc độ cụ thể, sở thích và nền môi, thay vì loại bỏ cả một nhóm màu chỉ vì màu da.</p>
<h3>Có thể chốt màu qua tin nhắn không?</h3><p>Tin nhắn phù hợp để gửi ảnh tham khảo và đặt lịch. Lựa chọn cuối cần trao đổi trực tiếp về nền môi, giới hạn và phương án. Xem ${link("phun-moi-bao-lau-len-mau-khi-nao-dam", "cách theo dõi màu và trao đổi về dặm lại")} để chuẩn bị thêm.</p>
${consultation("màu môi và phong cách mong muốn")}`,
  },
  {
    slug: "cham-soc-sau-phun-moi-can-kieng-gi",
    title: "Chăm sóc sau phun môi: cần kiêng gì và khi nào đi khám?",
    description: "Sau phun môi cần kiêng gì? Cách đọc hướng dẫn chăm sóc, lưu ý vệ sinh, trang điểm, ăn uống và dấu hiệu cần khám; không tự dùng thuốc theo mẹo mạng.",
    lead: "Sau phun môi, việc cần ưu tiên là hướng dẫn chăm sóc dành cho trường hợp của bạn và theo dõi dấu hiệu bất thường. Đừng chỉ tập trung vào danh sách món ăn kiêng rồi bỏ qua vệ sinh hoặc triệu chứng tăng dần.",
    keyword: "chăm sóc sau phun môi cần kiêng gì",
    secondaryKeywords: ["phun môi có cần kiêng nước không", "sau phun môi khi nào dùng son"],
    cluster: "moi",
    intent: "Tra cứu chăm sóc cơ bản và nhận biết khi cần trợ giúp y tế",
    relatedSlugs: ["phun-moi-bao-lau-len-mau-khi-nao-dam", "moi-tham-co-phun-duoc-khong", "gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham"],
    content: `
<h2>Xin hướng dẫn rõ trước khi rời cơ sở</h2>
<p>Bạn nên có một tờ hướng dẫn hoặc tin nhắn ghi rõ cách làm sạch, sản phẩm được dùng, lịch kiểm tra và đầu mối liên hệ. Nếu chỉ được dặn “kiêng vài hôm”, hãy hỏi lại: kiêng việc gì, trong điều kiện nào và dựa vào dấu hiệu nào để trở lại sinh hoạt thường ngày.</p>
<p>Đây là nội dung tham khảo để bạn hiểu câu hỏi cần làm rõ, không phải phác đồ chăm sóc cá nhân. Nếu hướng dẫn giữa các nơi khác nhau, hỏi người trực tiếp phụ trách hoặc bác sĩ thay vì tự trộn nhiều cách chăm sóc.</p>
<h2>Kiêng nước không có nghĩa là bỏ vệ sinh</h2>
<p>Cần phân biệt ngâm lâu, tia nước mạnh hoặc đi bơi với việc làm sạch nhẹ nhàng theo hướng dẫn. Tài liệu <a href="${sources.aftercare}">East Kent Hospitals về chăm sóc sau micropigmentation</a> lưu ý tránh ngâm, chà xát và tự bóc vảy. Hãy xin cách vệ sinh cụ thể cho vùng môi, thay vì suy ra rằng không được làm sạch trong nhiều ngày.</p>
<p>Trước khi dùng sản phẩm chăm sóc, hỏi tên, cách dùng và thời điểm dừng. Không lấy đơn thuốc hoặc kem bôi của người khác làm hướng dẫn cho mình. Thuốc cần được người có chuyên môn chỉ định khi thực sự cần.</p>
<h2>Ăn uống và trang điểm: hỏi đúng điều cần kiêng</h2>
<p>Không nên coi một danh sách thực phẩm trên mạng là quy tắc bắt buộc cho tất cả mọi người. Khi được khuyên kiêng món nào, hãy hỏi lý do, thời gian và xem lời khuyên đó có liên quan tới dị ứng hoặc bệnh nền của mình không. Nếu đã có chế độ ăn do bác sĩ hướng dẫn, đừng tự thay đổi chỉ vì muốn môi lên màu nhanh.</p>
<p>Về son và mỹ phẩm, hỏi rõ khi nào có thể dùng lại trên vùng môi đã lành. Không dùng mỹ phẩm để che vùng đang có biểu hiện bất thường rồi chờ tự hết. Với hoạt động bơi, xông hơi hoặc chuyến du lịch nhiều nắng, nên trao đổi lịch trước khi thực hiện dịch vụ.</p>
<h2>Dấu hiệu nào không nên chỉ chờ bong xong?</h2>
<p>Theo <a href="${sources.aad}">Học viện Da liễu Hoa Kỳ về phản ứng sau xăm</a>, đỏ lan, đau tăng, mủ hoặc sốt là những dấu hiệu cần được bác sĩ đánh giá sớm. Khó thở hoặc sưng mặt, môi, lưỡi nhanh cần trợ giúp y tế khẩn cấp. Không chờ cơ sở làm đẹp trả lời tin nhắn nếu có biểu hiện nặng.</p>
<p>Ghi lại thời điểm xuất hiện, diễn biến và các sản phẩm đã dùng để cung cấp khi khám. Ảnh có thể giúp mô tả thay đổi, nhưng không thay thế chẩn đoán trực tiếp. Đừng tự gọi mọi nốt nước hoặc vùng ngứa là “đang đẩy mực”.</p>
<h2>Theo dõi thế nào để trao đổi dễ hơn?</h2>
<ul><li>Ghi ngày thực hiện và đầu mối được hướng dẫn liên hệ.</li><li>Ghi tên sản phẩm đã dùng cùng thời điểm bắt đầu.</li><li>Nếu chụp ảnh, dùng ánh sáng tương tự và không chỉnh màu.</li><li>Phân biệt băn khoăn về màu sắc với dấu hiệu đau, đỏ hoặc tổn thương.</li><li>Giữ lịch kiểm tra đã được xác nhận, không tự đặt lịch làm bổ sung chỉ vì môi chưa giống ảnh mẫu.</li></ul>
<h2>Câu hỏi thường gặp</h2>
<h3>Bong hết có nghĩa là dùng lại mọi mỹ phẩm được chưa?</h3><p>Không nên dùng một dấu hiệu đơn lẻ để tự quyết định. Hãy xác nhận với người phụ trách theo tình trạng thực tế và hướng dẫn đã nhận.</p>
<h3>Màu nhạt sau bong có phải phun hỏng?</h3><p>Chưa thể kết luận chỉ từ một ảnh. Xem ${link("phun-moi-bao-lau-len-mau-khi-nao-dam", "cách phân biệt theo dõi màu và nhu cầu dặm lại")}. Nếu kèm dấu hiệu bất thường, ưu tiên khám thay vì bàn sửa màu.</p>`,
  },
  {
    slug: "phun-moi-bao-lau-len-mau-khi-nao-dam",
    title: "Phun môi bao lâu lên màu? Khi nào nên bàn việc dặm lại?",
    description: "Phun môi bao lâu lên màu, môi nhạt sau bong có cần dặm? Phân biệt hồi phục và đánh giá màu, cách theo dõi ảnh và câu hỏi trước khi làm bổ sung.",
    lead: "Không thể lấy một mốc ngày trên mạng làm lời hẹn màu môi cho mọi người. Môi bong bề mặt, vùng môi hồi phục và thời điểm đánh giá màu là những việc cần được phân biệt.",
    keyword: "phun môi bao lâu lên màu",
    secondaryKeywords: ["phun môi khi nào dặm lại", "môi nhạt sau bong có cần dặm"],
    cluster: "moi",
    intent: "Hiểu diễn biến màu và điều kiện xem xét làm bổ sung",
    relatedSlugs: ["cham-soc-sau-phun-moi-can-kieng-gi", "gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "da-ngam-phun-moi-mau-gi"],
    content: `
<h2>Ba việc thường bị gộp thành “lên màu”</h2>
<p>Thứ nhất là hình ảnh ngay sau thực hiện; thứ hai là quá trình vùng môi hồi phục; thứ ba là đánh giá màu để xem có phù hợp với mục tiêu đã trao đổi không. Một ảnh ở giai đoạn đầu không trả lời được cả ba việc.</p>
<p><a href="${sources.aftercare}">East Kent Hospitals</a> lưu ý màu sau micropigmentation có thể thay đổi trong quá trình hồi phục và không làm bổ sung khi vùng da chưa lành hoàn toàn. Hướng dẫn này không xác lập một lịch dặm riêng cho tất cả dịch vụ phun môi. Bạn cần nhận mốc kiểm tra cho trường hợp thực tế của mình.</p>
<h2>Nên hỏi về thời gian ngay từ lúc tư vấn</h2>
<ul><li>Khi nào cần gửi thông tin theo dõi, và khi nào cần đến kiểm tra trực tiếp?</li><li>Những thay đổi nào có thể dự kiến, thay đổi nào cần liên hệ sớm?</li><li>Dựa vào điều kiện nào để đánh giá màu, không chỉ dựa vào số ngày?</li><li>Nếu màu chưa đạt mong muốn, bước tiếp theo là theo dõi, đánh giá lại hay cân nhắc phương án khác?</li></ul>
<p>Nếu có đám cưới, chụp ảnh hoặc chuyến công tác, nêu ngày sự kiện trước khi đặt lịch. Không nên xếp một buổi phun hoặc dặm sát sự kiện chỉ dựa trên lời hứa “đẹp ngay”. Bạn có thể lựa chọn chưa làm để không phải chạy theo thời hạn.</p>
<h2>Môi nhạt hoặc chưa đều sau bong có phải làm lại ngay?</h2>
<p>Chưa. Điều đầu tiên là xác định vùng môi đang ở giai đoạn nào và có triệu chứng gì kèm theo. Chụp ảnh không tô son, không dùng bộ lọc, giữ điều kiện ánh sáng tương đương để gửi đúng đầu mối tư vấn. Đừng tăng độ đậm ảnh để đoán màu hoặc so với ảnh vừa phun của người khác.</p>
<p>Bạn có thể ghi rõ phần chưa ưng: viền, lòng môi, độ đậm hay tông màu. “Muốn đậm hơn” khác với “muốn chuyển từ cam sang hồng”; nói rõ giúp tránh hiểu lầm rằng mọi thay đổi đều là dặm theo chính sách ban đầu.</p>
<h2>Dặm lại nên được quyết định như thế nào?</h2>
<p>Một lần đánh giá trước dặm cần làm rõ tình trạng hiện tại, mục tiêu bổ sung và những giới hạn chưa thể giải quyết. Nếu có vấn đề sức khỏe hoặc phản ứng sau lần trước, hãy kiểm tra với bác sĩ trước. Lời mời dặm miễn phí không thay cho việc đánh giá xem có nên thực hiện tiếp hay không.</p>
<p>Về chi phí, đọc ${link("gia-phun-moi-thai-nguyen-chi-phi-dam-khu-tham", "các điều kiện dặm trong báo giá phun môi")}. Hỏi việc đổi lịch do cần hồi phục có ảnh hưởng quyền lợi không, thay vì cố làm đúng hạn ưu đãi khi chưa phù hợp.</p>
<h2>Tách câu hỏi về màu khỏi dấu hiệu cần khám</h2>
<p>Màu chưa ưng là một vấn đề thẩm mỹ; đau tăng, đỏ lan, mủ hoặc sốt cần được xem xét theo hướng sức khỏe. <a href="${sources.aad}">AAD khuyến cáo đi khám khi có dấu hiệu nhiễm trùng sau xăm</a>. Đừng trì hoãn khám để chờ đến lịch dặm.</p>
<h2>Câu hỏi thường gặp</h2>
<h3>Mọi người đều phải dặm lần hai?</h3><p>Không nên mặc định. Hãy quyết định sau khi được đánh giá và hiểu mục tiêu của lần bổ sung, thay vì coi đó là bước bắt buộc của mọi trường hợp.</p>
<h3>Chỉ gửi ảnh có đủ để chốt lịch dặm không?</h3><p>Ảnh hỗ trợ trao đổi bước đầu. Người phụ trách cần cho biết có phải kiểm tra trực tiếp hay không trước khi thống nhất làm thêm. Hướng dẫn ${link("cham-soc-sau-phun-moi-can-kieng-gi", "chăm sóc sau phun môi")} giúp bạn chuẩn bị thông tin theo dõi.</p>
${consultation("màu môi sau lần phun trước")}`,
  },
];
