import { Box, Button, CardActions } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';




function CardFooter() {
    return (

            <CardActions
                className="overlay-actions"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'none', // Ocultar por defecto
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0,1)',
                    padding: '8px',

                }}
            >
                <Button size="small">
                    <VisibilityIcon />
                </Button>
                <Button size="small">
                    <DeleteIcon />
                </Button>
            </CardActions>

    );
}

export default CardFooter;