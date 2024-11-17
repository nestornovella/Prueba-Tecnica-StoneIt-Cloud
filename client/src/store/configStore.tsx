import {create} from 'zustand'
import { persist } from 'zustand/middleware'


interface ConfigurationStore{
    wallpaper:string | null
    setWallpaper: (imageUrl:string)=> void
    getWallpaper:()=> string 
}


export const useConfigStore = create<ConfigurationStore>()(persist((set, get)=>({
    wallpaper:'https://i.pinimg.com/originals/8a/10/37/8a10377f0144cb32768848eedaeb93ae.jpg',
    
    setWallpaper: (imageUrl)=>{
        set(()=> ({wallpaper: imageUrl}))
    },

    getWallpaper:()=> {
        const storageWallpaper = get().wallpaper
        
        if(storageWallpaper){
            return storageWallpaper
        }
        return 'https://i.pinimg.com/originals/8a/10/37/8a10377f0144cb32768848eedaeb93ae.jpg'

    }


}),{name:'configuration'}))