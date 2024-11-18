import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Styles from './card.module.css';

import CardSelect from './CardSelect';
import { Box } from '@mui/material';
import CardFooter from './CardFooter';

interface TaskProps {
    title: string;
    description: string;
    deadline: Date;
    id: string;
    status: string;
}

function TaskCard({ title, description, deadline, id, status }: TaskProps) {
    const url = 'https://torange.biz/photo/37/IMAGE/hearts-heart-backgrounds-lights-dark-background-37845.jpg';

    const calculateRemainingDays = (deadline: Date) => {
        const now = new Date();
        const diffTime = new Date(deadline).getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
        return diffDays;
    };

    const remainingDays = calculateRemainingDays(deadline);
    let deadlineText = `${remainingDays} días`;
    let deadlineColor = 'green';

    if (remainingDays <= 3 && remainingDays > 1) {
        deadlineColor = 'orange';
    } else if (remainingDays <= 1 && remainingDays >= 0) {
        deadlineText = 'Finaliza Hoy'
        deadlineColor = 'red';
    } else if (remainingDays < 0) {
        deadlineText = 'Finalizada';
        deadlineColor = 'gray';
    }
    //'#080808'
    return (
        <Box component={'div'} justifyContent={'center'} display={'flex'}>
            <Card
                className={Styles.card}
                sx={{
                    width: 600,
                    height: { xs: 170, md: 200 },
                    backgroundColor: 'rgba(2, 2, 20, 0.48)' ,
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover .overlay-actions': {
                        display: 'flex',
                    },
                    borderRadius: 2,
                    
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
                </CardMedia>
                <CardSelect id={id} status={status} />
                <CardContent sx={{ maxHeight: { xs: 140 }, overflow: 'hidden' }}>
                    <Typography  fontFamily={'Sour Gummy'}fontSize={17} gutterBottom sx={{color:'#fff'}} variant="button" component="div">
                        {title}
                    </Typography>
                    <Box sx={{ overflowY: 'scroll', height: '60px' }} component={'div'}>
                        <Typography fontFamily={'Sour Gummy'} fontSize={13} fontWeight={500}   variant="body2" sx={{color:'#fff'}}>
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
                <CardFooter id={id} />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="body2"
                        color={deadlineColor}
                        sx={{ fontWeight: 'bold' }}
                    >
                        {`Finaliza en: ${deadlineText}`}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}

export default TaskCard;
