import { Response, Request, NextFunction } from "express";

let response:Response;

export function returnRes(){
    return response
}

export function captureRes(req: Request, res:Response, next:NextFunction){
   
    response = res
    next()
}
