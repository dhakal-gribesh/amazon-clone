const fs = require('fs')

try {
  const data = fs.readFileSync('/', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}
const anAsyncTask = async () => {
    try {
    const user = await getUser()
    const cart = await getCart(user)
   
    return cart
    } catch (error) {
    console.error(error)
    } finally {
    await cleanUp()
    }
   }
   class BaseError extends Error {
    constructor (name, statusCode, isOperational, description) {
    super(description)
   
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = name
    this.statusCode = statusCode
    this.isOperational = isOperational
    Error.captureStackTrace(this)
    }
   }
   
   module.exports = BaseError