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

leFestin = document.getElementById("leFestin")
    leFestin.play();

setInterval(changeImages, 3000);

function changeImages( )
{
    let nextImage = document.querySelector('.nextImg')
        nextImage.classList.remove("nextImg")
        nextImage.classList.remove("smallImg")
        nextImage.classList.remove("rightImg")

    
    let smallImage = document.querySelector('.smallImg')
        smallImage.classList.remove("leftImg")
        smallImage.classList.add("nextImg")
        smallImage.classList.add("rightImg")
    
    let bigImage = document.querySelector('.bigImg')
        bigImage.classList.remove('bigImg')
        bigImage.classList.add("leftImg")
        bigImage.classList.add('smallImg')
        nextImage.classList.add('bigImg')
}

