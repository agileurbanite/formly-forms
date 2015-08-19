/**
 * Created by LAS038 on 9/10/14.
 */
var data=
{
  "type": "transactionEntityCollectionResponse",
  "total": 4,
  "nextURL": {
    "href": 'next',
    "method": 'string'
  },
  "pending":[],
  "entries": [
  {
    "statementDescription": "Monthly Interest Paid",
    "transactionReferenceId": "1rOkD46DRkD3t+wr7cfGuhtlMc42xoEzpnxBgt0B4EXXXMUyFJ/+jq5vYgZBOHFp",
    "transactionAmount": 97.95,
    "transactionId": "19",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "currentBalance": 500000.63,
    "type": "depositAccountTransaction",
    "transactionDate": "2014-12-01T03:04:45.000Z",
    "transactionDetailsRetrievalURL": {
        "method": "GET",
        "href": "https://rtm-qsb3:8513/deposits/accounts/ZF6kVd48T5UJFVwFTKi0Qd0NPt80ui4aafLPcZT4sbk%3D/transactions/1rOkD46DRkD3t%2Bwr7cfGunIn429jCLQD7fF2%2FxQvOIA%3D"
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
    },
    {
      "statementDescription": "Minimum balance Charge",
      "transactionReferenceId": "1rOkD46DRkD3t+wr7cfGuhtlMc42xoEzpnxBgt0B4EXXXMUyFJ/+jq5vYgZBOHFp",
      "transactionAmount": 1.63,
      "transactionId": "19",
      "currencyCode": "USD",
      "internalTransferIndicator": false,
      "currentBalance": 500000.63,
      "type": "depositAccountTransaction",
      "transactionDate": "2014-11-01T03:04:45.000Z",
      "transactionDetailsRetrievalURL": {
          "method": "GET",
          "href": "https://rtm-qsb3:8513/deposits/accounts/ZF6kVd48T5UJFVwFTKi0Qd0NPt80ui4aafLPcZT4sbk%3D/transactions/1rOkD46DRkD3t%2Bwr7cfGunIn429jCLQD7fF2%2FxQvOIA%3D"
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
      "transactionDescription": "Minimum balance Charge",
      "transactionStatus": "posted"
    },
    {
      "statementDescription": "Minimum balance Charge",
      "transactionReferenceId": "1rOkD46DRkD3t+wr7cfGuhtlMc42xoEzpnxBgt0B4EXXXMUyFJ/+jq5vYgZBOHFp",
      "transactionAmount": 2.00,
      "transactionId": "19",
      "currencyCode": "USD",
      "internalTransferIndicator": false,
      "currentBalance": 500000.63,
      "type": "depositAccountTransaction",
      "transactionDate": "2014-12-01T03:04:45.000Z",
      "transactionDetailsRetrievalURL": {
          "method": "GET",
          "href": "https://rtm-qsb3:8513/deposits/accounts/ZF6kVd48T5UJFVwFTKi0Qd0NPt80ui4aafLPcZT4sbk%3D/transactions/1rOkD46DRkD3t%2Bwr7cfGunIn429jCLQD7fF2%2FxQvOIA%3D"
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
      "transactionDescription": "Online banking xfer deposit FROM ....3536",
      "transactionStatus": "posted"
    }
  ]
};
module.exports.checking90Transactions=data;