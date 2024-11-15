import { Box, Button, Typography } from "@mui/material";


interface Props {
    handleButton: (e:React.MouseEvent<HTMLButtonElement>)=>void
    nameOfStates: Record<string, string>
    selected: string
}

function Filtertask({ handleButton, nameOfStates, selected }:Props) {
    return (
        <Box component={'div'} padding={5} border={1} sx={{ background: '' }}>
            <Typography fontFamily={"monospace"} color="white">Filtrar por:</Typography>
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