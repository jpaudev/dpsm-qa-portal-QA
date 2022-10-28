import React from 'react'
import styles from "../styles/Modal.module.css"
import { Modal } from 'react-bootstrap';  

const PopupModal = (props) => {
  return (
    <>
        {         
            props.content ?
                <Modal show={props.visibility} onHide={props.closeModal} centered>  
                    <Modal.Header closeButton> 
                        <span className={`${styles.icon} material-icons-sharp` }>{props.content.icon}</span> 
                        <Modal.Title className={styles.title}>{props.content.title} </Modal.Title>  
                    </Modal.Header>  
                    
                    <Modal.Body >  
                    <p>{props.content.message}</p>  
                    </Modal.Body>  
                    
                    <Modal.Footer>  
                        <button className = "maroon default_button" onClick={props.closeModal}>{props.content.btnConfirm}</button>  
                        {/* <Button variant="primary">Save changes</Button>   */}
                    </Modal.Footer>  
                </Modal>  
            : ""
        } 
    </>
  )
}

export default PopupModal