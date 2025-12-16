const planets = [
    {
        name: 'Mercury',
        src: 'mercury.png',
        alt: 'Picture of Mercury',
        price: 9.99,
        description: "Mercury is the smallest planet in the Solar System and the one closest to the Sun, completing a full orbit in just 88 days. Because it has almost no atmosphere, heat cannot be trapped, causing drastic temperature swings—from scorching daytime highs to freezing nighttime lows. Its heavily cratered, gray surface resembles Earth's Moon, shaped by ancient impacts and lava flows. Despite being close to the Sun, Mercury isn't the hottest planet; instead, it's a stark, airless world where conditions vary dramatically depending on which side faces the Sun."
    },
    {
        name: 'Venus',
        src: 'venus.png',
        alt: 'Picture of Venus',
        price: 12.99,
        description: "Venus is often called Earth's “twin” due to its similar size and mass, but the two planets couldn't be more different. Venus is wrapped in thick, toxic clouds of sulfuric acid and dominated by an intense greenhouse effect that traps heat, making it the hottest planet in the Solar System—hot enough to melt lead. Its atmosphere is so dense that standing on the surface would feel like being nearly a kilometer underwater. The planet rotates extremely slowly and in the opposite direction of most planets, making its day longer than its year. Beneath the clouds lies a volcanic, rocky landscape reshaped by massive lava flows."
    },
    {
        name: 'Earth',
        src: 'earth.png',
        alt: 'Picture of Earth',
        price: 15.99,
        description: "Earth is the only known planet to support life, thanks to its ideal balance of factors: liquid water, a protective magnetic field, an oxygen-rich atmosphere, and active geology that recycles carbon and maintains a stable climate. About 71% of its surface is covered by oceans, which help regulate temperature and support diverse ecosystems. Earth's single moon influences tides and stabilizes the planet's tilt. With continents that drift over geological time and an atmosphere that shields the surface from harmful radiation, Earth remains a dynamic, ever-changing home for millions of species."
    },
    {
        name: 'Mars',
        src: 'mars.png',
        alt: 'Picture of Mars',
        price: 18.99,
        description: "Mars, the red planet, is a cold desert world coated in iron oxide dust that gives it its distinct color. Its thin atmosphere—mostly carbon dioxide—cannot retain much heat, resulting in frigid temperatures. Mars features some of the Solar System's most impressive landscapes: Olympus Mons, the largest known volcano; Valles Marineris, a canyon system that's deeper and longer than the Grand Canyon; and ancient riverbeds that suggest liquid water once flowed across the surface. Scientists are intensely interested in Mars because its past conditions may have been suitable for life, and future missions aim to explore the possibility of human settlement."
    },
    {
        name: 'Jupiter',
        src: 'jupiter.png',
        alt: 'Picture of Jupiter',
        price: 21.99,
        description: 'Jupiter is a massive gas giant, more than twice the mass of all other planets combined. Made mostly of hydrogen and helium, it has no solid surface as we know it. Its atmosphere is banded with clouds and storms, including the Great Red Spot—a giant storm larger than Earth that has raged for centuries. Jupiter also has a powerful magnetic field and a vast collection of moons, some of which are among the most intriguing objects in the Solar System. Europa, for example, is believed to have a global subsurface ocean that could harbor life, while Ganymede is the largest moon in the Solar System.'
    },
    {
        name: 'Saturn',
        src: 'saturn.jpeg',
        alt: 'Picture of Saturn',
        price: 24.99,
        description: "Saturn is famous for its stunning ring system, composed of countless particles of ice and rock ranging from dust-sized grains to mountains. Like Jupiter, Saturn is a gas giant made mainly of hydrogen and helium. It is extraordinarily light for its size—so light, in fact, that it would float in water if a bathtub big enough existed. Saturn's moons are diverse and scientifically valuable. Titan, the largest, has a thick atmosphere and lakes made of liquid methane and ethane. Enceladus, a small icy moon, ejects plumes of water vapor into space, suggesting a subsurface ocean that may support microbial life."
    },
    {
        name: 'Uranus',
        src: 'uranus.png',
        alt: 'Picture of Uranus',
        price: 27.99,
        description: 'Uranus is an ice giant distinguished by its pale blue-green color, caused by methane in its upper atmosphere. What makes Uranus especially unusual is its extreme axial tilt—the planet rotates on its side, likely the result of a massive collision in its early history. This tilt produces decades-long seasons, with each pole spending about 42 years in continuous sunlight or darkness. Uranus has a cold, layered atmosphere of hydrogen, helium, and icy materials like water, ammonia, and methane. It also has faint rings and a collection of small, icy moons.'
    },
    {
        name: 'Neptune',
        src: 'neptune.png',
        alt: 'Picture of Neptune',
        price: 30.99,
        description: "Neptune, the outermost major planet, is a deep blue ice giant known for its violent weather and extremely fast winds, which can exceed 1,200 mph. Its atmosphere contains hydrogen, helium, methane, and exotic clouds that form dramatic storms. Neptune also hosts Triton, a large moon that orbits backward—opposite its planet's rotation—suggesting it was captured from the Kuiper Belt. Triton has geysers and may be geologically active. The planet's great distance from the Sun makes it cold and dim, yet its dynamic atmosphere shows surprising complexity."
    },
    {
        name: 'TIC 241249530 b',
        internalName: 'tic241249530b',
        src: 'tic241249530b.jpg',
        price: 49.99,
        description: "TIC 241249530 b is an exoplanet discovered by NASA's TESS mission. It's classified as a hot Jupiter—a gas giant orbiting extremely close to its star, completing an orbit in just a few days. This tight orbit exposes the planet to intense heat and stellar radiation, likely inflating its atmosphere and causing powerful winds and temperature gradients. While much about this world remains unknown due to its distance and limited observational data, its size and proximity to its star make it an interesting target for atmospheric studies as telescope technology improves."
    },
    {
        name: 'HD 189773b',
        internalName: 'hd189773b',
        src: 'hd189773b.jpeg',
        price: 44.99,
        description: "HD 189733 b is one of the best-studied exoplanets and a classic example of a hot Jupiter. Located about 64 light-years from Earth, it orbits its star so closely that its “year” lasts just over two Earth days. The planet's striking deep blue color is thought to come from silicate (glass-like) particles in its atmosphere, which scatter blue light. Its weather is extreme: temperatures above 1,800°F and winds that may exceed 5,000 mph, powerful enough to whip microscopic glass shards sideways. HD 189733 b has provided some of the clearest atmospheric measurements of any exoplanet, making it a key object in exoplanet science."
    },
    {
        internalName: 'toi849b',
        name: 'TOI 849 b',
        src: 'toi849b.jpg',
        price: 54.99,
        description: 'TOI 849 b is a highly unusual exoplanet about the size of Neptune but far denser than expected. Orbiting extremely close to its star, it completes a full orbit in less than a day and is blasted by intense heat and radiation. Scientists think it may be the exposed core of a former gas giant, stripped of its thick atmosphere through extreme evaporation or a violent event early in its history. This makes TOI 849 b a rare opportunity to study what the deep interior of a giant planet might look like once its outer layers are gone.'
    },
    {
        internalName: 'wasp12b',
        name: 'WASP-12b',
        src: 'wasp12b.jpg',
        price: 59.99,
        description: "WASP-12 b is an extremely hot Jupiter that orbits so close to its star that its “year” lasts just over a day. The intense heat causes the planet to balloon in size and darken to almost pitch black, absorbing nearly all light that hits it. Its atmosphere is being slowly pulled away by the star's gravity, forming a trail of escaping gas. Because it's literally being stretched and evaporated, WASP-12 b is considered one of the most distorted and short-lived planets known, offering a dramatic example of how extreme stellar environments can destroy a world."
    },
    {
        internalName: '55cancrie',
        name: '55 Cancri e',
        src: '55cancrie.jpg',
        price: 44.99,
        description: '55 Cancri e is a super-Earth that orbits incredibly close to its star, completing a full year in less than 18 hours. Its surface is thought to be an extreme lava world, with temperatures hot enough to melt rock and possibly oceans of molten magma. The planet may also have a thick, mineral-rich atmosphere filled with vaporized rock and exotic chemicals. With its intense heat, tidal forces, and possible day/night contrasts, 55 Cancri e is one of the most hostile—and scientifically fascinating—rocky exoplanets discovered.'
    },
    {
        internalName: 'tres2b',
        name: 'TrES-2 b',
        src: 'tres2b.jpg',
        price: 49.99,
        description: 'TrES-2 b is a hot Jupiter famous for being the darkest known planet, reflecting almost no light—less than coal or black acrylic paint. Orbiting extremely close to its star, it is superheated, with an atmosphere too hot and turbulent for reflective clouds to form. The planet is likely filled with light-absorbing chemicals that keep it nearly pitch black, glowing only faintly with the red heat of its own temperature. Its unusual darkness makes TrES-2 b one of the most mysterious and visually striking exoplanets discovered.'
    },
    {
        internalName: 'kelt9b',
        src: 'kelt9b.jpg',
        name: 'KELT-9 b',
        price: '59.99',
        description: 'KELT-9 b is one of the most extreme exoplanets ever found, orbiting a scorching blue star so closely that its dayside reaches temperatures hotter than some stars. This heat tears apart molecules in the atmosphere, leaving mostly individual atoms like iron and titanium drifting in the upper layers. The planet is stretched by intense radiation and tidal forces, and its atmosphere is slowly evaporating into space. With its blistering heat and harsh environment, KELT-9 b represents the upper limit of how hot a planet can be and still exist.'
    },
    {
        internalName: 'hr5183b',
        src: 'hr5183b.jpg',
        name: 'HR 5183 b',
        price: '54.99',
        description: 'HR 5183 b is a massive exoplanet with a highly elongated, or eccentric, orbit that takes it far from its star for most of its “year” and brings it extremely close at its closest approach. This unusual orbit suggests past gravitational interactions, possibly with another planet or star, that threw it into such a stretched path. As a gas giant much larger than Jupiter, HR 5183 b is thought to have a thick hydrogen/helium atmosphere and may experience dramatic changes in temperature and radiation over its long, elliptical orbit, making it a unique laboratory for studying planetary dynamics.'
    },
    {
        internalName: 'k218b',
        src: 'k218b.jpg',
        name: 'K2-18 b',
        price: '59.99',
        description: 'K2-18 b is a super-Earth orbiting within the habitable zone of its star, where temperatures could allow liquid water to exist. It is larger and more massive than Earth, with a thick atmosphere containing hydrogen, helium, and hints of water vapor. While its surface conditions are still uncertain—possibly rocky, icy, or ocean-covered—K2-18 b is one of the most promising exoplanets for studying potential habitability beyond the Solar System.'
    },
    {
        internalName: 'hatp7b',
        src: 'hatp7b.jpg',
        name: 'HAT-P-7 b',
        price: '49.99',
        description: 'HAT-P-7 b is a hot Jupiter orbiting extremely close to its star, completing a full orbit in just over two days. Its tidally locked atmosphere experiences extreme heat on the dayside and fierce winds that whip gases around the planet at thousands of miles per hour. Observations suggest that clouds on HAT-P-7 b may shift and reflect light in unusual ways, causing its appearance to change over time. This combination of scorching temperatures, high-speed winds, and dynamic cloud patterns makes HAT-P-7 b one of the most extreme and well-studied exoplanets.'
    },
    {
        internalName: 'wasp107b',
        src: 'wasp107b.png',
        name: 'WASP-107 b',
        price: '44.99',
        description: "WASP-107 b is a low-density gas giant, often described as a “puffy” planet, orbiting very close to its star. Despite being similar in size to Jupiter, it has only a fraction of Jupiter's mass, giving it an extremely light and inflated atmosphere. This atmosphere is so extended that it is slowly escaping into space, forming a faint cloud around the planet. WASP-107 b's unusual density and atmospheric loss make it an important target for studying how gas giants evolve and how stellar radiation can strip away planetary envelopes."
    },
    {
        internalName: 'kepler452b',
        src: 'kepler452b.jpg',
        name: 'Kepler-452 b',
        price: '54.99',
        description: "Kepler-452 b is a super-Earth orbiting within the habitable zone of a Sun-like star, often called “Earth's cousin.” It is about 60% larger than Earth and may have a rocky surface, though its exact composition is still unknown. The planet receives a similar amount of stellar energy as Earth, suggesting temperatures that could allow liquid water. While much remains uncertain, Kepler-452 b is considered one of the most promising candidates for studying potentially habitable worlds beyond our Solar System."
    }
];
module.exports = planets; 