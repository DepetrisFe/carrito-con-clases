import { Component } from "react";
import './styles.css';

class DetallesCarro extends Component{
    render(){

        const {carro} = this.props
        return(
            <div className="detallesCarro">
                <ul className='lista'>
                    {carro.map(x => 
                    <li key={x.name} className="producto">
                        <img src={x.img} alt={x.name} width='50' height='32'/>
                        {x.name}
                        <span>{x.cantidad}</span>
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro