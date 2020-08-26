
export const revisarPresupuesto = (presupuesto, restante) => {
    return (presupuesto/4) > restante? 'alert alert-danger' : 
    (presupuesto/2) > restante ? 'alert alert-warning' 
    :'alert alert-success'

}