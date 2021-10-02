import { Component } from "react";
import Button from "../Button";
import './styles.css';

class Producto extends Component{
    render(){
        //destructuring para acceder a las props a traves de la palaba producto
        const { producto, agregarAlCarro } = this.props;
        return(
            <div className="productContainer">
                <img src={producto.img} alt={producto.name} className="productImg"/>
                <h3>{producto.name}</h3>
                <h4>{producto.price}</h4>
                <Button
                onClick={() => agregarAlCarro(producto)}
                >
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto;