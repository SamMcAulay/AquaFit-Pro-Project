import { Request } from 'express';

export interface JwtUser {
  userId: number;
  email: string;
  role: string;
}

export interface AuthenticatedRequest extends Request {
  user: JwtUser; // ❗ remove optional (no ?)
}
