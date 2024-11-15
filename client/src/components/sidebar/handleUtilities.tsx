import { Box, Button } from "@mui/material";
import { useState } from "react";
import { MouseEventButton } from "../../interfaces/eventInterfaces";


interface Props{
    handleSection: (sect:string)=> void
}

function HandleUtilities({handleSection}:Props) {
    const sections= {
        crear:'crear',
        filtrar:'filtrar',
        personalizar:'personalizar'
    }
    
    const [selected, setSelected] = useState(sections.crear)

    function handleSelected (e:MouseEventButton){
        const target = e.target as HTMLInputElement
        setSelected(target.name)
        handleSection(target.name)

    }
    
    return (
        <Box sx={{ display: "flex", justifyContent: 'center', gap: 1 }} component={'div'}>
            <Button onClick={handleSelected} name={sections.crear} variant={selected.includes(sections.crear) ? "contained": "outlined"} color="primary">
                Crear Tarea
            </Button>
            <Button onClick={handleSelected} name={sections.filtrar} variant={selected.includes(sections.filtrar) ? "contained": "outlined"}color="primary">
                Filtrar Tareas
            </Button>
            <Button onClick={handleSelected} name={sections.personalizar} variant={selected.includes(sections.personalizar) ? "contained": "outlined"} color="primary">
                Personalizar
            </Button>
        </Box>
    );
}

export default HandleUtilities;