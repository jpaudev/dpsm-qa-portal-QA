import * as React from 'react';
import Router from 'next/router';
import addProfilePicture from '../services/user/addProfilePicture'
import PopupModal from './PopupModal'

import { Formik, Form, Field } from 'formik'
import styles from "../styles/Profile.module.css"

const UserProfileUpload = (props) => {
    const fileInitialState = props.data.profilePicture ? process.env.UPLOADS_URL + props.data.profilePicture : null;

    const [file, setFile] = React.useState(fileInitialState);
    const [image, setImage] = React.useState("");
    const [showButtons, setShowButton] = React.useState(false);
    const [modalContent, setModalContent] = React.useState()
    const [showModal, setShowModal] = React.useState(false); 
   
    const handleChange = (e) => { 
        setFile(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0])
        setShowButton(true)
    }
    const uploadImage = async () => {
        let formData = new FormData()
        formData.append("image",image)

        let res = await addProfilePicture(formData, props.data.token.user)
        if(res.success) { 
            setShowButton(false)
            Router.push('/user-profile')
            .then(() => {
                setShowModal(true)
                setModalContent({
                    icon: "check_circle",
                    title: "Success",
                    message: res.message,
                    btnConfirm: "Okay"
                }) 
              })
            
        } else {
            setShowButton(false)
            Router.push('/user-profile')
            .then(() => {
                setShowModal(true)
                setModalContent({
                    icon: "error",
                    title: "Error",
                    message: res.message,
                    btnConfirm: "Okay"
                }) 
            })
        }
    } 
    const cancelUpload = () => {
        setFile(fileInitialState)
        setShowButton(false)
    }  
    const closeModal = () => {
        setShowModal(false)
    }
  return (
    <>
        <PopupModal content={modalContent} visibility={showModal} closeModal={closeModal}></PopupModal>
        <div className="card">
            <div className="card-body text-center">
                    <img src={file ? file : "../DefaultUser.jpg"} className={`rounded img-fluid mx-auto d-block ${styles.profile_img}`} name="image" alt="No Photo"/>
                    {
                        !showButtons ?
                        <label className={`maroon ${styles.label}`} htmlFor="image">
                            <input type="file" name="" id="image" onChange={handleChange}/>
                            <span><i className="fa fa-camera"></i>Upload Photo</span>
                        </label>
                        : 
                        <div className="d-grid d-md-flex justify-content-md-center">
                            <button type = "submit" className = "maroon default_button" onClick={uploadImage}>Save </button>
                            <button className = "maroon default_button" onClick={cancelUpload}>Cancel </button>     
                        </div>
                    }
                <div>
                    <h2 className="card-title">
                        {props.data.fullName}
                    </h2>
                    <div className={`card-text ${styles.role}`}>
                        {props.data.data.position}
                    </div>
                    <div className={`card-text ${styles.address}`}>
                        {props.data.personalInfo.presentAddress}
                    </div>
                </div>
            </div>      
        </div>
    </>
  )
}

export default UserProfileUpload