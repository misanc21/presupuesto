import React, { Fragment, useState } from 'react'
import Error from './Error'
const Pregunta = ({setPresupuesto, setRestante}) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10))
    }

    const agregarPresupuesto = e => {
        e.preventDefault()

        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return;
        }
        
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="el presupuesto debe de ser mayor a cero" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta