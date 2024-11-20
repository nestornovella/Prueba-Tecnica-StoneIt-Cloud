
import { useEffect, useState } from 'react';
import { Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import { useUserStore } from '../../store/userStore';
import { useTaskStore } from '../../store/taskStore';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const {token} = useUserStore()
  const {searchTask, serchedTask, resetSearchTask} = useTaskStore()
  
  
  
  const handleSearch = () => {
      searchTask(searchValue, token)
  };
  
  const handleClear = () => {
    setSearchValue('');
    resetSearchTask()
    
  };

  useEffect(()=>{
    console.log(serchedTask)
  }, [serchedTask])

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={{ xs: 4, md: 0 }}
      marginBottom={5}
      spacing={2}
    >
      <Grid item xs={12} sm={8}>
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar tarea"
          placeholder="Ingresa tu búsqueda..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {/* Botón para limpiar búsqueda */}
                <IconButton
                  onClick={handleClear}
                  edge="end"
                  sx={{ marginRight: 1 }} 
                >
                  <ClearIcon style={{ color: 'white' }} />
                </IconButton>
                {/* Botón para enviar búsqueda */}
                <IconButton onClick={handleSearch} edge="end">
                  <SendIcon style={{ color: 'white' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: '#080808',
            borderRadius: '5px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
              '& fieldset': {
                borderColor: 'blue',
                borderRadius: '5px',
              },
              '&:hover fieldset': {
                borderColor: 'blue',
                borderRadius: '5px',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'blue',
                borderRadius: '5px',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default SearchBar;
