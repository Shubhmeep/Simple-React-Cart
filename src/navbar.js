import React from "react";


const Navbar = (props) =>{
   
        return (
            <div className="nav" style={styles.nav}>

                <div style={styles.cartIconContainer}>
                    <img style={styles.carticon} src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" alt="cart-icon"/>
                    <span style={styles.cartCount}>{props.count}</span>

                </div>

            </div>
        );
    }

const styles = {

    carticon:{
        height:40,
        marginRight:50,
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    cartIconContainer:{
        position:'absolute',
        
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:30,
        top:-9
     
      
    }


};

export default Navbar;