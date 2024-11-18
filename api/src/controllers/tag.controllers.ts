import { NextFunction, Request, Response } from "express";
import { prisma } from "../helpers/prismaSingelton";
import { response, throwError } from "../helpers/responseHandlers";
import { statusCode } from "../helpers/statusCode";


export async function getAllTag(req: Request, res: Response, next: NextFunction) {
    try {
        const tags = await prisma.tag.findMany()
        response(statusCode.aceptado, tags)
    } catch (error) {
        next(error)
    }
}


export async function createTag(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body
    try {
        if (!name) throwError(statusCode.badRequest, 'parametros invalidos')
        const newTag = await prisma.tag.create({ data: { name: name } })
        if (!newTag) throwError(statusCode.badRequest, 'no se pudo crear el tag')
        response(statusCode.creado, newTag)
    } catch (error) {
        next(error)
    }
}

export async function deleteTag(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        if (!id) throwError(statusCode.badRequest, 'parametros invalidos se requiere el id')
        const deleted = await prisma.tag.delete({ where: { id: id } })

        return response(statusCode.aceptado, "eliminado con exito" )


    } catch (error) {
        next(error)
    }
}