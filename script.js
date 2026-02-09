const planetData = {
  cinema: {
    title: "Cinéma",
    description:
      "Des récits visuels cinématographiques, avec une esthétique soignée et une narration immersive.",
    tags: ["Films courts", "Direction artistique", "Lumière", "Narration"],
  },
  rave: {
    title: "Rave",
    description:
      "Une planète rythmée par l'énergie nocturne, les stroboscopes et l'intensité brute des foules.",
    tags: ["Clubbing", "Low light", "Mouvement", "Textures"],
  },
  captation: {
    title: "Captation",
    description:
      "Captations multicaméra ultra fluides, pour retransmettre l'émotion d'un live en direct.",
    tags: ["Live", "Multicam", "Diffusion", "Audio"],
  },
  aftermovie: {
    title: "Aftermovie",
    description:
      "Des montages rapides et immersifs pour revivre un événement comme si vous y étiez.",
    tags: ["Montage", "Storytelling", "Social", "Format vertical"],
  },
  editorial: {
    title: "Éditorial",
    description:
      "Photographies éditoriales modernes, éditées pour raconter une histoire de marque.",
    tags: ["Portrait", "Fashion", "Retouches", "Direction créative"],
  },
};

const planets = document.querySelectorAll(".planet");
const title = document.getElementById("planet-title");
const description = document.getElementById("planet-description");
const tags = document.getElementById("planet-tags");

const setPlanet = (key) => {
  const data = planetData[key];
  if (!data) {
    return;
  }
  title.textContent = data.title;
  description.textContent = data.description;
  tags.innerHTML = "";
  data.tags.forEach((tag) => {
    const li = document.createElement("li");
    li.textContent = tag;
    tags.appendChild(li);
  });

  planets.forEach((planet) => {
    planet.classList.toggle("active", planet.dataset.planet === key);
  });
};

planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    setPlanet(planet.dataset.planet);
  });
});

setPlanet("cinema");
