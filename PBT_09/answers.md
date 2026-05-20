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