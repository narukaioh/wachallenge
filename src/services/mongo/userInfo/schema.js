import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserInfoSchema = new Schema({
  creditCard: {
    open: {
      expenseSummary: {
        availableLimit: String,
        previousWithdrawal: String,
        totalPayments: String,
        totalCredit: String,
        debits: String,
        expenses: String,
        totalConverted: String,
        quoteDollar: String
      },
      creditLimit: {
        totalLimit: String,
        withdrawalLimit: String,
        availableLimit: String
      },
      invoiceSummary: {
        dueDate: String,
        bestShoppingDate: String,
        parcialBallance: String
      }
    }
  }
})

export default mongoose.model('UserInfo', UserInfoSchema)