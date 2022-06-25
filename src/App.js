import React from "react";
import List from "./Cart_final";
import Navbar from "./navbar";




class App extends React.Component {  
  constructor(){       //special method used to initialise an object is called constructor
    super();                       //super() is basically inheriting the component library features back into our constructor
    this.state = {
        products : [{  price:100,
            title:'Mobile Phone',
            Qty:1,
            img:'https://www.reliancedigital.in/medias/Oppo-A54-Smart-Phone-64GB-4GB-RAM-Starry-Blue-491996536-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTM4M3xpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDVmLzk1MjgzODU5MjkyNDYuanBnfDZhNmZkYzk1MWIxYmM5OWQ0OGQ4MDc0ZjZhYTEyMGM0MWM5ZjcxNjQ1MDIyOTExMDQzNmI4YTVjNjQzNDg4ZDE',
        id:1},
        {  price:900,
            title:'Mac',
            Qty:1,
            img:'https://m.media-amazon.com/images/I/71pcTYT+ICL._AC_SL1500_.jpg',
        id:2},
        {  price:1100,
          title:'Omen-15',
          Qty:1,
          img:'https://m.media-amazon.com/images/I/71j5POSoRDL._SX450_.jpg',
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


getTotal = () => {
  const {products} = this.state;
   let count = 0;
  products.forEach(element => {
    count = count + element.price * element.Qty;
  });

  return count;
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
        <div style={{marginLeft:'60px'}}>Total Cost :{this.getTotal()}</div>
      </div>
      
    );
  }
}
  


export default App;
