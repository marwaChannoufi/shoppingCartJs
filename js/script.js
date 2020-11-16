let userDom =document.querySelector("#user")
let userInfo=document.querySelector("#user-info")
let links=document.querySelector("#links")
let logOut=document.querySelector("#logOut")

let username=localStorage.getItem("username")
 if(username){
    links.remove()
    userInfo.style.display="flex"
    userDom.innerHTML=localStorage.getItem("username")
 }

 logOut.addEventListener('click',(e)=>{
     e.preventDefault()
     setTimeout(()=>{
         localStorage.clear()
         window.location="register.html"
     },1500)
 })