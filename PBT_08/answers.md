# Phiếu bài tập 08.
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 (5đ) — Function Declaration vs Expression vs Arrow: 
1. Function Declaration
function tinhThueBaoHiem(luong) {

    let thue = 0;

    if (luong > 11000000) {
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}

2. Function Expression
const tinhThueBaoHiem2 = function(luong) {

    let thue = 0;

    if (luong > 11000000) {
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

3. Arrow Function
const tinhThueBaoHiem3 = (luong) => {

    let thue = 0;

    if (luong > 11000000) {
        thue = luong * 0.1;
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};

### Câu A2 (5đ) — Scope & Closure
**Dự đoán output:**
1
2
3
2
2
### Câu A3 (5đ) — Array Methods
1. Lấy các số chẵn         
const evenNumbers = nums.filter(num => num % 2 === 0);           
2. Nhân mỗi số với 3            
const multiplyBy3 = nums.map(num => num * 3);     
3. Tính tổng tất cả                
const total = nums.reduce((sum, num) => sum + num, 0);  
4. Tìm số đầu tiên > 7             
const firstGreaterThan7 = nums.find(num => num > 7); 
5. Kiểm tra CÓ số > 10 không      
const hasGreaterThan10 = nums.some(num => num > 10);  
6. Kiểm tra TẤT CẢ đều > 0     
const allGreaterThan0 = nums.every(num => num > 0);    
7. Tạo mảng "Số X là [chẵn/lẻ]"   
const descriptions = nums.map(
    num => `Số ${num} là ${num % 2 === 0 ? "chẵn" : "lẻ"}`
); 
8. Đảo ngược mảng (không mutate gốc)
const reversed = [...nums].reverse();

### Câu A4 (5đ) — Object Destructuring & Spread
**Dự đoán output:**

const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);        // 16

## PHẦN C — SUY LUẬN (20 điểm)
### Câu C1 (10đ) — Refactor Code
const processOrders = (orders) =>
    orders
        .filter(({ status, total }) =>
            status === "completed" && total > 100000
        )
        .map(({ id, customer, total }) => {
            const discount = total * 0.1;

            return {
                id,
                customer,
                total,
                discount,
                finalTotal: total - discount
            };
        })
        .sort((a, b) => b.finalTotal - a.finalTotal);

### Câu C2 (10đ) — Thiết kế API
// mini_array.js

const miniArray = {

    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            result.push(
                fn(arr[i], i, arr)
            );

        }

        return result;

    },

    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (fn(arr[i], i, arr)) {

                result.push(arr[i]);

            }

        }

        return result;

    },

    reduce(arr, fn, initialValue) {

        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {

            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );

        }

        return accumulator;

    }

};

console.log(
    miniArray.map(
        [1, 2, 3],
        x => x * 2
    )
);
// → [2, 4, 6]

console.log(
    miniArray.filter(
        [1, 2, 3, 4],
        x => x > 2
    )
);
// → [3, 4]


console.log(
    miniArray.reduce(
        [1, 2, 3, 4],
        (a, b) => a + b,
        0
    )
);
// → 10

## Phần D:
Link google drive: https://drive.google.com/file/d/1VBv3KkfjJF1Mhx2esFH09HC7Ycfj9p_j/view?usp=drive_link
