// student_data.js

const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Biến đếm xếp loại
let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

// Tổng điểm từng môn
let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

// Bonus: theo giới tính
let maleTotal = 0;
let femaleTotal = 0;
let maleCount = 0;
let femaleCount = 0;

// SV cao nhất và thấp nhất
let maxStudent = null;
let minStudent = null;

console.log("| STT | Tên     | TB   | Xếp loại   |");
console.log("|-----|---------|------|-------------|");

for (let i = 0; i < students.length; i++) {

    let s = students[i];

    // Tính điểm TB
    let avg = s.math * 0.4 + s.physics * 0.3 + s.cs * 0.3;

    // Làm tròn 1 chữ số
    avg = avg.toFixed(1);

    // Xếp loại
    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }
    else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    }
    else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }
    else {
        rank = "Yếu";
        yeu++;
    }

    // In bảng
    console.log(
        `| ${i + 1} | ${s.name} | ${avg} | ${rank} |`
    );

    // Cộng tổng môn học
    totalMath += s.math;
    totalPhysics += s.physics;
    totalCS += s.cs;

    // Tìm cao nhất
    if (maxStudent === null || avg > maxStudent.avg) {
        maxStudent = {
            name: s.name,
            avg: avg
        };
    }

    // Tìm thấp nhất
    if (minStudent === null || avg < minStudent.avg) {
        minStudent = {
            name: s.name,
            avg: avg
        };
    }

    // Bonus giới tính
    if (s.gender === "M") {
        maleTotal += Number(avg);
        maleCount++;
    }
    else {
        femaleTotal += Number(avg);
        femaleCount++;
    }
}

// Điểm TB từng môn
let avgMath = (totalMath / students.length).toFixed(2);
let avgPhysics = (totalPhysics / students.length).toFixed(2);
let avgCS = (totalCS / students.length).toFixed(2);

// TB theo giới tính
let maleAvg = (maleTotal / maleCount).toFixed(2);
let femaleAvg = (femaleTotal / femaleCount).toFixed(2);

// Kết quả
console.log("\n--- Thống kê xếp loại ---");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

console.log("\n--- Sinh viên điểm cao nhất ---");
console.log(maxStudent.name, "-", maxStudent.avg);

console.log("\n--- Sinh viên điểm thấp nhất ---");
console.log(minStudent.name, "-", minStudent.avg);

console.log("\n--- Điểm TB toàn lớp từng môn ---");
console.log("Math:", avgMath);
console.log("Physics:", avgPhysics);
console.log("CS:", avgCS);

console.log("\n--- Điểm TB theo giới tính ---");
console.log("Nam:", maleAvg);
console.log("Nữ:", femaleAvg);