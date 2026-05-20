const products = [
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/300x220",
        rating: 4.5,
        inStock: true
    },

    {
        id: 2,
        name: "Samsung S25",
        price: 21990000,
        category: "phone",
        image: "https://placehold.co/300x220",
        rating: 4.7,
        inStock: true
    },

    {
        id: 3,
        name: "MacBook Air M4",
        price: 32990000,
        category: "laptop",
        image: "https://placehold.co/300x220",
        rating: 4.9,
        inStock: true
    },

    {
        id: 4,
        name: "Dell XPS 15",
        price: 28990000,
        category: "laptop",
        image: "https://placehold.co/300x220",
        rating: 4.6,
        inStock: false
    },

    {
        id: 5,
        name: "iPad Pro",
        price: 19990000,
        category: "tablet",
        image: "https://placehold.co/300x220",
        rating: 4.8,
        inStock: true
    },

    {
        id: 6,
        name: "Galaxy Tab S9",
        price: 16990000,
        category: "tablet",
        image: "https://placehold.co/300x220",
        rating: 4.4,
        inStock: true
    },

    {
        id: 7,
        name: "Sony WH-1000XM5",
        price: 8990000,
        category: "audio",
        image: "https://placehold.co/300x220",
        rating: 4.9,
        inStock: true
    },

    {
        id: 8,
        name: "AirPods Pro 2",
        price: 5990000,
        category: "audio",
        image: "https://placehold.co/300x220",
        rating: 4.7,
        inStock: true
    },

    {
        id: 9,
        name: "ROG Phone 9",
        price: 24990000,
        category: "phone",
        image: "https://placehold.co/300x220",
        rating: 4.5,
        inStock: false
    },

    {
        id: 10,
        name: "Lenovo Legion 7",
        price: 35990000,
        category: "laptop",
        image: "https://placehold.co/300x220",
        rating: 4.8,
        inStock: true
    },

    {
        id: 11,
        name: "Xiaomi Pad 7",
        price: 9990000,
        category: "tablet",
        image: "https://placehold.co/300x220",
        rating: 4.2,
        inStock: true
    },

    {
        id: 12,
        name: "JBL Tune 770NC",
        price: 2990000,
        category: "audio",
        image: "https://placehold.co/300x220",
        rating: 4.3,
        inStock: true
    }
];


// =====================
// STATE
// =====================

let filteredProducts = [...products];

let currentCategory = "all";

let cartCount = 0;


// =====================
// ROOT CONTAINER
// =====================

const container = document.createElement("div");

container.classList.add("container");

document.body.appendChild(container);


// =====================
// CART ICON
// =====================

const cartIcon = document.createElement("div");

cartIcon.classList.add("cart-icon");

cartIcon.innerHTML = `
🛒
<span class="cart-badge">0</span>
`;

document.body.appendChild(cartIcon);

const cartBadge = cartIcon.querySelector(".cart-badge");


// =====================
// TOPBAR
// =====================

const topbar = document.createElement("div");

topbar.classList.add("topbar");


// SEARCH
const searchInput = document.createElement("input");

searchInput.type = "text";

searchInput.placeholder = "Search products...";

searchInput.classList.add("search-box");


// SORT
const sortSelect = document.createElement("select");

sortSelect.classList.add("sort-select");

sortSelect.innerHTML = `
<option value="">Sort By</option>
<option value="price-asc">Price ↑</option>
<option value="price-desc">Price ↓</option>
<option value="name">Name A-Z</option>
<option value="rating">Highest Rating</option>
`;


// DARK MODE BUTTON
const darkBtn = document.createElement("button");

darkBtn.textContent = "🌙 Dark Mode";

darkBtn.classList.add("dark-btn");


// CATEGORY BUTTONS
const categories = [
    "all",
    "phone",
    "laptop",
    "tablet",
    "audio"
];

const categoryContainer = document.createElement("div");

categoryContainer.classList.add("category-buttons");


categories.forEach(category => {

    const button = document.createElement("button");

    button.textContent = category.toUpperCase();

    button.classList.add("category-btn");

    button.dataset.category = category;

    categoryContainer.appendChild(button);
});


// APPEND TOPBAR
topbar.appendChild(searchInput);

topbar.appendChild(sortSelect);

topbar.appendChild(darkBtn);

container.appendChild(topbar);

container.appendChild(categoryContainer);


// =====================
// PRODUCTS GRID
// =====================

const productsGrid = document.createElement("div");

productsGrid.classList.add("products-grid");

container.appendChild(productsGrid);


// =====================
// FORMAT PRICE
// =====================

function formatPrice(price) {

    return price.toLocaleString("vi-VN") + "đ";
}


// =====================
// RENDER PRODUCTS
// =====================

function renderProducts(productArray) {

    productsGrid.innerHTML = "";

    productArray.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.dataset.id = product.id;


        // IMAGE
        const image = document.createElement("img");

        image.src = product.image;


        // CONTENT
        const content = document.createElement("div");

        content.classList.add("product-content");


        // NAME
        const name = document.createElement("h3");

        name.textContent = product.name;


        // PRICE
        const price = document.createElement("p");

        price.classList.add("price");

        price.textContent =
            formatPrice(product.price);


        // RATING
        const rating = document.createElement("p");

        rating.classList.add("rating");

        rating.textContent =
            `⭐ ${product.rating}`;


        // STOCK
        const stock = document.createElement("p");

        stock.classList.add("stock");

        stock.textContent =
            product.inStock
                ? "In Stock"
                : "Out of Stock";


        // BUTTON
        const button = document.createElement("button");

        button.textContent = "Add to Cart";

        button.classList.add("add-cart-btn");


        // APPEND
        content.appendChild(name);

        content.appendChild(price);

        content.appendChild(rating);

        content.appendChild(stock);

        content.appendChild(button);


        card.appendChild(image);

        card.appendChild(content);


        productsGrid.appendChild(card);
    });
}


// =====================
// FILTER CATEGORY
// =====================

function filterByCategory(category) {

    currentCategory = category;

    applyFilters();
}


// =====================
// SEARCH PRODUCTS
// =====================

function searchProducts(keyword) {

    keyword = keyword.toLowerCase();

    applyFilters(keyword);
}


// =====================
// SORT PRODUCTS
// =====================

function sortProducts(type, array) {

    const sorted = [...array];

    switch(type) {

        case "price-asc":

            sorted.sort((a, b) =>
                a.price - b.price
            );

            break;

        case "price-desc":

            sorted.sort((a, b) =>
                b.price - a.price
            );

            break;

        case "name":

            sorted.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;

        case "rating":

            sorted.sort((a, b) =>
                b.rating - a.rating
            );

            break;
    }

    return sorted;
}


// =====================
// APPLY FILTERS
// =====================

function applyFilters(keyword = searchInput.value.toLowerCase()) {

    let result = [...products];


    // CATEGORY
    if (currentCategory !== "all") {

        result = result.filter(product =>
            product.category === currentCategory
        );
    }


    // SEARCH
    result = result.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );


    // SORT
    result = sortProducts(
        sortSelect.value,
        result
    );


    filteredProducts = result;

    renderProducts(filteredProducts);
}


// =====================
// MODAL
// =====================

function openModal(product) {

    const overlay = document.createElement("div");

    overlay.classList.add("modal-overlay");


    const modal = document.createElement("div");

    modal.classList.add("modal");


    modal.innerHTML = `
        <img src="${product.image}">
        
        <div class="modal-content">
            <h2>${product.name}</h2>

            <p><strong>Price:</strong>
                ${formatPrice(product.price)}
            </p>

            <p><strong>Category:</strong>
                ${product.category}
            </p>

            <p><strong>Rating:</strong>
                ⭐ ${product.rating}
            </p>

            <p><strong>Status:</strong>
                ${product.inStock ? "In Stock" : "Out of Stock"}
            </p>

            <button class="close-modal">
                Close
            </button>
        </div>
    `;


    overlay.appendChild(modal);

    document.body.appendChild(overlay);


    overlay.addEventListener("click", function(e) {

        if (
            e.target === overlay ||
            e.target.classList.contains("close-modal")
        ) {

            overlay.remove();
        }
    });
}


// =====================
// SEARCH EVENT
// =====================

searchInput.addEventListener("input", function() {

    searchProducts(this.value);
});


// =====================
// CATEGORY EVENTS
// =====================

categoryContainer.addEventListener("click", function(e) {

    if (!e.target.classList.contains("category-btn")) {
        return;
    }

    filterByCategory(
        e.target.dataset.category
    );
});


// =====================
// SORT EVENT
// =====================

sortSelect.addEventListener("change", function() {

    applyFilters();
});


// =====================
// PRODUCT EVENTS
// =====================

productsGrid.addEventListener("click", function(e) {

    const card = e.target.closest(".product-card");

    if (!card) return;

    const id = Number(card.dataset.id);

    const product = products.find(p => p.id === id);


    // ADD TO CART
    if (e.target.classList.contains("add-cart-btn")) {

        e.stopPropagation();

        cartCount++;

        cartBadge.textContent = cartCount;

        return;
    }


    // OPEN MODAL
    openModal(product);
});


// =====================
// DARK MODE
// =====================

darkBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");
});


// =====================
// INITIAL RENDER
// =====================

renderProducts(products);