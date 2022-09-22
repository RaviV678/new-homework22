import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styles from './ui.module.css';
import {Card} from '@mui/material'

 function Uicomp() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '60vh',
        },
      }}
    >
      <Paper elevation={20} className={styles.paperStyle}>
        
      </Paper>
      
    </Box>
    
    </>
  );
}

export default Uicomp;