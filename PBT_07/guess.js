// Random số từ 1 -> 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Số lần đoán tối đa
let maxTurns = 7;

// Đếm số lần đoán
let attempts = 0;

// Lưu các số đã đoán
let guessedNumbers = [];

while (attempts < maxTurns) {

    // Nhập số
    let input = prompt(
        `Lần ${attempts + 1}/${maxTurns}\nNhập số từ 1 đến 100:`
    );

    // Nếu bấm Cancel
    if (input === null) {
        alert("Game đã thoát!");
        break;
    }

    // Chuyển sang number
    let guess = Number(input);

    // Validate input
    if (
        isNaN(guess) ||
        guess < 1 ||
        guess > 100 ||
        !Number.isInteger(guess)
    ) {
        alert("Vui lòng nhập số nguyên từ 1 đến 100!");
        continue;
    }

    // Kiểm tra trùng số
    let duplicated = false;

    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guess === guessedNumbers[i]) {
            duplicated = true;
            break;
        }
    }

    if (duplicated) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    // Lưu số đã đoán
    guessedNumbers.push(guess);

    // Tăng số lần đoán
    attempts++;

    // Kiểm tra kết quả
    if (guess === randomNumber) {
        alert(`🎉 Đúng rồi!\nBạn đoán đúng sau ${attempts} lần!`);
        break;
    }
    else if (guess < randomNumber) {
        alert("📈 Cao hơn!");
    }
    else {
        alert("📉 Thấp hơn!");
    }

    // Hết lượt
    if (attempts === maxTurns) {
        alert(
            `💀 Bạn đã hết lượt!\nĐáp án đúng là: ${randomNumber}`
        );
    }
}