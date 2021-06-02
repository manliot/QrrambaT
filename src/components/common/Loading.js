
const Loading = () => {
    return (
        <div className=' w-100 h-100 d-flex align-items-center justify-content-center'>
            <div class="spinner-grow text-warning" role="status">
            </div>
            <div class="spinner-grow text-primary" role="status">
            </div>
            <div class="spinner-grow text-danger" role="status">
            </div>
        </div>
    )
}

export default Loading
