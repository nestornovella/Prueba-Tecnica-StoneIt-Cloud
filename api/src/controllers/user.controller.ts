import { NextFunction, Request, Response } from "express";
import { response, throwError } from "../helpers/responseHandlers";
import { statusCode } from "../helpers/statusCode";
import { hash } from 'bcrypt'
import { prisma } from "../helpers/prismaSingelton";
import jwt from 'jsonwebtoken'


const secretKey = process.env.SECRET_KEY_JWT || 'clave-secreta-1wxcwasd234';


export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const allUsers = await prisma.user.findMany()
        response(statusCode.creado, allUsers)
    } catch (error) {
        next(error)
    }
}

export async function userRegister(req: Request, res: Response, next: NextFunction) {

    const { username, password } = req.body
    try {
        if (!username || !password) throwError(statusCode.badRequest, "parametros invalidos")
        const verifyUserExistence = await prisma.user.findUnique({where:{username: username}})
        if(verifyUserExistence) throwError(statusCode.badRequest, 'el usuario que intenta crear ya existe')
        const newUser = await prisma.user.create({
            data: {
                username,
                password: await hash(password, 10)
            }
        })
        const token = jwt.sign({ id: newUser.id, username: newUser.username }, secretKey, { expiresIn: '1d' })

        if (!newUser) throwError(statusCode.errorServidor, 'usuario no creado')

        response(statusCode.creado, {user:newUser, token})

    } catch (error) {
        next(error)
    }
}