import ReactDOM from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from 'react-bootstrap'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numeros: []
        }
    }

    comecarJogo = () => {
        const numeros = []
        let n
        for(let i = 0; i < 6; i++){
            n = Math.floor(Math.random() * 60) + 1
            numeros.push(n)
        }

        if (numeros.length !== new Set(numeros).size) {
            this.comecarJogo();
            return;
        }
        this.setState({numeros: numeros})
    }

    render(){
        let e = this.state.numeros;
        return (
            
            <div className="container border rounded mt-2">
                <div className="row justify-content-center m-2">
                    <div className="col-8 justify-content-center">
                        
                        <div 
                            className="card-header text-muted container border rounded m-2 p-1"
                            style={{backgroundColor: 'gainsboro'}}>
                            <h3>Mega-Sena</h3>
                        </div>
                       
                        <div className="card-body container border rounded m-2 p-2">

                            <Table striped bordered style={{}}>
                                <thead 
                                    className="text-center p-2 mt-2"
                                    style={{backgroundColor:'lightGreen', 
                                            width:'40px',  
                                            height:'50px', 
                                            fontSize:'300%',
                                            color:'darkgreen'}}>
                                    <td style={{border: '2px solid'}}>{e[0] || '0'}</td>
                                    <td style={{border: '2px solid'}}>{e[1] || '0'}</td>                                   
                                    <td style={{border: '2px solid'}}>{e[2] || '0'}</td>                                   
                                    <td style={{border: '2px solid'}}>{e[3] || '0'}</td>                                                                     
                                    <td style={{border: '2px solid'}}>{e[4] || '0'}</td>                                                                
                                    <td style={{border: '2px solid'}}>{e[5] || '0'}</td>                                
                                </thead>
                            </Table>

                            <button 
                                onClick={this.comecarJogo}      
                                className="btn btn-outline-success mt-1 w-100"
                                style={{fontSize:'20px'}}>
                                    Gerar Jogo
                            </button>
                        </div>

                    </div>
                </div>       
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)