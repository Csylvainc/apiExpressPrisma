import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(cors())

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is working"
    })
    
})

import { postRouter } from "./routes/post.js";
import { userRouter } from "./routes/user.js";
server.use('/post',postRouter)
server.use('/user', userRouter)

server.listen(process.env.SERVER_PORT)

export default server