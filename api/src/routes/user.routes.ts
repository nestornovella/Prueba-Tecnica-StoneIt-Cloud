import {Router} from 'express'
import { getAllUsers, userRegister } from '../controllers/user.controller'

const router = Router()


router.get('/', getAllUsers)
router.post('/', userRegister)



export default router