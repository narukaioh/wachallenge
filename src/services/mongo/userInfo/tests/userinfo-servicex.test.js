import UserInfoService from '../service'
import sinon from 'sinon'

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
      let name
      const mock =  function(data) {
        name = data.name
        return {
          ...data,
          save
        }
      }
      const userService = UserInfoService(mock)
      userService.createUserInfo({ name: "teste" })
      const expected = true
      const actual = save.calledOnce
      expect(actual).toBe(expected)
      expect(name).toBe("teste")
    })

  })
})