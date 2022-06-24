import React from "react";
import Cart from "./Cart";
class List extends React.Component{
    //let's create a state, state is nothing but JS objects.
    constructor(){       //special method used to initialise an object is called constructor
        super();                       //super() is basically inheriting the component library features back into our constructor
        this.state = {
            products : [{  price:999,
                title:'Mobile Phone',
                Qty:1,
                img:'',
            id:1},
            {  price:9879,
                title:'Mac',
                Qty:10,
                img:'',
            id:2}]
        }

        
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
             
                {products.map((item)=>{
                    return <Cart product = {item} 
                    key={item.id}
                    
                    />
                })}
            </div> 
        );
    }
}


export default List;