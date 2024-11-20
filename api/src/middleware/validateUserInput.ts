import { Request, Response, NextFunction } from 'express';
import { throwError } from '../helpers/responseHandlers';
import { statusCode } from '../helpers/statusCode';

export function validateUserInput(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return throwError(statusCode.badRequest, 'El formato del email es inválido');
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{7,})/;
  if (!passwordRegex.test(password)) {
    return throwError(statusCode.badRequest, 'La contraseña debe tener al menos 7 caracteres, una mayúscula y un carácter especial');
  }
  next();
}