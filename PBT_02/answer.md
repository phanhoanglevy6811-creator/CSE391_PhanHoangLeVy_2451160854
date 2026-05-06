# Phiếu bài tập 02.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — Input Types
1. type="email" → Ô nhập text kèm validate email format, tự kiểm tra có @ → Dùng để nhập tài khoản trong form đăng ký và đăng nhập.
2. type="text" → Ô nhập text, validation qua các thuộc tính minlength, maxlength, pattern → Dùng để nhập họ tên khách hàng hoặc địa chỉ trong form đăng ký, đặt hàng.
3. type="password" → Ô nhập bị ẩn ký tự, validation qua minlength, pattern → Dùng để nhập mật khẩu an toàn trong form đăng ký và đăng nhập.
4. type="number" → Ô nhập kèm nút tăng/giảm, validation qua min, max, step → Dùng để khách hàng điều chỉnh số lượng sản phẩm muốn mua trong form đặt hàng.
5. type="tel" → Hiển thị bàn phím số trên mobile, validation qua pattern → Dùng để thu thập số điện thoại liên hệ trong form đăng ký hoặc đặt hàng.
6. type="file" → Nút upload file, validation qua accept (giới hạn định dạng) và multiple (cho phép nhiều file) → Dùng để khách hàng tải lên ảnh hoặc video review sản phẩm,.
7. type="date" → Hiển thị Date picker (bảng chọn ngày), validation qua min, max → Dùng để chọn ngày sinh trong form đăng ký hoặc ngày giao hàng mong muốn *(Lưu ý: Chi tiết về ngày giao hàng/ngày sinh là ứng dụng thực tế bên ngoài tài liệu)*.
8. type="range" → Hiển thị dưới dạng thanh trượt (Slider), validation qua min, max, step → Dùng để tạo bộ lọc kéo chọn khoảng giá tiền của sản phẩm *(Lưu ý: Use case lọc khoảng giá là thông tin mở rộng bên ngoài tài liệu)*.
9. type="search" → Ô tìm kiếm kèm nút X để xóa nhanh, không có validation tự động → Dùng làm thanh tìm kiếm sản phẩm trên trang E-commerce *(Lưu ý: Use case tìm kiếm sản phẩm là thông tin mở rộng bên ngoài tài liệu)*.
10. type="url" → Ô nhập text có validate URL, tự kiểm tra phải có http:// → Dùng để thu thập link trang web cá nhân hoặc mạng xã hội trong trang hồ sơ khách hàng *(Lưu ý: Use case này là thông tin mở rộng bên ngoài tài liệu)*.

------------------
### Câu A2 — Validation Attributes
***Trường hợp 1: <input type="text" required value="">***
Dự đoán: Trình duyệt chặn submit và báo lỗi yêu cầu nhập dữ liệu.
Tại sao: Thuộc tính required là một dạng built-in validation của HTML5, bắt buộc người dùng phải điền thông tin
-Vì value="" (để trống), input này chưa thỏa mãn điều kiện bắt buộc.
***Trường hợp 2: <input type="email" value="abc">***
Dự đoán: Trình duyệt chặn submit và báo lỗi định dạng email.
Tại sao: Input type="email" có khả năng tự động kiểm tra định dạng email và bắt buộc chuỗi nhập vào phải có ký tự @
-Giá trị "abc" không chứa ký tự @ nên không vượt qua được bước kiểm tra.
***Trường hợp 3: <input type="number" min="1" max="10" value="15">***
Dự đoán: Trình duyệt chặn submit và cảnh báo giá trị vượt quá mức tối đa.
Tại sao: Input type="number" sử dụng các thuộc tính min và max để giới hạn giá trị số hợp lệ
-Người dùng gõ giá trị là 15, lớn hơn giới hạn max="10" đã quy định, nên bị báo lỗi.
***Trường hợp 4: <input type="text" pattern="***
{10}" value="abc123">
Dự đoán: Trình duyệt chặn submit và báo lỗi dữ liệu không khớp định dạng yêu cầu.
Tại sao: Input type="text" hỗ trợ validation thông qua thuộc tính pattern để kiểm tra chuỗi nhập vào có khớp với biểu thức chính quy (Regular Expression) hay không
-Ở đây, định dạng yêu cầu là 10 chữ số 
{10}, nhưng giá trị nhập vào lại là "abc123" (chứa chữ cái và không đủ 10 ký tự), dẫn đến vi phạm quy tắc.
***Trường hợp 5: <input type="password" minlength="8" value="123">***
Dự đoán: Trình duyệt chặn submit và báo lỗi độ dài quá ngắn.
Tại sao: Input type="password" có thể được validate bằng thuộc tính minlength để đảm bảo độ dài tối thiểu của mật khẩu
Việc người dùng nhập "123" (chỉ có 3 ký tự) không đáp ứng đủ yêu cầu minlength="8".

------------------
### Câu A3 (5đ) — Accessibility
**Tại sao <label for="email"> quan trọng cho người dùng screen reader?** Theo tài liệu, Accessibility (khả năng tiếp cận) không chỉ là một tính năng "nice to have" mà còn bắt buộc ở nhiều công ty
-Việc sử dụng thẻ <label> cực kỳ quan trọng vì nếu không có <label>, người dùng sử dụng trình đọc màn hình (screen reader) sẽ không thể biết được ô input đó dùng để nhập dữ liệu gì
-Thuộc tính for trong <label> liên kết trực tiếp với id của <input>, giúp screen reader đọc to tên trường (ví dụ: "Email") khi người dùng trỏ vào ô nhập liệu đó.
(Lưu ý: Các thông tin giải thích dưới đây về <fieldset>, <legend> và aria-label là kiến thức bổ sung nằm ngoài tài liệu bạn cung cấp)
Khi nào dùng <fieldset> + <legend>? Được sử dụng khi cần nhóm các control/input có liên quan logic lại với nhau trong một form, đặc biệt quan trọng với radio buttons hoặc checkboxes để screen reader có thể hiểu ngữ cảnh chung. <legend> đóng vai trò làm tiêu đề cho nhóm đó. Ví dụ cụ thể: Nhóm các lựa chọn giới tính.
aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>?
Dùng khi nào: Dùng khi một element không có nhãn văn bản (text label) hiển thị trên màn hình nhưng vẫn cần trình đọc màn hình hiểu được ý nghĩa. Ví dụ: Nút bấm chỉ có icon tìm kiếm (kính lúp) hoặc icon đóng (dấu X).
Tại sao KHÔNG nên dùng chung với <label>: Vì nó gây dư thừa và có thể xung đột. Nếu bạn dùng cả hai, screen reader thường sẽ ưu tiên đọc aria-label và bỏ qua <label> native, dẫn đến mất tính nhất quán hoặc khiến trình đọc màn hình đọc lặp lại 2 lần gây khó chịu cho người dùng.

------------------
### Câu A4 — Media
Tài liệu cung cấp nền tảng về việc tối ưu ảnh (<img>, chọn format webp/svg/jpg) và nhúng media
-(Lưu ý: Các giải thích chuyên sâu dưới đây về loading, alt và định dạng video là kiến thức thực tế mở rộng nằm ngoài tài liệu)
Giải thích thuộc tính loading="lazy" trên thẻ <img>:
Cải thiện gì: Thuộc tính này giúp trình duyệt trì hoãn (defer) việc tải các hình ảnh không nằm trong màn hình hiển thị ban đầu (off-screen) cho đến khi người dùng cuộn chuột gần tới chúng. Nó giúp giảm băng thông, tiết kiệm tài nguyên và làm trang web tải ban đầu nhanh hơn rất nhiều.
Khi nào KHÔNG nên dùng: Tuyệt đối không dùng cho các hình ảnh "Above the fold" (hình ảnh hiển thị ngay trên màn hình đầu tiên khi vừa vào trang web, ví dụ như banner chính, logo). Nếu dùng lazy cho chúng, trang web sẽ bị chậm hiển thị nội dung quan trọng nhất.
**Tại sao nên cung cấp nhiều <source> trong thẻ <video>?** Vì không phải trình duyệt nào cũng hỗ trợ chung một định dạng video. Việc cung cấp nhiều <source> giúp trình duyệt tự động đọc từ trên xuống dưới và chọn định dạng đầu tiên mà nó hỗ trợ, đảm bảo video luôn chạy được trên mọi thiết bị.
3 format video web phổ biến: MP4 (hỗ trợ rộng rãi nhất), WebM (tối ưu cực tốt cho web bởi Google), Ogg.
Thuộc tính alt trên <img> dùng để làm gì? Viết alt tốt: Thuộc tính alt (alternative text) cung cấp văn bản thay thế trong trường hợp hình ảnh bị lỗi không tải được, và là văn bản để screen reader đọc cho người khiếm thị hiểu hình ảnh chứa gì.
Ảnh sản phẩm iPhone 16: alt="Điện thoại iPhone 16 Pro Max màu Titan hiển thị mặt trước và cụm camera sau" (Cần mô tả chi tiết hình dáng, màu sắc sản phẩm).
Ảnh trang trí (decorative): alt="" (Để trống hoàn toàn để screen reader bỏ qua, không làm phiền người dùng với các họa tiết không mang tính thông tin).
Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột hiển thị doanh thu Quý 1 năm 2026 đạt 50 tỷ đồng, tăng trưởng 20% so với cùng kỳ năm ngoái" (Với hình ảnh mang tính dữ liệu, alt phải tóm tắt lại chính xác lượng thông tin mà biểu đồ đang thể hiện).

------------------
### Câu A5 — So sánh <figure> vs <img>
Khi nào dùng Cách 1 (chỉ <img>): Dùng cho các hình ảnh thông thường được chèn trực tiếp vào luồng nội dung (inline) nhưng không đứng độc lập về mặt ngữ nghĩa và không cần một dòng chú thích (caption) đi kèm.
Ví dụ 1: Ảnh logo của website ở thanh điều hướng (header).
Ví dụ 2: Một icon nhỏ hình giỏ hàng đặt cạnh nút "Thêm vào giỏ".
Khi nào dùng Cách 2 (<figure> + <figcaption>): Dùng cho các cụm nội dung trực quan độc lập (self-contained). Hình ảnh và phần chú thích (<figcaption>) có mối quan hệ gắn kết chặt chẽ với nhau. Nếu bạn di chuyển nguyên khối <figure> này sang một vị trí khác trên trang hoặc phần phụ lục, luồng nội dung của bài viết chính vẫn không bị ảnh hưởng.
Ví dụ 1: Một ảnh minh họa biểu đồ phân tích xu hướng mua hàng trong bài viết blog, bên dưới có dòng <figcaption> giải thích số liệu của biểu đồ đó.
Ví dụ 2: Một thẻ sản phẩm (product card) hiển thị ảnh thu nhỏ của món hàng (như iPhone trong đề bài) đi kèm tên và giá tiền ở <figcaption>, giúp nội dung hình ảnh gắn liền ngữ nghĩa với phần mô tả giá trị của nó.

------------------
## PHẦN C — PHÂN TÍCH & SUY LUẬN
### Câu C1 — Debug Form
**8 Lỗi đã xác định:**
1. Lỗi 1: Dòng 1 — Thẻ <form> thiếu thuộc tính action và method. Thiếu cấu hình định tuyến khiến dữ liệu không biết sẽ được gửi đi đâu và bằng phương thức nào. 
- Sửa: <form action="#" method="POST">
2. Lỗi 2: Dòng 2 — Input "Tên" không có <label for="...">, thiếu name, id và required.Form không có <label> sẽ vi phạm accessibility vì người dùng screen reader sẽ không biết ô đó dùng để nhập thông tin gì. Thiếu name khiến dữ liệu không được gửi lên server, và thiếu required cho phép người dùng để trống form. 
- Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>
3. Lỗi 3: Dòng 4 — Lạm dụng placeholder thay cho <label>, thiếu name, id và required cho Email Người dùng sẽ không nhớ mình đang nhập gì nếu placeholder biến mất khi gõ. Cần có <label> rõ ràng và thêm thuộc tính required 
- Sửa: <label for="email">Email của bạn:</label> <input type="email" id="email" name="email" required placeholder="Email của bạn">
4. Lỗi 4: Dòng 6, 7 — Thiếu <label>, thiếu name và không có validation minlength cho mật khẩu Các ô password không liên kết với label. Ngoài ra, cần tận dụng HTML5 validation minlength để ép buộc độ dài tối thiểu của mật khẩu.
- Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" required minlength="8" placeholder="Mật khẩu">
<label for="confirm_password">Nhập lại mật khẩu:</label> <input type="password" id="confirm_password" name="confirm_password" required minlength="8" placeholder="Nhập lại mật khẩu">.
5. Lỗi 5: Dòng 9 — Số điện thoại dùng sai type="text", thiếu validation pattern và label Nên dùng type="tel" để kích hoạt bàn phím số trên thiết bị di động và thêm pattern để kiểm tra định dạng dữ liệu
- Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" value="0901234567" required pattern="
{10}">
6. Lỗi 6: Dòng 11 — Thẻ <select> không có <label for="..."> và thiếu <option> trống mặc định Thiếu label vi phạm accessibility. Việc không có option mặc định bị vô hiệu hóa (disabled) sẽ khiến người dùng dễ vô tình gửi sai thành phố đầu tiên nếu họ bỏ qua trường này. 
- Sửa:
<label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="" disabled selected>-- Chọn thành phố --</option>
    <option value="hn">Hà Nội</option>
    <option value="hcm">TP.HCM</option>
</select>
7. Lỗi 7: Dòng 16-18 — Phần "Tôi đồng ý điều khoản" thiếu ô <input> thực tế để người dùng tích chọn Hiện tại đoạn code chỉ có văn bản trong thẻ <label> nhưng hoàn toàn thiếu thẻ <input type="checkbox"> đi kèm. 
- Sửa: <input type="checkbox" id="terms" name="terms" required> <label for="terms">Tôi đồng ý điều khoản</label>
8. Lỗi 8: Toàn bộ form — Thiếu hoàn toàn thuộc tính name trên tất cả các <input> và <select>. Đây là lỗi Best Practices nghiêm trọng nhất vì nếu không khai báo name (ví dụ: name="email", name="phone"), trình duyệt sẽ không thể đóng gói các giá trị này lại để gửi dữ liệu lên server. 
- Sửa: Đã được khắc phục ở tất cả các đoạn code sửa lỗi bên trên bằng cách bổ sung name="..." cho từng trường.

### Câu C2 (10đ) — Thiết kế chiến lược Validation
1. Viết pattern regex cho CMND/CCCD và Số tài khoản
Dựa vào thuộc tính pattern của HTML5 dùng để kiểm tra định dạng dữ liệu:CMND/CCCD (đúng 12 chữ số): pattern="{12}" (hoặc pattern="\d{12}"). Số tài khoản (10-15 chữ số): pattern="{10,15}" (hoặc pattern="\d{10,15}")(Bổ sung cho các trường còn lại dựa trên tài liệu: Email dùng type="email" required để tự kiểm tra định dạng, PIN dùng type="password" pattern="{6}" để ẩn ký tự và ép đúng 6 số).
2. HTML5 validation đủ an toàn cho ứng dụng ngân hàng chưa? Tại sao?
- Câu trả lời là **KHÔNG ĐỦ AN TOÀN**, đặc biệt là với ứng dụng ngân hàng.
- Tại sao: HTML5 validation (như required, pattern, minlength...) là các tính năng hoạt động hoàn toàn ở phía Frontend (trên trình duyệt của người dùng). Kẻ gian có thể dễ dàng qua mặt bước bảo vệ này bằng cách:Mở Developer Tools (F12) trên trình duyệt và xóa bỏ các thuộc tính required hoặc pattern khỏi thẻ HTML.Sử dụng các công cụ chặn bắt và gửi request trực tiếp như Postman, cURL, hoặc Burp Suite để đẩy dữ liệu thẳng lên máy chủ (Server) mà không thèm đi qua giao diện form trên trình duyệt.
3. Liệt kê 3 loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript)
Dù HTML5 miễn phí và tự hiện thông báo lỗi, nó chỉ có thể kiểm tra định dạng tĩnh trên từng ô input đơn lẻ. Bạn phải dùng JavaScript (hoặc gọi API) cho các trường hợp:
Tham chiếu chéo (Cross-field Validation): Như đã đề cập ở bài tập trước, HTML không thể so sánh giá trị của ô input này với ô input khác (Ví dụ: Kiểm tra trường "Xác nhận mật khẩu" có khớp với "Mật khẩu" không, hoặc "Ngày cấp" CCCD phải diễn ra trước "Ngày hết hạn").Kiểm tra tính logic và thuật toán phức tạp: HTML5 không thể tính toán checksum. Ví dụ: Bạn có thể bắt người dùng nhập 16 số thẻ tín dụng bằng pattern, nhưng để biết 16 số đó có thực sự tuân theo thuật toán sinh số thẻ thật hay không (Luhn algorithm) thì bắt buộc phải dùng JS.
Xác thực tính duy nhất/Dữ liệu thực tế (Asynchronous Validation): HTML5 không thể biết số CCCD hay Email người dùng vừa nhập đã tồn tại trong cơ sở dữ liệu của ngân hàng hay chưa. JavaScript cần gọi API về Backend để kiểm tra điều này theo thời gian thực.
4. Nêu 2 rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend
Backend Validation (kiểm tra trên máy chủ) là chốt chặn cuối cùng và quan trọng nhất. Nếu chỉ tin tưởng vào Frontend, ngân hàng số sẽ gặp các rủi ro chí mạng sau:
Lỗ hổng Injection (SQL Injection, XSS): Hacker có thể bypass Frontend và gửi thẳng các đoạn mã độc (như câu lệnh SQL hoặc JavaScript độc hại) vào các trường dữ liệu (ví dụ như "Tên tài khoản"). Nếu Backend không quét và làm sạch (sanitize) dữ liệu này mà lưu thẳng vào Database, hệ thống có thể bị đánh cắp toàn bộ cơ sở dữ liệu khách hàng.
Làm hỏng tính toàn vẹn dữ liệu (Data Corruption) và trục lợi logic: Kẻ tấn công có thể sửa đổi dữ liệu gửi lên trái với nghiệp vụ. Ví dụ: Bỏ qua validation số lượng để nhập số lượng chuyển tiền là số âm (-10000), hoặc sửa ID của giỏ hàng/tài khoản thụ hưởng để thực hiện các giao dịch không hợp lệ, dẫn đến sai lệch hệ thống lõi của ngân hàng.
