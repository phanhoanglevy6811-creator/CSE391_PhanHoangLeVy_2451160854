console.log("=== Classic FizzBuzz ===");

for (let i = 1; i <= 100; i++) {

    let result = "";

    // Chia hết cho 3
    if (i % 3 === 0) {
        result += "Fizz";
    }

    // Chia hết cho 5
    if (i % 5 === 0) {
        result += "Buzz";
    }

    // Nếu không chia hết cho cả 3 và 5
    if (result === "") {
        result = i;
    }

    console.log(result);
}

// Version 2: Custom FizzBuzz

function customFizzBuzz(n, rules) {

    console.log("\n=== Custom FizzBuzz ===");

    for (let i = 1; i <= n; i++) {

        let result = "";

        // Duyệt từng rule
        for (let j = 0; j < rules.length; j++) {

            // Nếu chia hết
            if (i % rules[j].divisor === 0) {
                result += rules[j].word;
            }
        }

        // Nếu không khớp rule nào
        if (result === "") {
            result = i;
        }

        console.log(i + " = " + result);
    }
}
// Test

customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);