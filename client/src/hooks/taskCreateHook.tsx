import { useState } from "react";
import { ChangeEventInput, MouseEventButton } from "../interfaces/eventInterfaces";
import axios from "axios";
import { useUserStore } from "../store/userStore";
import { useTaskStore } from "../store/taskStore";

export type TaskInput = {
    title: string;
    description: string;
    deadline: Date;
    tags: { id: string, name:string }[]
};

function useTaskCreateHook() {
    const { token } = useUserStore()
    const { gettasks } = useTaskStore()
    const [input, setInput] = useState<TaskInput>({
        title: '',
        description: '',
        deadline: new Date(),
        tags: []
    })
    const [tags, setTags] = useState([])


    
    function handleinput(e: ChangeEventInput) {
        const [year, month, day] = e.target.value.split("-").map(Number);
        const date = new Date(Date.UTC(year, month - 1, day + 1));
        if (e.target.name == 'deadline') {
            setInput(prev => ({
                ...prev,
                [e.target.name]: date
            }))
        } else {
            setInput(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }

    function handleTag(tagId: string, name:string) {
        setInput(prev => ({
            ...prev,
            tags: [...prev.tags, { id: tagId, name:name }]
        }))
    }

    function deleteTag(id:string){
        setInput(prev => ({
            ...prev,
            tags: prev.tags.filter(tg => tg.id != id)
        }))
    }

    async function getTags() {
        const response = await axios.get(import.meta.env.VITE_TAG_URL)
        if (response.data.status < 300) {
            setTags(response.data.data)
        }
        return response
    }

    async function submit(e: MouseEventButton) {
        e.preventDefault()
        const parsedInput = {
            ...input,
            tags: input.tags.map(tg => ({id:tg.id}))
        }
        const response = await axios.post(import.meta.env.VITE_TASK_URL, parsedInput, {
            headers: {
                Authorization: token
            }
        })
        if (response.data) {
            gettasks(token)
        }
        setInput({
            title: '',
            description: '',
            deadline: new Date(),
            tags:[]

        })
    }


    return {
        input,
        tags,
        handleinput,
        submit,
        handleTag,
        getTags,
        deleteTag

    };
}

export default useTaskCreateHook;