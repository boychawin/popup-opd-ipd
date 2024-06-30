
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
    Collapse,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import AccordionTransition from './accordion';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function DialogIpdOpd({ open, handleClose }: any) {


    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                TransitionComponent={Transition}
            >
                <DialogTitle id="scroll-dialog-title" sx={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }} >
                    กำหนดการนัดหมาย
                    <div style={{ cursor: 'pointer' }} onClick={handleClose}>
                        <IconX />
                    </div>
                </DialogTitle>
                <DialogContent dividers={false}>
                    {/* <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    > */}

                    <DrawerOpdIpd />

                    {/* </DialogContentText> */}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DialogIpdOpd


function DrawerOpdIpd() {

    const [openOPD, setOpenOPD] = React.useState(true);
    const [openIPD, setOpenIPD] = React.useState(true);

    const [openMenu, setOpenMenuPD] = React.useState({
        type: 'OPD',
        id: ''
    });



    const handleClickListOPD = (id: any) => {
   
        setOpenMenuPD({
            type: 'OPD',
            id: id
        });
    };



    const handleClickListIPD = (id: any) => {
   
        setOpenMenuPD({
            type: 'IPD',
            id: id
        });
    };



    const handleClickAll = () => {
        setOpenMenuPD({
            type: 'ALL',
            id: ''
        });
    };



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
                            <ListItemButton
                                onClick={handleClickAll}
                            >
                                <ListItemText primary={'ALL'} />
                            </ListItemButton>
                        </ListItem>



                        <ListItemButton onClick={handleClickOPD}>
                            <ListItemText primary="OPD" />
                            {openOPD ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </ListItemButton>
                        <Collapse in={openOPD} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {dataOpd.map((value) => (
                                    <ListItemButton
                                        key={value.id}
                                        onClick={() => handleClickListOPD(value.id)}
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
                                        onClick={() => handleClickListIPD(value.id)}
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
                <PageOPD data={dataOpd} openMenu={openMenu} />
                <PageIPD data={dataIpd} openMenu={openMenu} />

            </Box>
        </Box>
    );
}



function PageOPD({ openMenu, data }: any) {

    if (openMenu.type == 'IPD') {
        return <></>
    }

    return (
        <>
            <Typography variant='h1'>
                OPD
            </Typography>

            <AccordionTransition data={data} openMenu={openMenu} />
        </>
    )
}


function PageIPD({ openMenu, data }: any) {

    if (openMenu.type == 'OPD') {
        return <></>
    }
    return (
        <>
            <Typography variant='h1'>
                IPD
            </Typography>

            <AccordionTransition data={data} openMenu={openMenu} />
        </>
    )
}

