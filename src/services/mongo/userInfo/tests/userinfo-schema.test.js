import mongoose from 'mongoose'
import UserInfo from '../schema'
const mongoDB = 'mongodb://localhost:27017/bankinfo-test'

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const info = {
  creditCard: {
    open: {
      expenseSummary: {
        availableLimit: 'R$ 0,000,00',
        previousWithdrawal: 'R$ 0.000,00',
        totalPayments: 'R$ 0,00',
        totalCredit: 'R$ 0,00',
        debits: 'R$ 00,00',
        expenses: 'US$ 0,00',
        totalConverted: 'R$ 0,00',
        quoteDollar: '0,00'
      },
      creditLimit: {
        totalLimit: 'R$ 0.000,00',
        withdrawalLimit: 'R$ 0,00',
        availableLimit: 'R$ 00,00'
      },
      invoiceSummary: {
        dueDate: '00/00/0000',
        bestShoppingDate: '00/00/0000',
        parcialBallance: 'R$ 0.000,00'
      }
    }
  }
}

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
      const userInfo = new UserInfo(info)
      await userInfo.save()

      const foundUserInfo = await UserInfo.find(info)
      const expected = 'R$ 0,000,00'
      const actual = foundUserInfo.shift().creditCard.open.expenseSummary.availableLimit
      expect(actual).toBe(expected)
    })
  })

  describe('save user informations', () => {
    it('saves a user information ', async () => {
      const userInfo = new UserInfo(info)
      const savedUserInfo = await userInfo.save()
      const expected = 'R$ 0,000,00'
      const actual = savedUserInfo.creditCard.open.expenseSummary.availableLimit
      expect(actual).toBe(expected)
    })
  })

})