import { Button, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useTaskStore } from "../../store/taskStore";
import { MouseEventButton } from "../../interfaces/eventInterfaces";
import { useUserStore } from "../../store/userStore";
import { getToasty } from "../../helpers/totifyNotify";




function CardFooter({id}:{id:string}) {

    const {deleteTask, gettasks} = useTaskStore()
    const {token} = useUserStore()

    async function  handleDelete(e:MouseEventButton){
        e.preventDefault()
        await deleteTask(id, token)
        getToasty('Tarea eliminada', 'e')
        await gettasks(token)
    }


    return (
            <CardActions
                className="overlay-actions"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'none', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0,1)',
                    padding: '8px',

                }}
            >
                
                <Button onClick={handleDelete} size="small">
                    <DeleteIcon sx={{color:'red'}}/>
                </Button>
            </CardActions>

    );
}

export default CardFooter;