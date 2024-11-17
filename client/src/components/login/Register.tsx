
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import userRegisterHook from "../../hooks/registerHook";
import React, { useState } from "react";
import { useUserStore } from "../../store/userStore";

interface Props {
  handleToggle: () => void;
  close:()=> void
}

function Register({ handleToggle, close }: Props) {
  const [error, setError] = useState(null)
  const {authUser, setLocalStorageToken} = useUserStore()
  const {handleInput, input, submit} = userRegisterHook()

  async function handleSubmit(e:React.MouseEvent<HTMLButtonElement>){
    try {
      const response = await submit(e)
      console.log(response)
      setLocalStorageToken(response.data.data.token)
      await authUser(response.data.data.token)
      close()
    } catch (error:any) {
      setError(error.response.data.message)
      
    }
  }

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Typography id="RegisterTitle" variant="h6" component="h2" textAlign="center" color="white" gutterBottom>
          Registrarse
        </Typography>
        <form>
          <TextField
            label="Nombre de usuario"
            fullWidth
            margin="normal"
             name="username"
            value={input.username}
            onChange={handleInput}
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
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            value={input.password}
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleSubmit}
          >
            Registrarse
          </Button>
          <Typography
            variant="body2"
            color="white"
            align="center"
            sx={{ marginTop: 2 }}
          >
            ¿Ya tienes cuenta?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={handleToggle}
              sx={{ color: "primary.main" }}
            >
              Inicia sesión aquí
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="red"
            align="center"
            sx={{ marginTop: 2 }}
          >
          {error && error}
          </Typography>
          
        </form>
      </Box>
    </div>
  );
}

export default Register;
