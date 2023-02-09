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
