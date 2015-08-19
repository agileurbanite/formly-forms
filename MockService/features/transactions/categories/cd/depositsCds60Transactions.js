/**
 * Created by OBV174 on 10/10/14.
 */
var data=
{
  "statusCode": "200",
  "nextURL": {
    "href": 'next',
    "method": 'string'
  },
  "pending": [],
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
  },
  {
    "statementDescription": "Deposit from CITIBANK NA checking account XXXXX6866",
    "transactionReferenceId": "elvAwq0DIy8FEiHjWdpK3zEshFL8O+A/7xFrVRcQyhEpE8/nEqTb6gK1FKuAudSK",
    "transactionAmount": 5000,
    "transactionId": "5",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "currentBalance": 5000,
    "type": "depositAccountTransaction",
    "transactionDate": "2014-10-21T02:09:39.000Z",
    "transactionDetailsRetrievalURL": {
        "method": "GET",
        "href": "https://rtm-qsb3:8513/deposits/accounts/nZCs4vllnL%2BqOia2dH6Tgjye5jJLFoKOKNo9Fj9TRxgIuoAWeOFfpcHlOmBzlXd6/transactions/io5vv9JSjNAimCNxHUL18g%3D%3D"
    },
    "transactionResearchAids": [
        {
            "value": "CDEXT",
            "key": "transactionCode"
        }
    ],
    "debitCreditType": "Credit",
    "effectiveDate": "2014-10-20",
    "transactionDescription": "CITIBANK NA~Deposit from checking account XXXXX6866~",
    "transactionStatus": "posted"
  }
  ]
};
module.exports.depositsCds60Transactions=data;