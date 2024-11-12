import { Router } from "express"
import { response, throwError } from "../helpers/responseHandlers"
import { statusCode } from "../helpers/statusCode"

const router = Router()

router.get('/', (req, res, next) =>{
    try {
      
        response( statusCode.badRequest, "ok")
    } catch (error) {
        next(error)
    }
})

export default router
