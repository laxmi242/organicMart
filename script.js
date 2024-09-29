// Sample product data with corresponding image paths and categories
const products = [
    { name: "Organic Apples", description: "Fresh and juicy organic apples.", price: "$5.99", image: "organicImage.jpeg", category: "Fruits" },
    { name: "Spinach", description: "Green leafy organic spinach.", price: "$2.99", image: "spinich.jpeg", category: "Vegetables" },
    { name: "Tomatoes", description: "Fresh organic tomatoes.", price: "$3.49", image: "tomato.jpeg", category: "Vegetables" },
    { name: "Onion", description: "Organic onions rich in flavor.", price: "$1.99", image: "onion.jpeg", category: "Vegetables" },
    { name: "Potato", description: "Organic potatoes perfect for cooking.", price: "$2.49", image: "potato.jpeg", category: "Vegetables" },
    { name: "Cheese", description: "Delicious organic cheese.", price: "$4.99", image: "cheese.webp", category: "Dairy" },
    { name: "Curd", description: "Fresh organic curd.", price: "$3.99", image: "curd.webp", category: "Dairy" },
    { name: "Butter", description: "Rich and creamy organic butter.", price: "$6.99", image: "butter.webp", category: "Dairy" }
];

// Cart array to hold items added to cart
let cart = [];

// Function to dynamically generate product listings
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";  // Clear current product list

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });
}

// Add to Cart functionality
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Update cart count
function updateCart() {
    const cartCount = document.querySelector(".nav-cart");
    cartCount.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${cart.length})`;
}

// Filter products by category
function filterProductsByCategory(category) {
    const filteredProducts = category === "All Categories" ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Search products by name
function searchProducts(query) {
    const searchQuery = query.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
}

// Display the products when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();

    // Add event listeners for search and category filter
    document.querySelector('.search-input').addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });

    document.querySelector('.search-select').addEventListener('change', (e) => {
        filterProductsByCategory(e.target.value);
    });
});
