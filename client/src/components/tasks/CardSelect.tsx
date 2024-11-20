import { CardActions, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import { useUserStore } from "../../store/userStore";


interface Props{
    status:string
    id:string
}

function CardSelect({id, status}:Props) {
    const {updateTaskStatus} = useTaskStore()
    const {token} = useUserStore()
    const [selected, setSelected ] = useState(status)

    function handleChange(e: SelectChangeEvent) {
        setSelected(e.target.value)
        updateTaskStatus(id, token, e.target.value)
    }

    return (
        <CardActions
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'end',
                backdropFilter:"blur(5px)"
            }}
        >
            <Select
                onChange={handleChange}
                labelId="demo-select-small-label"
                variant='outlined'
                id="demo-select-small"
                value={selected}
                label="Age"
                sx={{
                    
                    color: selected == 'pendiente' ? '#14f073' : selected == 'completada' ? '#d510cc' : '#076fef' ,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                        border: 2
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '& .MuiSelect-icon': {
                        color:selected == 'pendiente' ? '#14f073' : selected == 'completada' ? '#d510cc' : '#076fef',
                    },
                    height: '30px'
                }}
            >
                <MenuItem value={'pendiente'}>pendiente</MenuItem>
                <MenuItem value={'progreso'}>progreso</MenuItem>
                <MenuItem value={'completada'}>completada</MenuItem>
            </Select>
        </CardActions>
    );
}

export default CardSelect;