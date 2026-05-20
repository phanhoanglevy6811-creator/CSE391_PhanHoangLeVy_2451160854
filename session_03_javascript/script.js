// BÀI 0.2
let ten = "Minh";
let tuoi = 20;
let laSinhVien = true;

console.log("Tên:", ten);        // "Tên: Minh"
console.log("Tuổi:", tuoi);      // "Tuổi: 20"
console.log("Sinh viên:", laSinhVien); // "Sinh viên: true"

// Thay đổi giá trị
tuoi = 21;
console.log("Tuổi mới:", tuoi);  // "Tuổi mới: 21"

const PI = 3.14159;
const TEN_TRUONG = "Đại học Thủy Lợi";

console.log("PI =", PI);
console.log("Trường:", TEN_TRUONG);
// PI = 3.14;  // TypeError: Assignment to constant variable
var monHoc = "CSE391";
console.log("Môn:", monHoc);

 // BÀI 0.3
let hoTen = "Nguyễn Văn A";     // Dùng dấu ""
let diaChi = 'Hà Nội';          // Dùng dấu ''
let loiChao = `Xin chào ${hoTen}`; // Dùng backtick (template literal)

console.log(typeof hoTen);      // "string"
console.log(loiChao);           // "Xin chào Nguyễn Văn A"

let soNguyen = 42;
let soThuc = 3.14;
let am = -10;
let voCuc = Infinity;

console.log(typeof soNguyen);   // "number"
let laTrue = true;
let laFalse = false;

console.log(typeof laTrue);     // "boolean"\
let giaTriNull = null;          // "không có gì" (cố tình)
let chuaGanGiaTri;              // undefined (chưa gán)

console.log(typeof giaTriNull);   // "object" (bug nổi tiếng của JS!)
console.log(typeof chuaGanGiaTri); // "undefined"
console.log("42 là:", typeof 42);          // number
console.log("'42' là:", typeof "42");      // string
console.log("true là:", typeof true);      // boolean

//BÀI 0.4
let ho = "Nguyễn";
let ten = "Minh";
let tuoi = 20;
let diem = 8.5;

// Cách cũ
let cau1 = "Tên: " + ho + " " + ten + ", Tuổi: " + tuoi;
console.log(cau1);
let cau2 = `Tên: ${ho} ${ten}, Tuổi: ${tuoi}`;
console.log(cau2);

// Tính toán trong template literal
let cau3 = `${ho} ${ten} được ${diem} điểm. Năm sau ${ten} sẽ ${tuoi + 1} tuổi.`;
console.log(cau3);

// In nhiều dòng
let thongBao = `
=== THÔNG TIN SINH VIÊN 
Họ tên : ${ho} ${ten}
Tuổi    : ${tuoi}
Điểm    : ${diem}
Xếp loại: ${diem >= 8 ? "Giỏi" : diem >= 6.5 ? "Khá" : "Trung bình"}
`;
console.log(thongBao);

// Bài tập con
let sanPham = "Laptop";
let soLuong = 2;
let donGia = 15000000;

// Tính tổng tiền
let tongTien = soLuong * donGia;

// Tạo hóa đơn bằng template literal
let hoaDon = `Hóa đơn: ${soLuong} x ${sanPham} = ${tongTien.toLocaleString()} VNĐ`;

console.log(hoaDon);
