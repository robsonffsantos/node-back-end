import Router from "@koa/router"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const router = new Router()

const characters = []

router.get('/characters', async ctx => {
    ctx.body = characters
})

router.post('/characters', async ctx => {
    const char = {
        photo: ctx.request.body.photo,
        firstName: ctx.request.body.firstName,
        lastName: ctx.request.body.lastName,
        email: ctx.request.body.email,
    }

    characters.push(char)

    ctx.body = char
})