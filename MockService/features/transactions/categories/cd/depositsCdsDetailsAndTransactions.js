var data=
{
  "accountDetails": {
  "bankNumberDescription": "Capital One 360",
  "gracePeriodIndicator": false,
  "earlyRedemptionBalance": 4972.87,
  "lastMaintenanceDate": "2014-10-17T00:00:00.000Z",
  "taxIdType": "SSN",
  "maturityAmount": 5112.97,
  "accountNumber": "36000030211",
  "restrictionsIndicator": false,
  "accountCycle": "Last day of the month",
  "lastStatementBalance": 5000,
  "openMethod": "Online",
  "openDate": "2014-10-17T00:00:00.000Z",
  "accountReferenceId": "nZCs4vllnL%252BqOia2dH6Tgjye5jJLFoKOKNo9Fj9TRxgIuoAWeOFfpcHlOmBzlXd6",
  "interestEarnedYTD": 6.33,
  "accountTransactionsUrl": {
      "method": "GET",
      "href": "https://rtm-qsb3:8513/deposits/accounts/nZCs4vllnL%2BqOia2dH6Tgjye5jJLFoKOKNo9Fj9TRxgIuoAWeOFfpcHlOmBzlXd6/transactions"
  },
  "lastActivityDate": "2014-11-20T00:00:00.000Z",
  "autoRenewalIndicator": true,
  "easeProductCategory": "cd",
  "withholdingAmountYTD": 0,
  "taxId": "jE03UMxc6TtmLORAMI+/Yw==",
  "branchCostCenter": "106390",
  "interestAccruedAmount": 3.26944,
  "renewalTerm": "18 Months",
  "ownershipType": "Individual",
  "interestEarnedLastYear": 0,
  "initialDepositAmount": 5000,
  "nextInterestPaymentDate": "2014-12-20T00:00:00.000Z",
  "lastStatementDate": "2014-10-31T00:00:00.000Z",
  "lastInterestPaymentDate": "2014-11-20T00:00:00.000Z",
  "currentBalance": 5006.33,
  "totalHoldAmount": 0,
  "statusCode": "200",
  "accountStatus": "Active",
  "earlyRedemptionPenaltyAmount": 36.73,
  "ledgerBalance": 5006.33,
  "cdTerm": "18 Months",
  "accountTitle": {
      "accountTitleLine1": "Bonner Hayes"
  },
  "bankABANumber": "031176110",
  "currencyCode": "USD",
  "renewalOption": "Rollover Principal and Interest",
  "maturityDate": "2016-04-21T00:00:00.000Z",
  "availableBalance": 5006.33,
  "statementType": "Electronic",
  "interestRate": 1.5,
  "bankNumber": "360",
  "holdsIndicator": false,
  "product": {
      "productClassDescription": "Deposit",
      "productTypeCode": "CD",
      "productTypeDescription": "Certificate of Deposit",
      "productClassCode": "DP",
      "productName": "CD",
      "productId": "3500"
  },
  "businessLine": "Deposit",
  "earlyRedemptionPenalty": "15 Days",
  "address": {
      "countryName": "United States",
      "postalCode": "75670",
      "countryCode": "US",
      "stateCode": "TX",
      "addressLine1": "41114 beaumont street test",
      "city": "marshall"
  },
  "interestDisbursementOptions": {
      "interestDisbursementType": "Do not disburse",
      "interestDisbursementIndicator": false
  },
  "easeProductName": "_360-cd",
  "easeDisplayName": "360 CD",
  "retirementAccountIndicator": false
    },
    "transactions": {
    "statusCode": "200",
    "nextURL": {
      "href": 'next',
      "method": 'string'
    },
    "entries": [
    {
      "statementDescription": "Monthly Interest Paid",
      "transactionReferenceId": "diEsoA9r01bYT2meZlREhmAWD16fBOgf1/ETr42nPq1RPkLCBoilir00lxPgZ4eB",
      "transactionAmount": 6.33,
      "transactionId": "8",
      "currencyCode": "USD",
      "internalTransferIndicator": false,
      "currentBalance": 5006.33,
      "type": "depositAccountTransaction",
      "transactionDate": "2014-11-21T03:04:08.000Z",
      "transactionDetailsRetrievalURL": {
          "method": "GET",
          "href": "https://rtm-qsb3:8513/deposits/accounts/nZCs4vllnL%2BqOia2dH6Tgjye5jJLFoKOKNo9Fj9TRxgIuoAWeOFfpcHlOmBzlXd6/transactions/vnyrHUviikbe7uJNDxTTFA%3D%3D"
      },
      "transactionResearchAids": [
          {
              "value": "IIPC",
              "key": "transactionCode"
          }
      ],
      "debitCreditType": "Credit",
      "transactionDescription": "Monthly Interest Paid",
      "transactionStatus": "posted"
    }
  ]
  }

};
module.exports.depositsCdsDetailsAndTransactions=data;