import React from 'react';


//let's create a class component

class Cart extends React.Component{   //our class 'cart' is inheriting features from the component library in react module

    //now to convert this class based component into react based component we need to use a function called render()

    render (){              //this render() will return a JSX (javascript XML)  that will basically describe the UI of the component
        return(             
            <div className='cart-item ' style={styles.container}>
                <div className='left-block'>
                    <img style={styles.Image} alt=''/>
                </div>

                <div className='right-block'>
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:"#777"}}>Rs.999</div>
                    <div style={{color:"#777"}}>Qty: 1</div>

                    <div className='cart-item-actions '>
                        {/*buttons*/}

                        <img alt='increase' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/5974/premium/5974633.png?token=exp=1654882953~hmac=240fa373f7b16312764b4a54ebd527e1'/>
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/334/334047.png'/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1654883035~hmac=9b0192a7c9c6cb64911d661ab2244db5'/>
                    </div>


                </div>

            </div>   
        );
    }
};   


const styles = {

    Image:{
        height:150,
        width:150,
        borderRadius:4,
        background:'#ccc'
    },
    container: {
        display: 'inline-flex',
        margin: 20,
    },

};


export default Cart;