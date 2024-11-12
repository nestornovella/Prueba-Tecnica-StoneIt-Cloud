import { Router } from "express"
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import tagRoutes from './tag.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/tag', tagRoutes)

export default router
