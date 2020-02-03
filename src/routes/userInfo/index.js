
import UserInfoService from '../../services/mongo'
import scraper from '../../services/puppeteer'

export const getUserInfo = async (req, res, next) => {
  try {
    const userInfo = await UserInfoService.listUserInfo()
    res.json(userInfo)
  } catch (e) {
    next(e)
  }
}

export const createUserInfo = async (req, res, next) => {
  const { cpf, account, password } = req.query
  scraper.santanderScraper({ cpf, account, password })
    .then( async (data) => {
      const userInfo = await UserInfoService.createUserInfo(data)
      res.json(userInfo);
    }).catch(err => res.status(500).json({ message: err }))
}