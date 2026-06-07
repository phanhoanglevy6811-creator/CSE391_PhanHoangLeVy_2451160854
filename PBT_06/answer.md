# Phiếu bài tập 06.
## TRACK A — BOOTSTRAP 5
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (10đ) — Grid System
Kích thước	|  < 768px	      |   768px - 991px	|         ≥ 992px
Số cột	    |    1 cột	      |      2 cột	    |          4 cột
Box layout	|    Box 1	      |  Box 1	 Box 2  | Box 1  Box 2  Box 3  Box 4 
            |    Box 2        |  Box 3   Box 4  |
            |    Box 3        |                 |
            |    Box 4        |                 |

*** Giải thích ***
`col-md-6` nghĩa là:  
- Áp dụng từ màn hình ≥ 768px  
- Chiếm 6/12 cột (50% chiều ngang)
- Không cần viết `col-sm-12` vì mặc định Bootstrap đã là mobile-first (`col-12`), tức là màn hình nhỏ tự động full width.

### Câu A2 (10đ) — Utilities & Components
1. Giải thích class d-none d-md-block 
- `d-none`: ẩn phần tử ở mọi kích thước màn hình
- `d-md-block`: từ màn hình ≥ 768px (md) thì hiển thị dạng `block`
2. 5 spacing utilities (margin/padding):
- `mt-3`: margin-top = mức 3 (khoảng cách phía trên)
- `mb-4`: margin-bottom = mức 4 (khoảng cách phía dưới)
- `ms-2`: margin-start (trái trong LTR) = mức 2
- `px-4`: padding trái + phải = mức 4
- `py-3`: padding trên + dưới = mức 3
3. Sự khác nhau giữa .container, .container-fluid, .container-md?
*`.container`:*
- Container có chiều rộng cố định theo từng breakpoint 
- Tự căn giữa trang
- Responsive theo Bootstrap grid
*`.container-fluid`*
- Luôn chiếm 100% chiều rộng
- Không có giới hạn max-width
- Full màn hình mọi kích thước
*`.container-md`*
- Ở màn hình **< md (768px)**: full width
- Từ ≥ 768px trở lên: có max-width cố định như container

## PHẦN B — THỰC HÀNH (60 điểm)
### Câu C1 (10đ) — Tùy biến Bootstrap
1. Đổi màu `$primary` sang `#E63946`
*Quy trình thực hiện:* Để đổi màu primary trong Bootstrap, cần dùng **SASS (SCSS)** vì Bootstrap được build từ SASS variables.
*Các bước:*
B1. Cài môi trường:
   - Node.js
   - Sass compiler (`sass` hoặc `dart-sass`)
B2. Tải source Bootstrap SCSS:
   - File quan trọng: `_variables.scss`
B3. Sửa biến: ```scss $primary: #E63946;
B4. Compile lại Bootstrap:
sass scss/bootstrap.scss dist/bootstrap.css
2. Tại sao KHÔNG nên override trực tiếp .btn-primary { background: red; } mà nên dùng SASS variables:
- Bootstrap có nhiều biến thể liên quan (hover, active, focus)
- Override CSS chỉ sửa 1 trạng thái → dễ lỗi UI không đồng nhất
- Khó maintain khi update Bootstrap

### Câu C2 (10đ) — So sánh
1. Số dòng CSS
*CSS thuần:*
- Navbar responsive: ~80–150 dòng CSS
- Product card: ~50–100 dòng CSS
*Bootstrap:*
- Chỉ dùng class: navbar, container, row, col, card
2. Thời gian phát triển
CSS thuần: lâu (thiết kế + responsive thủ công)
Bootstrap: nhanh (ghép class có sẵn)
3. Khả năng tùy biến
- CSS thuần: Tùy biến 100% nhưng tốn công
- Bootstrap: Tùy biến nhanh nhưng bị giới hạn theo framework
4. Khi nào nên dùng Bootstrap?
*Nên dùng khi:*
-Làm prototype nhanh
-Dashboard / admin panel
-Landing page đơn giản
-Dự án cần responsive nhanh
*Không nên dùng khi:*
-UI design đặc biệt, sáng tạo cao
-App cần performance tối ưu tuyệt đối
-Muốn design system riêng từ đầu

## TRACK B — TAILWINDCSS
## PHẦN A — ĐỌC HIỂU (20 điểm)
### Câu A1 (10đ) — Utility Classes
- `flex`: `display: flex`
- `items-center` : `align-items: center`
- `justify-between`: `justify-content: space-between`
- `p-4` : `padding: 1rem` (16px)
- `bg-white` : nền màu trắng
- `shadow-md`: đổ bóng mức medium
- `rounded-lg`: bo góc lớn
- `hover:shadow-xl`: hover thì shadow lớn hơn
- `transition-shadow` : hiệu ứng transition cho shadow
- `duration-300` : thời gian transition 300ms

*Image* 
- `w-16` : width: 4rem (64px)
- `h-16` : height: 4rem (64px)
- `rounded-full` : bo tròn thành hình tròn
- `object-cover` : ảnh tự crop để fit khung

*Text container*
- `ml-4` : margin-left: 1rem
- `flex-1`: flex: 1 (chiếm phần không gian còn lại)

*Heading* 
- `text-lg`: font-size lớn
- `font-semibold` : font-weight semi-bold
- `text-gray-800` : màu xám đậm
- `truncate`: cắt text bằng `...` nếu quá dài

*Paragraph*
- `text-sm`: font-size nhỏ
- `text-gray-500`: màu xám trung bình

*Button*
- `px-4` : padding trái + phải: 1rem
- `py-2` : padding trên + dưới: 0.5rem
- `bg-blue-500`: nền xanh dương mức 500
- `text-white` : chữ màu trắng
- `rounded-md` : bo góc vừa
- `hover:bg-blue-600`: hover đổi sang xanh đậm hơn
- `focus:ring-2` :khi focus hiện viền ring dày 2px
- `focus:ring-blue-300` :màu ring xanh mức 300

### Câu A2 — Responsive & States
1. Responsive prefixes
- `md:`Áp dụng từ màn hình ≥ 768px (tablet)
- `lg:`Áp dụng từ màn hình ≥ 1024px (desktop)
- `xl:`Áp dụng từ màn hình ≥ 1280px (large desktop)
2. Giải thích state modifiers:
- hover: Áp dụng style khi rê chuột vào element
- focus: Áp dụng khi element được focus
- active: Áp dụng khi đang click / nhấn giữ
- group-hover: Element con thay đổi khi hover vào element cha có class group
3. hidden md:flex
### Câu C1 — Tailwind vs CSS thuần
*CSS:*
.card {
    background: white;
    padding: 20px;
    border-radius: 12px;
}
*So sánh:* HTML file size
CSS thuần:
HTML ngắn hơn
Nhưng cần file CSS riêng
Tổng project thường nhiều file hơn
TailwindCSS
HTML dài hơn do nhiều utility classes
Gần như không cần CSS riêng
### Câu 2 — Performance
1. Tại sao Tailwind CSS file cuối cùng nhỏ hơn Bootstrap CSS?
Mặc dù HTML Tailwind thường rất dài do chứa nhiều utility classes, nhưng file CSS production của Tailwind thường nhỏ hơn Bootstrap vì:
*Bootstrap*
- Chứa sẵn rất nhiều component:
  - navbar
  - modal
  - carousel
  - accordion
  - table
  - alert
  - form
- Dù project không dùng vẫn phải load toàn bộ CSS.

*TailwindCSS*
- Chỉ generate utility classes thực sự được sử dụng trong project.
- CSS cuối cùng chỉ chứa các class đang dùng.
- Ví dụ:```html bg-blue-500 p-4 rounded-lg

## Phần D:
Link google drive: https://drive.google.com/file/d/1Q0UpLfoNTImF2eIznr7ymsfgn4r2r4NU/view?usp=drive_link