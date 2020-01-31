import mongoose from 'mongoose'
import UserInfo from '../schema'
const mongoDB = 'mongodb://localhost:27017/bankinfo-test'

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

describe('User informations schema test', () => {
  beforeAll(async () => {
    await UserInfo.deleteMany()
  })

  afterEach(async () => {
    await UserInfo.deleteMany()
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  it('has a module', () => {
    expect(UserInfo).toBeDefined()
  })

  describe('get user informations', () => {
    it('gets a user information ', async () => {
      const userInfo = new UserInfo({ name: "baa" })
      await userInfo.save()

      const foundUserInfo = await UserInfo.find({ name: "baa" })
      const expected = 'baa'
      const actual = foundUserInfo.shift().name
      expect(actual).toBe(expected)
    })
  })

  describe('save user informations', () => {
    it('saves a user information ', async () => {
      const userInfo = new UserInfo({ name: "baa" })
      const savedUserInfo = await userInfo.save()
      const expected = 'baa'
      const actual = savedUserInfo.name
      expect(actual).toBe(expected)
    })
  })

})