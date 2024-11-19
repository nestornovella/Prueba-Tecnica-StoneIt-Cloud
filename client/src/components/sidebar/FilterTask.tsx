import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useUserStore } from "../../store/userStore";
import { Tag, useTaskStore } from "../../store/taskStore";
import useTagHook from "../../hooks/tagHook";
import useTaskCreateHook from "../../hooks/taskCreateHook";




const nameOfStates = {
    proceso: 'progreso',
    pendiente: 'pendiente',
    completada: 'completada',
    pendientesProceso: 'standard'
}

function Filtertask() {
    const [selected, setSelected] = useState(nameOfStates.pendientesProceso)
    const { token } = useUserStore()
    const { filterTasks, gettasks } = useTaskStore()
    const { getTags, tags } = useTaskCreateHook()

    function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement;
        setSelected(target.name)
        if (target.name == 'standard') {
            gettasks(token)
        } else {
            filterTasks(target.name, null, token)
        }
    }

    function handleTag(e: React.MouseEvent<HTMLButtonElement>) {
        const target = e.target as HTMLButtonElement;

        filterTasks(null, e.currentTarget.name, token)

    }

    useEffect(() => {
        getTags()
    }, [])
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
            <Typography fontFamily={"monospace"} color="white">Filtrar por:</Typography>
            <Box display={"flex"} paddingY={2} justifyContent={'start'} gap={3}>
                {
                    tags?.map((t: Tag) => {
                        return <Button onClick={handleTag} name={t.name} variant={!selected.includes('') ? 'contained' : 'outlined'} color="secondary">
                            {t.name}
                        </Button>
                    })
                }

            </Box>
        </Box>
    );
}

export default Filtertask;