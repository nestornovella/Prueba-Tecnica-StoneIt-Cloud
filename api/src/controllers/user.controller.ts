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

    const { username, password, email } = req.body
    try {
        if (!username || !password || !email) throwError(statusCode.badRequest, "se requiere nombre de usuario email y contraseña")
        const verifyUserExistence = await prisma.user.findFirst({where:{email: email}})
        if(verifyUserExistence) throwError(statusCode.badRequest, 'el usuario que intenta crear ya existe')
        const newUser = await prisma.user.create({
            data: {
                username,
                password: await hash(password, 10),
                email
            }
        })
        const token = jwt.sign({ id: newUser.id, username: newUser.username, email: newUser.email }, secretKey, { expiresIn: '1d' })

        if (!newUser) throwError(statusCode.errorServidor, 'usuario no creado')

        response(statusCode.creado, {user:newUser, token})

    } catch (error) {
        next(error)
    }
}