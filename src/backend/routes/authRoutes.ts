import express from "express"
import { loginUser, logoutUser, registerUser } from "../controllers/authController.ts"

export const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.get('/logout', logoutUser)