const products = [
    {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Smartphone",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    description: "Apple flagship smartphone with A17 Pro chip."
},
{
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Smartphone",
    price: 1299,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800",
    description: "Premium Samsung smartphone with AI features."
},
{
    id: 3,
    name: "Dell XPS 15",
    brand: "Dell",
    category: "Laptop",
    price: 1799,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    description: "Powerful laptop for professionals."
},
{
    id: 4,
    name: "Asus ROG Zephyrus",
    brand: "Asus",
    category: "Laptop",
    price: 1699,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
    description: "Gaming laptop with high performance."
},
{
    id: 5,
    name: "iPad Air",
    brand: "Apple",
    category: "Tablet",
    price: 699,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800",
    description: "Lightweight tablet for work and entertainment."
},
{
    id: 6,
    name: "Galaxy Tab S9",
    brand: "Samsung",
    category: "Tablet",
    price: 799,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800",
    description: "Premium Android tablet."
},
{
    id: 7,
    name: "Logitech MX Master 3S",
    brand: "Logitech",
    category: "Accessory",
    price: 99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    description: "Advanced productivity mouse."
},
{
    id: 8,
    name: "Logitech G Pro X",
    brand: "Logitech",
    category: "Accessory",
    price: 129,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    description: "Professional gaming headset."
}
    
];

let cart = [];

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const productModal = document.getElementById("productModal");
const productDetail = document.getElementById("productDetail");

const cartModal = document.getElementById("cartModal");
const checkoutModal = document.getElementById("checkoutModal");

const loginModal = document.getElementById("loginModal");

initialize();

function initialize() {
    populateFilters();
    renderProducts(products);
    updateLoginUI();
}

function populateFilters() {

    const categories = [...new Set(products.map(p => p.category))];
    const brands = [...new Set(products.map(p => p.brand))];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    brands.forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

function renderProducts(productList) {

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" class="product-image">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-brand">
                    ${product.brand}
                </p>

                <p class="product-category">
                    ${product.category}
                </p>

                <p class="product-price">
                    $${product.price}
                </p>

                <div class="card-actions">
                    <button
                        class="view-btn"
                        onclick="viewProduct(${product.id})">
                        Details
                    </button>

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})">
                        Add Cart
                    </button>
                </div>

            </div>
        `;

        productContainer.appendChild(card);
    });
}

function viewProduct(id) {

    const product = products.find(p => p.id === id);

    productDetail.innerHTML = `
        <img
            src="${product.image}"
            class="detail-image">

        <h2>${product.name}</h2>

        <p><strong>Brand:</strong>
            ${product.brand}
        </p>

        <p><strong>Category:</strong>
            ${product.category}
        </p>

        <p class="detail-price">
            $${product.price}
        </p>

        <p>${product.description}</p>

        <br>

        <button
            class="add-btn"
            onclick="addToCart(${product.id})">
            Add To Cart
        </button>
    `;

    productModal.classList.remove("hidden");
}

function addToCart(id) {

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {

        const product = products.find(p => p.id === id);

        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        const subtotal =
            item.quantity * item.price;

        total += subtotal;
        count += item.quantity;

        const row = document.createElement("div");

        row.className = "cart-item";

        row.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>

                <p>
                    $${item.price}
                </p>

                <p>
                    Subtotal:
                    $${subtotal}
                </p>
            </div>

            <div class="quantity-controls">

                <button
                    class="qty-btn"
                    onclick="decreaseQty(${item.id})">
                    -
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    class="qty-btn"
                    onclick="increaseQty(${item.id})">
                    +
                </button>

                <button
                    class="remove-btn"
                    onclick="removeItem(${item.id})">
                    Remove
                </button>

            </div>
        `;

        cartItems.appendChild(row);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = count;
}

function increaseQty(id) {

    const item = cart.find(
        item => item.id === id
    );

    item.quantity++;

    updateCart();
}

function decreaseQty(id) {

    const item = cart.find(
        item => item.id === id
    );

    item.quantity--;

    if (item.quantity <= 0) {
        cart =
            cart.filter(
                x => x.id !== id
            );
    }

    updateCart();
}

function removeItem(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    updateCart();
}

function filterProducts() {

    const keyword =
        searchInput.value.toLowerCase();

    const category =
        categoryFilter.value;

    const brand =
        brandFilter.value;

    const filtered =
        products.filter(product => {

            const matchName =
                product.name
                .toLowerCase()
                .includes(keyword);

            const matchCategory =
                category === ""
                ||
                product.category === category;

            const matchBrand =
                brand === ""
                ||
                product.brand === brand;

            return (
                matchName
                &&
                matchCategory
                &&
                matchBrand
            );
        });

    renderProducts(filtered);
}

searchInput.addEventListener(
    "input",
    filterProducts
);

categoryFilter.addEventListener(
    "change",
    filterProducts
);

brandFilter.addEventListener(
    "change",
    filterProducts
);

document
.getElementById("closeModal")
.onclick = () =>
productModal.classList.add("hidden");

document
.getElementById("cartBtn")
.onclick = () =>
cartModal.classList.remove("hidden");

document
.getElementById("closeCart")
.onclick = () =>
cartModal.classList.add("hidden");

document
.getElementById("loginBtn")
.onclick = () =>
loginModal.classList.remove("hidden");

document
.getElementById("closeLogin")
.onclick = () =>
loginModal.classList.add("hidden");

document
.getElementById("closeCheckout")
.onclick = () =>
checkoutModal.classList.add("hidden");

document
.getElementById("loginForm")
.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        const username =
        document.getElementById("username").value;

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        loginModal.classList.add(
            "hidden"
        );

        updateLoginUI();

        alert(
            "Login successful"
        );
    }
);

function updateLoginUI() {

    const loggedIn =
        localStorage.getItem("loggedIn") === "true";

    const userProfile =
        document.getElementById("userProfile");

    const userName =
        document.getElementById("userName");

    document
        .getElementById("loginBtn")
        .classList.toggle("hidden", loggedIn);

    document
        .getElementById("logoutBtn")
        .classList.toggle("hidden", !loggedIn);

    userProfile.classList.toggle(
        "hidden",
        !loggedIn
    );

    if (loggedIn) {
        userName.textContent =
            localStorage.getItem("username")
            || "User";
    }
}

document
.getElementById("logoutBtn")
.onclick = () => {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    updateLoginUI();

    alert("Logged out");
};

document
.getElementById("checkoutBtn")
.onclick = () => {

    if (cart.length === 0) {

        alert(
            "Cart is empty"
        );

        return;
    }

    const summary =
        document.getElementById(
            "orderSummary"
        );

    summary.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const subtotal =
            item.quantity * item.price;

        total += subtotal;

        const div =
            document.createElement(
                "div"
            );

        div.className =
            "order-item";

        div.innerHTML = `
            <span>
                ${item.name}
                x ${item.quantity}
            </span>

            <span>
                $${subtotal}
            </span>
        `;

        summary.appendChild(div);
    });

    document
    .getElementById("orderTotal")
    .textContent =
    total.toFixed(2);

    checkoutModal
        .classList
        .remove("hidden");
};

document
.getElementById("placeOrderBtn")
.onclick = () => {

    const loggedIn =
        localStorage.getItem(
            "loggedIn"
        ) === "true";

    if (!loggedIn) {

        alert(
            "Please login first."
        );

        return;
    }

    alert(
        "Order placed successfully!"
    );

    cart = [];

    updateCart();

    checkoutModal
        .classList
        .add("hidden");

    cartModal
        .classList
        .add("hidden");
};