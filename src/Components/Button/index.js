import { Component } from "react";
import './styles.css';

class Button extends Component{
    render(){
        return(
            <button className='buttonStyle' {...this.props}/>
        )
    }
}

export default Button;