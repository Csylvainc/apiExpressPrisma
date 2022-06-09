import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const {user: User} = prisma

async function main() {
    await User.create({
        data: {
            name: 'John',
            posts: {
                create: [
                    {
                        title: 'js destructuration',
                        content: 'lorem ipsum dolor sit'
                    },
                    {
                        title: 'Réact',
                        content: 'lorem ipsum dolor sit'
                    }
                ]
            }
        }
    })
}

main()
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })