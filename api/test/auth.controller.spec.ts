import 'jest';
import { Request, Response, NextFunction } from 'express';
import { generateToken, authUser } from '../src/controllers/auth.controller';
import { prisma } from '../src/helpers/prismaSingelton';
import { response, throwError } from '../src/helpers/responseHandlers';
import { statusCode } from '../src/helpers/statusCode';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

jest.mock('../src/helpers/prismaSingelton', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
  },
}));
jest.mock('../src/helpers/responseHandlers');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('Auth Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  describe('generateToken', () => {
    it('should generate a token for valid credentials', async () => {
      mockRequest.body = { username: 'testuser', password: 'testpass', email: 'testemail' };
      const mockUser = { id: '1', username: 'testuser', password: 'hashedpass', email: 'testemail' };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (jwt.sign as jest.Mock).mockReturnValue('mockedtoken');

      await generateToken(mockRequest as Request, mockResponse as Response, mockNext);

      expect(response).toHaveBeenCalledWith(statusCode.aceptado, 'mockedtoken');
    });

    it('should throw an error for missing username or password', async () => {
      mockRequest.body = { username: 'testuser', email: 'testemail' };

      await generateToken(mockRequest as Request, mockResponse as Response, mockNext);

      expect(throwError).toHaveBeenCalledWith(statusCode.badRequest, 'Se requiere usuario y contraseña');
    });

    it('should throw an error for non-existent user', async () => {
      mockRequest.body = { username: 'nonexistent', password: 'testpass', email: 'nonexistent' };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await generateToken(mockRequest as Request, mockResponse as Response, mockNext);

      expect(throwError).toHaveBeenCalledWith(statusCode.noEncontrado, 'usuario incorrecto');
    });

    it('should throw an error for invalid password', async () => {
      mockRequest.body = { username: 'testuser', password: 'wrongpass', email: 'wrongemail' };
      const mockUser = { id: '1', username: 'testuser', password: 'hashedpass', email: 'testemail' };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await generateToken(mockRequest as Request, mockResponse as Response, mockNext);

      expect(throwError).toHaveBeenCalledWith(statusCode.noAutorizado, 'contraseña incorrecta');
    });

    it('should call next with any unexpected error', async () => {
      mockRequest.body = { username: 'testuser', password: 'testpass', email: 'testemail' };
      const mockError = new Error('Unexpected error');
      (prisma.user.findUnique as jest.Mock).mockRejectedValue(mockError);

      await generateToken(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('authUser', () => {
    it('should authenticate a user with a valid token', async () => {
      mockRequest.headers = { authorization: 'validtoken' };
      (jwt.verify as jest.Mock).mockReturnValue({ id: '1', username: 'testuser', email: 'testemail' });

      await authUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(response).toHaveBeenCalledWith(statusCode.aceptado, { id: '1', username: 'testuser' });
    });

    it('should handle expired token', async () => {
      mockRequest.headers = { authorization: 'expiredtoken' };
      const tokenError = new jwt.TokenExpiredError('jwt expired', new Date());
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw tokenError;
      });

      await authUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.objectContaining({
        message: 'token expirado',
        status: statusCode.noAutorizado
      }));
    });

    it('should handle invalid token', async () => {
      mockRequest.headers = { authorization: 'invalidtoken' };
      const tokenError = new jwt.JsonWebTokenError('invalid token');
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw tokenError;
      });

      await authUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.objectContaining({
        message: 'token invalido',
        status: statusCode.noAutorizado
      }));
    });

    it('should handle missing authorization header', async () => {
      mockRequest.headers = {};

      await authUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
    });

    it('should handle unexpected errors', async () => {
      mockRequest.headers = { authorization: 'validtoken' };
      const unexpectedError = new Error('Unexpected error');
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw unexpectedError;
      });

      await authUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(unexpectedError);
    });
  });
});