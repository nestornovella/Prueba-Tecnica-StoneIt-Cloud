import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import useTagHook from "../../../hooks/tagHook";
import { MouseEventButton } from "../../../interfaces/eventInterfaces";
import { getToasty } from "../../../helpers/totifyNotify";




function CreateTag() {

    const { handleInput, input, submit} = useTagHook()

    async function handleSubmit(e:MouseEventButton){
        e.preventDefault()
        const response = await submit()
        if(response?.status < 300){
            getToasty('Etiqueta creada con exito', 's', true)
        }else{
            getToasty(response?.message, 'e')
        }
    }

    return (

        <Grid component={'div'} padding={5} border={1} container spacing={0}>
            <Typography fontFamily={"monospace"} color="white">Crear Area de Trabajo</Typography>
            
            <Grid item xs={12} md={12} xl={12}>
                <Box>
                    <TextField
                        label="Nombre de etiqueta"
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInput}
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


                <Button  onClick={handleSubmit} sx={{ marginTop: 2 }} variant="contained" fullWidth color="secondary">
                    Crear Etiqueta
                </Button>
            </Grid>
        </Grid>

    );
}

export default CreateTag;