var data =
{
  "type": "transactionEntityCollectionResponse",
  "total": 4,
  "entries": [
    {
      "transactionState": "Scheduled",
      "transactionType": "CREDIT",
      "transactionAmount": 325.37,
      "paymentType": "($199.70 + $125.67 Additional Principal)",
      "confirmationNumber": "214-0021613-3",
      "fromAccount": "8160338373       ",
      "effectiveDate": "2015-04-09T12:40:34.667Z",
      "type": "transaction",
      "transactionDescription": "One-Time Payment",
      "transactionDate": "2014-06-27T12:40:34.667Z"
    },
    {
      "transactionState": "Posted",
      "postedPrincipalAmount": -95.59,
      "transactionType": "CREDIT",
      "transactionAmount": -199.7,
      "postedMiscAmount": 0.0,
      "postedInterestAmount": -104.11,
      "postedDate": "2015-01-09T12:40:34.667Z",
      "postedLateFeesAmount": 0.0,
      "postedOtherFeesAmount": 0.0,
      "effectiveDate": "2015-01-09T12:40:34.667Z",
      "type": "transaction",
      "transactionDescription": "Payment Received"
    },
    {
      "transactionState": "Posted",
      "postedPrincipalAmount": -95.3,
      "transactionType": "CREDIT",
      "transactionAmount": -199.7,
      "postedMiscAmount": 0.0,
      "postedInterestAmount": -104.4,
      "postedDate": "2015-01-02T12:40:34.667Z",
      "postedLateFeesAmount": 0.0,
      "postedOtherFeesAmount": 0.0,
      "effectiveDate": "2015-01-02T12:40:34.667Z",
      "type": "transaction",
      "transactionDescription": "Payment Received"
    },
    {
      "transactionState": "Posted",
      "postedPrincipalAmount": 0.0,
      "transactionType": "DEBIT",
      "transactionAmount": 5.22,
      "postedMiscAmount": 0.0,
      "postedInterestAmount": 0.0,
      "postedDate": "2015-01-01T12:40:34.667Z",
      "postedLateFeesAmount": 5.22,
      "postedOtherFeesAmount": 0.0,
      "effectiveDate": "2015-01-01T12:40:34.667Z",
      "type": "transaction",
      "transactionDescription": "Late Fees Assessed"
    }
  ],
  "pending": [
    {
      "transactionState": "Pending",
      "transactionType": "CREDIT",
      "transactionAmount": 30.0,
      "paymentType": "(Fees Only)",
      "confirmationNumber": "214-0021613-2",
      "fromAccount": "8160338373       ",
      "effectiveDate": "2015-03-19T12:40:34.667Z",
      "type": "transaction",
      "transactionDescription": "One-Time Payment",
      "transactionDate": "2014-06-20T12:40:34.667Z"
    }
  ],
  "scheduled": [
    {
      "transactionState": "Scheduled",
      "transactionType": "CREDIT",
      "transactionAmount": 209.09,
      "confirmationNumber": "Pending DPay",
      "fromAccount": "01010101010101010",
      "bankName": "FIRST CAPITAL BANK",
      "effectiveDate": "2015-03-31T12:40:34.667Z",
      "type": "transaction",
      "transactionDescription": "DirectPay Recurring Payment",
      "transactionDate": "2014-05-21T12:40:34.667Z"
    }
  ]
};
module.exports.autoLoanMoreTransactions = data;