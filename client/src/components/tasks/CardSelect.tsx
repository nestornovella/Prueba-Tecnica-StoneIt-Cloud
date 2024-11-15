import { CardActions, MenuItem, Select } from "@mui/material";



function CardSelect() {
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

                            labelId="demo-select-small-label"
                            variant='outlined'
                            id="demo-select-small"
                            value={'pendiente'}
                            label="Age"
                            sx={{
                                color: 'white',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'black',
                                    border:2
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
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={'pendiente'}>pendiente</MenuItem>
                            <MenuItem value={'en progreso'}>progreso</MenuItem>
                            <MenuItem value={'completada'}>completada</MenuItem>
                        </Select>
                    </CardActions>
     );
}

export default CardSelect;