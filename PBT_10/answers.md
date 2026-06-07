## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 (5đ) — Sync vs Async

**Đề bài:**

```javascript
console.log("1 - Start");

setTimeout(() => console.log("2 - Timeout 0ms"), 0);

Promise.resolve().then(() => console.log("3 - Promise"));

console.log("4 - End");

setTimeout(() => console.log("5 - Timeout 100ms"), 100);

Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});
```

**Thứ tự output:**

```text
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

**Giải thích:**

* JavaScript thực hiện các lệnh đồng bộ (synchronous) trước.
* `console.log("1 - Start")` chạy đầu tiên.
* `setTimeout(..., 0)` được đưa vào Macrotask Queue.
* `Promise.then(...)` được đưa vào Microtask Queue.
* `console.log("4 - End")` chạy tiếp theo.

Sau khi Call Stack rỗng, Event Loop sẽ xử lý:

1. Toàn bộ Microtask Queue trước.
2. Sau đó mới xử lý Macrotask Queue.

Do đó:

```text
3 - Promise
6 - Promise 2
```

được thực hiện trước:

```text
2 - Timeout 0ms
```

Trong callback của Promise thứ hai có:

```javascript
setTimeout(() => console.log("7 - Nested timeout"), 0);
```

nên callback này được thêm vào cuối Macrotask Queue.

Cuối cùng:

```text
2 - Timeout 0ms
7 - Nested timeout
```

được thực hiện.

Sau khoảng 100ms:

```text
5 - Timeout 100ms
```

mới được chạy.

**Event Loop**

* **Call Stack:** Nơi thực thi code hiện tại.
* **Microtask Queue:** Chứa Promise.then(), catch(), finally().
* **Macrotask Queue:** Chứa setTimeout(), setInterval().

Thứ tự ưu tiên:

```text
Sync Code
↓
Microtask Queue
↓
Macrotask Queue
```

---

### Câu A2 (5đ) — Fetch API

**Đề bài:**

```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed:", error.message);
        return null;
    }
}
```

#### 1. await fetch(...) trả về gì? Tại sao cần await?

```javascript
const response = await fetch(url);
```

Hàm `fetch()` gửi HTTP Request tới server và trả về:

```javascript
Promise<Response>
```

Nếu không dùng `await`:

```javascript
const response = fetch(url);
```

thì `response` chỉ là một Promise đang chờ xử lý.

Sử dụng `await` giúp chương trình đợi request hoàn thành rồi mới lấy được đối tượng `Response`.

---

#### 2. response.ok là gì?

```javascript
response.ok
```

Là thuộc tính cho biết request có thành công hay không.

Giá trị:

```text
true  → status từ 200 đến 299
false → các status còn lại
```

Ví dụ các status làm `response.ok = false`:

```text
404 Not Found
403 Forbidden
500 Internal Server Error
```

---

#### 3. response.json() là gì? Tại sao cần await lần nữa?

```javascript
const data = await response.json();
```

Dùng để đọc dữ liệu JSON từ Response và chuyển thành JavaScript Object.

Ví dụ:

```json
{
    "name": "Vy"
}
```

sẽ trở thành:

```javascript
{
    name: "Vy"
}
```

Cần `await` vì:

```javascript
response.json()
```

cũng trả về một Promise. Quá trình đọc và parse JSON diễn ra bất đồng bộ.

---

#### 4. try...catch bắt những lỗi gì?

**Network Error**

Ví dụ:

* Mất kết nối Internet
* Sai DNS
* Server không phản hồi

Ví dụ lỗi:

```text
TypeError: Failed to fetch
```

**Lỗi do throw Error**

Ví dụ:

```javascript
if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}
```

sẽ bắt các trường hợp như:

```text
404 Not Found
403 Forbidden
500 Internal Server Error
```

**JSON Parse Error**

Nếu dữ liệu trả về không đúng định dạng JSON:

```text
abcxyz
```

thì:

```javascript
await response.json();
```

sẽ sinh lỗi và được catch xử lý.

**Lưu ý quan trọng:**

`fetch()` KHÔNG tự động throw lỗi với:

```text
404
403
500
```

Do đó cần kiểm tra:

```javascript
response.ok
```

và tự:

```javascript
throw new Error(...)
```

để xử lý các lỗi HTTP.

## PHẦN C — PHÂN TÍCH (20 điểm)

### Câu C1 (10đ) — Error Handling Strategy

Trong ứng dụng E-Commerce, việc gọi API thường xuyên xảy ra lỗi do mạng, server hoặc thời gian phản hồi quá lâu. Vì vậy cần có chiến lược xử lý lỗi phù hợp để đảm bảo trải nghiệm người dùng.

---

#### 1. Network Errors (Mất mạng giữa chừng)

Network Error xảy ra khi:

* Mất kết nối Internet.
* DNS không tìm thấy server.
* Server không phản hồi.

Ví dụ:

```javascript
try {
    const response = await fetch(url);
} catch(error) {
    console.error("Network Error:", error.message);
}
```

Cách xử lý:

* Hiển thị thông báo "Không có kết nối mạng".
* Cho phép người dùng thử lại.
* Tự động retry nếu phù hợp.
* Hiển thị dữ liệu cache nếu có.

Ví dụ:

```javascript
try {
    const response = await fetch(url);
} catch(error) {
    alert("Vui lòng kiểm tra kết nối Internet.");
}
```

---

#### 2. API Errors

##### 404 Not Found

Nguyên nhân:

* Sai URL.
* Tài nguyên không tồn tại.

Ví dụ:

```javascript
if(response.status === 404){
    alert("Không tìm thấy dữ liệu.");
}
```

---

##### 500 Internal Server Error

Nguyên nhân:

* Lỗi phía server.

Ví dụ:

```javascript
if(response.status === 500){
    alert("Server đang gặp sự cố.");
}
```

---

##### 429 Too Many Requests

Nguyên nhân:

* Gửi quá nhiều request trong thời gian ngắn.

Ví dụ:

```javascript
if(response.status === 429){
    alert("Quá nhiều yêu cầu. Vui lòng thử lại sau.");
}
```

Cách xử lý:

* Delay trước khi gửi lại request.
* Giảm tần suất gọi API.
* Áp dụng Retry Strategy.

---

#### 3. Timeout (> 10 giây)

Nếu API phản hồi quá chậm, ứng dụng không nên chờ vô hạn.

Ví dụ hàm fetchWithTimeout():

```javascript
async function fetchWithTimeout(url, ms = 10000) {

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, ms);

    try {

        const response = await fetch(url, {
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        return response;

    } catch(error) {

        throw error;

    }
}
```

Sử dụng:

```javascript
try {

    const response =
        await fetchWithTimeout(
            "https://api.example.com",
            10000
        );

} catch(error){

    console.error("Request timeout");
}
```

---

#### 4. Retry Logic (Thử lại 3 lần)

Khi gặp Network Error, ứng dụng có thể tự động thử lại nhiều lần trước khi báo lỗi.

Ví dụ:

```javascript
async function fetchWithRetry(
    url,
    maxRetries = 3
){

    for(
        let attempt = 1;
        attempt <= maxRetries;
        attempt++
    ){

        try {

            const response =
                await fetch(url);

            if(!response.ok){
                throw new Error(
                    `HTTP ${response.status}`
                );
            }

            return response;

        } catch(error){

            console.log(
                `Retry ${attempt}`
            );

            if(
                attempt === maxRetries
            ){
                throw error;
            }

        }

    }

}
```

Sử dụng:

```javascript
try {

    const response =
        await fetchWithRetry(
            "https://api.example.com",
            3
        );

} catch(error){

    console.error(
        "Request failed after retries"
    );

}
```

---

#### Kết luận

Một chiến lược Error Handling tốt cần:

* Xử lý Network Error.
* Xử lý HTTP Error.
* Có Timeout để tránh chờ vô hạn.
* Có Retry Logic cho lỗi tạm thời.
* Hiển thị thông báo thân thiện với người dùng.

---

### Câu C2 (10đ) — Promise.all vs Promise.allSettled vs Promise.race

#### Bảng so sánh

| Method               | Khi nào resolve?            | Khi nào reject?             | Use Case                            |
| -------------------- | --------------------------- | --------------------------- | ----------------------------------- |
| Promise.all()        | Tất cả Promise thành công   | Chỉ cần 1 Promise thất bại  | Tải dữ liệu phụ thuộc lẫn nhau      |
| Promise.allSettled() | Tất cả Promise hoàn thành   | Không reject                | Dashboard nhiều widget              |
| Promise.race()       | Promise đầu tiên hoàn thành | Promise đầu tiên lỗi        | Timeout hoặc chọn server nhanh nhất |
| Promise.any()        | Promise đầu tiên thành công | Tất cả Promise đều thất bại | Nhiều nguồn dữ liệu dự phòng        |

---

#### 1. Promise.all()

Đặc điểm:

* Chờ tất cả Promise thành công.
* Chỉ cần một Promise lỗi thì toàn bộ bị reject.

Ví dụ E-Commerce:

Tải:

* Thông tin sản phẩm
* Đánh giá sản phẩm
* Hình ảnh sản phẩm

```javascript
const [
    product,
    reviews,
    images
] = await Promise.all([

    fetch("/product/1")
        .then(r => r.json()),

    fetch("/reviews/1")
        .then(r => r.json()),

    fetch("/images/1")
        .then(r => r.json())

]);
```

Nếu API Reviews lỗi:

```text
Promise.all() reject
```

---

#### 2. Promise.allSettled()

Đặc điểm:

* Chờ tất cả Promise hoàn thành.
* Không bị hủy khi một Promise lỗi.

Ví dụ Dashboard:

```javascript
const results =
    await Promise.allSettled([

        fetch("/users")
            .then(r => r.json()),

        fetch("/orders")
            .then(r => r.json()),

        fetch("/products")
            .then(r => r.json())

    ]);

console.log(results);
```

Nếu API Orders lỗi:

```text
Users vẫn hiển thị
Products vẫn hiển thị
Orders hiện lỗi riêng
```

Phù hợp cho:

* Dashboard
* Widget độc lập
* Analytics

---

#### 3. Promise.race()

Đặc điểm:

* Trả kết quả của Promise hoàn thành đầu tiên.
* Có thể là resolve hoặc reject.

Ví dụ Timeout:

```javascript
const result =
    await Promise.race([

        fetch("/products"),

        new Promise((_, reject) =>

            setTimeout(
                () => reject(
                    new Error("Timeout")
                ),
                10000
            )

        )

    ]);
```

Nếu API quá chậm:

```text
Timeout trước
```

=> Request bị coi là thất bại.

---

#### 4. Promise.any()

Đặc điểm:

* Trả về Promise thành công đầu tiên.
* Chỉ reject khi tất cả đều thất bại.

Ví dụ CDN dự phòng:

```javascript
const image =
    await Promise.any([

        fetch("cdn1/image.jpg"),

        fetch("cdn2/image.jpg"),

        fetch("cdn3/image.jpg")

    ]);
```

Khi:

```text
CDN1 lỗi
CDN2 lỗi
CDN3 thành công
```

=> Promise.any() trả kết quả từ CDN3.

Phù hợp:

* Multi-CDN
* Mirror Server
* Backup API

---

#### Kết luận

* **Promise.all()**: Dùng khi tất cả dữ liệu đều bắt buộc phải có.
* **Promise.allSettled()**: Dùng khi các tác vụ độc lập với nhau.
* **Promise.race()**: Dùng cho timeout hoặc chọn kết quả nhanh nhất.
* **Promise.any()**: Dùng khi chỉ cần một nguồn dữ liệu thành công.

## Phần D:
Link google drive: git push origin main