import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

// 1. Criar uma função que devolve o nome da disciplina
// 2. Criar uma função que devolveo o seu nome completo
// 3. Na função App, chamar cada uma delas, dentro de uma div principal

const Disc = () => {
    return <div>Programação Dispositivos Moveis</div>
}

const Nome = () => {
    return <div>Fernando Carneiro da Silva</div>
}

//function App (){}
const App = () => {
    const estilosDoBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', 
    color: 'white', border: 'none', width:'100%', borderRadius: 8}
    const textoDoRotulo = 'Nome:'
    const obterTextoDoBotao = () => {
        return'Enviar'
    }

    const fuiClicado = () => {
        alert('Fui clicado')
    }
    // coleção de pares, chave e valor
    return <div style={{margin: 'auto', width: 768, backgroundColor: 'gainsboro', padding: 8, borderRadius: 8}}>
        <label 
            className='rotulo'
            htmlFor='nome' 
            style={{display: 'block', marginBottom: 4}}>
                {textoDoRotulo}
        </label>
        <input 
            type='text'
            id='nome'
            style={{paddintTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}/>
        <button
            style={estilosDoBotao}
            onClick={() => fuiClicado()}
            //onClick={fuiClicado}
        >
            {obterTextoDoBotao()}
        </button>
    </div>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)