/**
 * Created by oys633 on 9/16/14.
 */
var data =
{
 "accountDetails": {
  "ownershipType": "Individual",
  "interestEarnedLastYear": 0,
  "bankNumberDescription": "Capital One 360",
  "lastStatementDate": "2014-11-30T00:00:00.000Z",
  "stopPaymentsIndicator": false,
  "openingDepositAmount": 500,
  "currentBalance": 506.63,
  "lastMaintenanceDate": "2014-07-31T00:00:00.000Z",
  "taxIdType": "SSN",
  "easeDisplayName": "360 Savings",
  "totalHoldAmount": 0,
  "collectedBalance": 506.63,
  "statusCode": "200",
  "accountNumber": "44854047",
  "restrictionsIndicator": false,
  "accountCycle": "Last day of the month",
  "accountStatus": "Active",
  "lastStatementBalance": 506.63,
  "openMethod": "Online",
  "openDate": "2014-05-16T00:00:00.000Z",
  "accountTitle": {
      "accountTitleLine1": "Maricela Knuckles"
  },
  "ledgerBalance": 506.63,
  "accountReferenceId": "ZF6kVd48T5UJFVwFTKi0Qcw45QSEsv3eXUkXENjUDEI%253D",
  "bankABANumber": "031176110",
  "currencyCode": "USD",
  "interestEarnedYTD": 6.63,
  "accountTransactionsUrl": {
      "method": "GET",
      "href": "https://rtm-qsb3:8513/deposits/accounts/ZF6kVd48T5UJFVwFTKi0Qcw45QSEsv3eXUkXENjUDEI%3D/transactions"
  },
  "lastActivityDate": "2014-11-30T00:00:00.000Z",
  "statementType": "Electronic",
  "availableBalance": 506.63,
  "interestRate": 2.4665,
  "easeProductCategory": "sa",
  "withholdingAmountYTD": 0,
  "holdsIndicator": false,
  "bankNumber": "360",
  "product": {
      "productClassDescription": "Deposit",
      "productTypeCode": "SA",
      "productTypeDescription": "Savings",
      "productClassCode": "DP",
      "productName": "360 Savings",
      "productId": "3000"
  },
  "businessLine": "Deposit",
  "address": {
      "countryName": "United States",
      "postalCode": "23060",
      "countryCode": "US",
      "stateCode": "VA",
      "addressLine1": "7412 Seasame Street",
      "city": "Glen Allen"
  },
  "taxId": "xPXIqx+4OaxHHrkg1Txf/Q==",
  "branchCostCenter": "106390",
  "overdraftAccounts": [],
  "easeProductName": "_360-savings",
  "interestAccruedAmount": 0.10272,
  "retirementAccountIndicator": false
  },
  "transactions": {
    "statusCode": "200",
    "pending": [],
    "entries": [
    {
      "statementDescription": "Monthly Interest Paid",
      "transactionReferenceId": "1rOkD46DRkD3t+wr7cfGuhtlMc42xoEzpnxBgt0B4EXXXMUyFJ/+jq5vYgZBOHFp",
      "transactionAmount": 1.03,
      "transactionId": "19",
      "currencyCode": "USD",
      "internalTransferIndicator": false,
      "currentBalance": 506.63,
      "type": "depositAccountTransaction",
      "transactionDate": "2014-12-01T03:04:45.000Z",
      "transactionDetailsRetrievalURL": {
          "method": "GET",
          "href": "https://rtm-qsb3:8513/deposits/accounts/ZF6kVd48T5UJFVwFTKi0Qcw45QSEsv3eXUkXENjUDEI%3D/transactions/1rOkD46DRkD3t%2Bwr7cfGunIn429jCLQD7fF2%2FxQvOIA%3D"
      },
      "transactionResearchAids": [
          {
              "value": "IIPS",
              "key": "transactionCode"
          },
          {
              "value": "45",
              "key": "transactionType"
          }
      ],
      "debitCreditType": "Credit",
      "transactionDescription": "Monthly Interest Paid",
      "transactionStatus": "posted"
    }
    ]
  }
};
module.exports.depositsMockDetailsAndTransactions = data;