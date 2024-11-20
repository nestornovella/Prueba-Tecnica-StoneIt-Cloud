import { ButtonBase, CardMedia, Box } from '@mui/material';
import { useConfigStore } from '../../../store/configStore';

interface ClickableImageProps {
    src: string;

}

const WallpaperImage = ({ src }:ClickableImageProps) => {

    const {setWallpaper} = useConfigStore()

    function handleWallPaper(){
        setWallpaper(src)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonBase onClick={handleWallPaper}>
                <CardMedia
                    component="img"
                    sx={{
                        width: {xs:'100%'},
                        height: {md:'120px', xs:'100px'},
                        borderRadius: 2,
                    }}
                    image={src}
                />
            </ButtonBase>
        </Box>
    );
};

export default WallpaperImage