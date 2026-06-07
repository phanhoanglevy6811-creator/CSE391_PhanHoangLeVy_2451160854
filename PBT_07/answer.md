# Phiếu bài tập 07.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — var / let / const
1. Dự đoán output:
- Đoạn 1: undefined
- Đoạn 2: ReferenceError
- Đoạn 3: TypeError
- Đoạn 4: [1, 2, 3, 4]
- Đoạn 5: Trong block: 2; Ngoài block: 1

### Câu A2 (5đ) — Data Types & Coercion
console.log(typeof null);              // object
console.log(typeof undefined);         // undefined
console.log(typeof NaN);               // number
console.log("5" + 3);                  // 53
console.log("5" - 3);                  // 2
console.log("5" * "3");               // 15
console.log(true + true);             // 2
console.log([] + []);                 // ""
console.log([] + {});                 // [object Object]
console.log({} + []);                 // 0

### Câu A3 (5đ) — So sánh == vs ===
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);             // false
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true
### Câu A4 (5đ) — Truthy & Falsy
if ("0") console.log("A");           // In "A"
if ("") console.log("B");            // Không in
if ([]) console.log("C");            // In "C"
if ({}) console.log("D");            // In "D"
if (null) console.log("E");          // Không in
if (0) console.log("F");             // Không in
if (-1) console.log("G");            // In "G"
if (" ") console.log("H");           // In "H"

### Câu A5 (5đ) — Template Literals
- Cách 1: var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
- Cách 2: var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
- Cách 3:
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;

## PHẦN C — SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Debug JavaScript
*Lỗi:*
1. Thiếu ; sau return
2. "100000" là string
3. if (giaSauGiam = 0)
4. Không kiểm tra dữ liệu đầu vào
5. Không kiểm tra giá âm
6. Dùng var trong vòng lặp setTimeout
7. Dùng var cho giamGia
8. Không format kết quả tiền

*Giải thích:*
1. Dễ gây lỗi do JavaScript tự chèn dấu ; (ASI)
2. Giá bán nên là number, string có thể gây ép kiểu sai
3. Dùng phép gán = thay vì so sánh
4. Nếu nhập "abc" hoặc NaN sẽ lỗi tính toán
5. Giá bán âm vẫn được xử lý
6. var dùng chung biến i, callback chạy xong đều in
7. var có function scope, dễ gây bug
8. Kết quả in tiền không đẹp

## Phần D: 
Link google drive: https://drive.google.com/file/d/1oXNrwaVxEQZMce-XDouJQXzvVmj9KGfb/view?usp=drive_link