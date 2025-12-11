/**
 * replaceNavbar.js
 * * This script finds the element with the ID 'navbar' and replaces
 * its content with the standard Planet Shop navigation bar HTML.
 */

// 1. Define the HTML content as a string (using a template literal for readability)
const navbarHTML = `
    <div id="title-div">
        <h1>Planet Shop</h1>
    </div>
    <div id="nav-links-div">
        <a href="about.html" class="nav-link-text">About</a>
        <a href="faq.html" class="nav-link-text">FAQ</a>
        <a href="#" class="nav-link-text">Contact</a>
        <a href="login" class="nav-link-text">Login</a>
        <a href="/dashboard" class="nav-link-text">Account</a>
    </div>
    <div id="search-div">
        <button id="cart-button">
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