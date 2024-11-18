import { NextFunction, Request, Response } from "express";
import { response, throwError } from "../helpers/responseHandlers";
import { statusCode } from "../helpers/statusCode";
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prisma } from "../helpers/prismaSingelton";


const secretKey = process.env.SECRET_KEY_JWT || 'clave-secreta-1wxcwasd234';

export async function generateToken(req: Request, res: Response, next: NextFunction) {
    try {
        const { username, password, email } = req.body
        if ( !password || !email) throwError(statusCode.badRequest, 'invalid params')
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        if (!user) throwError(statusCode.noEncontrado, 'usuario invalido')
        if (!(await compare(password, user.password))) throwError(statusCode.noAutorizado, 'contraseña invalida')
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1d' })
        response(statusCode.aceptado, token)
    } catch (error) {
        next(error)
    }
}


export async function authUser(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    try {
        const {id, username, email}:any = jwt.verify(authorization, secretKey)
        response(statusCode.aceptado, {id, username})
    } catch (error) {
        const er:any = new Error()
        if (error instanceof jwt.TokenExpiredError) {
            er.message = 'token expirado'
            er.status = statusCode.noAutorizado
            next(er)
        } else if (error instanceof jwt.JsonWebTokenError) {
            er.message = 'token invalido'
            er.status = statusCode.noAutorizado
            next(er)
        }
        else{
            next(error);
        }
    }
}