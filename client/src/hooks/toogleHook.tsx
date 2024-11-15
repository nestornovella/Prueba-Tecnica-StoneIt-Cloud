import { useState } from "react";



function useToogle() {
    
    const [isOpen, setIsOpen] = useState(false)

    function toogle(){
        setIsOpen(prev => !prev)
    }

    function close (){
        setIsOpen(false)
    }
    
    function open (){
        setIsOpen(true)

    }

    return ( {
        isOpen,
        toogle,
        close,
        open
    } );
}

export default useToogle;