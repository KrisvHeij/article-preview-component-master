const shareBtn = document.getElementById("share-btn");
const closeBtn = document.getElementById("close-btn");
const socialsContainer = document.querySelector(".card-socials-container");
let isSocialOpen = false;

function showSocials() {
  socialsContainer.classList.remove("close-socials");
  socialsContainer.classList.add("show-socials");
}

function closeSocials() {
  socialsContainer.classList.remove("show-socials");
  socialsContainer.classList.add("close-socials");
}

shareBtn.addEventListener("click", () => {
  showSocials();
})

closeBtn.addEventListener("click", () => {
  closeSocials();
})