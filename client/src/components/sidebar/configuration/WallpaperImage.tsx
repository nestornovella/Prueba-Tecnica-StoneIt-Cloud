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
                        width: {md:'160px', xs:'130px'},
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