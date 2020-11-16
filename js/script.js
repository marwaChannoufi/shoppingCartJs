let userDom =document.querySelector("#user")
let userInfo=document.querySelector("#user-info")
let links=document.querySelector("#links")
let logOut=document.querySelector("#logOut")
let productsDom=document.querySelector('.products')

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


//  display products 
let products=[
    {
        id:"1",
        title:"image number 1",
        marque:"marque",
        imageUrl:'images/1.jfif'
    },
    {
        id:"2",
        title:"image number 2",
        marque:"marque",
        imageUrl:'images/2.jfif'
    },
    {
        id:"3",
        title:"image number 3",
        marque:"marque",
        imageUrl:'images/3.jfif'
    },
    {
        id:"4",
        title:"image number 4",
        marque:"marque",
        imageUrl:'images/4.jfif'
    },
    {
        id:"5",
        title:"image number 5",
        marque:"marque",
        imageUrl:'images/5.jfif'
    },
    {
        id:"6",
        title:"image number 6",
        marque:"marque",
        imageUrl:'images/6.jfif'
    },
    {
        id:"7",
        title:"image number 7",
        marque:"marque",
        imageUrl:'images/7.jfif'
    },

]

function displayProduct(){
    let productsUI=products.map(item=>{
        return`
        <div class="product-item">
                    <img src="images/${item.id}.jfif" alt="image1" srcset="" class="product-item-img">
                    <div class="product-item-des">
                        <h2>   ${item.title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>marque : ${item.marque}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" >add to card</button>
                        <i class="favorite fa fa-heart"></i>

                    </div>
                </div>
        `
    })
    productsDom.innerHTML=productsUI
}

displayProduct()

let addToCartBtn=document.querySelector('.add-to-cart')
addToCartBtn.addEventListener('click',checkloginUser)
function checkloginUser(e){
    e.preventDefault()
    if(localStorage.getItem("username")){
        window.location="cartProduct.html"
    }else{
        window.location='login.html'
    }
}
