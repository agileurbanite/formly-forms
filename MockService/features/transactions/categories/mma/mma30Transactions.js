/**
 * Created by OBV174 on 10/10/14.
 */
var data=
{
  "statusCode": "200",
    "pending": [
    {
    "statementDescription": "Online Banking xfer to ...4492",
    "transactionReferenceId": "1rOkD46DRkD3t+wr7cfGuhtlMc42xoEzpnxBgt0B4EXXXMUyFJ/+jq5vYgZBOHFp",
    "transactionAmount": 45.00,
    "transactionId": "19",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "currentBalance": 460.00,
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
    "transactionDescription": "Online Banking xfer to ...4492",
    "transactionStatus": "posted"
  }
  ],
  "entries": [
  {
    "statementDescription": "IOD INTEREST PAID ",
    "transactionReferenceId": "SUPEQNyjyAA7TUnqLVToC/9sKRwm67OXha6cYsIAAq5T77kWoqIaLy45dm1P9atQ1QnOerJWsZHtL0rBCJyX/A==",
    "transactionAmount": 31.19,
    "transactionId": "2014332__2__C",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "currentBalance": 50607.55,
    "type": "depositAccountTransaction",
    "transactionDate": "2014-11-28T05:00:00.000Z",
    "transactionDetailsRetrievalURL": {
        "method": "GET",
        "href": "https://rtm-qsb3:8513/deposits/accounts/HNazQHwjHw0qm9nT%2F3bUW%2FtNYeGs9TCPMv2UQumFT4A%3D/transactions/SUPEQNyjyAA7TUnqLVToC61Z9i%2BplNdffDOX3j8WxU0%3D"
    },
    "transactionResearchAids": [
        {
            "value": "GT20",
            "key": "transactionCode"
        },
        {
            "value": "0",
            "key": "referenceNumber"
        },
        {
            "value": "2",
            "key": "sequenceNumber"
        },
        {
            "value": "Credit",
            "key": "transactionTypeDesc"
        }
    ],
    "debitCreditType": "Credit",
    "effectiveDate": "2014-11-28",
    "transactionDescription": "IOD INTEREST PAID ",
    "transactionStatus": "posted"
  },
  {
    "statementDescription": "FEDERAL IOD TAX WITHHELD ",
    "transactionReferenceId": "SUPEQNyjyAA7TUnqLVToC+GbO+FHoJnBF3/D5pECvz+CtqKwilYjiIMMNZGGg0+zO2lW2iceqFSTkNkIxGIwBg==",
    "transactionAmount": 8.73,
    "transactionId": "2014332__1__C",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "currentBalance": 50576.36,
    "type": "depositAccountTransaction",
    "transactionDate": "2014-11-28T05:00:00.000Z",
    "transactionDetailsRetrievalURL": {
        "method": "GET",
        "href": "https://rtm-qsb3:8513/deposits/accounts/HNazQHwjHw0qm9nT%2F3bUW%2FtNYeGs9TCPMv2UQumFT4A%3D/transactions/SUPEQNyjyAA7TUnqLVToC5%2BrJx2xhiAp2lCG8KLGK5M%3D"
    },
    "transactionResearchAids": [
        {
            "value": "GT21",
            "key": "transactionCode"
        },
        {
            "value": "0",
            "key": "referenceNumber"
        },
        {
            "value": "1",
            "key": "sequenceNumber"
        },
        {
            "value": "Debit",
            "key": "transactionTypeDesc"
        }
    ],
    "debitCreditType": "Debit",
    "effectiveDate": "2014-11-28",
    "transactionDescription": "FEDERAL IOD TAX WITHHELD ",
    "transactionStatus": "posted"
  }
  ]
};
module.exports.mma30Transactions=data;