
import UserInfoService from '../../services/mongo'

export const getUserInfo = async (req, res, next) => {
  try {
    const userInfo = await UserInfoService.listUserInfo()
    res.json(userInfo)
  } catch (e) {
    next(e)
  }
}

export const createUserInfo = async (req, res, next) => {
  const { name } = req.query
  try {
    const userInfo = await UserInfoService.createUserInfo({name})
    res.send(userInfo)
  } catch (e) {
    next(e)
  }
}