import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({ objGasto }) => (
    <li className="gastos">
        <p>
            {objGasto.nombre}
            <span className="gasto">$ {objGasto.cantidad}</span>
        </p>
    </li>
)

Gasto.propTypes = {
    objGasto: PropTypes.object.isRequired
}

export default Gasto