let cart = JSON.parse(localStorage.getItem('planetCart')) || [];

function addToCart(planetId) {
    cart.push(planetId);
    // Save it back to the browser's memory
    localStorage.setItem('planetCart', JSON.stringify(cart));
    // alert("Planet added to cart!");
}
function clearCart(){
    // Clear the cart in memory 
    cart = []; 
    // Clear the cart in storage
    localStorage.removeItem("planetCart")
    // Refresh all the buttons  
    location.reload(); 
}

async function handleCheckout() {
    const response = await fetch('/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartIds: cart })
    });
    
    if (response.ok) {
        clearCart(); // Clear cart after buying
        location.reload(); // Refresh to show "Sold Out" stickers
    }
}

const navbarHTML = `
    <div id="title-div">
        <h1><a href="/" id="nav-link-home">Planet Shop</a></h1>
    </div>
    <div id="nav-links-div">
        <a href="/about" class="nav-link-text">About</a>
        <a href="/faq" class="nav-link-text">FAQ</a>
        <a href="/contact" class="nav-link-text">Contact</a>
        <a href="/login" class="nav-link-text">Login</a>
        <a href="/dashboard" class="nav-link-text">Account</a>
    </div>
    <div id="search-div">
        <button id="cart-button" onclick="location.href='/cart'">
            <i class="fa fa-shopping-cart"></i>
        </button>
<!--        <input type="text" id="search-bar" placeholder="Search products..."> i'm sorry but i cannot add search function due to time restraints -->    
        <button id="search-button">Clear Cart</button>
    </div>
`;
const footerHTML = `
<div class="footer-content">
    &copy; 2025 Planet Shop by Gavin, Aiden and Emily.
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const navbarElement = document.getElementById('navbar');
    navbarElement.innerHTML = navbarHTML;
    const footerElement = document.querySelector('footer'); 
    footerElement.innerHTML = footerHTML;
});

// public/script.js

async function fetchData() {
    try {
        // 3. Fetch the data from the API endpoint
        const response = await fetch("/planets");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const planetData = await response.json();
        // console.log(planetData); 
        return planetData; 
    } catch (error) {
        console.error('Could not fetch or render data:', error);
        // document.getElementById('content-container').innerHTML = `<p style="color:red;">Error loading data: ${error.message}</p>`;
    }
}
function createProductDiv(name, displayName, imageSrc, alt, price, id){
    const internalName = displayName ? displayName : name.toLowerCase(); 
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-div');

    // <a class="product-image-link" href="/products/mercury">
    const imageLink = document.createElement('a');
    imageLink.href = `/products/${internalName}`;
    imageLink.classList.add('product-image-link');
    productDiv.appendChild(imageLink);

    // <img class="product-image" src="images/mercury.png" alt="Mercury">
    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = `images/${imageSrc}`;
    productImage.alt = alt;
    imageLink.appendChild(productImage); // Append to the link

    // <h3 class="product-name">Mercury</h3>
    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.textContent = name; 
    productDiv.appendChild(productName);

    // <p class="product-price">$19.99</p>
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${price}`;
    productDiv.appendChild(productPrice);

    // <button class="add-to-cart-button">Add to Cart</button>
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-button');
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.id = `button${id}`; 
    addToCartButton.addEventListener('click', (event) => productCartEventListener(event))
    addToCartButton.dataset.planetId = id; 
    productDiv.appendChild(addToCartButton);
    updateButton(addToCartButton); 
    return productDiv; 
}   

// Update the button, so it shows whether or not the item is in your cart. 
updateButton = (button) => {
    let id = button.dataset.planetId; 
    if (cart.includes(id)){
        button.textContent = "Remove from Cart" 
        button.style.backgroundColor = "#73700D"; // Yellow
    } else {
        button.textContent = "Add to Cart"
        button.style.backgroundColor = "#4B3F72"; // Purple
    }
}
// Interact with the button, removing the item from your cart if you have it, or adding it to your cart if you don't. 
productCartEventListener = (event) => {
    let id = event.currentTarget.dataset.planetId; 
    let button = event.currentTarget; 
    if (event.target.tagName === 'BUTTON') {
        // addToCart(event.target.id.match(/button([1-9]\d*)/)[1]);
        // console.log(cart); 
        // console.log(id);  
        if (cart.includes(id)){
            // Change the button to "Add Item", and remove the button
            button.textContent = "Add to Cart"
            button.style.backgroundColor = "#4B3F72"; // Purple
            cart = cart.filter(item => item !== id);
        } else {
            // Change the button to "Remove Item", and add the button
            button.textContent = "Remove from Cart" 
            button.style.backgroundColor = "#73700D"; // Yellow
            addToCart(id); 
        }
        localStorage.setItem('planetCart', JSON.stringify(cart));
    }
}

async function handleCheckout() {
    // 1. Validation: Don't try to buy an empty cart
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    try {
        // 2. Send the request
        const response = await fetch('/checkout', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                cartIds: cart,
                timestamp: new Date().toISOString() 
            })
        });

        // 3. Handle the server response
        if (response.ok) {
            alert("Purchase successful! Your planets are on the way.");
            
            // Clear everything now that the server has confirmed it
            cart = [];
            localStorage.removeItem('planetCart');
            
            // Redirect to a 'success' page or reload to show fresh state
            window.location.href = "/dashboard"; 
        } else {
            const errorData = await response.json();
            alert(`Checkout failed: ${errorData.message || "Unknown error"}`);
        }
    } catch (error) {
        console.error("Network error during checkout:", error);
        alert("Could not connect to the server. Please try again later.");
    }
}

// Renders the current page. Unfortunately, it has no error handling and if broken breaks horribly. 
async function initialize(){
    let data = await fetchData();
    data.filter(item => item.stock > 0); 
    // console.log(data.find(u => u.stock == 0)); 
    
    // only for testing right now
    // document.querySelector("#cart-button").addEventListener('click', (event) => {
    document.querySelector("#search-button").addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            console.log(cart);
            clearCart(); 
        }
    });
    if(window.location.pathname == "/" || window.location.pathname == "/index.html"){ // LINE 99
        // serve all the planets
        elementMain = document.getElementsByClassName("product-grid-div")[0];
        elementMain.innerHTML = "";         
        data.forEach(planet => elementMain.appendChild(createProductDiv(
            planet.name, 
            planet.internalName ? planet.internalName : null, // i assure you this is fine-
            planet.src, // i have no way of automatically detecting image file extensions :( [at least not a good way]
            planet.alt ? planet.alt : planet.name, 
            planet.price, 
            planet.id
        ))); 
    }else if(window.location.pathname.startsWith("/products/")){ // LINE 110 
        // serve just the chosen planet
        
        // get planet name [internal name]
        let name = window.location.pathname.split("/"); 
        name = name[name.length-1]; 
        // console.log(name); 
        // console.log(data);  
        let planet = data.find(u => u.internalName == name); 

        // console.log(planet); 
        document.querySelector("#product-title").textContent = planet.name; 
        
        let elementProductImage = document.querySelector("#product-image"); 
        elementProductImage.src = `/images/${planet.src}`; // Line 125 
        // elementProductImage.src = planet.src; // Line 126
        elementProductImage.alt = planet.alt; 

        document.querySelector("#product-description").textContent = planet.description; 

        document.querySelector("#product-price").textContent = `$${planet.price}`; 

        let detailButton = document.querySelector("#add-to-cart-button")
        detailButton.dataset.planetId = planet.id; 
        detailButton.addEventListener("click", event => productCartEventListener(event))
        updateButton(detailButton); 
    } else if (window.location.pathname.endsWith("/cart")) {
        let main = document.querySelector("#main-content");
        let summary = document.querySelector("#cart-summary");
        let total = 0; 
        // 1. Create a wrapper for all your cart items
        let cartItemsContainer = document.createElement("div");
        cartItemsContainer.id = "cart-items-list";
    
        for (let planetId of cart) {
            // 2. Find the planet object that matches this ID
            // Note: Use == because planetId from dataset might be a string
            let planet = data.find(p => p.id == planetId); 
            
            if (!planet) continue; // Skip if for some reason the ID isn't found
    
            let elementDiv = document.createElement("div"); 
            elementDiv.className = "cart-item";
    
            // Fix: Use 'img' tag and 'className' instead of 'class'
            let elementImg = document.createElement("img"); 
            elementImg.className = "cart-item-image"; 
            elementImg.src = `/images/${planet.src}`; 
            elementImg.alt = planet.name;
            elementDiv.appendChild(elementImg); 
    
            let elementSpan1 = document.createElement("div");
            elementSpan1.className = "cart-item-name";
            elementSpan1.textContent = planet.name;
            elementDiv.appendChild(elementSpan1); 
    
            let elementSpan2 = document.createElement("div"); 
            elementSpan2.className = "cart-item-price";
            elementSpan2.textContent = `$${planet.price}`;  
            elementDiv.appendChild(elementSpan2); 
            total += planet.price * 100; 
    
            // let elementP = document.createElement("p");
            // elementP.textContent = "1"; 
            // elementDiv.appendChild(elementP); 
    
            main.appendChild(elementDiv); 
            cartItemsContainer.appendChild(elementDiv);
        }
    
        // 2. Insert the whole container before the summary div
        summary.before(cartItemsContainer);
        document.querySelector("#total-amount").textContent = `$${total / 100}`
        document.querySelector("#checkout-button").addEventListener("click", event => {
            // TODO tell the server to erase products
            handleCheckout();
        })
    }
}
initialize(); 


// <div class="cart-item">
//      <img class="cart-item-image" src="images/earth.png" alt="Earth">
//      <span class="cart-item-name">Earth</span>
//      <span class="cart-item-price">$29.99</span>
//      <input type="number" class="cart-item-quantity" value="1" min="1">
//      <span class="cart-item-total">$29.99</span>
//      <button class="remove-item-button">Remove</button>
// </div>