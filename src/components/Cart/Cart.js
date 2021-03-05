import React from 'react';

const Cart = (props) => {
   const cart = props.cart;

   let total = 0;
   for(let i =0;i<cart.length;i++){
       const product = cart[i]
       total = total + product.price;
   }
   let shipping = 0;
   if (total > 30 ){
       shipping = 0;
   }
   else if (total > 15){
       shipping = 4.99;
   }
   else if (total > 0){
       shipping= 12;
   }
   let tax = (total /10).toFixed(2)
   const fixedTo = (num) =>{
       return num.toFixed(2)
   }
   const grandTotal = shipping+total+tax
    return (
        <div>
            <h2>Order summary</h2>
            <h3>Products in cart {cart.length}</h3>
            <h3>Total Price {total}</h3>
            <h5>shipping{shipping}</h5>
            <h5>tax {tax}</h5>
            <h5>grand total :{shipping+total+tax} </h5>
        </div>
    );
};

export default Cart;