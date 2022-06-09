import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { user: User, post: Post } = prisma

const userController= {
    getAll(req, res) {
        User.findMany()
            .then((data) => {
                res.status(200).send(data)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    get(req, res) {
        const { id } = req.params

        User.findUnique({
            where: {
                id: parseInt(id)
            }
        })
            .then((data) => {
                data
                    ? res.status(200).send(data)
                    : res.status(404).send({
                        message: `canot find user with this id: ${id}`
                    })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    create(req, res) {
        const { name } = req.body
        User.create({
            data: {
                name: name
            }
        })
            .then((data) => {
                res.status(201).send({
                    message: `User created success`
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    update(req, res) {
        const { id } = req.params
        const { name } = req.body
        User.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: name
            }
        })
            .then((data) => {
                res.status(200).send({
                    message: `user update success`
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
    delete(req, res) {
        const { id } = req.params
        const deletePost = Post.deleteMany({
            where: {
                userId: parseInt(id)
            }
        })
        const deleteUser = User.delete({
            where: {
                id: parseInt(id)
            }
        })
        
        prisma.$transaction([deletePost, deleteUser])
            .then(() => {
                res.status(200).send({
                    messsage: 'user deleted success'
                })
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },
}

export { userController }