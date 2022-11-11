import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDefundo }) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corDefundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador;