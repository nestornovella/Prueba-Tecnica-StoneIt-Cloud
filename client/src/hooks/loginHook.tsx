import { useEffect, useState } from "react";
import { useUserStore } from "../store/userStore";



function useLoginHook() {

    const { loginUser, authUser, loading } = useUserStore()

    const [input, setInput] = useState({
        password: '',
        email: ''
    })


    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const response = await loginUser(input)
        if (!response.response) {
            authUser(response.data.message)
            return response
        } else {
            return response
        }

    }


    return {
        input,
        handleInput,
        submit,
        loading
    };
}

export default useLoginHook;