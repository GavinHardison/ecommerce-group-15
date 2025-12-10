const starSystems = [
    [
        {
            name: "solarSystem",
            displayName: "Solar System",
            planets: [
                // TODO this should be loaded from an SQL database actually 
                // TODO track whether or not the object has been purchased
                // TODO shouldn't the alt text contain pricing information? 
                // https://www.pexels.com/search/earth/
                {
                    name: "Mercury",
                    src: "mercury.png",   
                    alt: "Picture of Mercury", 
                    price: 9.99
                }, {
                    name: "Venus", 
                    src: "venus.png", 
                    alt: "Picture of Venus",
                    price: 12.99
                }, {
                    name: "Earth",
                    src: "earth.png",
                    alt: "Picture of Earth",
                    price: 15.99
                }, {
                    name: "Mars",
                    src: "mars.png",
                    alt: "Picture of Mars", 
                    price: 18.99
                }, {
                    name: "Jupiter",
                    src: "jupiter.png",
                    alt: "Picture of Jupiter", 
                    price: 21.99
                }, {
                    name: "Saturn", 
                    src: "saturn.png",
                    alt: "Picture of Saturn", 
                    price: 24.99
                }, {
                    name: "Uranus", 
                    src: "uranus.png", 
                    alt: "Picture of Uranus", 
                    price: 27.99
                }, {
                    name: "Neptune", 
                    src: "neptune.png", 
                    alt: "Picture of Neptune", 
                    price: 30.99
                }
            ]
        }   
    ]
]; 
export default starSystems; 