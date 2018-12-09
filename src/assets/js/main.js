// ran on page load
(function() {
  // functions
  const hideCard = () => {
    const body = document.querySelector("body");
    if (!body.classList.contains("open-card")) {
      body.classList.add("open-card");
    } else {
      body.classList.remove("open-card");
    }
  };
  const showCard = () => {
    const body = document.querySelector("body");

    if (!body.classList.contains("open-card")) {
      body.classList.add("open-card");
      // get receipe details
    } else {
      body.classList.remove("open-card");
    }
  };

  // on Full Recipe link click we want to load in the recipe from API and show it on a card
  document.addEventListener(
    "click",
    function(event) {
      event.preventDefault();

      if (event.target.classList == "list-item-link") {
        showCard();
      }

      if (event.target.classList == "hideCard" || event.target.classList == "open-card") {
        hideCard();
      }
    },
    true
  );

  // header parallax
  document.addEventListener("scroll", function() {
    // add parallax to the hero background
    let scrolledHeight = window.pageYOffset;

    const image = document.querySelector(".header-hero-image");
    const header = document.querySelector("header");
    const limit = header.offsetTop + header.offsetHeight;

    if (scrolledHeight > header.offsetTop && scrolledHeight <= limit) {
      image.style.transform = "translatey(-" + Math.round((scrolledHeight - header.offsetTop) / 10) + "px)";
    } else {
      image.style.transform = "translatey(0)";
    }
  });
})();
