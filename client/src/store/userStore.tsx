import axios from 'axios'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface UserInterface {
    user: null | User;
    errors: null | Record<string, string>
    loading: boolean;
    token: null | string,
    getPersistentUser:()=> string | null
    loginUser: (user:any) => Promise<any>;
    logOut:()=> void
    authUser: (token?:string | null)=>Promise<void>
    setLocalStorageToken:(token:string, user:User)=>void
}


const URLS = {
    userPath: import.meta.env.VITE_USER_URL,
    authPath: import.meta.env.VITE_AUTH_URL
}

interface User{
    username: string
    password: string
    email: string
}

export const useUserStore = create<UserInterface>()(
    persist((set, get)=>({
    user:null,
    token:null,
    loading:false,
    errors:null,

    loginUser: async (user)=>{
        set(()=> ({loading: true}))
        try {
            const token = await axios.post(URLS.authPath, user)
            set(()=> ({token: token.data.message, loading: false}))
            return token
        } catch (error:any) {
            return error
        }
    }, 
    logOut: async ()=>{
            set(()=> ({token: null, user:null}))
        
    }, 
    getUser: () => {
        return get().user; // Obtener el valor de 'user' persistido
    },
    
    authUser: async (token)=>{
        try {
            
            const tk = token ? token : get().token
            const user = await axios.get(URLS.authPath,{
                headers:{
                    Authorization: tk 
                }  
            })
            set(()=>{
                return {user:user.data.data}
            })
        } catch (error) {   

        }
    },
    setLocalStorageToken:(token:string)=>{
        set(()=>({
            token:token
        }))
    },
    getPersistentUser: () => {
        return get().token; 
    },
}),{
    name:'localState',
    partialize: (store)=> ({token:store.token, user:store.user}),

})
    )