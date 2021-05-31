import { storage } from '../firebase_config'

const UploadFile = (referencia,image) => {
    return storage.ref(`images/${image.name}`).put(image);
}

export {UploadFile}