import ReactDOM from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numeros = []
        }
    }
}

numerosRandom = () => {
    let n
    
}

render() {
    return (
        <div className="container rounded mt-2 p-2">
            <div className="col-12">

            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
