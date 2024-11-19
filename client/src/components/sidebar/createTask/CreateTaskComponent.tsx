import { Box, Grid, TextField, Typography, Button } from "@mui/material";

import useTaskCreateHook from "../../../hooks/taskCreateHook";
import SimpleDatePicker from "./DatePicker";
import CreateTag from "./CreateTag";
import TagSelect from "./TagsSelect";
import { MouseEventButton } from "../../../interfaces/eventInterfaces";


function CreateTask() {
    const { handleinput, input, submit, getTags, handleTag, tags, deleteTag } = useTaskCreateHook()

    function handleDelete (e:MouseEventButton){
        const id = e.currentTarget.id 
        deleteTag(id)
    }

    return (
        <Box>
            <Grid component={'div'} padding={5} border={1} container spacing={0}>
                <Typography fontFamily={"monospace"} color="white">Crear tarea</Typography>

                <Grid item xs={12} md={12} xl={12}>
                    <Box>
                        <TextField
                            label="Titulo"
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
                            rows={4}
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
                    <SimpleDatePicker handleInput={handleinput} />
                    <TagSelect getTags={getTags} handleTag={handleTag} input={input} tags={tags} />
                    <Button onClick={submit} sx={{ marginTop: 2 }} variant="contained" fullWidth color="primary">
                        Crear Tarea
                    </Button>
                    <Typography padding={1} variant="body1" color="white">Etiquetas:</Typography>
                    <Box component={'div'} sx={{display:'flex', gap:2, flexWrap:'wrap'}}>
                        {
                            input.tags && input.tags.map(t => {
                                return <Button onClick={handleDelete} id={t.id} variant="contained" color="error" >{t.name + " 🗑️"}</Button>
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
            <CreateTag />
        </Box>

    );
}

export default CreateTask;
