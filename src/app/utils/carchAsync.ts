import type { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction)  => {
    
}