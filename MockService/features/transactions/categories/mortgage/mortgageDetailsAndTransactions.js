var data=
{
   "accountDetails": {
    "loanAccountPaymentInfo": {
      "optionalInsuranceAmount": 0,
      "totalPrincipalPaid": 53415.98,
      "nextPaymentAmount": 1000.20,
      "lastPaymentAmount": 733.42,
      "lastPaymentDate": "2014-11-26T05:00:00.000Z",
      "nextPaymentDate": "2015-01-01T05:00:00.000Z",
      "minimumPaymentAmount": 733.42,
      "interestPaidYTD": 3559.52,
      "unpaidPastDueAmount": 0,
      "monthlyMortgageInsuranceAmount": 0,
      "monthlyEscrowPaymentAmount": 0,
      "unappliedFunds": 20,
      "unpaidLateFee": 0
    },
    "accountReferenceId": "ULilFAtEnVL9jCipXfGtdrXj0nDAWjOeHwy%252B9Y38Src%253D",
    "remainingTerm": 223,
    "alertMessages": [],
    "propertyAddress": {
    "postalCode": "12405-0000",
    "stateCode": "WA",
    "addressLine1": "2406 SW LEE PARK",
    "city": "MONROE"
    },
    "currentAPR": 2.75,
    "loanAccountBalanceInfo": {
      "originalLoanAmount": 180000,
      "deferredInterestBalance": 0,
      "currentBalance": 126584.02,
      "currentEscrowBalance": 0,
      "principalBalance": 126584.02
    },
    "easeProductCategory": "mortgages",
    "loanTermDuration": 360,
    "statusCode": "200",
    "loanMaturityDate": "2033-07-01T04:00:00.000Z",
    "propertyOwner": "STEVE H ROBERTS",
    "rateOfInterest": 2.75,
    "openDate": "2003-06-30T04:00:00.000Z"
},
"transactions": {
    "statusCode": "200",
    "entries": [
    {
      "transactionState": "Posted",
      "transactionAmount": -284.49,
      "postedDate": "2014-12-03T04:00:00.000Z",
      "effectiveDate": "2014-12-03T04:00:00.000Z",
      "type": "transaction",
      "transactionDescription": "Payment Received"
    }
    ],
    "developerMessage": "The mortgages transactions eAPI is not working right now.  This forced message from EO layer."
}
};

module.exports.mortgageDetailsAndTransactions=data;