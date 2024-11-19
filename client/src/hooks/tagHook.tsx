import { useState } from "react";
import { ChangeEventInput } from "../interfaces/eventInterfaces";
import axios from "axios";


function useTagHook() {
    const [input, setInput] = useState({
        name:''
    })


    function handleInput(e:ChangeEventInput){
        setInput(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }


    async function submit(){
        try {
            const response = await axios.post(import.meta.env.VITE_TAG_URL, input)
            setInput({name:''})
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
    return {
        input,
        handleInput,
        submit
    };
}

export default useTagHook;