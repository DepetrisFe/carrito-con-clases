import { Component } from "react";
import './styles.css';

class Layout extends Component{
    render(){
        return(
            <div className="layout">
                <div className="productsContainer">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;