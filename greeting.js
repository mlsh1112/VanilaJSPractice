const form=document.querySelector(".js-form"),
 input=form.querySelector('input'),
 greeting= document.querySelector('.js-greetings')

const USER_LS='currentUser',
    SHOWING_ON='showing'

function paintGreeting(text){
    greeting.innerHTML='Hello '+text
}
function loadNane(){
    form.classList.remove(SHOWING_ON)
    greeting.classList.add()
    const currentUser=localStorage.getItem(USER_LS)
    if(currentUser===null){

    }
    else{
        paintGreeting(currentUser)
    }
}

function init(){

}

init()