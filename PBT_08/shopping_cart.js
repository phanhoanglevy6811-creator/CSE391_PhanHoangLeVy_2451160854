function createCart() {

    // Private data
    let items = [];

    let discount = {
        type: null,
        value: 0
    };

    // ==========================
    // FORMAT TIỀN
    // ==========================

    function formatMoney(number) {
        return number.toLocaleString("vi-VN") + "đ";
    }

    // ==========================
    // RETURN METHODS
    // ==========================

    return {

        // ==========================
        // THÊM SẢN PHẨM
        // ==========================

        addItem(product, quantity = 1) {

            const existingItem = items.find(
                item => item.id === product.id
            );

            // Nếu đã tồn tại -> tăng quantity
            if (existingItem) {
                existingItem.quantity += quantity;
            }
            else {

                items.push({
                    ...product,
                    quantity
                });

            }

        },


        // ==========================
        // XÓA SẢN PHẨM
        // ==========================

        removeItem(productId) {

            items = items.filter(
                item => item.id !== productId
            );

        },


        // ==========================
        // CẬP NHẬT SỐ LƯỢNG
        // ==========================

        updateQuantity(productId, newQuantity) {

            const item = items.find(
                item => item.id === productId
            );

            if (!item) {
                console.log("Không tìm thấy sản phẩm!");
                return;
            }

            // Nếu quantity <= 0 -> xóa
            if (newQuantity <= 0) {

                this.removeItem(productId);
                return;

            }

            item.quantity = newQuantity;

        },


        // ==========================
        // TÍNH TỔNG TIỀN
        // ==========================

        getTotal() {

            let total = items.reduce((sum, item) => {

                return sum + (item.price * item.quantity);

            }, 0);

            // SALE %
            if (discount.type === "percent") {
                total -= total * discount.value / 100;
            }

            // FREESHIP
            else if (discount.type === "fixed") {
                total -= discount.value;
            }

            // Không cho âm
            if (total < 0) {
                total = 0;
            }

            return total;

        },


        // ==========================
        // ÁP MÃ GIẢM GIÁ
        // ==========================

        applyDiscount(code) {

            switch (code) {

                case "SALE10":

                    discount = {
                        type: "percent",
                        value: 10
                    };

                    console.log("Áp dụng SALE10 (-10%)");
                    break;

                case "SALE20":

                    discount = {
                        type: "percent",
                        value: 20
                    };

                    console.log("Áp dụng SALE20 (-20%)");
                    break;

                case "FREESHIP":

                    discount = {
                        type: "fixed",
                        value: 30000
                    };

                    console.log("Áp dụng FREESHIP (-30.000đ)");
                    break;

                default:

                    console.log("Mã giảm giá không hợp lệ!");

            }

        },


        // ==========================
        // IN GIỎ HÀNG
        // ==========================

        printCart() {

            console.log("\n=== GIỎ HÀNG ===");

            if (items.length === 0) {
                console.log("Giỏ hàng trống!");
                return;
            }

            console.log(
                "# | Sản phẩm        | SL | Đơn giá        | Tổng"
            );

            console.log(
                "------------------------------------------------------"
            );

            items.forEach((item, index) => {

                const itemTotal =
                    item.price * item.quantity;

                console.log(
                    `${index + 1} | ` +
                    `${item.name.padEnd(16)} | ` +
                    `${String(item.quantity).padEnd(2)} | ` +
                    `${formatMoney(item.price).padEnd(15)} | ` +
                    `${formatMoney(itemTotal)}`
                );

            });

            console.log(
                "------------------------------------------------------"
            );

            console.log(
                "Tổng cộng: " +
                formatMoney(this.getTotal())
            );

        },


        // ==========================
        // TỔNG SỐ SẢN PHẨM
        // ==========================

        getItemCount() {

            return items.reduce((total, item) => {

                return total + item.quantity;

            }, 0);

        },


        // ==========================
        // XÓA TOÀN BỘ
        // ==========================

        clearCart() {

            items = [];

            discount = {
                type: null,
                value: 0
            };

            console.log("Đã xóa toàn bộ giỏ hàng!");

        }

    };

}


// ======================================
// TEST
// ======================================

const cart = createCart();

cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.addItem(
    { id: 3, name: "AirPods Pro", price: 6990000 },
    2
);

// Thêm tiếp -> quantity tăng lên 2
cart.addItem(
    { id: 1, name: "iPhone 16", price: 25990000 },
    1
);

cart.printCart();


cart.applyDiscount("SALE10");

cart.printCart();


console.log(
    "\nSố SP:",
    cart.getItemCount()
);


cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);


cart.updateQuantity(1, 5);

cart.printCart();