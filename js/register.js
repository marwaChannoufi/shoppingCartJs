// register user

let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password= document.querySelector("#password")
let signUp=document.querySelector("#signUp")

signUp.addEventListener('click', register)

function register(e){
    e.preventDefault()
    if(username.value ==='' || email.value ==='' || password.value===''){
        alert('enter a data ')
    }else{
        localStorage.setItem("username",username.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)

        setTimeout(()=>{
            window.location="login.html"
        },1500)
    }

}