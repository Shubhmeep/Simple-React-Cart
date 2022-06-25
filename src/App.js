import React from "react";
import List from "./Cart_final";
import Navbar from "./navbar";




class App extends React.Component {  
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

handleDecreaseQuantity = (item) =>{
    const { products } = this.state;
    const index = products.indexOf(item);
    if(products[index].Qty>0){
        products[index].Qty-=1;
    }
    
    this.setState({
        products
    })
}
handleIncreaseQuantity = (item) => {
    const { products } = this.state;
    const index = products.indexOf(item);

    products[index].Qty+=1;
    this.setState({
        products
    })
}



getCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach(element => {
    count += element.Qty;
  });

  return count;
}
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCount()}/>
        <List 
          products = {products}
          IncreasechangeState = {this.handleIncreaseQuantity}
          DecreasechangeState = {this.handleDecreaseQuantity}
        />
        
      </div>
    );
  }
}
  


export default App;
