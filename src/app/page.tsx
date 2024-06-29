"use client"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DialogIpdOpd from './components/dialog-opd-ipd';
import React from 'react';
import Button from '@mui/material/Button';


export default function Home() {

  const [open, setOpen] = React.useState(false);
  const descriptionElementRef = React.useRef<HTMLElement>(null);


  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Button
          color="success"
          variant="contained"
          style={{ color: '#239a93' }}
          className="px-4 py-2 font-bold "
          onClick={handleOpen}
        >
          <span style={{ color: '#fff' }}>Popup</span>
        </Button>


        <DialogIpdOpd
          open={open}
          handleClose={handleClose}
          descriptionElementRef={descriptionElementRef}
        />


      </Box>
    </Container>
  );
}
