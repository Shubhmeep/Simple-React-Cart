import React from "react";


class Navbar extends React.Component {
    render(){
        return (
            <div className="nav">

                <div>
                    <img style={styles.carticon} src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" alt="cart-icon"/>
                    <span>3</span>

                </div>

            </div>
        );
    }
}
const styles = {

    carticon:{
        height:32,
        marginRight:20
    },
    container: {
        display: 'inline-flex',
        margin: 20,
    },

};

export default Navbar;