document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner les flèches
  const leftArrow = document.querySelector(".arrow_left");
  const rightArrow = document.querySelector(".arrow_right");
  const dotsContainer = document.querySelector(".dots");
  const bannerImage = document.querySelector(".banner-img");
  const bannerText = document.querySelector("#banner p");
  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let currentSlide = 0;

  // Fonction pour créer les bullet points
  function createDots() {
    slides.forEach((slide, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) {
        dot.classList.add("dot_selected");
      }
      dotsContainer.appendChild(dot);
    });
  }

  // Fonction pour mettre à jour les points
  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });
  }

  // Fonction pour mettre à jour la bannière
  function updateBanner() {
    bannerImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
  }

  // Ajouter un event listener sur la flèche gauche
  leftArrow.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateDots();
    updateBanner();
  });

  // Ajouter un event listener sur la flèche droite
  rightArrow.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateDots();
    updateBanner();
  });

  // Initialiser les points et la bannière
  createDots();
  updateBanner();
});
