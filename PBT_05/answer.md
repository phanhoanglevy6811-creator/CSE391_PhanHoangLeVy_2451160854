# Phiếu bài tập 05.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — Viewport & Mobile-First
1. Viết chính xác thẻ <meta viewport> chuẩn và giải thích:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
- width=device-width: Báo cho trình duyệt biết hãy sử dụng chiều rộng thực tế của thiết bị làm chiều rộng của trang web.
initial-scale=1.0: Đặt mức phóng to ban đầu của trang web là 100% khi vừa tải xong.
2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào? Nếu thiếu thẻ này, trình duyệt trên thiết bị di động (như iPhone) sẽ tự động giả định trang web có chiều rộng khoảng ~980px giống như màn hình desktop. 
- Sau đó, nó sẽ thu nhỏ toàn bộ trang lại để nhét vừa vào màn hình điện thoại, hậu quả là chữ trở nên bé xíu, nút bấm chồng chéo và nội dung không thể đọc được (không readable).
3. Mobile-First và Desktop-First khác nhau thế nào?
Mobile-First: Là cách tiếp cận viết CSS mặc định cho màn hình nhỏ (mobile) trước, sau đó dùng hàm @media (min-width:...) (từ kích thước này trở lên) để thêm các style cho màn hình tablet/desktop.
Desktop-First: Là cách tiếp cận cũ, viết style mặc định cho màn hình lớn trước, rồi dùng @media (max-width:...) (từ kích thước này trở xuống) để điều chỉnh cho màn hình nhỏ
Ví dụ CSS với breakpoint 768px:
/* Mobile-First (Khuyên dùng) */
.item { width: 100%; } 
@media (min-width: 768px) { 
    .item { width: 50%; } 
}

/* Desktop-First */
.item { width: 50%; } 
@media (max-width: 767px) { 
    .item { width: 100%; } 
}

- Tại sao Mobile-First được khuyên dùng? Vì thiết bị mobile sẽ tải ít mã CSS nhất (chỉ tải phần CSS cho mobile, không cần download các style phức tạp của desktop), giúp trang phân tích (parse) và tải nhanh hơn. Ngoài ra, nó ép bạn ưu tiên nội dung quan trọng trước và được Google cũng như các công cụ đánh giá hiệu năng (performance tools) đánh giá cao hơn.

### Câu A3 (5đ) — Media Queries
- Dựa trên nguyên tắc ưu tiên của CSS và Media Queries với min-width, kích thước chiều rộng sẽ đi từ nhỏ đến lớn và ghi đè lẫn nhau.

Chiều rộng màn hình       |       .container width
375px (iPhone SE)         |        100%
600px                     |        540px
800px                     |        720px
1000px                    |        960px
1400px                    |        1140px

### Câu A4 (5đ) — SCSS Basics
1. Giải thích 4 tính năng chính của SCSS và cho ví dụ:
Variables ($variable): Cho phép lưu trữ các giá trị thiết kế (design tokens như màu sắc, font chữ) ở lúc biên dịch (compile-time) để tái sử dụng, giúp sửa 1 chỗ cập nhật cả dự án
- Ví dụ: $color-primary: #7c3aed; body { color: $color-primary; }

- Nesting: Cho phép viết các rule CSS lồng nhau tương tự như cấu trúc thẻ HTML, giúp code dễ đọc hơn (Lưu ý: quy tắc là lồng không quá 3 cấp để tránh selector cồng kềnh)
- Ví dụ: .navbar { a { text-decoration: none; &:hover { color: red; } } }

- Mixins (@mixin, @include): Tương tự như hàm (function) trong lập trình, cho phép tạo các khối mã CSS để tái sử dụng ở nhiều nơi, đặc biệt hữu ích cho media queries hoặc các hiệu ứng phức tạp.
-Ví dụ: @mixin flex-center { display: flex; justify-content: center; } và sau đó sử dụng bằng @include flex-center;.
@extend / Inheritance: (Lưu ý: Tính năng này không được đề cập chi tiết trong nội dung các chương bạn đã cung cấp, đây là kiến thức bên ngoài bổ sung). Nó cho phép một selector kế thừa toàn bộ thuộc tính CSS từ một selector khác, giúp code DRY (Don't Repeat Yourself).
-Ví dụ: .btn-danger { @extend .btn; background-color: red; }

2. Tại sao trình duyệt KHÔNG đọc được file .scss? Cần bước gì để chuyển SCSS → CSS?
Trình duyệt không thể đọc được file .scss trực tiếp vì nó chỉ được thiết kế để đọc và phân tích ngôn ngữ CSS tiêu chuẩn
Để sử dụng được, bạn cần một quá trình biên dịch (compile) SCSS thành CSS ở bước build time. Việc này được thực hiện thông qua các công cụ như VS Code extension ("Live Sass Compiler"), Webpack, Vite, hoặc node-sass

### Câu C1
*** CSS skeleton: ***
/* RESET */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    line-height:1.5;
}

/* ===== MOBILE FIRST ===== */

.container{
    display:grid;
    grid-template-columns:1fr;
    gap:20px;
    padding:20px;
}

/* HEADER */
header{
    display:grid;
    grid-template-columns:1fr auto;
    align-items:center;
}

/* HERO */
.hero{
    width:100%;
    height:300px;
}

/* BOOKING + MAP */
.booking-map{
    display:grid;
    grid-template-columns:1fr;
    gap:20px;
}

/* FORM */
.booking-form{
    display:grid;
    gap:15px;
}

/* GALLERY */
.gallery-grid{
    display:grid;
    grid-template-columns:1fr;
    gap:15px;
}

/* MAP */
.map{
    width:100%;
    height:300px;
}

/* FOOTER */
footer{
    text-align:center;
    padding:20px;
}

/* ===== TABLET ===== */
@media (min-width:768px){

    .gallery-grid{
        grid-template-columns:repeat(2,1fr);
    }

    .booking-form{
        grid-template-columns:1fr 1fr;
    }

    .booking-form textarea,
    .booking-form button{
        grid-column:span 2;
    }
}

/* ===== DESKTOP ===== */
@media (min-width:1440px){

    .booking-map{
        grid-template-columns:1fr 1fr;
        align-items:start;
    }

    .gallery-grid{
        grid-template-columns:repeat(3,1fr);
    }

    .container{
        max-width:1400px;
        margin:auto;
    }
}

## Phần D:
Link google drive: https://drive.google.com/file/d/1z_RfqXw6u_Wy-92JiboIxKg9TEiy_bqK/view?usp=drive_link