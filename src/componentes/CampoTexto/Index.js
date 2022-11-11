import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderModificada = `${props.placeholder} . . .`


    const aoDigitar = (evento) =>{
        props.aoAlterar(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificada}></input>
      
           
        </div>
    )
}
export default CampoTexto;