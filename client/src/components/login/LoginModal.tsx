import { Box, Fade, Modal, Typography, Backdrop, Button, colors } from "@mui/material";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'black',
  boxShadow: 24,
  padding: 4,
  borderRadius: 2,
  color:'white'
};

interface Props{
  isOpen:boolean
  close: ()=> void
}

function LoginModal({isOpen, close}:Props) {
  const [register, setRegister] = useState(false)
 
  function handleRegister(){
    setRegister(prev => !prev)
  }

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={isOpen}
        onClose={close}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            {
              !register 
              ? 
              <Login handleRegister={handleRegister} close={close}/>
              :
              <Register handleToggle={handleRegister} close={close}/>
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default LoginModal;
