import React from 'react'

const Gasto = ({objGasto}) =>  (
    <li className="gastos">
        <p>
            {objGasto.nombre}
            <span className="gasto">$ {objGasto.cantidad}</span>
        </p>
    </li>
)

export default Gasto