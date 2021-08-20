toEng = document.getElementById('toEng');
rusContent = document.getElementById('rus');
toRus = document.getElementById('toRus');
engContent = document.getElementById('eng');

toEng.addEventListener("click", ()=>
    {
        rusContent.style.display = 'none';
        engContent.style.display = 'block';
    }
)



toRus.addEventListener("click", ()=>
    {
        engContent.style.display = 'none';
        rusContent.style.display = 'block';
    }
)