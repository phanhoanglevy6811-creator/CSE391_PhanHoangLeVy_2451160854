# Phiếu bài tập 03.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — 3 Cách nhúng CSS
Dựa vào tài liệu, có 3 cách nhúng CSS cơ bản theo mức độ ưu tiên như sau:
1. Inline CSS (Nhúng trực tiếp vào thẻ HTML qua attribute style)
Ví dụ: <h1 style="color: red;">Tiêu đề</h1>
- Ưu điểm: Độ ưu tiên (specificity) cao nhất, áp dụng trực tiếp lên phần tử
- Nhược điểm: Không được trình duyệt cache, tải lại ở mỗi page load. Khó bảo trì, khi cần sửa đổi hàng loạt phải đi tìm từng thẻ để sửa
- Khi nào nên dùng: Nên tránh dùng trong thực tế sản xuất, chỉ sử dụng cho prototype nhanh hoặc khi không còn lựa chọn nào khác
2. Internal CSS (Nhúng qua thẻ <style> trong HTML)
Ví dụ:
- Ưu điểm: Gom code CSS lại một chỗ, không cần tạo thêm file bên ngoài
- Nhược điểm: Code CSS không tái sử dụng được cho các trang HTML khác
- Khi nào nên dùng: Dùng khi 1 trang cần có style riêng biệt và không chia sẻ cho các trang khác
3. External CSS (Viết ở file .css riêng)
Ví dụ: <link rel="stylesheet" href="styles.css">
- Ưu điểm: Trình duyệt có thể cache (chỉ tải 1 lần cho nhiều trang), tái sử dụng cho nhiều trang (sửa 1 file = đổi cả site), tách biệt HTML và CSS giúp team làm song song, có thể minify để tăng tốc độ tải
- Nhược điểm: Phải tạo và liên kết thêm một file riêng biệt.
Khi nào nên dùng: Là lựa chọn được ưu tiên hàng đầu trong các dự án thực tế (production)
- Câu hỏi thêm: Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, Inline CSS sẽ "thắng"
+ Lý do là theo quy tắc độ ưu tiên (Specificity), Inline style có điểm specificity lên tới mức 1000, cao hơn cả ID hay Class và vượt trội hơn CSS ở file External hay thẻ <style> Internal

----------------
### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả
Dựa trên cấu trúc HTML bạn cung cấp và lý thuyết về các loại Selector, kết quả phần tử được chọn tương ứng (thể hiện qua text content) là:h1 → Chọn: "ShopTLU" (Tag selector chọn thẻ h1)
price → Chọn: "25.990.000đ" và "45.990.000đ" (Class selector chọn mọi thẻ mang class "price") #app header → Chọn: Toàn bộ nội dung của thẻ <header> (bao gồm "ShopTLU", "Home", "Products", "About"). (Combinator khoảng trắng: chọn thẻ con bên trong ID)nav a:first-child → Chọn: "Home" (Pseudo-class chọn thẻ con <a> đầu tiên của thẻ <nav>).product.featured h2 → Chọn: "MacBook Pro" (Chọn thẻ <h2> nằm trong phần tử mang đồng thời hai class "product" và "featured")
article > p → Chọn: "25.990.000đ", "Mô tả sản phẩm...", "45.990.000đ" và "Mô tả sản phẩm..." (Dấu > chọn thẻ con trực tiếp của thẻ article) a[href="/"] → Chọn: "Home" (Attribute selector chọn thẻ <a> có chính xác thuộc tính href là "/").top-bar.dark h1 → Chọn: "ShopTLU" (Chọn h1 nằm trong phần tử mang đồng thời class "top-bar" và "dark")

----------------
### Câu A3 (7đ) — Box Model — Tính toán kích thước
Dựa vào quy tắc của The CSS Box Model:
Trường hợp 1: content-box (mặc định)
Chiều rộng hiển thị (Visible width): content + padding + border = 400 + (20 × 2) + (5 × 2) = 450px.
Không gian chiếm trên trang: Visible width + margin = 450 + (10 × 2) = 470px.
Trường hợp 2: border-box
Chiều rộng hiển thị (Visible width): Bằng chính width khai báo là 400px (vì padding và border bị ép co vào trong).
Kích thước content thực tế: width - padding - border = 400 - (20 × 2) - (5 × 2) = 350px.
Không gian chiếm trên trang: width + margin = 400 + (10 × 2) = 420px.
Trường hợp 3: Margin collapse (Gộp margin)
Khoảng cách giữa box-a và box-b = 40px.
Giải thích: Đối với hai khối xếp dọc (không có border/padding giữa chúng), hiện tượng Margin Collapse xảy ra. Margin không được cộng dồn (25 + 40 = 65) mà trình duyệt sẽ lấy giá trị LỚN HƠN trong hai giá trị đó (40 > 25 nên kết quả là 40px)
Nâng cao: (Lưu ý: Thông tin về margin số âm không có trong các tài liệu nguồn, đây là kiến thức bổ sung). Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, theo tiêu chuẩn CSS, giá trị dương lớn nhất và giá trị âm lớn nhất sẽ được cộng đại số lại với nhau. Kết quả khoảng cách sẽ là: 40 + (-10) =  30px.

----------------
### Câu A4 (5đ) — Specificity (Độ ưu tiên)
Dựa trên bảng điểm Specificity (A=ID, B=Class, C=Tag):
1. Tính specificity score cho mỗi rule:
Rule A (p): Chỉ có 1 thẻ tag → Score: (0, 0, 1) = 1
Rule B (.price): Chỉ có 1 class → Score: (0, 1, 0) = 10
Rule C (#main-price): Chỉ có 1 ID → Score: (1, 0, 0) = 100
Rule D (p.price): 1 class + 1 tag → Score: (0, 1, 1) = 11
2. Element sẽ có màu gì? Giải thích:
Màu: Red (Đỏ)
Giải thích: Element sẽ nhận màu của Rule C (#main-price) vì Selector chứa ID mang specificity cao nhất (100) so với các rule còn lại (11, 10, 1)
3. Nếu thêm <p class="price" id="main-price" style="color: orange;">?
Màu: Orange (Cam)
Giải thích: Inline style (style="") có mức specificity là 1000+, cao hơn cả ID selector (100) nên nó sẽ ghi đè Rule C
4. Nếu Rule A thêm !important, element có màu gì? Tại sao?
Màu: Black (Đen)
Giải thích: Cờ !important mang điểm specificity vô hạn. Bất kể ID hay inline style, nếu một property được đánh dấu !important, nó sẽ phá vỡ "thác nước cascade" (cascade priority) và đè lên mọi thứ khác

## Phần D
Link google drive: https://drive.google.com/file/d/1s1IaNQThNvXjgrQrmIg0Z0ZlrqfP-IGb/view?usp=drive_link