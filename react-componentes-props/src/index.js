import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
    return (
        <div className="container border rounded mt-2">

            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 text-center">Seus pedidos</h1>
                </div>
            </div>

            <div className="row">

                <div className="col-sm-12 col-lg-4">
                    <div className="card mb-2">
                        <div className="card-header text-muted">
                            20/04/2023
                        </div>
                        <div className="card-body d-flex">
                            <div className='d-flex align-items-center'>
                                <div className="i fa-solid fa-book fa-2x"></div>
                            </div>
                            <div className='flex-grow-1 ms-2 border p-2'>
                                <h4 className="text-center">Livro</h4>
                                <p className='text-center'>Concrete Mathematics - Donald Knuth</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-4">
                <div className="card mb-2">
                        <div className="card-header text-muted">
                            20/04/2023
                        </div>
                        <div className="card-body d-flex">
                            <div className='d-flex align-items-center'>
                                <div className="i fa-solid fa-headphones fa-2x"></div>
                            </div>
                            <div className='flex-grow-1 ms-2 border p-2'>
                                <h4 className="text-center">Fone</h4>
                                <p className='text-center'>Fone de ouvido bluetooth, com carregador</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-4">
                <div className="card mb-2">
                        <div className="card-header text-muted">
                            20/04/2023
                        </div>
                        <div className="card-body d-flex">
                            <div className='d-flex align-items-center'>
                                <div className="i fa-solid fa-camera fa-2x"></div>
                            </div>
                            <div className='flex-grow-1 ms-2 border p-2'>
                                <h4 className="text-center">Câmera</h4>
                                <p className='text-center'>TekPix, com Lente EF-S 18-55mm Full HD 4K</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)