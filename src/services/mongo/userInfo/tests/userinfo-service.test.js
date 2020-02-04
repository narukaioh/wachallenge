import UserInfoService from '../service'
import sinon from 'sinon'

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

describe('UserInfoService test', () => {
  it('has a module', () => {
    expect(UserInfoService).toBeDefined()
  })

  describe('listUserInfo test', () => {
    it('lists user informations', () => {
      const mock = { find: sinon.spy() }
      const userService = UserInfoService(mock)
      userService.listUserInfo()
      const expected = true
      const actual = mock.find.calledOnce
      expect(actual).toBe(expected)
    })
  })

  describe('createUserInfo test', () => {
    it('create a user informations', () => {
      const save =  sinon.spy()
      const mock =  function(data) {
        return {
          ...data,
          save
        }
      }
      const userService = UserInfoService(mock)
      userService.createUserInfo(info)
      const actual = save.calledOnce
      expect(actual).toBe(true)
    })

  })
})