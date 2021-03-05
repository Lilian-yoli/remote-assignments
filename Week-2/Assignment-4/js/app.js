const welcomeMsg = document.querySelector("h1.headline")
const showContent = document.querySelector(".hideContent")
const showBtn = document.querySelector(".btn-showContent")

welcomeMsg.addEventListener("click", () => {
    welcomeMsg.textContent = "Have a Good Time!"
})

showBtn.addEventListener("click", () => {
  showContent.style.display = "flex";
})
