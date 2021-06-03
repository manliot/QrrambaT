import Styles from '../../css/componets/common/ImageUpload.module.css'
import { storage } from '../../firebase/firebase_config'
import { useState } from 'react'
import { UploadFile } from '../../firebase/services/Storage'
const defaultImg = 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'

const ImageUpload = ({ Fn, name = 'Imagen' }) => {
    const [progress, setProgress] = useState(0)
    const [URL, setURL] = useState('')
    const handleUploadIcon = (e) => {
        const image = e.target.files[0]
        if (image) {
            const uploadTask = UploadFile(`images/${image.name}`, image)
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress_ = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress_);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {
                            setURL(url);
                            Fn(url)
                        });
                }
            )
        }
    }
    return (
        <div className="file-field">
            <div className="z-depth-1-half mb-4">
                <img src={`${URL !== '' ? URL : defaultImg}`} className={`${Styles['image']} img-fluid `}
                    alt="Imagen" />
            </div>
            <div className="d-flex justify-content-center row">
                <div className='col-9'>
                    <progress className=' mr-auto' value={progress} max="100" />
                </div>
                <div className="btn btn-primary col-4">
                    <label for={name} >Choose file</label>
                    <input id={name} onChange={e => handleUploadIcon(e)} className={Styles['input-file']} type="file" />
                </div>
            </div>
        </div>
    )
}

export default ImageUpload
