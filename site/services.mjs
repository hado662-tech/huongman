import { readFileSync } from "node:fs";

const articles = JSON.parse(
  readFileSync(new URL("./articles.json", import.meta.url), "utf8"),
);
const entries = [
  {
    path: "derma/tri-nam.html",
    name: "Trị nám",
    category: "skin",
    imageKey: "care",
    match: "tri-nam",
    intro:
      "Tìm hiểu trị nám tại Thái Nguyên từ những câu hỏi thực tế: tình trạng sắc tố hiện tại là gì, mục tiêu cải thiện ra sao và chi phí được tính theo từng buổi hay cả lộ trình.",
    concerns: ["Tình trạng sắc tố", "Chi phí lộ trình", "Theo dõi tiến triển"],
    heading: "Bạn cần làm rõ điều gì khi tìm hiểu trị nám?",
    paragraphs: [
      "Hãy mang theo danh sách sản phẩm đang dùng, thông tin về các phương pháp đã thử và những thay đổi bạn nhận thấy trên da. Những điều này giúp buổi trao đổi đi vào trường hợp của bạn, thay vì chỉ so sánh tên một công nghệ.",
      "Đề nghị người phụ trách giải thích cách đánh giá tình trạng, mục tiêu dự kiến và mốc xem lại phương án. Hỏi rõ cách theo dõi bằng ảnh, những lưu ý chăm sóc tại nhà và khi nào cần liên hệ để được hướng dẫn.",
    ],
    question: "Có nên chọn trị nám chỉ dựa trên ảnh trước và sau?",
    answer:
      "Bạn nên hỏi thời điểm chụp, điều kiện ánh sáng, các phương pháp đã kết hợp và thời gian theo dõi. Một hình ảnh riêng lẻ không đủ để dự đoán kết quả trên da của bạn.",
  },
  {
    path: "derma/tri-mun-chuyen-sau.html",
    name: "Trị mụn chuyên sâu",
    category: "skin",
    imageKey: "care",
    match: "tri-mun",
    intro:
      "Khi tìm hiểu trị mụn tại Thái Nguyên, điều cần ưu tiên là đánh giá tình trạng da và hiểu kế hoạch theo dõi, thay vì chọn một gói chăm sóc chỉ từ tên gọi.",
    concerns: ["Tình trạng da", "Thói quen chăm sóc", "Kế hoạch theo dõi"],
    heading: "Chuẩn bị gì cho buổi trao đổi về mụn?",
    paragraphs: [
      "Ghi lại thời điểm xuất hiện mụn, những sản phẩm hoặc thuốc đang dùng và các phương pháp đã thực hiện. Nếu có ảnh theo từng giai đoạn, bạn có thể dùng để mô tả diễn biến rõ hơn.",
      "Hỏi ai sẽ đánh giá da, liệu có cần thăm khám chuyên môn và những bước nào được đề xuất cho riêng bạn. Với từng bước, cần biết mục đích, chi phí, hướng dẫn sau đó và cách xử lý khi thấy biểu hiện không như dự kiến.",
    ],
    question: "Da dầu có thể chọn chung một liệu trình trị mụn không?",
    answer:
      "Bạn nên yêu cầu giải thích lựa chọn theo tình trạng hiện tại, thay vì coi “da dầu” là đủ thông tin để quyết định. Mang theo sản phẩm đang sử dụng để cuộc trao đổi cụ thể hơn.",
  },
  {
    path: "derma/laser-toning.html",
    name: "Laser toning",
    category: "skin",
    imageKey: "skin",
    match: "laser",
    intro:
      "Tìm hiểu laser toning tại Thái Nguyên: tên thiết bị và phương án cụ thể, mục tiêu được đề xuất, điều kiện phù hợp và những khoản cần xác nhận trước khi lựa chọn.",
    concerns: ["Phương án cụ thể", "Người phụ trách", "Chăm sóc sau buổi làm"],
    heading: "Đừng dừng lại ở tên gọi “laser toning”",
    paragraphs: [
      "Khi được giới thiệu laser toning, hãy hỏi thiết bị nào sẽ được sử dụng, ai đánh giá và trực tiếp thực hiện, vì sao phương án đó được đề xuất cho tình trạng của bạn. Cần làm rõ các lựa chọn khác và lý do lựa chọn.",
      "Bạn cũng nên trao đổi về các lần dùng laser, peel hoặc sản phẩm chăm sóc trước đây. Hỏi cách theo dõi sau mỗi buổi, việc chăm sóc tại nhà và tiêu chí để quyết định tiếp tục hay điều chỉnh.",
    ],
    question: "Laser toning có phải lựa chọn cho mọi tình trạng nám?",
    answer:
      "Không nên quyết định chỉ dựa trên tên tình trạng tự nhận định. Hãy thăm khám và yêu cầu giải thích mức độ phù hợp của phương án với trường hợp cụ thể trước khi thực hiện.",
  },
  {
    path: "derma/peel-da-y-te.html",
    name: "Peel da y tế",
    category: "skin",
    imageKey: "care",
    match: "peel",
    intro:
      "Tìm hiểu peel da tại Thái Nguyên bằng các câu hỏi về sản phẩm sử dụng, mục tiêu, người đánh giá tình trạng và hướng dẫn sau buổi thực hiện.",
    concerns: ["Sản phẩm sử dụng", "Tình trạng hiện tại", "Hướng dẫn sau peel"],
    heading: "Cần trao đổi những gì trước khi peel da?",
    paragraphs: [
      "Chuẩn bị danh sách sản phẩm, thuốc đang sử dụng và thông tin về các lần peel trước đó nếu có. Đề nghị giải thích rõ vì sao lựa chọn peel được đưa ra, mức độ can thiệp dự kiến và các trường hợp cần hoãn.",
      "Hỏi cụ thể lịch sinh hoạt sau buổi làm, cách chăm sóc được hướng dẫn và nơi liên hệ nếu có biểu hiện khiến bạn lo lắng. Không nên lấy mức bong da trong ảnh của người khác làm mục tiêu cho mình.",
    ],
    question: "Peel da có bắt buộc phải bong nhiều mới đáng tiền?",
    answer:
      "Bạn nên đánh giá theo mục tiêu được thống nhất trong buổi tư vấn và cách theo dõi sau đó. Hãy hỏi người phụ trách cách nhận biết diễn biến phù hợp thay vì tự lấy độ bong làm thước đo.",
  },
  {
    path: "derma/mesotherapy.html",
    name: "Mesotherapy",
    category: "skin",
    imageKey: "skin",
    match: "mesotherapy",
    intro:
      "Trước khi tìm hiểu mesotherapy tại Thái Nguyên, hãy xác nhận kỹ thuật cụ thể, sản phẩm dự kiến sử dụng và người đủ chuyên môn đánh giá trường hợp của bạn.",
    concerns: ["Kỹ thuật cụ thể", "Nguồn gốc sản phẩm", "Phạm vi chuyên môn"],
    heading: "Làm rõ phương án được gọi là mesotherapy",
    paragraphs: [
      "Tên gọi mesotherapy chưa cho bạn đủ thông tin để lựa chọn. Cần hỏi cách thực hiện, sản phẩm được sử dụng, nguồn gốc và cách kiểm tra thông tin sản phẩm, cũng như mục tiêu mà người phụ trách đề xuất.",
      "Nếu phương án có tiêm hoặc can thiệp y khoa, hãy xác nhận người thực hiện và cơ sở có phạm vi chuyên môn phù hợp. Trao đổi đầy đủ thông tin sức khỏe, các dịch vụ đã làm và hướng dẫn theo dõi sau đó.",
    ],
    question: "Có thể chọn lịch làm mesotherapy theo gói quảng cáo không?",
    answer:
      "Bạn nên hỏi căn cứ của lịch đề xuất và tiêu chí đánh giá lại trước mỗi lần. Số buổi cần được giải thích cho trường hợp của bạn, không chỉ dựa trên số buổi có sẵn trong một gói.",
  },
  {
    path: "derma/giam-mo-bung.html",
    name: "Giảm mỡ bụng",
    category: "body",
    imageKey: "care",
    match: "giam-mo-bung",
    intro:
      "Tìm hiểu giảm mỡ bụng tại Thái Nguyên từ mục tiêu thực tế, phương pháp cụ thể và cách đo lường thay đổi được thống nhất trước khi lựa chọn.",
    concerns: ["Mục tiêu cá nhân", "Phương pháp đề xuất", "Cách đánh giá"],
    heading: "Bạn đang muốn thay đổi điều gì ở vùng bụng?",
    paragraphs: [
      "Hãy mô tả điều bạn quan tâm: số đo, đường nét hay cảm nhận về trang phục. Hỏi cách đánh giá tình trạng và vì sao phương án được đề xuất phù hợp với mục tiêu đó.",
      "Làm rõ liệu đây là chăm sóc không phẫu thuật hay một can thiệp khác; tên gọi “giảm mỡ” có thể được dùng cho nhiều phương án. Đề nghị thống nhất cách đo, thời điểm đánh giá và các khoản cần thanh toán.",
    ],
    question: "Giảm mỡ bụng có giống hút mỡ bụng không?",
    answer:
      "Bạn cần yêu cầu mô tả chính xác cách thực hiện. Nếu phương án là hút mỡ hoặc can thiệp phẫu thuật, việc thăm khám, cơ sở thực hiện và các yêu cầu chuyên môn cần được xác minh riêng.",
  },
  {
    path: "derma/tan-mo-bap-tay.html",
    name: "Tư vấn giảm mỡ bắp tay",
    category: "body",
    imageKey: "portrait",
    match: "tan-mo-bap-tay",
    intro:
      "Khi tìm hiểu tan mỡ hoặc giảm mỡ bắp tay ở Thái Nguyên, hãy hỏi rõ phương pháp thực tế và mục tiêu thay đổi đường nét trước khi so sánh giá.",
    concerns: [
      "Đường nét bắp tay",
      "Tên phương pháp",
      "Đánh giá trước khi làm",
    ],
    heading: "Làm rõ nhu cầu ở vùng bắp tay",
    paragraphs: [
      "Chuẩn bị những điều bạn muốn cải thiện và hỏi cách đánh giá vùng bắp tay. Không nên coi mọi thay đổi đường nét là cùng một vấn đề hoặc mặc định một phương án phù hợp cho mọi người.",
      "Nếu có đề xuất thiết bị, tiêm hoặc can thiệp khác, cần hỏi tên kỹ thuật, người thực hiện, phạm vi chuyên môn và các thông tin theo dõi. Chỉ so sánh chi phí khi đã biết rõ những gì được bao gồm.",
    ],
    question: "Có thể biết hiệu quả chỉ qua số đo cam kết không?",
    answer:
      "Hãy hỏi cách đo, thời điểm đo và những điều kiện ảnh hưởng đến cách đánh giá. Bạn cần được giải thích mục tiêu cụ thể, giới hạn và quy trình theo dõi thay vì dựa vào một con số quảng cáo.",
  },
  {
    path: "derma/body-contouring.html",
    name: "Body contouring",
    category: "body",
    imageKey: "portrait",
    match: "giam-mo",
    intro:
      "Body contouring là chủ đề về đường nét cơ thể. Tìm hiểu tại Thái Nguyên cần bắt đầu từ vùng muốn cải thiện và phương án thực tế được đề xuất.",
    concerns: ["Vùng quan tâm", "Đường nét cơ thể", "Phương án cụ thể"],
    heading: "Hỏi rõ điều gì nằm trong phương án body contouring?",
    paragraphs: [
      "Hãy mô tả vùng cơ thể bạn quan tâm, mục tiêu và khoảng thời gian có thể dành cho việc chăm sóc hoặc hồi phục. Đề nghị người tư vấn gọi đúng tên từng phương pháp thay vì chỉ sử dụng tên gói.",
      "Cần phân biệt mục tiêu đường nét với mong muốn thay đổi cân nặng. Hỏi người phụ trách cách đánh giá mức độ phù hợp, cách theo dõi và yêu cầu chuyên môn tương ứng với kỹ thuật được đề xuất.",
    ],
    question: "Một gói body contouring có áp dụng cho nhiều vùng không?",
    answer:
      "Hãy xác nhận từng vùng, số buổi, phương pháp và chi phí riêng. Bạn cũng cần được giải thích vì sao các vùng đó được lựa chọn và cách đánh giá sau khi thực hiện.",
  },
  {
    path: "surgery/bam-mi-mat.html",
    name: "Bấm mí mắt",
    category: "face",
    imageKey: "portrait",
    match: "bam-mi",
    intro:
      "Tìm hiểu bấm mí tại Thái Nguyên: đánh giá nếp mí hiện tại, mong muốn về đường nét và những câu hỏi về phương pháp, chi phí, theo dõi sau đó.",
    concerns: ["Nếp mí mong muốn", "Đánh giá vùng mắt", "Chi phí & theo dõi"],
    heading: "Bấm mí có phù hợp với mong muốn của bạn?",
    paragraphs: [
      "Khi tư vấn, hãy mô tả nếp mí bạn muốn và những điểm khiến bạn chưa hài lòng. Nếu đã từng can thiệp vùng mắt, cần cung cấp thông tin đó để việc đánh giá đầy đủ hơn.",
      "Hỏi vì sao bấm mí được đề xuất thay cho lựa chọn khác, giới hạn của phương án và cách theo dõi. Không nên lấy độ bền trong review của một người khác làm cam kết cho trường hợp của mình.",
    ],
    question: "Bấm mí và tạo mí mắt đôi nên so sánh như thế nào?",
    answer:
      "Hãy so sánh sau khi được đánh giá vùng mắt và nghe giải thích về cách thực hiện, mức độ can thiệp, yêu cầu theo dõi và chi phí của từng lựa chọn.",
  },
  {
    path: "surgery/tao-mi-mat-doi.html",
    name: "Tạo mí mắt đôi",
    category: "face",
    imageKey: "portrait",
    match: "cat-mi",
    intro:
      "Tìm hiểu tạo mí hoặc cắt mí tại Thái Nguyên với mục tiêu hài hòa đường nét. Chuẩn bị câu hỏi về chỉ định, người thực hiện, chi phí và lịch theo dõi.",
    concerns: ["Đường nét mí mắt", "Phương án cụ thể", "Lịch theo dõi"],
    heading: "Làm rõ phương án tạo mí được đề xuất",
    paragraphs: [
      "Mô tả điều bạn mong muốn ở vùng mắt và trao đổi các lần can thiệp trước đây nếu có. Hỏi tên kỹ thuật, phần thay đổi dự kiến và những giới hạn có thể gặp trong trường hợp của bạn.",
      "Đề nghị giải thích lịch thăm khám, việc sinh hoạt sau thực hiện và các mốc liên hệ. Bạn nên chuẩn bị thời gian theo kế hoạch đã được người phụ trách hướng dẫn, không dựa vào một mốc hồi phục chung trên mạng.",
    ],
    question: "Bao lâu sau tạo mí có thể trở lại sinh hoạt bình thường?",
    answer:
      "Hãy nêu rõ công việc và hoạt động bạn muốn quay lại để được hướng dẫn cho từng việc. Kế hoạch cần dựa vào phương án thực hiện và đánh giá theo dõi của người phụ trách.",
  },
  {
    path: "surgery/sua-sup-mi.html",
    name: "Tư vấn sửa sụp mi",
    category: "face",
    imageKey: "portrait",
    match: "sup-mi",
    intro:
      "Khi quan tâm sửa sụp mi tại Thái Nguyên, cần bắt đầu bằng việc mô tả tình trạng và thăm khám phù hợp trước khi quyết định một phương án thẩm mỹ.",
    concerns: ["Tình trạng vùng mắt", "Thăm khám trước", "Chỉ định phù hợp"],
    heading: "Chuẩn bị thông tin về tình trạng mí",
    paragraphs: [
      "Bạn nên ghi lại thời điểm nhận thấy sự thay đổi, một hay hai bên mắt và các biểu hiện đi kèm. Nếu đã từng khám hoặc can thiệp vùng mắt, hãy mang theo hồ sơ liên quan.",
      "Đừng chỉ chọn phương án dựa vào ảnh dáng mí. Hỏi cần được thăm khám bởi chuyên môn nào, mục tiêu của việc can thiệp và cách đánh giá trước khi đưa ra quyết định.",
    ],
    question: "Sụp mi có nên được xem như một nhu cầu cắt mí thông thường?",
    answer:
      "Bạn nên được đánh giá tình trạng cụ thể trước. Hãy mô tả đầy đủ những thay đổi vùng mắt để người có chuyên môn xác định việc thăm khám và tư vấn tiếp theo.",
  },
  {
    path: "surgery/keo-khoe-mat.html",
    name: "Tư vấn thẩm mỹ khóe mắt",
    category: "face",
    imageKey: "portrait",
    match: "cat-mi",
    intro:
      "Tìm hiểu kéo hoặc mở khóe mắt tại Thái Nguyên cần làm rõ kỹ thuật cụ thể, thay đổi mong muốn và những giới hạn liên quan đến đường nét vùng mắt.",
    concerns: [
      "Kỹ thuật vùng khóe mắt",
      "Mong muốn về đường nét",
      "Theo dõi sau thực hiện",
    ],
    heading: "Tên gọi khóe mắt cần được giải thích cụ thể",
    paragraphs: [
      "Hãy hỏi phương án nói đến khóe trong hay khóe ngoài và vì sao lựa chọn đó được đề xuất cho bạn. Chuẩn bị ảnh hoặc mô tả mong muốn để trao đổi, nhưng không coi đó là hình mẫu có thể sao chép nguyên vẹn.",
      "Cần làm rõ khả năng thay đổi, giới hạn, cách theo dõi và các vấn đề phải cân nhắc trước khi thực hiện. Hỏi thêm việc kết hợp với phương pháp khác có thật sự cần thiết hay không.",
    ],
    question: "Có nên kết hợp thẩm mỹ khóe mắt với tạo mí?",
    answer:
      "Bạn nên yêu cầu giải thích riêng mục tiêu của từng phần và lý do đề xuất kết hợp. Việc lựa chọn cần dựa trên đánh giá cụ thể, cùng thông tin đầy đủ về chi phí và theo dõi.",
  },
  {
    path: "surgery/nang-mui-tong-hop.html",
    name: "Nâng mũi",
    category: "face",
    imageKey: "portrait",
    match: "nang-mui",
    intro:
      "Tìm hiểu nâng mũi tại Thái Nguyên theo đường nét hiện tại và mục tiêu của bạn. Làm rõ kỹ thuật, vật liệu, cơ sở thực hiện và tổng chi phí trước khi quyết định.",
    concerns: [
      "Dáng mũi mong muốn",
      "Kỹ thuật & vật liệu",
      "Chi phí & hồi phục",
    ],
    heading: "Chọn dáng mũi bắt đầu từ buổi đánh giá",
    paragraphs: [
      "Bạn có thể chuẩn bị ảnh tham khảo và mô tả những điểm muốn thay đổi. Hỏi phần nào của mong muốn có thể được cân nhắc với đặc điểm hiện tại và đâu là giới hạn cần hiểu rõ.",
      "Trao đổi tên phương pháp, nguồn gốc vật liệu nếu sử dụng, người thực hiện và nơi thực hiện. Những tên gọi quảng cáo giống nhau chưa chắc mô tả cùng một phương án hoặc cùng phạm vi chi phí.",
    ],
    question: "Báo giá nâng mũi cần có những thông tin gì?",
    answer:
      "Hãy yêu cầu làm rõ phương pháp, vật liệu, các bước thăm khám, khoản theo dõi và điều kiện xử lý vấn đề sau đó. Xác nhận những khoản nằm ngoài giá trước khi lựa chọn.",
  },
  {
    path: "surgery/nang-dau-mui.html",
    name: "Tư vấn nâng đầu mũi",
    category: "face",
    imageKey: "portrait",
    match: "nang-dau-mui",
    intro:
      "Khi tìm hiểu nâng đầu mũi ở Thái Nguyên, hãy trao đổi xem thay đổi riêng vùng đầu mũi có phù hợp với tổng thể đường nét và mong muốn của bạn hay không.",
    concerns: ["Vùng đầu mũi", "Tổng thể đường nét", "Phạm vi can thiệp"],
    heading: "Mong muốn ở đầu mũi cần được nhìn trong tổng thể",
    paragraphs: [
      "Hãy mô tả những điểm bạn muốn thay đổi khi nhìn chính diện và góc nghiêng. Cung cấp thông tin về các lần can thiệp mũi trước đó nếu có để người phụ trách đánh giá đầy đủ.",
      "Cần hỏi việc chỉ thay đổi đầu mũi có đáp ứng mục tiêu hay không, phương án đề xuất tác động đến phần nào và giới hạn của thay đổi đó. Làm rõ các khoản chi phí và yêu cầu theo dõi trước khi quyết định.",
    ],
    question: "Nâng đầu mũi có luôn cần nâng cả sống mũi không?",
    answer:
      "Bạn nên hỏi lý do của từng phần được đề xuất và yêu cầu giải thích mục tiêu riêng. Không thể xác định phương án phù hợp chỉ từ tên dịch vụ hoặc ảnh tham khảo.",
  },
  {
    path: "surgery/sua-mui-hong.html",
    name: "Tư vấn sửa mũi sau can thiệp",
    category: "face",
    imageKey: "portrait",
    match: "sua-mui",
    intro:
      "Khi cần tìm hiểu sửa mũi ở Thái Nguyên sau lần can thiệp trước, hồ sơ cũ và việc thăm khám trực tiếp là những thông tin cần ưu tiên.",
    concerns: [
      "Lịch sử can thiệp",
      "Tình trạng hiện tại",
      "Đánh giá chuyên môn",
    ],
    heading: "Chuẩn bị hồ sơ trước khi hỏi về sửa mũi",
    paragraphs: [
      "Tập hợp thời điểm thực hiện, phương pháp và vật liệu nếu biết, hồ sơ theo dõi cùng những thay đổi bạn nhận thấy. Mô tả điều khiến bạn lo lắng hoặc chưa hài lòng một cách cụ thể.",
      "Hỏi người đánh giá về các bước cần thực hiện trước khi tư vấn phương án, những giới hạn và thời điểm phù hợp để quyết định. Không nên lựa chọn chỉ từ lời hứa có thể sửa mọi trường hợp.",
    ],
    question: "Có thể tư vấn phương án sửa mũi chỉ qua ảnh không?",
    answer:
      "Ảnh có thể giúp bạn bắt đầu mô tả nhu cầu, nhưng hãy hỏi yêu cầu thăm khám và hồ sơ cần thiết trước khi xác định kế hoạch thực hiện.",
  },
  {
    path: "surgery/thu-gon-canh-mui.html",
    name: "Thu gọn cánh mũi",
    category: "face",
    imageKey: "portrait",
    match: "thu-gon-canh-mui",
    intro:
      "Tìm hiểu thu gọn cánh mũi tại Thái Nguyên từ mục tiêu đường nét, phạm vi thay đổi và các câu hỏi về chăm sóc, theo dõi sau thực hiện.",
    concerns: [
      "Đường nét cánh mũi",
      "Phạm vi thay đổi",
      "Theo dõi vùng can thiệp",
    ],
    heading: "Làm rõ mong muốn về độ rộng và sự hài hòa",
    paragraphs: [
      "Mô tả điểm bạn muốn cải thiện khi nhìn chính diện, khi cười và trong tổng thể gương mặt. Hỏi vì sao phương án đề xuất phù hợp và giới hạn của mức thay đổi mong muốn.",
      "Cần trao đổi cách thực hiện, vị trí can thiệp, vấn đề sẹo, hướng dẫn chăm sóc và lịch theo dõi. Nên đọc review có bối cảnh rõ thay vì chọn chỉ dựa trên lời mô tả “không để lại dấu vết”.",
    ],
    question: "Thu gọn cánh mũi có cần làm cùng nâng mũi không?",
    answer:
      "Hãy yêu cầu giải thích riêng mục tiêu và mức cần thiết của từng phương án. Quyết định kết hợp cần dựa trên đánh giá trực tiếp, thông tin chi phí và các yêu cầu theo dõi.",
  },
  {
    path: "surgery/cang-da-mat-smas.html",
    name: "Căng da mặt SMAS",
    category: "face",
    imageKey: "skin",
    match: "cang-da-mat",
    intro:
      "Tìm hiểu căng da mặt SMAS tại Thái Nguyên với các câu hỏi về chỉ định, cơ sở thực hiện, người phụ trách, chi phí và kế hoạch hồi phục.",
    concerns: [
      "Mục tiêu trẻ hóa",
      "Đánh giá trước phẫu thuật",
      "Kế hoạch hồi phục",
    ],
    heading: "Hiểu phương án căng da được đề xuất cho bạn",
    paragraphs: [
      "Bạn nên mô tả những vùng khiến mình quan tâm và kết quả mong đợi. Hỏi người có chuyên môn vì sao đề xuất SMAS, có lựa chọn nào khác và những giới hạn nào cần cân nhắc.",
      "Chuẩn bị thông tin sức khỏe và các dịch vụ đã từng thực hiện. Làm rõ cơ sở tiến hành, quy trình đánh giá trước thực hiện, người theo dõi và những yêu cầu liên quan đến việc nghỉ ngơi.",
    ],
    question: "Làm sao so sánh SMAS với mini facelift?",
    answer:
      "Hãy hỏi phạm vi và cách thực hiện của từng phương án trong trường hợp của bạn. Cần so sánh mục tiêu, giới hạn, yêu cầu hồi phục và toàn bộ chi phí, thay vì chỉ tên gọi.",
  },
  {
    path: "surgery/mini-facelift.html",
    name: "Mini facelift",
    category: "face",
    imageKey: "skin",
    match: "facelift",
    intro:
      "Khi tìm hiểu mini facelift ở Thái Nguyên, cần hỏi rõ phạm vi của phương án. Từ “mini” trong tên gọi không thay thế thông tin về cách thực hiện và việc theo dõi.",
    concerns: [
      "Phạm vi thực hiện",
      "Mục tiêu đường nét",
      "Theo dõi & hồi phục",
    ],
    heading: "Tên gọi “mini” cần đi cùng mô tả cụ thể",
    paragraphs: [
      "Hỏi vùng nào được tác động, vì sao phương án đó được đề xuất và điều gì nằm ngoài khả năng đáp ứng mục tiêu của bạn. Chuẩn bị thông tin về các phương pháp trẻ hóa đã thực hiện trước đây.",
      "Cần trao đổi cơ sở tiến hành, người thực hiện, đánh giá sức khỏe và kế hoạch hồi phục. Đề nghị giải thích sự khác nhau với các lựa chọn căng da khác dựa trên trường hợp của bạn.",
    ],
    question: "Có nên chọn mini facelift vì nghĩ sẽ nghỉ ít hơn?",
    answer:
      "Bạn nên nêu rõ công việc và quỹ thời gian của mình để được hướng dẫn. Hãy xác nhận kế hoạch theo dõi cụ thể thay vì suy đoán từ tên gọi.",
  },
  {
    path: "surgery/cay-mo-5d.html",
    name: "Tư vấn cấy mỡ gương mặt",
    category: "face",
    imageKey: "portrait",
    match: "cay-mo",
    intro:
      "Tìm hiểu cấy mỡ gương mặt tại Thái Nguyên cần làm rõ quy trình thực tế. Các tên gọi như “5D” nên được giải thích bằng kỹ thuật và mục tiêu cụ thể.",
    concerns: ["Vùng muốn cải thiện", "Kỹ thuật thực tế", "Cơ sở thực hiện"],
    heading: "Hỏi rõ nội dung phía sau tên gọi “5D”",
    paragraphs: [
      "Khi được giới thiệu cấy mỡ 5D, hãy hỏi cách thực hiện, vùng được đề xuất và vì sao phù hợp với mục tiêu của bạn. Tên gói không đủ để so sánh các phương án giữa những cơ sở khác nhau.",
      "Trao đổi thông tin sức khỏe, các lần can thiệp trước và yêu cầu thăm khám. Hỏi rõ cơ sở thực hiện, người phụ trách, thời điểm theo dõi và cách đánh giá tiến triển.",
    ],
    question: "Có thể lựa chọn vùng cấy mỡ chỉ theo ảnh mẫu?",
    answer:
      "Ảnh có thể giúp mô tả mong muốn, nhưng phương án cần được cân nhắc sau đánh giá trực tiếp. Hãy hỏi mức độ phù hợp, giới hạn và những vấn đề cần biết trước khi lựa chọn.",
  },
  {
    path: "surgery/nang-co-sieu-am.html",
    name: "Tư vấn nâng cơ gương mặt",
    category: "face",
    imageKey: "skin",
    match: "cang-da-mat",
    intro:
      "Tìm hiểu nâng cơ tại Thái Nguyên bắt đầu bằng việc xác định kỹ thuật: phương án sử dụng thiết bị hay có can thiệp khác, mục tiêu và cách theo dõi.",
    concerns: ["Tên kỹ thuật", "Vùng cần đánh giá", "Mục tiêu trẻ hóa"],
    heading: "Phân biệt phương án trước khi so sánh",
    paragraphs: [
      "Những từ như “nâng cơ”, “siêu âm” hoặc “chỉ” không nên được dùng thay thế nhau mà thiếu giải thích. Yêu cầu người tư vấn mô tả chính xác cách thực hiện và kỹ thuật nào đang được đề xuất.",
      "Chuẩn bị thông tin về vùng muốn cải thiện và các lần trẻ hóa trước đây. Hỏi căn cứ lựa chọn, chi phí, thời điểm xem lại và những việc cần làm nếu tiến triển khác với mong đợi.",
    ],
    question: "Có thể so sánh nâng cơ chỉ qua tên công nghệ không?",
    answer:
      "Bạn cần biết thiết bị hoặc kỹ thuật cụ thể, phạm vi thực hiện, người phụ trách và cách đánh giá kết quả. Hãy so sánh khi đã có đủ các thông tin đó.",
  },
  {
    path: "surgery/hut-mo-bung.html",
    name: "Tư vấn hút mỡ bụng",
    category: "body",
    imageKey: "care",
    match: "hut-mo-bung",
    intro:
      "Tìm hiểu hút mỡ bụng tại Thái Nguyên cần ưu tiên việc thăm khám, xác minh cơ sở thực hiện và chuẩn bị kế hoạch theo dõi trước khi cân nhắc chi phí.",
    concerns: ["Thăm khám trước", "Cơ sở phù hợp", "Chăm sóc & theo dõi"],
    heading: "Những thông tin cần xác nhận trước hút mỡ",
    paragraphs: [
      "Hỏi rõ nơi thực hiện, người phụ trách, các bước đánh giá sức khỏe và phạm vi chuyên môn của cơ sở. Cung cấp thông tin sức khỏe và các phương pháp đã làm trước đây một cách đầy đủ.",
      "Mô tả mục tiêu về vùng bụng và hỏi giới hạn của phương án đối với mong muốn đó. Làm rõ lịch theo dõi, việc sắp xếp người hỗ trợ và chi phí nào có thể phát sinh sau thực hiện.",
    ],
    question: "Nên chuẩn bị lịch làm việc như thế nào?",
    answer:
      "Hãy mô tả tính chất công việc, đi lại và sinh hoạt để được hướng dẫn cụ thể. Kế hoạch trở lại từng hoạt động cần được xác nhận qua người phụ trách theo dõi.",
  },
  {
    path: "surgery/nang-nguc.html",
    name: "Tư vấn nâng ngực",
    category: "body",
    imageKey: "portrait",
    match: "nang-nguc",
    intro:
      "Tìm hiểu nâng ngực tại Thái Nguyên bằng các câu hỏi về mục tiêu hình thể, vật liệu, cơ sở thực hiện và toàn bộ lộ trình theo dõi.",
    concerns: [
      "Mục tiêu hình thể",
      "Vật liệu & phương án",
      "Thăm khám chuyên môn",
    ],
    heading: "Chuẩn bị mong muốn và câu hỏi về phương án",
    paragraphs: [
      "Bạn có thể mô tả mong muốn về hình thể, sự cân đối và các hoạt động thường ngày. Hỏi căn cứ lựa chọn phương án hoặc kích cỡ thay vì quyết định từ ảnh hay số đo của người khác.",
      "Xác nhận tên, nguồn gốc và giấy tờ của vật liệu nếu sử dụng; đồng thời hỏi nơi tiến hành, người thực hiện và các yêu cầu thăm khám. Làm rõ chi phí và chính sách theo dõi bằng thông tin cụ thể.",
    ],
    question: "Có nên chọn kích cỡ nâng ngực trước khi thăm khám?",
    answer:
      "Bạn có thể chuẩn bị mong muốn, nhưng nên trao đổi về mức độ phù hợp sau khi được đánh giá. Hãy hỏi giới hạn của từng lựa chọn và cách lựa chọn liên quan đến sinh hoạt của bạn.",
  },
  {
    path: "surgery/phau-thuat-ham.html",
    name: "Tư vấn thẩm mỹ hàm",
    category: "face",
    imageKey: "portrait",
    match: "tham-my-vien-uy-tin",
    intro:
      "Nếu quan tâm phẫu thuật hàm tại Thái Nguyên, hãy bắt đầu từ cơ sở chuyên môn và yêu cầu thăm khám. Ảnh dáng mặt không đủ để xác định phương án can thiệp.",
    concerns: ["Đánh giá chuyên khoa", "Mục tiêu gương mặt", "Cơ sở thực hiện"],
    heading: "Đánh giá trước khi bàn về thay đổi đường nét hàm",
    paragraphs: [
      "Mô tả mong muốn và các vấn đề bạn đang quan tâm, đồng thời cung cấp lịch sử thăm khám hoặc can thiệp liên quan. Hỏi cần làm việc với chuyên khoa nào và các hồ sơ cần có cho buổi đánh giá.",
      "Với đề xuất phẫu thuật, phải làm rõ cơ sở tiến hành, người phụ trách, phạm vi chuyên môn và kế hoạch theo dõi. Không nên lựa chọn từ tên gói, ưu đãi hoặc hình ảnh trên mạng khi chưa được đánh giá.",
    ],
    question: "Có thể tư vấn phẫu thuật hàm chỉ bằng ảnh khuôn mặt?",
    answer:
      "Ảnh chỉ giúp mô tả bước đầu. Bạn cần được hướng dẫn về việc thăm khám và những đánh giá cần thiết trước khi xác định bất kỳ phương án nào.",
  },
  {
    path: "surgery/tham-my-vung-kin.html",
    name: "Tư vấn thẩm mỹ vùng kín",
    category: "body",
    imageKey: "care",
    match: "vung-kin",
    intro:
      "Tìm hiểu thẩm mỹ vùng kín tại Thái Nguyên với sự riêng tư và thông tin rõ ràng. Trao đổi nhu cầu, chuyên môn người phụ trách và cơ sở phù hợp trước khi quyết định.",
    concerns: ["Trao đổi riêng tư", "Người có chuyên môn", "Phương án cụ thể"],
    heading: "Ưu tiên sự riêng tư và buổi trao đổi phù hợp",
    paragraphs: [
      "Bạn có thể liên hệ trước để hỏi cách sắp xếp buổi tư vấn riêng và người phụ trách. Chỉ cung cấp thông tin cần thiết qua kênh đã được xác nhận; hãy hỏi cách thông tin được tiếp nhận và bảo mật.",
      "Làm rõ điều bạn muốn cải thiện, tên phương án, yêu cầu thăm khám và những vấn đề cần cân nhắc. Nếu có can thiệp y khoa, phải xác nhận cơ sở và phạm vi chuyên môn phù hợp.",
    ],
    question: "Có cần gửi hình ảnh nhạy cảm trước buổi tư vấn không?",
    answer:
      "Bạn có thể bắt đầu bằng cách hỏi quy trình và đặt lịch trao đổi. Không cần gửi hình nhạy cảm qua website này; hãy xác nhận nhu cầu và kênh trao đổi phù hợp với người phụ trách.",
  },
];

export const services = entries.map((entry) => ({
  ...entry,
  slug: entry.path.split("/").at(-1).replace(".html", ""),
  title: `${entry.name} Thái Nguyên: thông tin & tư vấn | Hương Mận`,
  description: entry.intro,
  sections: [
    { heading: entry.heading, paragraphs: entry.paragraphs },
    {
      heading: `Chi phí ${entry.name.toLowerCase()} cần hỏi như thế nào?`,
      paragraphs: [
        `Khi tìm hiểu giá ${entry.name.toLowerCase()} tại Thái Nguyên, hãy yêu cầu báo giá cho phương án cụ thể. Làm rõ các khoản thăm khám, thực hiện, sản phẩm hoặc vật liệu nếu có, chăm sóc và theo dõi; hỏi khoản nào chưa nằm trong giá.`,
        `Website chưa công bố bảng giá được xác nhận cho từng trường hợp. Bạn có thể gọi 0383 119 119 để trao đổi nhu cầu và xác nhận thông tin trước khi đến. Không nên lấy giá của một review cũ làm mức giá mặc định cho mình.`,
      ],
    },
    {
      heading: "Cách đọc review và chuẩn bị câu hỏi",
      paragraphs: [
        `Ưu tiên những chia sẻ có mô tả nhu cầu ban đầu, phương án thực tế và thời điểm theo dõi. Hình ảnh cần có bối cảnh; số sao hoặc một lời khen ngắn chưa đủ để giúp bạn đánh giá mức độ phù hợp.`,
        `Trước khi quyết định, hãy hỏi ai đánh giá và thực hiện, dịch vụ được tiến hành ở đâu, các vấn đề cần cân nhắc và cách liên hệ khi cần hỗ trợ. Với can thiệp y khoa, cần được thăm khám và xác nhận cơ sở có phạm vi chuyên môn phù hợp.`,
      ],
    },
  ],
  faq: [
    { question: entry.question, answer: entry.answer },
    {
      question: `Có thể nhận giá ${entry.name.toLowerCase()} trước khi đến không?`,
      answer:
        "Bạn có thể liên hệ để hỏi thông tin ban đầu. Để nhận chi phí sát với nhu cầu, cần làm rõ phương án cụ thể và những khoản đã bao gồm; hỏi thêm có cần thăm khám trước khi báo giá hay không.",
    },
    {
      question: "Đặt lịch trao đổi với Hương Mận bằng cách nào?",
      answer:
        "Gọi 0383 119 119 hoặc nhắn qua trang Facebook Hương Mận, nêu chủ đề quan tâm và thời gian thuận tiện. Lịch chỉ được xác nhận sau khi bạn đã trao đổi trực tiếp.",
    },
  ],
  relatedArticles: articles
    .filter((a) => a.path.includes(entry.match))
    .slice(0, 3)
    .map((a) => a.path),
}));
