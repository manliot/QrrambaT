
const Loading = () => {
    return (
        <div className=' w-100 h-100 d-flex align-items-center justify-content-center'>
            <div className="spinner-grow text-warning" role="status">
            </div>
            <div className="spinner-grow text-primary" role="status">
            </div>
            <div className="spinner-grow text-danger" role="status">
            </div>
        </div>
    )
}

export default Loading
