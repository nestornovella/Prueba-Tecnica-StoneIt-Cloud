import {Router} from 'express'
import { getAllUsers, userRegister } from '../controllers/user.controller'
import { validateUserInput } from '../middleware/validateUserInput'

const router = Router()


router.get('/', getAllUsers)
router.post('/', validateUserInput, userRegister)



export default router