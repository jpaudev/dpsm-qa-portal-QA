import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const PopupDialog = (props) => {

  return (
    <>
      <Dialog
        fullWidth={props.data.fullWidth}
        maxWidth={props.data.modalwidth}
        open={props.visibility}
      > 
        <DialogTitle>{props.data.title}</DialogTitle>
        <DialogContent dividers>
          {props.data.component} 
        </DialogContent>
        {/* Dialog actions can be for confirming/Close or submit, just specify the Button text and function in props */}
        <DialogActions>
            <div>
                <button className="btn maroon m-2" onClick={props.close}>{props.data.closeBtnTxt}</button>
                {props.data.confirmBtnTxt &&
                    <button className="btn maroon m-2"  onClick={props.submit}>{props.data.confirmBtnTxt}</button>
                } 
            </div>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PopupDialog