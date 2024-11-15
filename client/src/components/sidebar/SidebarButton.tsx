import {  IconButton } from "@mui/material";
import { useStoreSideBar } from "../../store/store";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



function SidebarButton() {
    const { toogleOpen} = useStoreSideBar()

    return (  
        <IconButton onClick={toogleOpen} sx={{position:'fixed', color:'black', top:{md:70, xs:55}, right:30, zIndex:999}}>
            <ArrowCircleLeftIcon sx={{fontSize:50}}/>
        </IconButton>
    );
}

export default SidebarButton;