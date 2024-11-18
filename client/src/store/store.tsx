import {create} from 'zustand'

interface StoreState {
    statusOpen: boolean;
    isMounted: boolean
    toogleOpen: () => void;
    toogleMonted: () => void;
}

interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

interface TaskState {
    data: object;
    isLoading:boolean
    errors:null | object
    fetchTasks:()=> void
}

export const useStoreSideBar = create<StoreState>((set)=>({
    statusOpen: false,
    isMounted:false,
    
    toogleMonted:()=>{
        set(()=>{return {isMounted:true}})
    },
    toogleOpen:()=>{
        
        set((store) => {
            return {
                statusOpen: !store.statusOpen
            }
        })
    } 
}))


export const useStoreTask = create<TaskState>(set =>({
    data:{},
    isLoading:false,
    errors:null,


    fetchTasks: async ()=>{
        try {
            set(()=> ({isLoading:true}))
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const toJS = await response.json()
            set(()=>{
                return {
                    data: toJS
                }
            })
            
        } catch (error) {
            console.error(error)
        }
    }
}))