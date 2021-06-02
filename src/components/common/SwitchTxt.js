
const SwitchTxt = ({ title, Fn, orientacion = 'lr' }) => {
    const joinedTitle = title.split(' ').join('')
    return (
        <>
            { orientacion === 'rl'
                ? <div className="form-check form-switch offset-2 col-8">
                    <label className="form-check-label " for={joinedTitle}>{title} </label>
                    <input onChange={Fn} className="form-check-input " type="checkbox" id={joinedTitle}
                    />
                </div>
                : <div className="mb-3 row ">
                    <label className="form-check-label col-2" for={joinedTitle}>{title} </label>
                    <div className="form-check form-switch col-4">
                        <input onChange={Fn} className="form-check-input " type="checkbox" id={joinedTitle} />
                    </div>
                </div>
            }
        </>
    )
}

export default SwitchTxt
