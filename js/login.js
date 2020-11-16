let username=document.querySelector("#username") 
let password= document.querySelector("#password")
let signIn=document.querySelector("#signIn")

// get data from local storgeto compare 

let getusername=localStorage.getItem("username")
let getpassword=localStorage.getItem("password")
signIn.addEventListener('click',login)
function login(e){
    e.preventDefault()
    if(username.value ==='' || password.value===''){
        alert('enter a data ')
    }else{
        if( 
            getusername && 
            getusername.trim() === username.value.trim() && 
            getpassword &&
            getpassword.trim()===password.value.trim() 
            )
                {
                (setTimeout(()=>{ window.location="index.html"},1500))
                }
            else{
                console.log("error");
            }
    }
}