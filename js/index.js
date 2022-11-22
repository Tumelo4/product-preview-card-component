const image = document.getElementsByClassName("image");

if (window.innerWidth <= 375)
{
    image[0].src = "./images/image-product-mobile.jpg";
}

window.onresize = () => {
    
    if (window.innerWidth <= 375)
    {
        image[0].src = "./images/image-product-mobile.jpg";
    }
    else
    {
        image[0].src = "./images/image-product-desktop.jpg";
    }
}