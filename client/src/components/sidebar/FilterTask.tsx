import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";




const nameOfStates = {
    proceso: 'proceso',
    pendiente: 'pendiente',
    completada: 'completada',
    pendientesProceso:'pend/poces'
}

function Filtertask() {
    const [selected, setSelected] = useState(nameOfStates.pendientesProceso)
    function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement;
        setSelected(target.name)
    }
    return (
        <Box component={'div'} padding={5} border={1} sx={{ background: '' }}>
            <Typography fontFamily={"monospace"} color="white">Filtrar por:</Typography>
                <Button fullWidth onClick={handleButton} name={nameOfStates.pendientesProceso} variant={selected.includes(nameOfStates.pendientesProceso) ? 'contained' : 'outlined'} color="secondary">
                    pendientes y en proceso
                </Button>
            <Box display={"flex"} paddingY={2} justifyContent={'start'} gap={3}>
                <Button onClick={handleButton} name={nameOfStates.pendiente} variant={selected.includes(nameOfStates.pendiente) ? 'contained' : 'outlined'} color="warning">
                    pendientes
                </Button>
                <Button onClick={handleButton} name={nameOfStates.proceso} variant={selected.includes(nameOfStates.proceso) ? 'contained' : 'outlined'} color="primary">
                    proceso
                </Button>
                <Button onClick={handleButton} name={nameOfStates.completada} variant={selected.includes(nameOfStates.completada) ? 'contained' : 'outlined'} color="success">
                    completada
                </Button>
            </Box>
        </Box>
    );
}

export default Filtertask;