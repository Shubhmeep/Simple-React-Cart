import React from "react";
import Cart from "./Cart";
class List extends React.Component{
    render() {
        return (
            <div className="cart">
                <Cart/>
                <Cart/>
                <Cart/>

            </div> 
        );
    }
}


export default List;