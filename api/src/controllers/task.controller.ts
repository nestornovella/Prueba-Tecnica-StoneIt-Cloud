import { Request, Response } from "express";
import { JwtPayload, verify } from 'jsonwebtoken'
import { response, throwError } from "../helpers/responseHandlers";
import { statusCode } from "../helpers/statusCode";
import { prisma } from "../helpers/prismaSingelton";

const secretKey = process.env.SECRET_KEY_JWT || 'clave-secreta-1wxcwasd234';
const statusOptions = {
    pendiente: 'pendiente',
    enProgreso: 'enProgreso',
    completado: 'completado'
}

export async function getTasks(req: Request, res: Response, next: NewableFunction) {
    const { authorization } = req.headers;
    const {status, tag, search} = req.query;
    try {
        const userAuth: JwtPayload | string = verify(authorization, secretKey)
        if (typeof userAuth == 'string') throwError(statusCode.noAutorizado, 'token no valido')
        if (typeof userAuth == 'object' && 'id' in userAuth) {
            if(search){
                const userTasks = await prisma.task.findMany({ where: { userId: userAuth.id, title:{contains:search.toString(),} },include:{tags:true} })
                response(statusCode.aceptado, userTasks)
            }
            else if(status && status == 'all' && tag){
                const userTasks = await prisma.task.findMany({ where: { userId: userAuth.id, tags:{some:{name:tag.toString()}},status:{in: ['pendiente', 'progreso']} },include:{tags:true} })
                response(statusCode.aceptado, userTasks)
            }
            else if(status && tag){
                const userTasks = await prisma.task.findMany({ where: { userId: userAuth.id, tags:{some:{name:tag.toString()}}, status:status.toString() },include:{tags:true} })
                response(statusCode.aceptado, userTasks)
            }
            else if(status){
                const userTasks = await prisma.task.findMany({ where: { userId: userAuth.id, status:status.toString() },include:{tags:true} })
                response(statusCode.aceptado, userTasks)
            }else if(tag){
                const userTasks = await prisma.task.findMany({ where: { userId: userAuth.id, tags:{some:{name:tag.toString()}} },include:{tags:true} })
                response(statusCode.aceptado, userTasks)
            }else{
                const userTasks = await prisma.task.findMany({ where: { userId: userAuth.id,status:{in: ['pendiente', 'progreso']}, },include:{tags:true}, orderBy:[{status:'desc'}] })
                response(statusCode.aceptado, userTasks)
            }
        }
    } catch (error) {
        next(error)
    }
}

export async function createTask(req: Request, res: Response, next: NewableFunction) {
    const { authorization } = req.headers
    const date = new Date()
    const { description, title, deadline, tags } = req.body
    // id title description deadline status
    try {
        if (!description || !title || !deadline) throwError(statusCode.badRequest, "parametros invalidos")
        const userAuth: JwtPayload | string = verify(authorization, secretKey)
        if (typeof userAuth == 'string') throwError(statusCode.noAutorizado, 'token no valido')
        if (typeof userAuth == 'object' && 'id' in userAuth) {
            const newTask = await prisma.task.create({
                data: {
                    description: description,
                    title: title,
                    deadline: deadline || date,
                    userId: userAuth.id,
                    tags:{
                        connect:tags
                    }
                },
                
            })
            response(statusCode.creado, newTask)
        }
        else {
            throwError(statusCode.errorServidor, 'error inesperado')
        }
    } catch (error) {
        next(error)
    }
}

export async function deleteTask(req: Request, res: Response, next: NewableFunction) {
    const { authorization } = req.headers
    const { id } = req.params

    try {
        const userAuth: JwtPayload | string = verify(authorization, secretKey)
        if (!id) throwError(statusCode.badRequest, 'parametro invalido se requiere id')
        if (typeof userAuth == 'string') throwError(statusCode.noAutorizado, 'token no valido')
        const deleted = await prisma.task.delete({
            where: {
                id: id
            },
        })
        if (!deleted) throwError(statusCode.badRequest, 'no se pudo eliminar la tarea')
        response(statusCode.aceptado, 'la tarea se elimino con exito')
    } catch (error) {
        next(error)
    }
}

export async function updateTask(req: Request, res: Response, next: NewableFunction) {
    const { authorization } = req.headers
    const {id} = req.params
    try {
        const userAuth: JwtPayload | string = verify(authorization, secretKey)
        if (typeof userAuth == 'string') throwError(statusCode.noAutorizado, 'token no valido')
        const updated = await prisma.task.update({
            where: {
                id:id
            },
            data:req.body
        })
        if (!updated) throwError(statusCode.badRequest, 'no se pudo actualizar la tarea')
        response(statusCode.aceptado, updated)
    } catch (error) {
        next(error)
    }
}

