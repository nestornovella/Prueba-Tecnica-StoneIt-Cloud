import axios from 'axios'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface UserInterface {
    user: null | object;
    errors: null | Record<string, string>
    loading: boolean;
    token: null | string,
    getPersistentUser:()=> string | null
    loginUser: (user: User) => Promise<any>;
    logOut:()=> void
    authUser: (token?:string | null)=>Promise<void>
}


const URLS = {
    userPath: import.meta.env.VITE_USER_URL,
    authPath: import.meta.env.VITE_AUTH_URL
}

interface User{
    username: string
    password: string
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
            console.log('-->',token)
            return token
        } catch (error:any) {
            console.log(error)
            //set((store)=> ({errors: {...store.errors, [error.response.data.status]:error.response.data.message}}))
            return error
        }
    }, 
    logOut: async ()=>{
            set(()=> ({token: null, user:null}))
        
    }, 
    authUser: async (token)=>{
        try {
            
            const tk = token ? token : get().token
            console.log('token ->',tk)
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
    getPersistentUser: () => {
        return get().token; // Obtener el valor de 'user' persistido
      },
}),{
    name:'localState',
    partialize: (store)=> ({token:store.token}),

})
    )