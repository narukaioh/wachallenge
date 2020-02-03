import santanderMapper from '../../../mappers/santander-mapper'

const isValidElement = element => element !== undefined && element !== null && element !== NaN && element !== ''

const santanderCredentials = {
  account: '',
  password: '',
  cpf: ''
}

describe('Santander Puppeteer Login test', () => {

  describe('should to search elements into login form in Santander webpage', () => {

    it('has search input cpf', async () => {
      await page.goto(santanderMapper.pages.homepage)
      await page.waitForNavigation()
      const inputCPF = await page.$(santanderMapper.formLogin.inputCPF)
      const expected = isValidElement(inputCPF)
      expect(expected).toBe(true)
    })

    it('has search submit button', async () => {
      await page.goto(santanderMapper.pages.homepage)
      await page.waitForNavigation()
      const { inputCPF, buttonSubmitCPF } = santanderMapper.formLogin
      await page.type(inputCPF, santanderCredentials.cpf)
      await page.waitFor(buttonSubmitCPF)
      const buttonSubmit = await page.$(buttonSubmitCPF)
      const expected = isValidElement(buttonSubmit)
      expect(expected).toBe(true)
    })

    it('has search card number input', async () => {
      await page.goto(santanderMapper.pages.homepage)
      await page.waitForNavigation()
      const { inputCPF, buttonSubmitCPF, inputLogin} = santanderMapper.formLogin
      await page.type(inputCPF, santanderCredentials.cpf)
      await page.waitFor(buttonSubmitCPF)
      await page.click(buttonSubmitCPF)
      await page.waitForNavigation()
      const input = await page.$(inputLogin)
      const expected = isValidElement(input)
      expect(expected).toBe(true)
    })

    it('has search submit button', async () => {
      await page.goto(santanderMapper.pages.homepage)
      await page.waitForNavigation()
      const buttonSubmit = await page.$(santanderMapper.formLogin.buttonSubmit)
      const expected = isValidElement(buttonSubmit)
      expect(expected).toBe(true)
    })
  })

  describe('should to login in Santander webpage', () => {
    describe('should fill elements in form', () => {
      it('... make login', async () => {
        await page.goto(santanderMapper.pages.homepage)
        await page.waitForNavigation()
        const { inputCPF, buttonSubmitCPF, inputLogin, inputPassword, buttonSubmit } = santanderMapper.formLogin
        const { dashboard } = santanderMapper.userDashboard

        await page.type(inputCPF, santanderCredentials.cpf)
        await page.waitFor(buttonSubmitCPF)
        await page.click(buttonSubmitCPF)
        await page.waitForNavigation()

        await page.type(inputLogin, santanderCredentials.account)
        await page.type(inputPassword, santanderCredentials.password)
        await page.click(buttonSubmit)

        await page.waitFor(dashboard)
        const hasLogin = await page.$(dashboard)
        expect(isValidElement(hasLogin)).toBe(true)
      })
    })
  })
})