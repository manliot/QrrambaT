
const InputTxt = ({ text, Fn, required, n_margin }) => {
    return (
        <div className="mb-3 row">
            <label for={text} className={`col-2 col-form-label`}>{text}{required ? <span className='text-danger'>*</span> : ''}  </label>
            <div className={`col-${n_margin}`}>
                <input id={text} onChange={event => Fn(event.target.value)} className='form-control'></input>
            </div>
        </div>
    )
}

export default InputTxt
