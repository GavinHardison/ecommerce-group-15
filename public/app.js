// window.location.origin

// Define an immediately invoked async function


// If you run the HTML file directly, destroy the website. You must run server.js. 
if (!window.location.host || window.location.protocol.substring(0, "file:".length) == "file:"){
    document.body.innerHTML = ""; 
    let message = "You aren't opening this page correctly. You need to run server.js, then connect to http://localhost:<port>."; 
    alert(message); 
}

(async function() { 
    // window.location.origin

    document.getElementById("planets-left").innerHTML = "";
    
    // The 'await' keyword is now valid inside this async function
    let response = await fetch(`${window.location.origin}/planets`); 
    
    if (!response.ok){
        // p.textContent = `Error Status: ${response.status}.`;
        document.body.style.backgroundColor = "red";
        // return;
    }
    else{
        let data = await response.json(); 
        if (!data.ok){
            // p.textContent = "Couldn't find that word.";
            document.body.style.backgroundColor = "blue1";
        }
        document.getElementById("planets-left").innerHTML = "";
        let image = document.createElement("h4"); // this should be an image some day
        image.textContent = "you";  
        document.getElementById("planets-left").appendChild(image); 
    }
    document.body.style.backgroundColor = "lightblue";
})(); // <--- Immediately call the function


document.getElementById("planets-left").innerHTML = ""; 