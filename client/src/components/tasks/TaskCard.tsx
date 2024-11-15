import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Styles from './card.module.css'

import CardSelect from './CardSelect';
import { Box } from '@mui/material';
import CardFooter from './CardFooter';


interface TaskProps{
    title:string
    description: string
}

function TaskCard({title, description}:TaskProps) {

    const url = 'https://e0.pxfuel.com/wallpapers/818/953/desktop-wallpaper-dark-gradient-pattern-circles-texture.jpg'
    return (
        <Box component={'div'}  justifyContent={'center'}  display={'flex'}>
            <Card
           
                className={Styles.card}
                sx={{
                    width: 600,
                    height:{xs:150,md:200},
                    backgroundColor: '#080808',
                    color: 'white',
                    position: 'relative', // Para que los botones se posicionen relativos a la Card
                    overflow: 'hidden',
                    '&:hover .overlay-actions': { // Mostrar los botones en hover
                        display: 'flex',
                    },
                    borderRadius:2
                }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        position: 'relative',
                        height: 50,
                        backgroundImage: `url(${url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {/* componente select */}
                    {/* componente select */}

                    {/* <Typography width={"100%"} variant="h4" justifyContent={'center'} color='white'>Pendiente</Typography> */}
                </CardMedia>
                    <CardSelect />
                <CardContent sx={{ maxHeight: { xs: 140 }, overflow: 'hidden' }}>
                    <Typography gutterBottom color='info' variant="button" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="">
                        {description}
                    </Typography>

                    {/* componente botones */}
                </CardContent>
                    {/* componente botones */}

                <CardFooter />
            </Card>
        </Box>


    );
}

export default TaskCard