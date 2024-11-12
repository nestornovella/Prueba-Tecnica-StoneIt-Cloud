import {Router} from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/task.controller'

const router = Router()


router.get('/', getTasks)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)


export default router