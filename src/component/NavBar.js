import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// import styles from './Nav.module.css';
import { Button} from '@mui/material';
import Valdil from './Valdil';
import SignIn from './SignIn';
import SignUp from './SignUp';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function NavBar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [opens, setOpens] = React.useState(false);
    const handleOpens = () => setOpens(true);
    const HandleClose = () => setOpens(false);

  return (
    <>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar variant="dense">
       
          <Typography variant="h6" color="inherit" component="div">
          <Button variant="outlined" size="medium" onClick={handleOpens}>
          SignUp
        </Button>
        <Modal  
        open={opens}
        onClose={HandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
       <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
       <SignUp/>
       </Typography>
       
       </Box>
       </Modal>

          </Typography>
          <Typography variant="h6" color="inherit" component="div" marginLeft="80%">
          <Button variant="outlined" size="medium" onClick={handleOpen}>
          SignIn
        </Button>
        <Modal  
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <SignIn/>
        </Typography>
        
        </Box>
        </Modal>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
    <Valdil/>
    </>
  );
}
