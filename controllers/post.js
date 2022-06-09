import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { post: Post } = prisma

const postController = {
    getAll(req, res) {
        Post.findMany()
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    get(req, res) {
        const { id } = req.params

        Post.findUnique({
            where: {
                id: parseInt(id)
            }
        })
            .then((data) => {
                data
                    ? res.status(200).send(data)
                    : res.status(404).send({
                        message: `canot find post with this id: ${id}`
                    })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    create(req, res) {
        const {userId, title, content, description } = req.body
        Post.create({
            data: {
                userId: parseInt(userId),
                title: title,
                content: content,
                description: description
            }
        })
            .then((data) => {
                res.status(201).send({
                    message: `Post created success`
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    update(req, res) {
        const { id } = req.params
        const { title, content, description } = req.body
        Post.update({
            where: {
                id: parseInt(id)
            },
            data: {
                title: title,
                content: content,
                description: description
            }
        })
            .then((data) => {
                res.status(200).send({
                    message: `post update success`
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    delete(req, res) {
        const { id } = req.params
        
        Post.delete({
            where: {
                id: parseInt(id)
            }
        })
        
     
            .then(() => {
                res.status(200).send({
                    messsage: 'post deleted success'
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
}

export {postController};