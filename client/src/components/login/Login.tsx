import { Box, Button, TextField, Typography, Link } from "@mui/material";
import useLoginHook from "../../hooks/loginHook";
import { useState } from "react";
import { toast ,Bounce, Flip} from "react-toastify";

interface Props {
  handleRegister: () => void;
  close: () => void;
}

function Login({ handleRegister, close }: Props) {
  const {handleInput, input, submit}= useLoginHook()
  const [error, setError] = useState(null)

  async function handleSubmit(e:React.MouseEvent<HTMLButtonElement>){

      const response = await submit(e)
      if(!response.response){
        toast.success('🦄 Wow so easy!', {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
          });
        close()
      }else{
        setError(response.response.data.message)
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
        <Typography id="LoginTitle" variant="h6" component="h2" textAlign="center" color="white" gutterBottom>
          Iniciar Sesión
        </Typography>
        <form>
          <TextField
            value={input.email}
            name={'email'}
            label="email"
            fullWidth
            margin="normal"
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
            value={input.password}
            name="password"
            fullWidth
            onChange={handleInput}
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
            onClick={handleSubmit}
            sx={{ marginTop: 2 }}
          >
            Iniciar sesión
          </Button>
          <Typography
            variant="body2"
            color="white"
            align="center"
            sx={{ marginTop: 2 }}
          >
            ¿No tienes cuenta?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={handleRegister}
              sx={{ color: "primary.main" }}
            >
              Regístrate aquí
            </Link>
          </Typography>
          {
           <Typography
           variant="body2"
           color="red"
           align="center"
           sx={{ marginTop: 2 }}
         >
         {error && error}
         </Typography>
          }
        </form>
      </Box>
    </div>
  );
}

export default Login;
