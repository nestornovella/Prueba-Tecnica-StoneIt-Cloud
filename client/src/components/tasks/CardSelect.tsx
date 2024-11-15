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
        console.log(e.target.value)
    }

    return (
        <CardActions
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'end'
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
                    color: selected == 'pendiente' ? 'yellow' : selected == 'completada' ? 'green' : 'orange' ,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                        border: 2
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '& .MuiSelect-icon': {
                        color: '#3958f1',
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