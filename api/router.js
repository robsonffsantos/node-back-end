import Router from "@koa/router"
import * as characters from './characters/index.js'

export const router = new Router()

router.get('/characters', characters.getChar)
