import express from "express";
const userRouter = express.Router();

import { userController } from "../controllers/user.js";

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.get)
userRouter.post('/', userController.create)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

export {userRouter};