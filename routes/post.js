import express from "express";
const postRouter = express.Router();

import {postController} from "../controllers/post.js";

postRouter.get('/', postController.getAll)
postRouter.get('/:id', postController.get)
postRouter.post('/', postController.create)
postRouter.put('/:id', postController.update)
postRouter.delete('/:id', postController.delete)

export {postRouter};