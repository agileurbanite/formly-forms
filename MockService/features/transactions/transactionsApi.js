/**
 * Created by yuchennie on 7/3/14.
 *
 * last updated by James Lin on 09/10/14
 */

var express = require('express');
var router = express.Router();

var depositsMockDetailsAndTransactions = require('./categories/saving/depositsMockDetailsAndTransactions').depositsMockDetailsAndTransactions;
var depositsFilter60MockTransactions = require('./categories/saving/depositsFilter60MockTransactions').depositsFilter60MockTransactions;
var depositsFilter90MockTransactions = require('./categories/saving/depositsFilter90MockTransactions').depositsFilter90MockTransactions;
var depositsTransactions = require('./categories/saving/depositsMockTransactions').depositsTransactions;

var creditCardDetailsAndTransactions = require('./categories/creditcard/creditCardDetailsAndTransactions').creditCardDetailsAndTransactions;
var creditCard30Transactions = require('./categories/creditcard/creditCard30Transactions').creditCard30Transactions;
var creditCard60Transactions = require('./categories/creditcard/creditCard60Transactions').creditCard60Transactions;
var creditCard90Transactions = require('./categories/creditcard/creditCard90Transactions').creditCard90Transactions;
var creditCardMoreTransactions = require('./categories/creditcard/creditCardMoreTransactions').creditCardMoreTransactions;

var depositsCdsDetailsAndTransactions = require('./categories/cd/depositsCdsDetailsAndTransactions').depositsCdsDetailsAndTransactions;
var depositsCds30Transactions = require('./categories/cd/depositsCds30Transactions').depositsCds30Transactions;
var depositsCds60Transactions = require('./categories/cd/depositsCds60Transactions').depositsCds60Transactions;
var depositsCds90Transactions = require('./categories/cd/depositsCds90Transactions').depositsCds90Transactions;

var depositsPbDetailsAndTransactions = require('./categories/saving/depositsPbDetailsAndTransactions').depositsPbDetailsAndTransactions;
var depositsPb30Transactions = require('./categories/saving/depositsPb30Transactions').depositsPb30Transactions;
var depositsPb60Transactions = require('./categories/saving/depositsPb60Transactions').depositsPb60Transactions;
var depositsPb90Transactions = require('./categories/saving/depositsPb90Transactions').depositsPb90Transactions;

var depositsKidsDetailsAndTransactions = require('./categories/saving/depositsKidsDetailsAndTransactions').depositsKidsDetailsAndTransactions;
var depositsKids30Transactions = require('./categories/saving/depositsKids30Transactions').depositsKids30Transactions;
var depositsKids60Transactions = require('./categories/saving/depositsKids60Transactions').depositsKids60Transactions;
var depositsKids90Transactions = require('./categories/saving/depositsKids90Transactions').depositsKids90Transactions;
var depositsMoreTransactions = require('./categories/saving/depositsMoreTransactions').depositsMoreTransactions;

var mmaDetailsAndTransactions = require('./categories/mma/mmaDetailsAndTransactions').mmaDetailsAndTransactions;
var mma30Transactions = require('./categories/mma/mma30Transactions').mma30Transactions;
var mma60Transactions = require('./categories/mma/mma60Transactions').mma60Transactions;
var mma90Transactions = require('./categories/mma/mma90Transactions').mma90Transactions;
var mmaMoreTransactions = require('./categories/mma/mmaMoreTransactions').mmaMoreTransactions;

var autoLoanDetailsAndTransactions = require('./categories/autoLoan/autoLoanDetailsAndTransactions').autoLoanDetailsAndTransactions;
var autoLoan30Transactions = require('./categories/autoLoan/autoLoan30Transactions').autoLoan30Transactions;
var autoLoan60Transactions = require('./categories/autoLoan/autoLoan60Transactions').autoLoan60Transactions;
var autoLoan90Transactions = require('./categories/autoLoan/autoLoan90Transactions').autoLoan90Transactions;
var autoLoanMoreTransactions = require('./categories/autoLoan/autoLoanMoreTransactions').autoLoanMoreTransactions;

var createOneTimePayment = require('./categories/autoLoan/createOneTimePayment').createOneTimePayment;
var createPaymentPlan = require('./categories/autoLoan/createPaymentPlan').createPaymentPlan;
var autoLoanUmmPaymentInfo = require('./categories/autoLoan/ummPaymentsInfo').ummPaymentsInfo;

var mortgageDetailsAndTransactions = require('./categories/mortgage/mortgageDetailsAndTransactions').mortgageDetailsAndTransactions;
var mortgage30Transactions = require('./categories/mortgage/mortgage30Transactions').mortgage30Transactions;
var mortgage60Transactions = require('./categories/mortgage/mortgage60Transactions').mortgage60Transactions;
var mortgage90Transactions = require('./categories/mortgage/mortgage90Transactions').mortgage90Transactions;
var latestMortgageDetailsAndTransactions = require('./categories/mortgage/latestMortgageDetailsAndTransactions').latestMortgageDetailsAndTransactions;
var latestHomeEquityDetailsAndTransactions = require('./categories/mortgage/latestHomeEquityDetailsAndTransactions').latestHomeEquityDetailsAndTransactions;
var homeLoansTransferAccounts = require('./categories/mortgage/transferAccount.js').homeLoansTransferAccounts;
var homeLoansPaymentConfirmation = require('./categories/mortgage/paymentConfirmation.js').homeLoansPaymentConfirmation;

var checkingDetailsAndTransactions = require('./categories/checking/checkingDetailsAndTransactions').checkingDetailsAndTransactions;
var checking30Transactions = require('./categories/checking/checking30Transactions').checking30Transactions;
var checking60Transactions = require('./categories/checking/checking60Transactions').checking60Transactions;
var checking90Transactions = require('./categories/checking/checking90Transactions').checking90Transactions;
var checking360Transactions = require('./categories/checking/checking360Transactions').checking360Transactions;

var ummPaymentsInfo = require('./categories/ummPayments/ummPaymentsInfo').ummPaymentsInfo;
var ummPaymentNewAvailableAmounts = require('./categories/ummPayments/ummPaymentNewAvailableAmounts').ummPaymentNewAvailableAmounts;

var tetrisCreditCardDetails = require('./categories/tetris/tetrisCreditCardDetails').tetrisCreditCardDetails;
var tetrisCreditCardTransactions = require('./categories/tetris/tetrisCreditCardTransactions').tetrisCreditCardTransactions;
var tetrisCreditCardPayments = require('./categories/tetris/tetrisCreditCardPayments').tetrisCreditCardPayments;

var getAccountsTransfer = require('./categories/transfer/getAccountsTransfer').getAccountsTransfer;

var lstStatements = require('./categories/statements/lstStatements').data;

router.route('/CreditCard/accounts/')
  .get(function(req, res) {
    res.json(tetrisCreditCardDetails);
  });

router.route('/CreditCard/accounts/:id/transactions')
  .get(function(req, res) {
    res.json(tetrisCreditCardTransactions);
  });

router.route('/CreditCard/accounts/payments')
  .get(function(req, res) {
    res.json(tetrisCreditCardPayments);
  });

router.route('/customer/transfer/getAccounts')
  .post(function(req, res) {
    res.json(getAccountsTransfer);
  });



router.route('/CreditCard/getAccountById/:id/transactions')
  .get(function(req, res) {
    var filterParam = parseInt(req.query.filter);
    var accountRefId = req.params.id;
    console.log("Transactions call for: " + accountRefId);
    if (accountRefId == 'next') {
      res.json(creditCardMoreTransactions);
    } else if (filterParam == 30) {
      res.json(creditCard30Transactions);
    } else if (filterParam == 60) {
      res.json(creditCard60Transactions);
    } else {
      res.json(creditCard90Transactions);
    }
  });

router.route('/CreditCard/getAccountById/:id/')
  .get(function(req, res) {
    var accountRefId = req.params.id;
    console.log("Credit card transactions and details for: " + accountRefId);
    if (accountRefId == 'XqLuxBTABbIDvpw56ba34s2Cay9J3tSo%2F559Pqo2bxw%3D') {
      res.json(creditCardMockDetailAndTransactionsNoPending);
    } else {
      res.json(creditCardDetailsAndTransactions);
    }
  });
//mock/UmmPayments/saving/ZF6kVd48T5UJFVwFTKi0Qd0NPt80ui4aafLPcZT4sbk%253D/
router.route('/UmmPayments/:lob/:id/')
  .get(function(req, res) {
    var accountRefId = req.params.id;
    var lob = req.params.lob;
    console.log("Get UMM payments information for: " + lob + " -> " + accountRefId);
    if ( req.params.lob = 'AL'){
      res.json(autoLoanUmmPaymentInfo);
    } else {
      res.json(ummPaymentsInfo);
    }
  });

router.route('/UmmPayments/:lob/:id/getNewAvailableAmounts')
  .get(function(req, res) {
    var accountRefId = req.params.id;
    var lob = req.params.lob;
    console.log("Get UMM payments information for: " + lob + " -> " + accountRefId);
    res.json(ummPaymentNewAvailableAmounts);
  });

router.route('/AutoLoan/getAccountById/:id/')
  .get(function(req, res) {
    console.log('Auto Loans details and transactions for: ' + req.params.id);
    res.json(autoLoanDetailsAndTransactions);
  });

router.route('/AutoLoan/getAccountById/:id/transactions')
  .get(function(req, res) {
    var filterParam = parseInt(req.query.filter);
    var accountRefId = req.params.id;
    if (filterParam == 30) {
      res.json(autoLoan30Transactions);
    } else if (filterParam == 60) {
      res.json(autoLoan60Transactions);
    } else if (filterParam == 90) {
      res.json(autoLoan90Transactions);
    } else if (filterParam == 'next') {
      res.json(autoLoanMoreTransactions);
    }
  });

router.route('/AutoLoan/paymentInstruction/:id/createOneTimePayment')
  .post(function(req, res){
    console.log('Create One Time Payment for : '+req.params.id);
    res.json(createOneTimePayment);
});

router.route('/AutoLoan/paymentPlan/:id/createPaymentPlan')
  .post(function(req, res){
    console.log('Create Payment Plan for : '+req.params.id);
    res.json(createPaymentPlan);
  });

router.route('/HomeLoans/mortgages/getAccountById/:id/')
  .get(function(req, res) {
    console.log('Home details and transactions for: ' + req.params.id);
    res.json(latestMortgageDetailsAndTransactions);
  });

router.route('/HomeLoans/mortgages/getAccountById/:id/transactions')
  .get(function(req, res) {
    var filterParam = parseInt(req.query.filter);
    if (filterParam == 30) {
      res.json(mortgage30Transactions);
    } else if (filterParam == 60) {
      res.json(mortgage60Transactions);
    } else if (filterParam == 90) {
      res.json(mortgage90Transactions);
    }
  });

router.route('/HomeLoans/homeEquity/getAccountById/:id/')
  .get(function(req, res) {
    console.log('Home details and transactions for: ' + req.params.id);
    res.json(latestHomeEquityDetailsAndTransactions);
  });

router.route('/HomeLoans/homeEquity/getAccountById/:id/transactions')
  .get(function(req, res) {
    var filterParam = parseInt(req.query.filter);
    if (filterParam == 30) {
      res.json(mortgage30Transactions);
    } else if (filterParam == 60) {
      res.json(mortgage60Transactions);
    } else if (filterParam == 90) {
      res.json(mortgage90Transactions);
    }
  });


router.route('/Bank/getAccountById/:id/')
  .get(function(req, res) {
    var accountRefId = req.params.id;
    if (accountRefId == 'nZCs4vllnL%2BqOia2dH6TgsrTfePDlTRs09dC4snzZmHXFj6aY9ZQPXllAHbtWyCH') {
      res.json(depositsKidsDetailsAndTransactions);
    } else if (accountRefId == 'Dev%2F5ukrx7hBsFDVJNM1DPChGLimTVTPBJJOs5Rd6ciQqiMIeWnk3Z2mGcoJ7cX1') {
      res.json(depositsPbDetailsAndTransactions);
    } else if (accountRefId == 'HNazQHwjHw0qm9nT%2F3bUW%2FtNYeGs9TCPMv2UQumFT4A%3D') {
      res.json(mmaDetailsAndTransactions);
    } else if (accountRefId == 'KtJxBvyYR4%2BVEe72aacKhLtMhNld4T0mlmQmG9MPtlY%3D') {
      res.json(checkingDetailsAndTransactions);
    } else if (accountRefId == 'nZCs4vllnL%2BqOia2dH6TgnzkShfbKOV%2Bkeou3k1h3Iq%2Flicav%2BLABynaWgrWplEq') {
      res.json(checking360Transactions);
    } else {
      res.json(depositsMockDetailsAndTransactions);
    }
  });

router.route('/Bank/getAccountById/:id/transactions')
  .get(function(req, res) {
    var filterParam = parseInt(req.query.filter);
    var accountRefId = req.params.id;
    console.log("Transactions call for: " + accountRefId);
    if (accountRefId == 'next') {
      res.json(depositsMoreTransactions);
    } else if (accountRefId == 'mmanext') {
      res.json(mmaMoreTransactions);
    } else if (accountRefId == 'nZCs4vllnL%2BqOia2dH6TgsrTfePDlTRs09dC4snzZmHXFj6aY9ZQPXllAHbtWyCH') {
      if (filterParam == 30) {
        res.json(depositsKids30Transactions);
      } else if (filterParam == 60) {
        res.json(depositsKids60Transactions);
      } else if (filterParam == 90) {
        res.json(depositsKids90Transactions);
      }
    } else if (accountRefId == 'Dev%2F5ukrx7hBsFDVJNM1DPChGLimTVTPBJJOs5Rd6ciQqiMIeWnk3Z2mGcoJ7cX1') {
      //Pass Book Savings
      if (filterParam == 30) {
        res.json(depositsPb30Transactions);
      } else if (filterParam == 60) {
        res.json(depositsPb60Transactions);
      } else if (filterParam == 90) {
        res.json(depositsPb90Transactions);
      }
    } else if (accountRefId == 'HNazQHwjHw0qm9nT%2F3bUW%2FtNYeGs9TCPMv2UQumFT4A%3D') {
      //MMA
      if (filterParam == 30) {
        res.json(mma30Transactions);
      } else if (filterParam == 60) {
        res.json(mma60Transactions);
      } else if (filterParam == 90) {
        res.json(mma90Transactions);
      }
    } else if (accountRefId == 'KtJxBvyYR4%2BVEe72aacKhLtMhNld4T0mlmQmG9MPtlY%3D') {
      //checking
      if (filterParam == 30) {
        res.json(checking30Transactions);
      } else if (filterParam == 60) {
        res.json(checking60Transactions);
      } else if (filterParam == 90) {
        res.json(checking90Transactions);
      }
    } else {
      //getfiltertransactionurl('deposits',filterParam,res);
      if (filterParam == 30) {
        res.json(depositsTransactions);
      } else if (filterParam == 60) {
        res.json(depositsFilter60MockTransactions);
      } else if (filterParam == 90) {
        res.json(depositsFilter90MockTransactions);
      }
    }
  });

//CD Deposit
router.route('/Bank/cds/getAccountById/:id/')
  .get(function(req, res) {
    res.json(depositsCdsDetailsAndTransactions);
  });

router.route('/Bank/cds/getAccountById/:id/transactions')
  .get(function(req, res) {
    var filterParam = parseInt(req.query.filter);
    var accountRefId = req.params.id;
    if (accountRefId == 'next') {
      res.json(depositsMoreTransactions);
    } else if (filterParam == 30) {
      res.json(depositsCds30Transactions);
    } else if (filterParam == 60) {
      res.json(depositsCds60Transactions);
    } else if (filterParam == 90) {
      res.json(depositsCds90Transactions);
    }
  });

router.route('/AutoLoan/:acctRefId/statements')
  .get(function(req, res) {
    var accountRefId = req.params.acctRefId;
    var lob = req.params.lob;
    console.log('Get List of Statements for: Autoloan  -> ' + accountRefId);
    res.json(lstStatements);
  });

router.route('/AutoLoan/:acctRefId/statement/:stRefId')
  .get(function(req, res, next) {
    var accountRefId = req.params.acctRefId;
    var stRefId = req.params.stRefId;
    var lob = req.params.lob;
    console.log('Get Statement for: AutoLoan - AccRefId:-> ' + accountRefId + ' , stRefID:' + stRefId);
    res.json({
      url: '/ease-ui/dist/file/' + stRefId
    });
    //req.url = '/file/' + stRefId;
    //res.redirect('http://easedev.kdc.capitalone.com:8000/mock/file/' + stRefId);
  });

router.route('/transferAccounts')
  .get(function(req,res){
    console.log("in the homeLoans transferAccounts");
    res.json(homeLoansTransferAccounts);
});

router.route('/payments/:accntRefId')
.post(function(req,res){
    res.json(homeLoansPaymentConfirmation);
  });

module.exports = router;
