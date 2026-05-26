// ========================================
// VARIABLES
// ========================================

let tenMonHoc = "JavaScript";

let soTinChi = 3;

let laMonBatBuoc = true;

let diemSo;

console.log(tenMonHoc);

console.log(soTinChi);

console.log(laMonBatBuoc);

console.log(diemSo);

// ========================================
// DATA TYPES
// ========================================

console.log(typeof tenMonHoc);

console.log(typeof soTinChi);

console.log(typeof laMonBatBuoc);

console.log(typeof diemSo);

// ========================================
// TEMPLATE LITERAL
// ========================================

let sanPham = "Laptop";

let soLuong = 2;

let donGia = 15000000;

let hoaDon =
    `Hóa đơn: ${soLuong} x ${sanPham} = ${(soLuong * donGia).toLocaleString("vi-VN")} VNĐ`;

console.log(hoaDon);

// ========================================
// OPERATORS
// ========================================

const PI = 3.14159;

let banKinh = 5;

let dienTich = PI * banKinh ** 2;

let chuVi = 2 * PI * banKinh;

console.log("Diện tích =", dienTich);

console.log("Chu vi =", chuVi);

// ========================================
// CONDITIONS
// ========================================

let diem = 7.5;

let diemChuyenCan = 9;

if (diem >= 5 && diemChuyenCan >= 8) {
    console.log("Đạt");
} else {
    console.log("Không đạt");
}

if (diem >= 8.5) {
    console.log("Giỏi");
} else if (diem >= 7) {
    console.log("Khá");
} else if (diem >= 5) {
    console.log("Trung bình");
} else {
    console.log("Yếu");
}