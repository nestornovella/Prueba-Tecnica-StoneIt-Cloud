
import { Box, Grid } from "@mui/material";
import TaskCard from './TaskCard';
import { useTaskStore } from '../../store/taskStore';
import { useEffect } from 'react';
import { useUserStore } from '../../store/userStore';




function TasksRender() {
    const { token, authUser, user } = useUserStore()
    const { gettasks, tasks, serchedTask } = useTaskStore()

    useEffect(() => {
        authUser()
        if (token) {
            gettasks(token)
        }
    }, [token])


    return (
        <Box paddingBottom={'10px'} component={'div'}>
            <Grid container margin={20} spacing={{ xs: 3, md: 2 }}>
                {
                    !serchedTask.length ? tasks?.map(e => {
                        return (
                            <Grid key={e.id} item xs={12} md={4} xl={4} >
                                <TaskCard deadline={e.deadline} id={e.id} title={e.title} description={e.description} status={e.status} tags={e.tags}/>
                            </Grid>
                        )
                    }) :
                        serchedTask?.map(e => {
                            return (
                                <Grid key={e.id} item xs={12} md={4} xl={4} >
                                    <TaskCard deadline={e.deadline} id={e.id} title={e.title} description={e.description} status={e.status} tags={e.tags}/>
                                </Grid>
                            )
                        })
                }

            </Grid>
        </Box>





    );
}

export default TasksRender;