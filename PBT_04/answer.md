# Phiếu bài tập 04.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (10đ) — 5 Loại Positioning
Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí    |Cuộn theo trang?            |	   Use case
static   |        Có	             |     Không dùng       |	    Có	                 |     Mặc định
relative |        Có	             | Vị trí gốc của nó    |       Có     	             |Làm anchor cho absolute con
absolute |       Không	             |Cha relative gần nhất	|       Có 	                 |Badge, dropdown, tooltip, overlay
fixed	 |       Không	             |  Viewport(màn hình)	|      Không 	             |Chat button, cookie banner, header cố định
sticky	 |  Bình thường chiếm chỗ,   |  Viewport (khi dính) |Bình thường nằm trong flow, |Sticky header, sticky table header, sidebar
         |  khi dính thì tách ra     |                      |chỉ dính khi cuộn đến ngưỡng|
                         	                    	                         	   
*** Trả lời câu hỏi thêm ***
- Khi nào absolute tham chiếu body (hoặc <html>): Phần tử mang absolute sẽ bám vào toàn trang (tìm lên đến tận <html>) nếu nó không tìm thấy bất kỳ phần tử cha nào có position khác static (ví dụ như không có cha relative)
- Khi nào tham chiếu parent? Element sẽ tham chiếu cha của nó khi phần tử cha được thiết lập một thuộc tính position ≠ static (quan trọng và hay dùng nhất là relative)
- Khái niệm "nearest positioned ancestor": Phần tử absolute không nhất thiết phải bám vào cha trực tiếp. Nó sẽ tìm ngược lên trên các bậc tổ tiên cho đến khi gặp phần tử gần nhất được đặt position khác static thì sẽ lấy đó làm gốc tọa độ

### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
1. Navigation bar ngang (logo + menu + buttons)
- Chọn: Flexbox
Giải thích: Flexbox được thiết kế tối ưu cho bố cục 1 chiều (1-dimensional). Thanh điều hướng chỉ trải dài theo chiều ngang (row). Flexbox giúp bạn dễ dàng dàn đều khoảng cách giữa logo và menu (dùng justify-content: space-between) và căn giữa các phần tử theo chiều dọc (dùng align-items: center).
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
- Chọn: Grid
Giải thích: Đây là một bố cục 2 chiều thực thụ (2-dimensional) gồm cả hàng và cột. CSS Grid cho phép bạn thiết lập cấu trúc cột cố định (ví dụ: grid-template-columns: repeat(3, 1fr)). Khi số lượng ảnh tăng lên, Grid sẽ tự động đẩy các ảnh mới xuống hàng tiếp theo mà vẫn giữ cho các cột thẳng tắp một cách hoàn hảo.
3. Layout blog: main content + sidebar
- Chọn: Grid (hoặc kết hợp)
Giải thích: Layout trang (page-level layout) là thế mạnh tuyệt đối của Grid. Bạn có thể dễ dàng quy định cấu trúc ngay từ container cha: grid-template-columns: 1fr 300px để phần content chiếm phần lớn không gian (1fr) và sidebar giữ nguyên kích thước (300px). Nó giúp mã CSS ngắn gọn và dễ chuyển đổi responsive trên mobile hơn Flexbox
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
- Chọn: Grid
Giải thích: Tương tự như lưới ảnh, bạn cần chia một không gian lớn thành các cột đều nhau. Dùng Grid với grid-template-columns: repeat(4, 1fr) là cách thanh lịch nhất. Hơn nữa, khi chuyển sang màn hình điện thoại (Mobile-First), bạn chỉ cần đổi nhẹ thành 1 cột hoặc 2 cột
 một cách cực kỳ đơn giản mà không cần tính toán phần trăm chiều rộng như Flexbox.
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
- Chọn: Flexbox
Giải thích: Card sản phẩm là một bố cục 1 chiều dọc (column). Bằng cách thiết lập thẻ card là display: flex và flex-direction: column, bạn có thể đẩy nút bấm dính chặt vào đáy bằng cách thiết lập margin-top: auto cho nút đó (hoặc cho phần text ở giữa tự động giãn ra bằng flex: 1). Flexbox sinh ra để giải quyết hoàn hảo những bài toán phân phối không gian linh hoạt như thế này.

### Câu C2 (10đ) — Debug Flexbox
*** Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống ***
Nguyên nhân: Mặc dù thẻ .card-container dùng Flexbox nên các thẻ .card sẽ tự động kéo dài chiều cao bằng nhau (do hành vi mặc định align-items: stretch của Flexbox), nhưng nội dung bên trong bản thân mỗi thẻ .card lại đang được xếp theo block flow bình thường. Do đó, nếu tiêu đề (h3) dài ngắn khác nhau, nội dung sẽ đẩy nút .btn bị lệch vị trí lên/xuống.
Như đã phân tích trong phần bài tập suy luận layout Card sản phẩm (Câu C1 ở lịch sử trò chuyện), để các nút luôn dính đáy, ta phải biến chính thẻ .card thành một flex container xếp dọc và đẩy nút bấm xuống dưới.

***CODE SỬA***
.card-container { 
    display: flex; 
    flex-wrap: wrap; 
}
.card { 
    width: 30%; 
    margin: 1.5%; 
    display: flex; /* Biến card thành flex container */
    flex-direction: column; /* Xếp các phần tử con theo chiều dọc */
}

.card img { width: 100%; }
.card h3 { font-size: 18px; }

.card .btn { 
    padding: 10px; 
    margin-top: auto; /* Phép thuật của Flexbox: Tự động đẩy nút sát xuống đáy thẻ card */
}

*** Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên ***
Nguyên nhân: Thuộc tính text-align: center trên .hero-content chỉ có tác dụng căn giữa chữ (text) nằm bên trong phần tử đó, chứ không căn giữa vị trí của bản thân hộp .hero-content so với thẻ cha .hero. Để căn giữa phần tử con bên trong một container dùng display: flex, bạn cần sử dụng các thuộc tính chuyên dụng của Flexbox là justify-content và align-items
. Điều này tương tự với cách chúng ta giải quyết bài tập "Hero Centering" trong các phần trước.

***CODE SỬA***
.hero {
    height: 100vh;
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang (trục chính) */
    align-items: center; /* Căn giữa theo chiều dọc (trục chéo) */
}

.hero-content {
    text-align: center; /* Giữ lại nếu muốn chữ bên trong cũng được căn giữa */
}

*** Lỗi 3: Sidebar bị co lại khi content quá dài ***
Nguyên nhân: Trong mô hình Flexbox, các phần tử con mặc định có thuộc tính flex-shrink: 1. Điều này có nghĩa là khi kích thước tổng của các phần tử vượt quá kích thước của container (ví dụ .content quá dài và cần nhiều không gian), Flexbox sẽ tự động thu hẹp những phần tử khác (như .sidebar) lại để nhét vừa vào container, bất chấp việc bạn đã set width: 250px.

***CODE SỬA (Cách 1 - Dùng Flexbox)***: Chỉ cần thêm flex-shrink: 0 vào .sidebar để ra lệnh cho trình duyệt tuyệt đối không được bóp nhỏ nó.
.layout { display: flex; }
.sidebar { 
    width: 250px; 
    flex-shrink: 0; /* Ngăn không cho sidebar bị co lại */
}
.content { flex: 1; }

## Phần D
Link google drive: https://drive.google.com/file/d/1y9indNePqCrI3cZoud4M4csbyZM6EqkI/view?usp=drive_link