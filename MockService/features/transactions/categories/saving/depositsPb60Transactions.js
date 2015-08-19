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
    "statementDescription": "01 INT EARNED ",
    "transactionReferenceId": "diEsoA9r01bYT2meZlREhmAWD16fBOgf1/ETr42nPq1RPkLCBoilir00lxPgZ4eB",
    "transactionAmount": 0.04,
    "transactionId": "8",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "checkDetails": {},
    "currentBalance": 1000.26,
    "type": "depositAccountTransaction",
    "transactionDate": "2014-11-28T05:00:00.000Z",
    "transactionDetailsRetrievalURL": {
        "method": "GET",
        "href": "https://rtm-qsb3:8513/deposits/accounts/Dev%2F5ukrx7hBsFDVJNM1DPChGLimTVTPBJJOs5Rd6ciQqiMIeWnk3Z2mGcoJ7cX1/transactions/vnyrHUviikbe7uJNDxTTFA%3D%3D"
    },
    "transactionResearchAids": [
    {
        "value": "GT01",
        "key": "transactionCode"
    },
    {
        "value": "0",
        "key": "referenceNumber"
    },
    {
        "value": "8",
        "key": "sequenceNumber"
    },
    {
        "value": "Credit",
        "key": "transactionTypeDesc"
    }
    ],
    "debitCreditType": "Credit",
    "effectiveDate": "2014-11-30",
    "transactionDescription": "01 INT EARNED ",
    "transactionStatus": "posted"
  },
  {
    "statementDescription": "01 INT EARNED ",
    "transactionReferenceId": "xSjVOHKp/g9ptSCetMLtrB9KzmMLeqJEVZEQAYG2YmiMZpHjGNEkarp3twTeTDEK",
    "transactionAmount": 0.04,
    "transactionId": "7",
    "currencyCode": "USD",
    "internalTransferIndicator": false,
    "checkDetails": {},
    "currentBalance": 1000.22,
    "type": "depositAccountTransaction",
    "transactionDate": "2014-10-31T04:00:00.000Z",
    "transactionDetailsRetrievalURL": {
        "method": "GET",
        "href": "https://rtm-qsb3:8513/deposits/accounts/Dev%2F5ukrx7hBsFDVJNM1DPChGLimTVTPBJJOs5Rd6ciQqiMIeWnk3Z2mGcoJ7cX1/transactions/2MYYe%2BCEd%2FBkbsUt%2BgXdyw%3D%3D"
    },
    "transactionResearchAids": [
    {
        "value": "GT01",
        "key": "transactionCode"
    },
    {
        "value": "0",
        "key": "referenceNumber"
    },
    {
        "value": "7",
        "key": "sequenceNumber"
    },
    {
        "value": "Credit",
        "key": "transactionTypeDesc"
    }
    ],
    "debitCreditType": "Credit",
    "effectiveDate": "2014-10-31",
    "transactionDescription": "01 INT EARNED ",
    "transactionStatus": "posted"
  }
  ]
};
module.exports.depositsPb60Transactions=data;