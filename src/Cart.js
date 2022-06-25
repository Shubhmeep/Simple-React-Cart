import React from 'react';


//let's create a class component

const Cart = ()=>{   //our class 'cart' is inheriting features from the component library in react module

 

    //now to convert this class based component into react based component we need to use a function called render()
    //render (){              //this render() will return a JSX (javascript XML)  that will basically describe the UI of the component
        
        //object de-structuring
        const {price,title,Qty} = this.props.product;
        
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
                            src='https://cdn-icons-png.flaticon.com/512/1828/1828574.png'
                            onClick={() => this.props.IncreasechangeState(this.props.product) }/>     {/*here e are storing the reference of the changeState() in onclick var*/}


                        <img alt='decrease' className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/334/334047.png' 
                        onClick={() => this.props.DecreasechangeState(this.props.product) }/> 


                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png'/>
                    </div>


                </div>

            </div>   
        );
    }
//};   


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