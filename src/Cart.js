import React from 'react';


//let's create a class component

class Cart extends React.Component{   //our class 'cart' is inheriting features from the component library in react module

    //let's create a state, state is nothing but JS objects.
    constructor(){       //special method used to initialise an object is called constructor
        super();                       //super() is basically inheriting the component library features back into our constructor
        this.state = {
            price:999,
            title:'Mobile Phone',
            Qty:1,
            img:''
        }

        
    }

    IncreasechangeState = () => 
    {
        
        //setstate() Form-1 = creating an object within the setstate()

        //     this.setState({                         //what this setstate() will do it will go to render() function and render the increase component with the updated value. this is known as 'Shallow Merging'
        //         Qty:this.state.Qty+1                //basically setstate will go to this.state object and will pick only the Qty key from it. then as we discussed render() will be called with the updated data. 
        //     });     //setstate is basically coming from the 'component' class in react......see React.Component mentioned above



        //setstate() Form-2 = if prevState required use this one

        this.setState((prevState) => {
            return{
                Qty: prevState.Qty+1
            }
        }, () => {
            console.log('this.state = ', this.state);
        });

    }



    DecreasechangeState = () => 
    {
        
        //setstate() Form-1 = creating an object within the setstate()

        //     this.setState({                         //what this setstate() will do it will go to render() function and render the increase component with the updated value. this is known as 'Shallow Merging'
        //         Qty:this.state.Qty+1                //basically setstate will go to this.state object and will pick only the Qty key from it. then as we discussed render() will be called with the updated data. 
        //     });     //setstate is basically coming from the 'component' class in react......see React.Component mentioned above



        //setstate() Form-2 = if prevState required use this one

        this.setState((prevState) => {                     //NOTE = setState() call is Async in nature
            if(prevState.Qty>0){

                return{

                    Qty: prevState.Qty-1
                
                }

            }
     
               
        },() => {
            console.log('this.state = ', this.state);
        });

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
                            src='https://cdn-icons-png.flaticon.com/512/1828/1828574.png'
                            onClick={this.IncreasechangeState}/>     {/*here e are storing the reference of the changeState() in onclick var*/}


                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/334/334047.png' onClick={this.DecreasechangeState}/>
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png'/>
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