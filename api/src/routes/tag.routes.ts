import {Router} from 'express'
import { createTag, deleteTag, getAllTag } from '../controllers/tag.controllers'

const router = Router()


router.get('/', getAllTag)
router.post('/', createTag)
router.delete('/:id', deleteTag)


export default router