let navLinks = document.querySelector(".nav-links")
document.addEventListener("touchmove", () => {
    navLinks.style.right = "-200px"
})

document.querySelector(".fa-xmark").addEventListener("click", () => {
    navLinks.style.right = "-200px"
})

document.querySelector(".fa-bars").addEventListener("click", () => {
    navLinks.style.right = "0"
})