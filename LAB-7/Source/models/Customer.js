var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  CustomerId: String,
  CustomerName: String,
  CustomerEmail: String,
  CustomerPhone: String,
  /*description: String,
  published_year: String,
  publisher: String,
  updated_date: {type: Date, default: Date.now},*/
});
/**
 * @class Customer
 * @typeof Model<BookSchema>
 */
const Customer = mongoose.model('ASEDatabase',BookSchema);
module.exports = Customer;
