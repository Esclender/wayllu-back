/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'

export interface CustomRequest extends Request {
  jwt?: any;
}
