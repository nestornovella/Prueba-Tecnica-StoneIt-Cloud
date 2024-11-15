import axios from "axios";
import { useState } from "react";



function userRegisterHook() {
    
    const [input, setInput] = useState({
        username:'',
        password: '',
    })

    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        setInput(prev => ({
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }

    async function submit(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        const response = await axios.post(import.meta.env.VITE_USER_URL, input)
        return response
    }

    return {    
        input,
        handleInput,
        submit
    };
}

export default userRegisterHook;