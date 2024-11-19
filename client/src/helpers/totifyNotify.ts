import { Bounce, toast } from "react-toastify";




export function getToasty(message: string, status:string, center?:boolean) {

    if (status == 's') {
        toast.success(message, {
            position: center ? "bottom-left": "bottom-right",
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }else if(status == 'w'){
        toast.warn(message, {
            position: "bottom-right",
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }else if(status == 'e'){
        toast.error(message, {
            position: "bottom-right",
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

}