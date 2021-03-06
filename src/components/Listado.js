import React, {Fragment} from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types'

const Listado = ({gastos}) => (
    <Fragment>
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(g =>{
               return ( 
               <Gasto
                key = {g.id}
                objGasto = {g}
               />
               )
            })}
        </div>
    </Fragment>
)

Listado.protTypes = {
    gastos: PropTypes.array.isRequired
}

export default Listado