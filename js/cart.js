

let productsDom=document.querySelector('.products')
let noProductsDom=document.querySelector('.no-products')


// if(productsInCart){
//     // console.log('yes find product');
//     let items = JSON.parse(productsInCart)
//     drawCartProductsUi(items)
//     }
function drawCartProductsUi(productsAll = []){
    if(JSON.parse(localStorage.getItem('arrayItems')).length===0){
        
        noProductsDom.innerHTML = 'no productin cart'
    }
    
        let products= JSON.parse(localStorage.getItem('arrayItems')) || productsAll;
        // console.log(products)
        let productsUI=products.map(item=>{
            return`
            <div class="product-item">
                        <img src="images/${item.id}.jfif" alt="image1" srcset="" class="product-item-img">
                        <div class="product-item-des">
                            <h2>${item.title}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span>marque : ${item.marque}</span>
                        </div>
                        <div class="product-item-actions">
                            <button class="add-to-cart" onclick="removeFromCart(${item.id})">remove item</button>
                            
                        </div>
            </div>
            `
        })
        productsDom.innerHTML =productsUI
    

   
}
drawCartProductsUi()

function removeFromCart(id){
     let productsInCart= localStorage.getItem("arrayItems") 
    if(productsInCart){
        let items=JSON.parse(productsInCart)
        // console.log(items);
        let restOfItems = items.filter(item => item.id != id)
        console.log(restOfItems);
        localStorage.setItem("arrayItems",JSON.stringify(restOfItems))
        drawCartProductsUi(restOfItems)
    }
}
