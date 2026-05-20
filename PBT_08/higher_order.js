function pipe(...fns) {

    return function(initialValue) {

        return fns.reduce((value, fn) => {

            return fn(value);

        }, initialValue);

    };

}


// TEST pipe()

const process = pipe(

    x => x * 2,          // 5 -> 10
    x => x + 10,         // 10 -> 20
    x => x.toString(),   // 20 -> "20"
    x => "Kết quả: " + x

);

console.log(process(5));


// =====================================
// 2. memoize() — Cache kết quả
// =====================================

function memoize(fn) {

    const cache = {};

    return function(...args) {

        // Key cache
        const key = JSON.stringify(args);

        // Nếu có cache
        if (cache[key] !== undefined) {

            console.log("Lấy từ cache!");

            return cache[key];

        }

        // Chưa có -> tính
        const result = fn(...args);

        // Lưu cache
        cache[key] = result;

        return result;

    };

}


// TEST memoize()

const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;

});

console.log(expensiveCalc(1000000));

console.log(expensiveCalc(1000000));


// =====================================
// 3. debounce()
// =====================================

function debounce(fn, delay) {

    let timer;

    return function(...args) {

        // Xóa timer cũ
        clearTimeout(timer);

        // Tạo timer mới
        timer = setTimeout(() => {

            fn(...args);

        }, delay);

    };

}


// TEST debounce()

const search = debounce((query) => {

    console.log("Searching:", query);

}, 500);


// Gọi liên tục
search("i");
search("ip");
search("iph");
search("iphone");

// Chỉ "iphone" chạy sau 500ms


// =====================================
// 4. retry()
// =====================================

async function retry(fn, maxAttempts = 3) {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            console.log(`Thử lần ${attempt}...`);

            const result = await fn();

            return result;

        }
        catch (error) {

            console.log(
                `Lỗi ở lần ${attempt}:`,
                error.message
            );

            // Nếu hết lượt
            if (attempt === maxAttempts) {

                throw new Error(
                    "Đã vượt quá số lần thử!"
                );

            }

        }

    }

}


// TEST retry()

let count = 0;

async function fakeApi() {

    count++;

    if (count < 3) {

        throw new Error("Server Error!");

    }

    return "Kết nối thành công!";

}


retry(fakeApi, 5)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));