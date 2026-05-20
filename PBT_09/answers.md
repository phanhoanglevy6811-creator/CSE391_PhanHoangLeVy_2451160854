# Phiếu bài tập 02.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — DOM Tree
1. DOM tree
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button[type="submit"]
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"

2. Viết querySelector cho mỗi yêu cầu:
- Chọn thẻ <h1>
document.querySelector("h1");
- Chọn input trong form
document.querySelector("#todoForm input");
- Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
- Chọn link đang active
document.querySelector("a.active");
- Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li:first-child");
- Chọn tất cả <a> bên trong <nav>
document.querySelectorAll("nav a");

### Câu A2 (5đ) — innerHTML vs textContent
1. 
Thuộc tính	      |    innerHTML	          |        textContent
Chức năng	      |   Đọc/ghi nội dung HTML	  |    Đọc/ghi văn bản thuần
Hiểu thẻ HTML?	  |   Có	                  |    Không
Có render HTML?	  |   Có	                  |    Không
Nguy cơ XSS?	  |   Có	                  |    Hầu như không
Tốc độ	          |   Chậm hơn	              |    Nhanh hơn

2. Ví dụ dùng innerHTML
document.querySelector("#box").innerHTML =
    "<h2>Hello</h2><p>Xin chào</p>";
3. Ví dụ dùng textContent
document.querySelector("#box").textContent =
    "<h2>Hello</h2>";

## PHẦN C — DEBUG & PHÂN TÍCH (15 điểm)
### Câu C1 (8đ) — Debug DOM Code
1. Lỗi:addEventListener("onclick", function() {
- Sửa:addEventListener("click", function() {
2. Lỗi:countDisplay = count;
- Sửa:countDisplay.textContent = count;
3. Lỗi:countDisplay = count;
- Sửa:Assignment to constant variable
4. Lỗi:historyList.innerHTML = null;
- Sửa:historyList.innerHTML = "";
5. Lỗi:item.remove;
- Sửa:item.remove();
6. Lỗi:count = localStorage.getItem("count");
- Sửa:historyList.innerHTML =
    localStorage.getItem("history") || "";
7. Lỗi:count = localStorage.getItem("count");
- Sửa:count = Number(localStorage.getItem("count")) || 0;
8. Lỗi:countDisplay.innerHTML = count;
- Sửa:countDisplay.textContent = count; 

### Câu C2 (7đ) — Performance
1. Nếu có 1000 elements:
- Browser phải tạo 1000 event listeners
- Tốn memory
- Tốn CPU khi attach events
- DOM update chậm hơn
- Khó maintain code
- Dynamic elements mới thêm vào sẽ không có event
2. Khi sử dụng: document.body.appendChild(div);
trong vòng lặp 1000 lần, mỗi lần thêm element vào DOM, browser phải cập nhật lại giao diện bằng cách tính toán layout (reflow) và vẽ lại (repaint). Việc này xảy ra liên tục nên làm giảm hiệu năng.
- DocumentFragment giúp giải quyết vấn đề này bằng cách tạo một vùng DOM tạm trong bộ nhớ. Các phần tử sẽ được thêm vào fragment trước mà chưa render ra giao diện, nên không gây reflow hay repaint.
- Sau khi tạo xong toàn bộ 1000 elements, chỉ cần append fragment vào DOM một lần: const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);
- Cách này chỉ gây ra một lần reflow/repaint duy nhất nên nhanh hơn và tối ưu performance hơn nhiều.