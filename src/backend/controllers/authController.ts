import type { Request, Response } from "express"
// import validator from 'validator'
// import bcrypt from 'bcryptjs'

export async function registerUser(req: Request, res: Response) {
    console.log(req.body)
    res.send("Register user here")
}

export async function loginUser(req: Request, res: Response) {
    console.log(req.body)
    res.send("Login user here")
}


export async function logoutUser(req: Request, res: Response) {
    console.log(req.body)
    res.send("logout user here")
}