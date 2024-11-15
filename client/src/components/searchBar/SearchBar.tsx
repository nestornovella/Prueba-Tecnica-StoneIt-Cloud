import React from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <Grid  justifyContent={'center'} marginTop={{xs:4, md:0}} alignItems={'center'} marginBottom={5} container spacing={2}>
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar tarea"
          placeholder="Ingresa tu búsqueda..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'white' }} /> {/* Ícono de lupa en blanco */}
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: '#080808',  // Fondo negro
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'blue',  // Contorno azul
                borderRadius: 5
              },
              '&:hover fieldset': {
                borderColor: 'blue',  // Contorno azul al pasar el mouse
                borderRadius: 5
              },
              '&.Mui-focused fieldset': {
                borderColor: 'blue',  // Contorno azul cuando está enfocado
                borderRadius: 5
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white', // Etiqueta en blanco
            },
            '& .MuiInputBase-input': {
              color: 'white', // Texto del input en blanco
            },
            borderRadius: 5
          }}
        />
      </Grid>
    </Grid>
  );
}

export default SearchBar;