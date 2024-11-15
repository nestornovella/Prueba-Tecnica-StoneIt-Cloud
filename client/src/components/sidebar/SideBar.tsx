import { Box, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Styles from './sideBar.module.css'
import { useStoreSideBar } from "../../store/store";
import React, { useState } from "react";
import CreateTask from "./createTask/CreateTaskComponent";
import Filtertask from "./FilterTask";
import HandleUtilities from "./handleUtilities";
//'#080808'

function SideBar() {

    const { statusOpen, toogleOpen, isMounted, toogleMonted } = useStoreSideBar()
    const nameOfStates = {
        proceso: 'proceso',
        pendiente: 'pendiente',
        completada: 'completada'
    }
    const [selected, setSelected] = useState(nameOfStates.proceso)
    const [section, setSection] = useState('create')


    function handleOpen() {
        toogleMonted()
        toogleOpen()
    }

    function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement;
        setSelected(target.name)
    }

    function handleSection(sect: string) {
        setSection(sect)
        
    }

    const sectionsComponents:Record<string, React.ReactElement> = {
        crear: <CreateTask />,
        filtrar: <Filtertask handleButton={handleButton} selected={selected} nameOfStates={nameOfStates} />
    }

    return (
        <Box height={'100%'} marginTop={{ xs: '55px', md: '63px' }} width={{ xs: '100%', md: '50%', xl: '25%' }}
            style={{ transform: 'translateX(100%)' }}
            className={`${statusOpen ? Styles.open : isMounted ? Styles.close : ''}`} component={'div'} sx={{
                backgroundColor: '#080808',
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 10000
            }}>
            <Box style={{ backgroundColor: '#080808', height: '100%', width: '100%' }}>
                <IconButton onClick={handleOpen} aria-label="" sx={{ backgroundColor: 'black' }}  >
                    <ArrowCircleLeftIcon sx={{ transform: "rotate(180deg)", color: 'white', fontSize: '50px' }} />
                </IconButton>

                <HandleUtilities handleSection={handleSection} />
                {
                    sectionsComponents[section]
                }
            </Box>
        </Box>
    );
}

export default SideBar;