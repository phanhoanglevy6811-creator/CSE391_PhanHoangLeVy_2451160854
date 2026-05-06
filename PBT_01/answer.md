# Phiếu bài tập 01.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 — HTTP & Browser
**1.  Gõ https://shopee.vn vào trình duyệt, các quá trình diễn ra theo thứ tự sau:**
-Yêu cầu xuất phát từ trình duyệt trên máy tính của và đi qua router WiFi
-Yêu cầu tiếp tục truyền qua hệ thống của nhà mạng (ISP) và chạy qua hệ thống cáp quang
-Yêu cầu được chuyển tới Data Center của máy chủ (Server) chứa trang web đó
-Server nhận yêu cầu và xử lý logic
-Phản hồi chạy ngược trở lại qua cáp quang, nhà mạng và router về lại máy tính
-Trình duyệt nhận các file HTML, CSS, JS, hình ảnh, v.v., và tiến hành render ra giao diện

2. Trong Chrome DevTools, tab Network (Mạng) cho thấy thông tin về tất cả các requests và responses đã được trình duyệt thực hiện (bao gồm việc tải file HTML, CSS, JS, ảnh, gọi dữ liệu API) cùng với thời gian tải của từng file.

### Câu A2 — Semantic HTML
**1. Trang web này bị đánh giá điểm SEO thấp do:** Lạm dụng thẻ <div> cho mọi thành phần mà không sử dụng các thẻ Semantic HTML5 (thẻ có ý nghĩa ngữ nghĩa). Trình duyệt và công cụ tìm kiếm của Google dựa vào thẻ Semantic để hiểu rõ cấu trúc của trang web (đâu là tiêu đề, nội dung chính, thanh điều hướng). Việc dùng thẻ <div> làm Google không thể hiểu đúng nội dung, dẫn đến SEO kém.

**2. 4 Lỗi semantic trong đoạn code và cách sửa:**
-Dùng <div> cho phần đầu trang thay vì thẻ <header>
-Dùng <div> cho thanh điều hướng menu thay vì thẻ <nav>
-Dùng <div> cho bao bọc nội dung chính thay vì thẻ <main>
-Dùng <div> cho đối tượng cụ thể là sản phẩm thay vì thẻ <article>

**-Đoạn code sửa lại:**
<header class="header">
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </nav>
</header>
<main class="main">
    <article class="product">
        <h1 class="title">iPhone 16 Pro</h1>
        <div class="price">25.990.000đ</div>
        <figure class="image"><img src="iphone.jpg"></figure>
    </article>
</main>
<footer class="footer">© 2026 ShopTLU</footer>

### Câu A3 — Block vs Inline

### Câu A4 — Table
**Sự khác nhau giữa <thead>, <tbody> và <tfoot>:**
-<thead>: Là phần chứa tiêu đề của cột, trình duyệt sẽ tự động in đậm và căn giữa nội dung (thẻ <th>) nằm trong phần này
-<tbody>: Là phần chứa nội dung và dữ liệu chính của bảng
-<tfoot>: Là phần chân bảng dùng để tổng kết hoặc tính tổng (sum) các số liệu

**KHÔNG NÊN dùng table để tạo layout trang web vì:**
1.Sai mục đích ngữ nghĩa (Semantic): Thẻ <table> được sinh ra chỉ dành cho dữ liệu dạng bảng (tabular data) có hàng và cột mang ý nghĩa thống kê, so sánh.
2.Phá vỡ giao diện khi người dùng tương tác: Nếu layout được xây dựng bằng table, khi người dùng thực hiện các thao tác trên bảng như sắp xếp cột (sort column) hay thay đổi kích thước (resize cột), toàn bộ thiết kế giao diện sẽ bị vỡ và "lỗi hết"
3.Làm hỏng khả năng tiếp cận đối với người khiếm thị: Trình đọc màn hình (screen reader) được thiết kế để đọc dữ liệu bảng theo thứ tự hàng/cột. Nếu dùng bảng để dựng layout trang, screen reader sẽ đọc sai cấu trúc nội dung, gây lỗi và làm người dùng nhầm lẫn


## PHẦN B — THỰC HÀNH CODE
### Bài B3-Debug HTML
1. Dòng 1 thiếu html. Sửa: <!DOCTYPE html>
2. Dòng 2 thiếu lang. Sửa: <html lang="vi">
3. Dòng 4 thiếu thẻ đóng. Sửa: <title>Trang web</title>
4. Dòng 5 sai chuẩn utf8. Sửa: <meta charset="UTF-8">
5. Dòng 8 sai thẻ đóng. Sửa: <h1>Welcome to ShopTLU</h1>
6. Dòng 12 sai thẻ đóng. Sửa: <a href="home">Trang chủ</a>
7. Dòng 20 thiếu ngoặc kép và thiếu alt. Sửa: <img src="iphone.jpg" alt="iPhone 16 Pro">
8. Dòng 22 sai thứ tự thẻ đóng. Sửa: <p>Giá: <b>25.990.000đ</b></p>
9. Dòng 28 thiếu thead. Sửa: Thêm thẻ <thead></thead>
10. Dòng 34 thiếu tbody. SỬa: Thêm thẻ <tbody></tbody>
11. Dòng 40 không được dùng hai thẻ main. Sửa: Đổi sang dùng <aside></aside>
12. Dòng 45 thiếu thẻ đóng. Sửa: <p>Copyright 2026</p>
13. Dòng cuối thiếu </html>. Sửa: Thêm </html>.

### Bài B4 — Phân tích trang web thật
**Tiki**
Câu 1. 3 thẻ HTML5:
1. <header>
Vị trí: phần đầu trang web
Ý nghĩa: chứa nội dung giới thiệu, mở đầu
2. <main>
Vị trí: phần nội dung chính
Ý nghĩa: đại diện nội dung chính, duy nhất, giúp trình duyệt và công cụ tìm kiếm xác định phần nội dung quan trọng nhất của trang
3. <footer>
Vị trí: nằm ở cuối trang web
Ý nghĩa: dùng để biểu thị phần kết thúc của trang hoặc một khu vực nội dung, thường chứa các thông tin bổ sung như liên hệ, điều khoản và bản quyền

Câu 2. Không tìm thấy thẻ <table> trên trang Tiki.com
Câu 3. Không tìm thấy thẻ <form> trên trang Tiki.com

### PHẦN C — SUY LUẬN
# Câu C1 — Thiết kế cấu trúc trang sản phẩm

```html
<!DOCTYPE html>
<html lang="vi"> <!-- khai báo ngôn ngữ trang -->
<head>
    <meta charset="UTF-8"> <!-- hỗ trợ tiếng Việt -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- responsive -->
    <title>Chi tiết sản phẩm</title> <!-- tiêu đề trang -->
</head>
<body>
    <header> <!-- header: phần đầu trang -->
        <nav> <!-- nav: điều hướng chính -->
        </nav>
    </header>
    <nav aria-label="breadcrumb"> <!-- nav: điều hướng phụ breadcrumb -->
        <ol> <!-- ol: vì breadcrumb có thứ tự -->
            <li><a href="#"></a></li> <!-- li: từng cấp điều hướng -->
            <li><a href="#"></a></li>
            <li></li>
        </ol>
    </nav>
    <main> <!-- main: nội dung chính -->
        <section> <!-- section: khu vực ảnh sản phẩm -->
            <figure><img src="" alt=""></figure> <!-- figure: nhóm ảnh có ngữ nghĩa -->
            <figure><img src="" alt=""></figure>
            <figure><img src="" alt=""></figure>
            <figure><img src="" alt=""></figure>
            <figure><img src="" alt=""></figure>
        </section>
        <section> <!-- section: thông tin sản phẩm -->
            <h1></h1> <!-- h1: tên sản phẩm -->
            <p></p> <!-- p: giá -->
            <p></p> <!-- p: đánh giá sao -->
            <article> <!-- article: mô tả độc lập -->
                <p></p>
            </article>
        </section>
        <section> <!-- section: bảng thông số -->
            <table> <!-- table: dữ liệu dạng bảng -->
                <tr>
                    <th></th> <!-- th: tiêu đề -->
                    <th></th>
                </tr>
            </table>
        </section>
        <section> <!-- section: bình luận -->
            <article> <!-- article: mỗi bình luận độc lập -->
                <p></p>
            </article>
        </section>
    </main>
    <aside> <!-- aside: sidebar -->
        <section> <!-- section: sản phẩm tương tự -->
            <h2></h2>
            <ul> <!-- ul: danh sách -->
                <li></li>
                <li></li>
            </ul>
        </section>
    </aside>
    <footer> <!-- footer: chân trang -->
        <p></p>
    </footer>
</body>
</html>