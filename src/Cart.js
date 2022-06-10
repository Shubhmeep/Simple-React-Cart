import React from 'react';


//let's create a class component

class Cart extends React.Component{   //our class 'cart' is inheriting features from the component library in react module

    //now to convert this class based component into react based component we need to use a function called render()

    render (){              //this render() will return a JSX (javascript XML)  that will basically describe the UI of the component
        return(             
            <div className='cart-item ' style={styles.container}>
                <div className='left-block'>
                    <img style={styles.Image}/>
                </div>

                <div className='right-block'>
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:"#777"}}>Rs.999</div>
                    <div style={{color:"#777"}}>Qty: 1</div>

                    <div className='cart-item-actions '>
                        {/*buttons*/}
                    </div>


                </div>

            </div>   
        );
    }
};   


const styles = {

    Image:{
        height:100,
        width:100,
        borderRadius:4,
        background:'#ccc'
    },
    container: {
        display: 'inline-flex',
        margin: 20,
    },



};


export default Cart;