// Cach 1: Truy cap theo cac phuong thuc getE
//let pMassage=document.getElementById("message");
//let pMassages=document.getElementsByTagName("p");
//let pClasses=document.getElementsByClassName("message");
//console.log(pMassage[0].textContent);
// Cach 2: Truy cap theo phuong thuc QuerySelctor
//let pSelector=document.querySelector(".message");
//console.log(pSelector.textContent);
// Cach 3: Truy cap theo phuong thuc querySelectorALL
//let pSelectorAll=document.querySelectorAll(".message");
//console.log(pSelectorAll[0].textContent)

// Quy trinh xu ly 3 buoc
// Buoc 1: Những gì sẽ tham gia tương tác: Khi tôi nhấn nút Click now
// thì thay đổi màu nền, nội dung của thẻ p có id là message
btnCLick.addEventListener("Click", ()=>{
    parent.removeChild(child);
});

btnClick.addEventListener("click", ()=>{
    let newElement= document.createElement("p");
    newElement.textContent="Bạn đã nhấn nút Click now";
    parent.appendChild(newElement);
    parent.style.backgroundColor="yellow";
});
//let btnClick=document.getElementById("clickNow");
//let pMassage=document.getElementById("message");

// Bước 2: Sự kiện sẽ xảy ra khi tôi nhấn nút: Sự kiện click
btnCLick.add
// Bước 3: Hành động xảy ra khi sự kiện click xảy ra: Thay đổi màu nền, nội dung của t
function hamGiDo(){
    pMassage.style.backgroundColor="yellow";
    pMessage.textContent="Bạn đã nhấn nút click now"
}