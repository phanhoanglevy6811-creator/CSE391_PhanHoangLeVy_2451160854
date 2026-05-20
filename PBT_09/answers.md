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

### Câu A3 (5đ) — Event Bubbling ###
