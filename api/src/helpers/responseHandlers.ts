import { returnRes } from "./capturRes";



export function response(status=202, data){

    if(typeof data == 'string'){
        returnRes().status(status).json({
            status,
            message: data
        })
    }else{
        returnRes().status(status).json({
            status,
            data
        })
    }
}


export function throwError(status=500, message='Server Error'){
    const error: any= new Error()
    error.message = message
    error.status = status
    throw error
}