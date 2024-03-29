const Feedback = props => (
    <div className="d-flex justify-content-evenly mt-2">
        {/* button[type=button].btn.*2 */}
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={props.funcaoOK}>
                {props.textoOK}
        
        </button>
        
        <button 
            type="button" 
            className="btn btn-danger"
            onClick={props.funcaoNOK}>
                {props.textoNOK}
        </button>
    </div>
)

export default Feedback