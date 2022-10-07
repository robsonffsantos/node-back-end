import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getChar = async (ctx) => {
    const page = ctx.params.page
    try{
        const char = await prisma.char.findMany({
            take: 4,
            skip: +page !== 0 ? 4 * (+page - 1) : 0
        })

            ctx.body = char
            ctx.status = 200
    } catch (error) {
        ctx.body = error
        ctx.status = 500
        console.log(error)
    }
}