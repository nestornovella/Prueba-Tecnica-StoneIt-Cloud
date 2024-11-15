import { useState } from "react";
import { ChangeEventInput, MouseEventButton } from "../interfaces/eventInterfaces";
import axios from "axios";
import { useUserStore } from "../store/userStore";



function useTaskCreateHook() {
    const [input, setInput] = useState({
        title: '',
        description: '',
        deadline: ''
    })
    const {token} = useUserStore()

    console.log(token)

    function handleinput(e: ChangeEventInput) {
        const [year, month, day] = e.target.value.split("-").map(Number);
        const date = new Date(Date.UTC(year, month - 1, day + 1));
        if (e.target.name == 'deadline') {
            setInput(prev => ({
                ...prev,
                [e.target.name]: date
            }))
        }else{
            setInput(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
        }
    }


    async function  submit(e: MouseEventButton) {
        e.preventDefault()
        const response = await axios.post(import.meta.env.VITE_TASK_URL,input, {
            headers:{
                Authorization:token
            }
        })
    }


    return {
        input,
        handleinput,
        submit
    };
}

export default useTaskCreateHook;