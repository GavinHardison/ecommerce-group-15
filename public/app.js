/**
 * replaceNavbar.js
 * * This script finds the element with the ID 'navbar' and replaces
 * its content with the standard Planet Shop navigation bar HTML.
 */

// 1. Define the HTML content as a string (using a template literal for readability)
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
        <input type="text" id="search-bar" placeholder="Search products...">
        <button id="search-button">Search</button>
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
function createProductDiv(name, displayName, imageSrc, alt, price){
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
    productDiv.appendChild(addToCartButton);
    return productDiv; 
}

// Renders the current page. Unfortunately, it has no error handling and if broken breaks horribly. 
async function initialize(){
    let data = await fetchData();
    // console.log(data); 
    if(window.location.pathname == "/" || window.location.pathname == "/index.html"){ // LINE 99
        // serve all the planets
        elementMain = document.getElementsByClassName("product-grid-div")[0];
        elementMain.innerHTML = "";         
        data.forEach(planet => elementMain.appendChild(createProductDiv(
            planet.name, 
            planet.internalName ? planet.internalName : null, // i assure you this is fine-
            planet.src, // i have no way of automatically detecting image file extensions :( [at least not a good way]
            planet.alt ? planet.alt : planet.name, 
            planet.price
        ))); 
    }else if(window.location.pathname.startsWith("/products/")){ // LINE 110 
        // serve just the chosen planet
        
        // get planet name [internal name]
        let name = window.location.pathname.split("/"); 
        name = name[name.length-1]; 
        let planet = data.find(u => u.internalName == name); 

        // oh dear god his format is different
        // okay here's the plan
        // I know there's exactly one element to load so I don't have to nuke everything
        // the key targets I don't already have information are just product-description
        document.querySelector("#product-title").textContent = planet.name; 
        
        let elementProductImage = document.querySelector("#product-image"); 
        elementProductImage.src = `/images/${planet.src}`; // Line 125 
        // elementProductImage.src = planet.src; // Line 126
        elementProductImage.alt = planet.alt; 

        document.querySelector("#product-description").textContent = planet.description; 

        document.querySelector("#product-price").textContent = `$${planet.price}`; 
    }
}
initialize(); 

// <main id="main-content">
// <h1 id="product-title">Mercury</h1>
// <div id="product-detail-div">
//     <img id="product-image" src="/images/mercury.png" alt="Mercury">
//     <div id="product-info-div">
//         <p id="product-description">
//             Mercury is the smallest planet in the Solar System and the one closest to the Sun, completing a full orbit in just 88 days. Because it has almost no atmosphere, heat cannot be trapped, causing drastic temperature swings—from scorching daytime highs to freezing nighttime lows. Its heavily cratered, gray surface resembles Earth&#39;s Moon, shaped by ancient impacts and lava flows. Despite being close to the Sun, Mercury isn&#39;t the hottest planet; instead, it&#39;s a stark, airless world where conditions vary dramatically depending on which side faces the Sun.
//         </p>
//         <p id="product-price">$19.99</p>
//         <button id="add-to-cart-button">Add to Cart</button>
//     </div>
// </div>
// </main>