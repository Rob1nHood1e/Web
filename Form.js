function check_form(el) {    
    if(el.name.value == ""||el.pass.value == ""||el.sex.value == ""||el.email.value == ""||el.phone.value == ""||el.who.value == ""){
        var err = document.createElement('p')
        err.innerHTML = "Заполните все поля!"
        err.className = "empty" 
        document.querySelector("#buttons").after(err)
        err.scrollIntoView({behavior:'smooth'})
        remove_empty_msg(el, err)
        return false
        
    }
    if(document.querySelector('.error'))
    {
       return false
    }
    else{//window.location = 'https://www.google.com/'
        return true}
    
}

function remove_empty_msg(elem, err) {
        elem.addEventListener('click', function(){
            err.remove()
        })
    
}

function error_msg(text) {
    var error = document.createElement('p')
    error.innerHTML = text
    error.className = "error"
    return error
    
}

function get_br(field){
    var br = document.querySelector('#' + field + '+br')
    return br
}
    
function name_check(){
    var name = document.querySelector('#name')
    var error = error_msg("Только буквы разрешены")
    name.addEventListener('input', 
    function(event){
        if(((/[0-9]+/).test(name.value))&&(name.value!=""))
            {
                get_br("name").after(error)
                
               
    }   
        else 
            {error.remove()
                }
           
    }
    )
    
}

function password_match(){
    var pass = document.getElementById('password')
    var pass_check = document.getElementById('password_match')
    var error = error_msg("Не совпадает")
    var short = error_msg("Слишком короткий пароль")
    pass_check.addEventListener('input', 
    function(event){
        if((pass.value!=pass_check.value)&&(pass_check.value!=""))
            {
            get_br("password_match").after(error)
            }
        else
            {error.remove() 
            }
           
    }
    )
    pass.addEventListener('change', function(){
        if((pass.value.length < 10)&&(pass.value!=""))
        {
            get_br("password").after(short)
            }
        else
            {short.remove() 
            }
    })
    
}

function sex_check(){
    var sex = document.querySelector('#form_fields input[name=sex]')
    var error = error_msg("Требуются буквы")
    sex.addEventListener('change', 
    function(event){
        if(((/[0-9]+/).test(sex.value))&&(sex.value!=""))
            {
            get_br("sex").after(error)
            
    }
        else  
            {error.remove() 
            }
           
    }
    )
}

function email_check(){
    var email = document.querySelector('#email')
    var error = error_msg("Неверный формат, требуется @")
    email.addEventListener('focus', function(){
        email.setAttribute("placeholder", "superstar_cop@booze.rev")
        error.remove()
    })
    email.addEventListener('blur', function(){
        email.removeAttribute("placeholder")
    })
    email.addEventListener('change', 
    function(event){
        if((!(/\w{2,}@[a-zA-z]{2,}\.[a-zA-Z]{2,}/).test(email.value))&&(email.value!=""))
            {
            get_br("email").after(error)
            return false
    }
        else  
            {error.remove() 
            }
           
    }
    )
}
function phone_check(){
    var phone = document.querySelector('#phone')
    phone.addEventListener('focus', function(){
        phone.setAttribute("placeholder", "+7(000)000-00-00")
        error.remove()
    })
    phone.addEventListener('blur', function(){
        phone.removeAttribute("placeholder")
    })
    let error = error_msg("Неправильный формат")
    phone.addEventListener('change', 
    function(event){
        if((!(/^\+?(7|8)\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$/).test(phone.value))&&(phone.value!=""))
            {
            get_br("phone").after(error)
    }
        else  
            {error.remove() 
            }
           
    }
    )
}

function identity_check(){
    var type = document.querySelector('#form_fields input[name=who]')
    var error = error_msg("Никаких чисел")
    type.addEventListener('input', 
    function(event){
        if(((/[0-9]+/).test(type.value))&&(type.value!=""))
            {
            get_br("who").after(error)
            return false
    }
        else  
            {error.remove() 
            return true}
           
    }
    )
}



name_check()
password_match()
sex_check()
email_check()
phone_check()
identity_check()
