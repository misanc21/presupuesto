import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({nuevoGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)

    const [error, setError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true)
            return
        }

        const gasto = {
            nombre: nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }

        nuevoGasto(gasto)
        setCrearGasto(true)
        setNombre('')
        setCantidad('')
        

    }

    return (
        <form onSubmit = {agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Datos invalidos"></Error>: null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Comida, transporte..."
                    value = {nombre}
                    onChange = {e => setNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="inserta la cantidad"
                    value = {cantidad}
                    onChange = {e => setCantidad(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value= "Agregar Gasto"
            />
        </form>
    )
}

export default Formulario