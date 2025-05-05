// Filtering logic
const buttons = document.querySelectorAll(".top-content button");
const pics = document.querySelectorAll(".photo-gallery .pic");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    pics.forEach((pic) => {
      if (filter === "all" || pic.classList.contains(filter)) {
        pic.style.display = "block";
      } else {
        pic.style.display = "none";
      }
    });
  });
});

// Zoom image on click
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup img");
const popupClose = document.querySelector(".popup span");

pics.forEach((pic) => {
  pic.addEventListener("click", () => {
    const imgSrc = pic.querySelector("img").getAttribute("src");
    popupImg.setAttribute("src", imgSrc);

    popup.style.display = "flex";
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});
