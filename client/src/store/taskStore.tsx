import axios from 'axios'
import { create } from 'zustand'


export interface Tag {
    name: string
}

export interface Task {
    id: string
    title: string,
    description: string,
    deadline: Date,
    status: string,
    tag: Tag[]
}

interface TaskInterface {
    tasks: Task[],
    serchedTask: Task[],
    gettasks: (token: string | null) => Promise<any>
    deleteTask: (id: string | null, token: string | null) => any
    logOutTask: () => void,
    updateTaskStatus: (id: string | null, token: string | null, status: string | null) => Promise<any>
    filterTasks:(status:string | null, tag:string | null, token: string | null)=>Promise<200 | undefined>
    searchTask:(search:string | null, token:string | null)=>Promise<200 | undefined>
    resetSearchTask:()=>void

}



export const useTaskStore = create<TaskInterface>((set) => ({

    tasks: [],
    serchedTask:[],
    gettasks: async (token) => {
        try {

            if (!token) throw new Error('Debes iniciar sesion')
            const response = await axios.get(import.meta.env.VITE_TASK_URL, { headers: { Authorization: token } })
            if (response.data.status < 300) {
                set(() => ({ tasks: response.data.data }))
            }
            return 200

        } catch (error: any) {
            console.error(error)

        }
    },

    searchTask: async (search, token)=>{
        try {
            if (!token) throw new Error('Debes iniciar sesion')
            
                const response = await axios.get(`${import.meta.env.VITE_TASK_URL}?search=${search}`, { headers: { Authorization: token } })
                if (response.data.status < 300) {
                    set(() => ({ serchedTask: response.data.data }))
                }
                return 200
        } catch (error) {
            console.error(error)
        }

    },
    resetSearchTask:()=>{
        set(()=>({serchedTask:[]}))
    },

    filterTasks: async (status, tag, token) => {
        try {
            if(status && tag){
                const response = await axios.get(`${import.meta.env.VITE_TASK_URL}?status=${status}&tag=${tag}`, { headers: { Authorization: token } }) 
                if (response.data.status < 300) {
                    set(() => ({ tasks: response.data.data }))
                }
            }else if(status){
                const response = await axios.get(`${import.meta.env.VITE_TASK_URL}?status=${status}`, { headers: { Authorization: token } }) 
                if (response.data.status < 300) {
                    set(() => ({ tasks: response.data.data }))
                }
            }else{
                const response = await axios.get(`${import.meta.env.VITE_TASK_URL}?tag=${tag}`, { headers: { Authorization: token } }) 
                if (response.data.status < 300) {
                    set(() => ({ tasks: response.data.data }))
                }
            }
            return 200
            
        } catch (error) {
            console.error(error)
        }
    },

    logOutTask: () => {
        set(() => ({ tasks: [] }))
    },

    deleteTask: async (id, token) => {
        try {
            if (!id && token) throw new Error('faltan parametros')
            await axios.delete(import.meta.env.VITE_TASK_URL + id, { headers: { Authorization: token } })
            return 200
        } catch (error: any) {
            return error.response.data
        }

    },

    updateTaskStatus: async (id, token, status) => {
        try {
            if (!id || !token || !status) throw new Error('faltan parametros o son invalidos')
            await axios.put(import.meta.env.VITE_TASK_URL + id, { status: status }, { headers: { Authorization: token } })
            const response = await axios.get(import.meta.env.VITE_TASK_URL, { headers: { Authorization: token } })
            if (response.data.status < 300) {
                set(() => ({ tasks: response.data.data }))
            }
            return 200
        } catch (error) {
            console.error(error)
        }
    }

}))