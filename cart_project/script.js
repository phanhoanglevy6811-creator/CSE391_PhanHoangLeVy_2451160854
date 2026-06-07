const products=[
    {id: 1, name: 'Product', price:17.7, image:''}
];
//Duyệt mảng
products.forEach(product => {
    //console.log(`ID: $(product.id), Name: $(product.name)`)
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
});

let btnBuys=document.querySelectorAll("#product .row a");
btnBuys.forEach((btnBuys) => {
    btnBuys.addEventListener('click', function(){
        //Get name and price
        let name=this.parentElement.querySelector(.card-title).innerText;
        let price=this.parentElement.querySelector(.card-text).innerText;
        //Create new row
        let newRow=document.createElement("tr");
        newRow.innerHTML=`<td>${name}</td><td>${price}</td><td>1</td>`;
        //Add to cart table
        document.querySelector("#carts tbody").appendChild(newRow);
    });
});
//Xóa sản phẩm khỏi giỏ hàng
 
//Sửa số lượng sp, cập nhật thành tiền, tổng giá trị đơn hàng
