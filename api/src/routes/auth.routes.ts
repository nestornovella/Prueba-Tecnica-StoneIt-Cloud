import {Router} from 'express'
import { authUser, generateToken } from '../controllers/auth.controller'


const router = Router()

router.post('/', generateToken)
router.get('/', authUser)



export default router