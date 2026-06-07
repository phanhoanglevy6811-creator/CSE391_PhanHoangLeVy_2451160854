# Exercise 0C — Answers

## Bài 0C.2 — Input Event

### Câu hỏi 1: Sự khác biệt giữa `input` và `change`?

- input: chạy mỗi khi người dùng gõ / thay đổi giá trị realtime
- change: chỉ chạy khi rời khỏi input (blur) hoặc xác nhận thay đổi

👉 Kết luận: input dùng cho realtime, change dùng cho form/select

---

### Câu hỏi 2: Tại sao dùng `e.target.value` thay vì `input.value`?

- e.target là phần tử vừa phát sinh event
- value lấy đúng giá trị tại thời điểm event xảy ra
- giúp code linh hoạt khi dùng nhiều input hoặc delegation

👉 Kết luận: e.target.value chính xác và generic hơn

---

## Bài 0C.3 — Keyboard Event

### Câu hỏi 3: key vs code khác nhau gì?

- key: ký tự thực tế ("a", "Enter", "ArrowUp")
- code: vị trí phím trên bàn phím ("KeyA", "Enter", "ArrowUp")

👉 key phụ thuộc ngôn ngữ bàn phím  
👉 code cố định theo layout bàn phím

---

## Bài 0C.4 — Form Event

### Câu hỏi 4: Tại sao phải dùng `preventDefault()`?

- form mặc định sẽ reload trang khi submit
- preventDefault() chặn hành vi đó
- giúp xử lý bằng JavaScript mà không reload

👉 Kết luận: dùng để làm SPA behavior

---

### Câu hỏi 5: Vì sao phải validate trước khi submit?

- tránh dữ liệu sai gửi lên server
- tăng trải nghiệm người dùng
- giảm lỗi backend

---

## Bài 0C.5 — Event Delegation

### Câu hỏi 6: Event Delegation là gì?

- Gắn 1 event listener cho parent thay vì từng child
- Dựa vào bubbling event

---

### Câu hỏi 7: Lợi ích của Event Delegation?

- giảm số lượng event listener
- tối ưu performance
- tự động áp dụng cho element mới thêm

---

### Câu hỏi 8: e.target vs closest() khác gì?

- e.target: phần tử click trực tiếp
- closest(): tìm phần tử cha gần nhất theo selector

👉 dùng closest() để bắt đúng element trong DOM tree

---