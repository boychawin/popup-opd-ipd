
import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
const drawerWidth = 240;
import { IconX } from '@tabler/icons-react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogContentText,
    Collapse,
} from '@mui/material';

function DialogIpdOpd({ open, handleClose, descriptionElementRef }: any) {


    return (
        <>
            <Dialog
                fullScreen
                fullWidth
                open={open}
                onClose={handleClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title" sx={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }} >
                    กำหนดการนัดหมาย
                    <div style={{ cursor: 'pointer' }} onClick={handleClose}>
                        <IconX />
                    </div>
                </DialogTitle>
                <DialogContent dividers={false}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >

                        <DrawerOpdIpd />

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DialogIpdOpd


function DrawerOpdIpd() {

    const [openOPD, setOpenOPD] = React.useState(true);
    const [openIPD, setOpenIPD] = React.useState(true);

    const handleClickOPD = () => {
        setOpenOPD(!openOPD);
    };



    const handleClickIPD = () => {
        setOpenIPD(!openIPD);
    };



    const dataOpd = [
        {
            id: 1,
            name: 'test1'
        },
        {
            id: 2,
            name: 'test2'
        }
    ]


    const dataIpd = [
        {
            id: 1,
            name: 'test1'
        },
        {
            id: 2,
            name: 'test2'
        }
    ]



    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={'ALL'} />
                            </ListItemButton>
                        </ListItem>



                        <ListItemButton onClick={handleClickOPD}>

                            <ListItemText primary="IPD" />
                            {openOPD ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </ListItemButton>
                        <Collapse in={openOPD} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {dataOpd.map((value) => (
                                    <ListItemButton
                                        key={value.id}
                                    >
                                        <ListItemText primary={`Line item ${value.name}`} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>

                        <ListItemButton onClick={handleClickIPD}>
                            <ListItemText primary="IPD" />
                            {openIPD ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </ListItemButton>
                        <Collapse in={openIPD} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {dataIpd.map((value) => (
                                    <ListItemButton
                                        key={value.id}
                                    >
                                        <ListItemText primary={`Line item ${value.name}`} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>





                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}



function PageOPD() {


    return (
        <>
            OPD
        </>
    )
}


function PageIPD() {


    return (
        <>
            IPD
        </>
    )
}

