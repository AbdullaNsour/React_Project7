import React, { useState, useRef } from 'react';
// import {Dialog} from 'primereact/dialog';
// import {Button} from 'primereact/button';
import img from './profile.png';


const UploadImg = () => {
    const [dialogs, setdialogs] = useState(false);
    const [imgCrop, setimgCrop] = useState(false)
    const [storImage, setstoreImage] = useState([])


    const onCrop = (view)=>{
        setimgCrop(view)
    }

    const onClose = ()=>{
        setimgCrop(null)
    }

    const saveImage = () => {
        setstoreImage([...storImage, {imgCrop}])
        setdialogs(false)
    }

    const profileImageShow = storImage.map(item => item.imgCrop)
    
    return (
    <div>
        <div className='profile_img text-center p-4'>
            <div className='div'>
            <img style={{width:'200px',height:'200px',borderRadius:'50%',objectFit:'cover',}} src={profileImageShow.length?profileImageShow:img} alt="" onClick={()=>setdialogs(true)} />
            <dialog visible={dialogs} header={() => (<p htmlFor='' className='text-2x1 font-semibold textColor'> Update Profile Image </p>)} onHide= {() => setdialogs(false)}>
                <div className='confirmtion-content flex flex-column align-items-center'>
                    <div className='flex flex-column align-items-center mt-5 w-12'>
                        <div className='flex flex-column justify-content-around w-12 mt-4'>

                            <avatar width={400} height='300' onClose={onClose} onCrop={onCrop}/>

                            <button onClick={saveImage} label='Save' icon='pi pi-check'/>
                        </div>
                    </div>
                </div>
            </dialog>

            </div>
        </div>


    </div>
)
}

export default UploadImg