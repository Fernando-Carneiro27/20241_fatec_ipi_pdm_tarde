import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export class App extends Component {
  render() {
    return (
        <div className="container border rounded mt-2" style={{width: '650px', backgroundColor: 'aqua'}}>
            <div className="row justify-content m-2">
                <div className="col-8 justify-content-center">
                    
                    <div className="text-muted" style={{textAlign: 'left'}}><h2><b>Jogo de continhas</b></h2>
                        <div className="align-items-center m-2" style={{width: '500px', backgroundColor: 'white'}}>
                            <div className="container border rounded m-2 p-2">
                                <table className="table table-striped table-bordered m-2 align-items-center">
                                    <thead>
                                        <tr>
                                            <th style={{width: '20px'}}>7</th>
                                            <th style={{width: '20px'}}>x</th>
                                            <th style={{width: '20px'}}>8</th>
                                        </tr>
                                    </thead>
                                </table>
                                
                            </div>  
                        </div>
                    </div>
                        
                </div>
            </div>       
        </div>
    )
  }
}

ReactDOM.render(
    <App />,    
    document.querySelector('#root'))

