// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elements
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");


// Add to Cart Buttons
document.querySelectorAll(".add-cart").forEach(button => {

button.addEventListener("click", function(){

const name = this.getAttribute("data-name");
const price = parseFloat(this.getAttribute("data-price"));

const item = {
name: name,
price: price
};

cart.push(item);

saveCart();
updateCart();

});

});


// Update Cart Display
function updateCart(){

if(cartItems){

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.innerHTML =
item.name + " - $" + item.price +
' <button onclick="removeItem('+index+')">Remove</button>';

cartItems.appendChild(li);

total += item.price;

});

if(cartTotal){
cartTotal.innerText = "Total: $" + total;
}

}

if(cartCount){
cartCount.innerText = cart.length;
}

}


// Remove Item
function removeItem(index){

cart.splice(index,1);

saveCart();
updateCart();

}


// Clear Cart
if(clearCartBtn){

clearCartBtn.addEventListener("click", function(){

cart = [];

saveCart();
updateCart();

});

}


// Save Cart to LocalStorage
function saveCart(){

localStorage.setItem("cart", JSON.stringify(cart));

}


// Load cart when page opens
updateCart();