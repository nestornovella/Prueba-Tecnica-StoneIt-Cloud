import axios from 'axios'
import {create} from 'zustand'



export interface Task{
    id: string
    title: string,
    description: string,
    deadline: Date,
    status:string
}

interface TaskInterface{
    tasks:Task[]
    gettasks: (token:string | null)=>Promise<any>
    deleteTask:(id:string | null, token:string | null)=> any
    logOutTask:()=>void,
    updateTaskStatus:(id: string | null,token:string | null, status:string | null)=>Promise<any>
}



export const useTaskStore =  create<TaskInterface>((set)=>({
    
    tasks:[],

    gettasks:async (token)=>{
        try {
            
            if(!token)throw new Error('Debes iniciar sesion')
            console.log(token)
            const response = await axios.get(import.meta.env.VITE_TASK_URL,{headers:{Authorization:token}})
            if(response.data.status < 300){
                set(()=>({tasks:response.data.data}))
            }
            return response
            
        } catch (error:any) {
            console.log(error)
            
        }
        

    },

    logOutTask:()=>{
        set(()=>({tasks:[]}))
    },

    deleteTask: async (id, token)=>{
        try {
            if(!id && token)throw new Error('faltan parametros')
            const deleted = await axios.delete(import.meta.env.VITE_TASK_URL + id, {headers:{Authorization:token}})
            return deleted.data
        } catch (error:any) {
            return error.response.data
        }

    },

    updateTaskStatus: async(id, token, status)=>{
        try {
            console.log(status)
            if(!id || !token || !status) throw new Error('faltan parametros o son invalidos')
            const update = await axios.put(import.meta.env.VITE_TASK_URL + id, {status:status}, {headers:{Authorization:token}})
            if(update?.data?.data){
                return update.data.data
            }

        } catch (error) {
            console.error(error)
        }
    }

}))