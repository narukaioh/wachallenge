export default {
  pages: {
    homepage: 'https://www.santander.com.br/?segmento=especial',
    loginpage: 'https://pf.santandernet.com.br/LOGBBR_NS_ENS/ChannelDriver.ssobto?dse_contextRoot=true#',
  },
  formLogin: {
    inputCPF: '#appHeader > header > login-field > div > form > div > div > div:nth-child(1) > div > input',
    buttonSubmitCPF: '#appHeader > header > login-field > div > form > div > div > div:nth-child(1) > div > button > icon-circle-arrow > div.icon.icon-arrow-b-right-circle-fill',
    inputLogin: '#nroCartao',
    inputPassword: '#senha',
    buttonSubmit: '#Entrar'
  },
  userDashboard: {
    dashboard: '#portal_san_modeloweb',
    buttonCreditCard: '#cartoes > i',
    linkConsultInvoices: '#subMenu-cartoes > div > div.col-xs-8.submenu-container > div > ul > li:nth-child(2) > a'
  },
  creditCard: {
    open: {
      expenseSummary: {
        availableLimit: '#0  > div.contract-total > span.text-value',
        previousWithdrawal: '#1resumo > table.doble.izquierda > tbody > tr:nth-child(1) > td:nth-child(2)',
        totalPayments: '#1resumo > table.doble.izquierda > tbody > tr:nth-child(2) > td:nth-child(2)',
        totalCredit: '#1resumo > table.doble.izquierda > tbody > tr:nth-child(3) > td:nth-child(2)',
        debits: '#1resumo > table.doble.izquierda > tbody > tr:nth-child(4) > td:nth-child(2)',
        expenses: '#1resumo > table.doble.derecha > tbody > tr:nth-child(1) > td:nth-child(2)',
        totalConverted: '#1resumo > table.doble.derecha > tbody > tr:nth-child(2) > td:nth-child(2)',
        quoteDollar: '#1resumo > table.doble.derecha > tbody > tr:nth-child(3) > td:nth-child(2)'
      },
      creditLimit: {
        totalLimit: '#1limites > table > tbody > tr > td:nth-child(1) > dl > dd',
        withdrawalLimit: '#1limites > table > tbody > tr > td:nth-child(2) > dl > dd',
        availableLimit: '#1limites > table > tbody > tr > td:nth-child(3) > dl > dd'
      },
      invoiceSummary: {
        dueDate: '#_W0000014_WAR_Cartoes_WIDGET__VIEW > div > form > fieldset > div.containerjson03.faturas.widget_cartao_credito > div > div > div.agrupador-contenido.detalhe_ampliado.col-xs-12 > div.lateral.cartoescontainerjson01.col-xs-3 > div > ul > li:nth-child(1) > span.right',
        bestShoppingDate: '#_W0000014_WAR_Cartoes_WIDGET__VIEW > div > form > fieldset > div.containerjson03.faturas.widget_cartao_credito > div > div > div.agrupador-contenido.detalhe_ampliado.col-xs-12 > div.lateral.cartoescontainerjson01.col-xs-3 > div > ul > li:nth-child(2) > span.right',
        parcialBallance: '#_W0000014_WAR_Cartoes_WIDGET__VIEW > div > form > fieldset > div.containerjson03.faturas.widget_cartao_credito > div > div > div.agrupador-contenido.detalhe_ampliado.col-xs-12 > div.lateral.cartoescontainerjson01.col-xs-3 > div > ul > li:nth-child(3) > span.right > strong'
      }
    }
  }
}