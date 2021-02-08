
let productsDom=document.querySelector('.products')

let cartShopping=document.querySelector('#cart-shopping')
let listProducts= document.querySelector('#list-products')



//  display products 



function displayProduct(){
    let productsUI=products.map(item=>{
        return`
        <div class="product-item">
                    <img src="images/${item.id}.jfif" alt="image1" srcset="" class="product-item-img">
                    <div class="product-item-des">
                    <a href="cartDetails.html"><h2>   ${item.title}</h2></a>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>marque : ${item.marque}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="addedToCart(${item.id})">add to card</button>
                        <i class="favorite fa fa-heart"></i>

                    </div>
                </div>
        `
    })
    productsDom.innerHTML=productsUI
}

displayProduct()


 
let numberProductsIcon= document.querySelectorAll('#list-products ')
let arrayItems=localStorage.getItem('arrayItems') ? JSON.parse(localStorage.getItem('arrayItems')) :[]

if(arrayItems){
    
    let listProductsBag=document.querySelector('#list-products div')
    arrayItems.map((item)=>{ 
    
        listProductsBag.innerHTML += `<p> ${item.title} </p>`
    })
      
    let numberProductsInBag= document.querySelectorAll('#list-products div p')
    let badgeNotification= document.querySelector('#badge')
    badgeNotification.style.display='block'
    badgeNotification.innerHTML= numberProductsInBag.length 
}

function addedToCart(id){
    if(localStorage.getItem("username")){
console.log(id)
    let choosenItem  = products.find( (item)=> item.id == id)

    arrayItems=[...arrayItems,choosenItem]
    console.log(arrayItems);
    console.log(choosenItem );
    localStorage.setItem("arrayItems",JSON.stringify(arrayItems))
    let listProductsBag=document.querySelector('#list-products div')

    listProductsBag.innerHTML += `<p> ${choosenItem.title} </p>`
    let numberProductsInBag= document.querySelectorAll('#list-products div p')
    let badgeNotification= document.querySelector('#badge')
    badgeNotification.style.display='block'
    badgeNotification.innerHTML= numberProductsInBag.length 
    }else{
        window.location("login.html")
    }
   
    
     
} 

function checkloginUser(){
    
    if(localStorage.getItem("username")){
        console.log("added to list items in cart");
    }else{
        window.location='login.html'
    }
}
cartShopping.addEventListener('click',(e)=>{
e.preventDefault()
 openCartmenu()
 


    
})

 function openCartmenu(){
    if(listProducts.style.display=="block")
    {listProducts.style.display="none"}
    else{
        listProducts.style.display="block"
    }
 }