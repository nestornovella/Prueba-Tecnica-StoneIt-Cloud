import { Box, Grid, TextField, Typography, Button } from "@mui/material";

import useTaskCreateHook from "../../../hooks/taskCreateHook";
import SimpleDatePicker from "./DatePicker";


function CreateTask() {
    const { handleinput, input, submit} = useTaskCreateHook()

    return (
        <Grid component={'div'} padding={5} border={1} container spacing={0}>
           <Typography fontFamily={"monospace"} color="white">Crear tarea</Typography>
            <Grid item xs={12} md={12} xl={12}>
                <Box>
                    <TextField
                        label="Contraseña"
                        type="text"
                        name="title"
                        value={input.title}
                        onChange={handleinput}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        InputProps={{
                            style: { color: "white" },
                            sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            },
                        }}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={12} xl={12}>
                <Box>
                    <TextField
                        label="Descripción"
                        name="description"
                        value={input.description}
                        onChange={handleinput}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}  // Especifica el número de líneas visibles en el textarea
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        InputProps={{
                            style: { color: "white" },
                            sx: {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            },
                        }}
                    />
                </Box>
                <SimpleDatePicker handleInput={handleinput}/>
                <Button sx={{marginTop:2}} variant="contained" fullWidth color="primary">
                  Crear Tarea
                </Button>
            </Grid>
        </Grid>
    );
}

export default CreateTask;
