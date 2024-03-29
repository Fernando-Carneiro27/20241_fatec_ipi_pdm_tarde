import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {
    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    const funcaoOK = () => alert("Agradecemos a confirmação")
    const funcaoNOK = () => alert("Verificaremos o ocorrido")
    const componenteFeedback = (
        <Feedback 
            textoOK={textoOK}
            textoNOK={textoNOK}
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK} 
        />
    )

    return (
        <div className="container border rounded mt-2 p-2">

            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">Seus pedidos</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-sm-12 col-lg-4">
                    <Cartao cabecalho="11/02/2021">
                        <Pedido 
                            icone="i fa-solid fa-book fa-2x" 
                            titulo="Livro" 
                            descricao="Concrete Mathematics - Donald Knuth" 
                        />
                        {componenteFeedback}
                    </Cartao>
                        
                </div>

                <div className="col-sm-12 col-lg-4">
                    <Cartao cabecalho="04/07/2022">
                        <Pedido 
                            icone="i fa-solid fa-headphones fa-2x" 
                            titulo="Fone" 
                            descricao="Fone de ouvido bluetooth, com carregador" 
                        />
                       {componenteFeedback}
                    </Cartao>
                    
                </div>

                <div className="col-sm-12 col-lg-4">
                    <Cartao cabecalho="20/10/2023">
                        <Pedido 
                            icone="i fa-solid fa-camera fa-2x" 
                            titulo="Câmera" 
                            descricao="TekPix, com Lente EF-S 18-55mm Full HD 4K"
                        />
                        {componenteFeedback}
                    </Cartao>
                </div>

            </div>

        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)