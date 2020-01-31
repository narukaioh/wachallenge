import mongoose from 'mongoose'
import UserInfoService from './userInfo'

mongoose.Promise = global.Promise

mongoose.connect(`mongodb://localhost:27017/bankinfo`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

export default UserInfoService