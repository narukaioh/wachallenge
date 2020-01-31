import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserInfoSchema = new Schema({
  name: String
})

export default mongoose.model('UserInfo', UserInfoSchema)