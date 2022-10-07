import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getChar = async (ctx) => {
    try{
        const char = await prisma.char.findMany()
        ctx.body = char
        ctx.status = 200
    } catch (error) {
        ctx.body = error
        ctx.status = 500
        console.log(error)
    }
    
}