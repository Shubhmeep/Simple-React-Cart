import React from "react";
import Cart from "./Cart";
const List = (props) =>{
    //let's create a state, state is nothing but JS objects.
   

        const {products} = props;
        return (
            <div className="cart">
             
                {products.map((item)=>{
                    return <Cart 
                    product = {item} 
                    key={item.id}
                    IncreasechangeState = {props.IncreasechangeState}
                    DecreasechangeState = {props.DecreasechangeState}
                    
                    />
                })}
            </div> 
        );
    }



export default List;