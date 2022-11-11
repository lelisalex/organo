import { useState } from 'react';
import Botao from '../Botao/Index.js';
import CampoTexto from '../CampoTexto/Index.js';
import ListaSuspensa from '../ListaSuspensa/Index.js';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        // setNome('')
        // setCargo('')
        // setImagem('')
        // setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para montar o CARD do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterar={valor => setNome(valor)} />

                <CampoTexto obrigatorio={true} label="Cargo" placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} />

                <CampoTexto obrigatorio={true} label="Imagem" placeholder='Digite o endereço da sua imagem'
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)} />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)} />

                <Botao texto='Criar Card'></Botao>
            </form>
        </section>
    )
}

export default Formulario;