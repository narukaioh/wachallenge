import { Router } from 'express'
import { getUserInfo, createUserInfo } from './userInfo'

const router = Router()

router.get('/user-info', getUserInfo)
router.post('/user-info', createUserInfo)

export default router
