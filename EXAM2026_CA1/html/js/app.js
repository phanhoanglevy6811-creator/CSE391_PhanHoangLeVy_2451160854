const productList = document.getElementById("productList");

products.forEach((product, index) => {

    const statusClass =
        product.status === "Còn hàng"
            ? "status-available"
            : "status-out";

    productList.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price.toLocaleString("vi-VN")} đ</td>
            <td>
                <span class="${statusClass}">
                    ${product.status}
                </span>
            </td>
        </tr>
    `;
});