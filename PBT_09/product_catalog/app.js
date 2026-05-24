const products = [
    { id: 1, name: "iPhone 16", price: 25990000, category: "phone", image: "https://placehold.co/200", rating: 4.5, inStock: true },
    { id: 2, name: "Samsung Galaxy S24", price: 21990000, category: "phone", image: "https://placehold.co/200", rating: 4.6, inStock: true },
    { id: 3, name: "Xiaomi Redmi Note", price: 6990000, category: "phone", image: "https://placehold.co/200", rating: 4.2, inStock: true },
    { id: 4, name: "MacBook Air M3", price: 28990000, category: "laptop", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 5, name: "Dell Inspiron", price: 15990000, category: "laptop", image: "https://placehold.co/200", rating: 4.3, inStock: true },
    { id: 6, name: "Asus Vivobook", price: 13990000, category: "laptop", image: "https://placehold.co/200", rating: 4.1, inStock: false },
    { id: 7, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/200", rating: 4.7, inStock: true },
    { id: 8, name: "Samsung Tab S9", price: 18990000, category: "tablet", image: "https://placehold.co/200", rating: 4.4, inStock: true },
    { id: 9, name: "Lenovo Tab", price: 5990000, category: "tablet", image: "https://placehold.co/200", rating: 4.0, inStock: false },
    { id: 10, name: "AirPods Pro", price: 5990000, category: "accessory", image: "https://placehold.co/200", rating: 4.8, inStock: true },
    { id: 11, name: "Logitech Mouse", price: 490000, category: "accessory", image: "https://placehold.co/200", rating: 4.2, inStock: true },
    { id: 12, name: "Keychron Keyboard", price: 2190000, category: "accessory", image: "https://placehold.co/200", rating: 4.6, inStock: true }
];

let currentCategory = "all";
let currentSearch = "";
let cartCount = 0;

const app = document.createElement("div");
app.className = "container";
document.body.appendChild(app);

function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}

function buildLayout() {
    const header = document.createElement("div");
    header.className = "header";

    const title = document.createElement("h1");
    title.textContent = "Product Catalog";

    const right = document.createElement("div");
    right.className = "cart";
    right.innerHTML = `🛒 <span id="cartBadge">0</span>`;

    header.appendChild(title);
    header.appendChild(right);

    const controls = document.createElement("div");
    controls.className = "controls";

    const search = document.createElement("input");
    search.id = "searchInput";
    search.placeholder = "Tìm sản phẩm...";

    search.addEventListener("input", searchProducts);

    const categories = ["all", "phone", "laptop", "tablet", "accessory"];

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.textContent = category;
        btn.dataset.category = category;

        if (category === "all") {
            btn.classList.add("active");
        }

        btn.addEventListener("click", filterByCategory);
        controls.appendChild(btn);
    });

    const sort = document.createElement("select");
    sort.id = "sortSelect";

    const options = [
        { value: "default", text: "Sắp xếp" },
        { value: "priceAsc", text: "Giá tăng" },
        { value: "priceDesc", text: "Giá giảm" },
        { value: "nameAsc", text: "Tên A-Z" },
        { value: "ratingDesc", text: "Đánh giá cao nhất" }
    ];

    options.forEach(item => {
        const option = document.createElement("option");
        option.value = item.value;
        option.textContent = item.text;
        sort.appendChild(option);
    });

    sort.addEventListener("change", sortProducts);

    const darkBtn = document.createElement("button");
    darkBtn.textContent = "Dark mode";
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    controls.prepend(search);
    controls.appendChild(sort);
    controls.appendChild(darkBtn);

    const grid = document.createElement("div");
    grid.id = "productGrid";
    grid.className = "grid";

    app.appendChild(header);
    app.appendChild(controls);
    app.appendChild(grid);
}

function getVisibleProducts() {
    let result = [...products];

    if (currentCategory !== "all") {
        result = result.filter(product => product.category === currentCategory);
    }

    if (currentSearch !== "") {
        result = result.filter(product =>
            product.name.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    const sortValue = document.querySelector("#sortSelect")?.value;

    if (sortValue === "priceAsc") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "priceDesc") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sortValue === "nameAsc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortValue === "ratingDesc") {
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
}

function renderProducts() {
    const grid = document.querySelector("#productGrid");
    grid.textContent = "";

    const visibleProducts = getVisibleProducts();

    visibleProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = product.id;

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = formatPrice(product.price);

        const info = document.createElement("p");
        info.textContent = `Danh mục: ${product.category} | ⭐ ${product.rating}`;

        const stock = document.createElement("p");
        stock.textContent = product.inStock ? "Còn hàng" : "Hết hàng";

        const cartBtn = document.createElement("button");
        cartBtn.textContent = "Thêm giỏ";

        cartBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            cartCount++;
            document.querySelector("#cartBadge").textContent = cartCount;
        });

        card.addEventListener("click", () => showModal(product));

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(info);
        card.appendChild(stock);
        card.appendChild(cartBtn);

        grid.appendChild(card);
    });
}

function filterByCategory(e) {
    currentCategory = e.target.dataset.category;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    e.target.classList.add("active");
    renderProducts();
}

function searchProducts(e) {
    currentSearch = e.target.value;
    renderProducts();
}

function sortProducts() {
    renderProducts();
}

function showModal(product) {
    const modal = document.createElement("div");
    modal.className = "modal";

    const content = document.createElement("div");
    content.className = "modal-content";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "Đóng";

    closeBtn.addEventListener("click", () => {
        modal.remove();
    });

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Giá: ${formatPrice(product.price)}`;

    const category = document.createElement("p");
    category.textContent = `Danh mục: ${product.category}`;

    const rating = document.createElement("p");
    rating.textContent = `Đánh giá: ${product.rating}`;

    const stock = document.createElement("p");
    stock.textContent = product.inStock ? "Tình trạng: Còn hàng" : "Tình trạng: Hết hàng";

    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(price);
    content.appendChild(category);
    content.appendChild(rating);
    content.appendChild(stock);

    modal.appendChild(content);
    document.body.appendChild(modal);
}

buildLayout();
renderProducts();