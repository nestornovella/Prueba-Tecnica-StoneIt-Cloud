import { returnRes } from "./capturRes";



export function response(status=202, message='success'){
    return returnRes().status(status).json({
        status,
        message
    })
}


export function throwError(status=500, message='Server Error'){
    const error: any= new Error()
    error.message = message
    error.status = status
    throw error
}