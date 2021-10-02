import { Component } from 'react';
import Producto from '../Producto';
import "./styles.css";

class Productos extends Component{

    render(){
        const { arrayProductos, agregarAlCarro} = this.props;
        return(
            <div className="root">
                {arrayProductos.map((producto) => (
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                ))}
            </div>
        )
    }
}

export default Productos