// If you run the HTML file directly, destroy the website. You must run server.js. 
if (!window.location.host || window.location.protocol.substring(0, "file:".length) == "file:"){
    document.body.innerHTML = ""; 
    let message = "You aren't opening this page correctly. You need to run server.js, then connect to http://localhost:<port>."; 
    alert(message); 
}

(async function() { 
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
            document.body.style.backgroundColor = "blue";
        }

        // Remove all planets from the website; prepare to show the new ones
        planetsLeft = document.getElementById("planets-left");  
        planetsRight = document.getElementById("planets-right"); 
        planetsLeft.innerHTML = ""; 
        planetsRight.innerHTML = ""; 

        // 50275 TODO: load more; make solar systems distinct
        let left = true; 
        for(let planet of data[0][0].planets){
            // console.log(planet); 
            
            let image = document.createElement("img");
            image.id = "planet-image";
            image.src = planet.src; 
            image.loading = "lazy";

            let header = document.createElement("h4");
            header.id = "planet-text"; 
            header.textContent = `${planet.name}: ${planet.price}`;  
            header.style.color = "white"; // this should be css
            
            let divider = document.createElement("div"); 
            divider.id = "planet-container";
            divider.appendChild(image); 
            divider.appendChild(header); 

            // Alternate adding planets between left and right side
            if (left){
                planetsLeft.appendChild(divider); 
            } else {
                planetsRight.appendChild(divider); 
            }
            left = !left; 
        }
    }
    document.body.style.backgroundColor = "lightblue";
})(); // <--- Immediately call the function
