Head = document.getElementById('MenuHeader');
Menu = document.getElementById('Menu');
Menu.style.display = 'none'


Head.addEventListener("click", ()=>
    {
        if(Menu.style.display === 'none')
        {
            Menu.style.display = 'block';
        }
        else
        {
            Menu.style.display = 'none';
        }
    }
)




callback = (message) => {
    return function del(e)
    {
        if(e.target.tagName === 'LI') {
            Menu.removeChild(e.target);
        }
        if (Menu.childElementCount === 0){
            document.querySelector(".M p").innerHTML = message;
        }
    }

}




Menu.addEventListener('click', callback('LOOK OUT'));

//Menu.addEventListener('click', del)


for(i = 0; i < Menu.length; i++)
{
    Menu[i].addEventListener("click", ()=>
        {
            this.delete();
        }
    )
}