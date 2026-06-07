const foods = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
    { name: "Lẩu hải sản", price: 450000, quantity: 2 }
];

const isWednesday = true;
const hasTip = true;

const VAT_RATE = 0.08;
const TIP_RATE = 0.05;


let subtotal = 0;

for (let i = 0; i < foods.length; i++) {
    subtotal += foods[i].price * foods[i].quantity;
}


let discountPercent = 0;

if (subtotal > 1000000) {
    discountPercent += 15;
}
else if (subtotal > 500000) {
    discountPercent += 10;
}

if (isWednesday) {
    discountPercent += 5;
}

let discountAmount = subtotal * discountPercent / 100;

let afterDiscount = subtotal - discountAmount;

// VAT
let vatAmount = afterDiscount * VAT_RATE;

// Tip
let tipAmount = 0;

if (hasTip) {
    tipAmount = afterDiscount * TIP_RATE;
}

// Tổng cuối
let finalTotal = afterDiscount + vatAmount + tipAmount;

function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

console.log("HÓA ĐƠN NHÀ HÀNG");

// In món ăn
for (let i = 0; i < foods.length; i++) {

    let item = foods[i];

    let itemTotal = item.price * item.quantity;

    console.log(
        `${i + 1}. ${item.name} x${item.quantity} ` +
        `@${formatMoney(item.price)} = ${formatMoney(itemTotal)}`
    );
}
console.log("Tổng cộng: " + formatMoney(subtotal));
console.log(
    `Giảm giá (${discountPercent}%): ` +
    formatMoney(discountAmount)
);

console.log("VAT (8%): " + formatMoney(vatAmount));
console.log("Tip (5%): " + formatMoney(tipAmount));

console.log("THANH TOÁN: " + formatMoney(finalTotal));