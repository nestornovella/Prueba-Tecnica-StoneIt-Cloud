import { Box, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Styles from './sideBar.module.css'
import { useStoreSideBar } from "../../store/store";
import React, { useState } from "react";
import CreateTask from "./createTask/CreateTaskComponent";
import Filtertask from "./FilterTask";
import HandleUtilities from "./handleUtilities";
import RenderImages from "./configuration/RenderImages";
//'#080808'

function SideBar() {

    const { statusOpen, toogleOpen, isMounted, toogleMonted } = useStoreSideBar()

    const [section, setSection] = useState('crear')


    function handleOpen() {
        toogleMonted()
        toogleOpen()
    }



    function handleSection(sect: string) {
        setSection(sect)

    }

    const sectionsComponents: Record<string, React.ReactElement> = {
        crear: <CreateTask />,
        filtrar: <Filtertask />,
        personalizar: <RenderImages />
    }

    return (
        
            <Box  height={'100vh'} marginTop={{ xs: '55px', md: '63px' }} width={{ xs: '100%', md: '50%', xl: '25%' }}
                style={{ transform: 'translateX(100%)' }}
                className={`${statusOpen ? Styles.open : isMounted ? Styles.close : ''}`} component={'div'} sx={{
                    backgroundColor: '#080808',
                    position: "fixed",
                    top: 0,
                    right: 0,
                    zIndex: 100
                }}>
                <Box  style={{ backgroundColor: '#080808', width: '100%' }}>
                    <IconButton onClick={handleOpen} aria-label="" sx={{ backgroundColor: 'black' }}  >
                        <ArrowCircleLeftIcon sx={{ transform: "rotate(180deg)", color: 'white', fontSize: '50px' }} />
                    </IconButton>

                    <HandleUtilities handleSection={handleSection} />
                    <Box sx={{  height:{xs:'70vh', xl:'80vh'}, overflowY: 'scroll' }} component={'div'}>
                        {
                            sectionsComponents[section]
                        }
                    </Box>
                </Box>
            </Box>
        
    );
}

export default SideBar;