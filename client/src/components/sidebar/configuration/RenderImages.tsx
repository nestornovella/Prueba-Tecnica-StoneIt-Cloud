import { Box, Grid, Typography } from '@mui/material';
import WallpaperImage from './WallpaperImage'; // Asegúrate de importar tu componente de imagen
import { useConfigStore } from '../../../store/configStore';


function RenderImages() {
    const wallpapers = [
        'https://i.pinimg.com/originals/8a/10/37/8a10377f0144cb32768848eedaeb93ae.jpg',
        'https://aerolatinnews.com/wp-content/uploads/2014/03/seguros-rivadavia-en-bariloche.jpg',
        'https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVuZWNpYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://i.redd.it/4k-wallpaper-steampunk-train-station-v0-77dlz0e5msda1.png?width=3840&format=png&auto=webp&s=d3a1bcca6ee134966924ad05952d322b2308ab28',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg',
        'https://wallpapers.com/images/hd/aquatic-corals-and-sponges-lde5sor5tp69rt7i.jpg',
        'https://wallpapers-clan.com/wp-content/uploads/2023/12/cosmonaut-in-open-space-art-desktop-wallpaper-scaled.jpg',
        'https://www.designbcn.es/fileuploads/noticias/oficinas-modernas-20241.jpg'


    ]
    return (
        <Box padding={5} component={'div'}>
            <Typography fontFamily={"monospace"} color="white">Filtrar por:</Typography>
            <Grid padding={4} container spacing={2} justifyContent="center">

                {
                    wallpapers.map(wp => {
                        return <Grid item xs={6} sm={6} md={6} xl={6}>
                            <WallpaperImage src={wp as string} />
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    );
}

export default RenderImages;
