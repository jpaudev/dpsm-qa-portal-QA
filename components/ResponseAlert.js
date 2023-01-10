import * as React from "react"
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


const ResponseAlert = (props) => {
      return (
        <div>
          <Snackbar
            open={props.show}
            autoHideDuration={4000}
            onClose={props.close}
            anchorOrigin={{ vertical: "bottom", horizontal: "right"}}
            >
                <Alert 
                    severity= {props.data.severity}
                    variant="filled"
                    sx={{ 
                        minWidth: '350px',
                        fontSize: "18px",
                        //error color- "#dc3545" success color-"#97bf97",
                        backgroundColor : props.data.bgColor, 
                        color: "#FFF"
                    }}
                >
                    {props.data.message}
                </Alert>
        </Snackbar>
        </div>
      )
}

export default ResponseAlert
