import React from 'react';


//let's create a class component

class Cart extends React.Component{   //our class 'cart' is inheriting features from the component library in react module

    //let's create a state, state is nothing but JS objects.
    constructor(){
        super();                       //super() is basically inheriting the component library features back into our constructor
        this.state = {
            price:999,
            title:'Mobile Phone',
            Qty:1,
            img:''
        }
    }

    changeState(){
        console.log('test');
    }

    //now to convert this class based component into react based component we need to use a function called render()
    render (){              //this render() will return a JSX (javascript XML)  that will basically describe the UI of the component
        
        //object de-structuring
        const {price,title,Qty} = this.state;
        
        return(             
            <div className='cart-item ' style={styles.container}>
                <div className='left-block'>
                    <img style={styles.Image} alt=''/>
                </div>

                <div className='right-block'> 
                    <div style={{fontSize:25}}>{title}</div>             {/*   title,price and Qty are the de-structured variables that we are calling   */}
                    <div style={{color:"#777"}}>Rs.{price}</div>
                    <div style={{color:"#777"}}>Qty: {Qty}</div>

                    <div className='cart-item-actions '>
                        {/*buttons*/}

                        <img alt='increase' className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/5974/premium/5974633.png?token=exp=1654882953~hmac=240fa373f7b16312764b4a54ebd527e1'
                            onClick={this.changeState}/>     {/*here e are storing the reference of the changeState() in onclick var*/}


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