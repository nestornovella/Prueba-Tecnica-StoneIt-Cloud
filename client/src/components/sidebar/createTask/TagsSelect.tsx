
import { Box, Button } from "@mui/material";
import { TaskInput } from "../../../hooks/taskCreateHook";
import { useEffect } from "react";
import useToogle from "../../../hooks/toogleHook";
import { MouseEventButton } from "../../../interfaces/eventInterfaces";
import { Tag } from "../../../store/taskStore";

interface Props{
    getTags: ()=>void
    tags:Tag[]
    handleTag:(tagId:string, name:string)=>void
    input: TaskInput
}

function TagSelect({getTags, tags, handleTag, input}:Props) {
    const { isOpen, toogle } = useToogle()
    useEffect(() => {
        getTags()
    }, [])

    function handle(e: MouseEventButton) {
        const tagId = e.currentTarget.id;
        const tagExists = input.tags.some((tag) => tag.id === tagId);
        const tagName = e.currentTarget.textContent || ''
        if (!tagExists) {
            handleTag(tagId, tagName);
            
        }
    }
    return (
        <Box component={'div'} sx={{ position: 'relative' }} >
            <Box component={'div'} >
                <Button variant="outlined" fullWidth sx={{ padding: 1 }} color="secondary" onClick={toogle}>
                    Agregar Etiqueta
                </Button>
            </Box>
            <Box component={'div'} sx={{ position: 'absolute', zIndex: 5000, backgroundColor: 'black', display: isOpen ? 'block' : 'none', width: '100%' }} >
                {
                    tags && tags.map((tg: any) => {
                        return (
                            <Button key={tg.id} id={tg.id} data-name={tg.name} onClick={handle} fullWidth variant="text" color="secondary">
                                {tg.name}
                            </Button>
                        )
                    })
                }

            </Box>

        </Box>
    );
}

export default TagSelect;
