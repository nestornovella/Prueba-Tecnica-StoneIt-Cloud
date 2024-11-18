import { Grid } from '@mui/material';
import WallpaperImage from './WallpaperImage'; // Asegúrate de importar tu componente de imagen
import { useConfigStore } from '../../../store/configStore';


function RenderImages() {
    const wallpapers = [
        'https://i.pinimg.com/originals/8a/10/37/8a10377f0144cb32768848eedaeb93ae.jpg',
        'https://wallpapers.com/images/hd/4k-nature-paradise-56stfzl6u0lg6u9l.jpg',
        'https://wallpapers.com/images/hd/super-high-resolution-nature-qesqnv37jsltzlmi.jpg',
        'https://www.creativefabrica.com/wp-content/uploads/2023/05/31/Autumn-Landscape-High-Resolution-Realistic-71036945-1.png',
        'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?cs=srgb&dl=pexels-souvenirpixels-1619317.jpg&fm=jpg',
        'https://c4.wallpaperflare.com/wallpaper/944/101/225/arbol-naturaleza-paisaje-primavera-wallpaper-preview.jpg'


    ]
    return (
        <Grid padding={4} container spacing={2} justifyContent="center">
            {
                wallpapers.map(wp => {
                    return <Grid item xs={6} sm={6} md={6} xl={6}>
                        <WallpaperImage src={wp as string} />
                    </Grid>
                })
            }
        </Grid>
    );
}

export default RenderImages;
