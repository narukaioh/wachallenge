import puppeteer from 'puppeteer'
import cheerio from 'cheerio'
import map from '../../mappers/santander-mapper'

const santanderScraper = async (santander) => {
  const url = map.pages.homepage
  const { inputCPF, buttonSubmitCPF, inputLogin, inputPassword, buttonSubmit } = map.formLogin
  const { dashboard } = map.userDashboard

  const browser = await puppeteer.launch({ headless: true, defaultViewport: { width: 1300, height: 600 }, args: ['--no-sandbox', '--disable-setuid-sandbox',], });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle2' });

  // put cpf
  await page.type(inputCPF, santander.cpf)
  await page.waitFor(buttonSubmitCPF)
  await page.click(buttonSubmitCPF)
  await page.waitForNavigation()
  // put account and password
  await page.type(inputLogin, santander.account)
  await page.type(inputPassword, santander.password)
  await page.click(buttonSubmit)
  await page.waitFor(dashboard)
  await page.click(map.userDashboard.buttonCreditCard)
  await page.waitFor(1000)
  await page.click(map.userDashboard.linkConsultInvoices)
  await page.waitFor(2000)
  const html = await page.evaluate(() => document.querySelector('body').innerHTML)
  const userInfo = getUserInfo(html)
  await browser.close();
  return { title: page.title, url: url, userInfo };
};

const getUserInfo = html => {
  const $ = cheerio.load(html)
  return {
      creditCard: {
        open: {
          expenseSummary: {
            availableLimit: $(
              map.creditCard.open.expenseSummary.availableLimit
            ).text(),
            previousWithdrawal: $(
              map.creditCard.open.expenseSummary.previousWithdrawal
            ).text(),
            totalPayments: $(
              map.creditCard.open.expenseSummary.totalPayments
            ).text(),
            totalCredit: $(
              map.creditCard.open.expenseSummary.totalCredit
            ).text(),
            debits: $(
              map.creditCard.open.expenseSummary.debits
            ).text(),
            expenses: $(
              map.creditCard.open.expenseSummary.expenses
            ).text(),
            totalConverted: $(
              map.creditCard.open.expenseSummary.totalConverted
            ).text(),
            quoteDollar: $(
              map.creditCard.open.expenseSummary.quoteDollar
            ).text()
          },
          creditLimit: {
            totalLimit: $(
              map.creditCard.open.creditLimit.totalLimit
            ).text(),
            withdrawalLimit: $(
              map.creditCard.open.creditLimit.withdrawalLimit
            ).text(),
            availableLimit: $(
              map.creditCard.open.creditLimit.availableLimit
            ).text()
          },
          invoiceSummary: {
            dueDate: $(map.creditCard.open.invoiceSummary.dueDate).text(),
            bestShoppingDate: $(map.creditCard.open.invoiceSummary.bestShoppingDate).text(),
            parcialBallance: $(map.creditCard.open.invoiceSummary.parcialBallance).text()
          }
        }
      }
    }
}

export default { santanderScraper: santanderScraper }
