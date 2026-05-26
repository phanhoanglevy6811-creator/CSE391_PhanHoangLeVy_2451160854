// =======================================
// BÀI TẬP CON 0B — DOM BASICS
// =======================================

// ===============================
// 1. SELECT ELEMENTS
// ===============================

const title = document.getElementById("title");
const firstP = document.querySelector(".description");
const allLi = document.querySelectorAll(".item");

console.log(title);
console.log(firstP);
console.log(allLi);

// ===============================
// 2. CHANGE CONTENT
// ===============================

title.textContent = "Tôi đang học DOM";

firstP.textContent = "Tôi đang học DOM cơ bản";

const firstLi = document.querySelector("li");
firstLi.innerHTML = "<strong>HTML5</strong>";

allLi.forEach((li, index) => {
    li.textContent += " (đã học)";
});

// ===============================
// 3. ATTRIBUTE + TITLE
// ===============================

allLi.forEach((li, index) => {
    li.setAttribute("data-index", index);
});

title.setAttribute("class", "main-title");

document.title = "DOM Practice";

// ===============================
// 4. CLASSLIST
// ===============================

allLi.forEach(li => {
    li.classList.add("highlight");
});

console.log(allLi[0].classList.contains("highlight"));

allLi[1].classList.toggle("text-red");

allLi.forEach(li => {
    li.classList.remove("highlight");
});

// ===============================
// 5. STYLE CHANGE
// ===============================

allLi.forEach((li, index) => {
    if (index % 2 === 0) {
        li.style.backgroundColor = "#dbeafe";
    } else {
        li.style.backgroundColor = "#fce7f3";
    }

    li.style.fontSize = `${(index + 1) * 14}px`;
});

// ===============================
// 6. CREATE / DELETE ELEMENT
// ===============================

const ul = document.getElementById("danh-sach");

function themMonHoc(tenMon) {
    const li = document.createElement("li");
    li.textContent = tenMon;
    li.classList.add("item");
    ul.appendChild(li);
}

// test
themMonHoc("Vue.js");
themMonHoc("Node.js");