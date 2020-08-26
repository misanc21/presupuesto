import React, {useState, useEffect} from 'react';
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import Control from "./components/Control"

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarPregunta, setMostrarPregunta] = useState (true)

  const [gastos, setGastos] = useState ([])
  const [gasto, setGasto] = useState ({})
  const [crearGasto, setCrearGasto] = useState(false)

  useEffect(() => {
    if (crearGasto){
      setGastos([
        ...gastos,
        gasto
      ])

      setRestante(restante - gasto.cantidad)

      setCrearGasto(false)
    }
  }, [gasto])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? 
          (
            <Pregunta 
              setPresupuesto = {setPresupuesto}
              setRestante = {setRestante}
              setMostrarPregunta = {setMostrarPregunta}
            />
          ):
          (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  nuevoGasto = {setGasto}
                  setCrearGasto = {setCrearGasto}
                />
              </div>  
              <div className="one-half column">
                <Listado
                  gastos = {gastos}
                />
                <Control
                  presupuesto = {presupuesto}
                  restante = {restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App;
