// Sample Product Data
const products = [
    { id: 1, name: "Cricket Bat", price: 5000, image: "bat.jpg" },
    { id: 2, name: "Cricket Ball", price: 300, image: "ball.jpg" },
    { id: 3, name: "Cricket Gloves", price: 1500, image: "gloves.jpg" },
    { id: 4, name: "Cricket Helmet", price: 2000, image: "helmet.jpg" },
];

let cart = [];

// Render Products
const productList = document.querySelector('.product-list');
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>NPR ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productItem);
});

// Add to Cart Function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Cart Modal
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close');

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    renderCartItems();
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function renderCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - NPR ${item.price}</p>
        `;
        cartItems.appendChild(cartItem);
    });
}