image = document.querySelector('img')


setTimeout(() => {image.style.opacity = '1'}, 1000)

image.addEventListener("mouseover", () =>
{
    image.style.opacity = '0.3';
})

image.addEventListener("mouseout", () =>
{
    image.style.opacity = '1';
})