var data =
{
  "accountDetails": {
        "accountNickname": "Auto Loan",
        "accountPastDueDaysCount": 0,
        "accountReferenceId": "QBu/Q+LfJI1bkC0GH/Sfl+rNSSzFBFN9GgZ+Vd9l4OYaelgoyCmYbBhaJNC1v+oX",
        "accountStatus": {
            "statusDescription": "Open/Active Loan"
        },
        "borrowerName": "MJERM S KJAA BA",
        "coBorrowerName": "",
        "currentAPR": 15.19,
        "displayAccountNumber": "6202140004204",
        "dueDate": "2015-07-10",
        "hidePrincipalBalance": false,
        "interestPaidAmountLastYear": 119.44,
        "interestPaidYTDAmount": 0,
        "isAccountClosed": false,
        "isChangeInTermApplicable": false,
        "loanBalance": 6099.64,
        "loanTermDuration": 49,
        "maturityDate": "2018-05-10",
        "minimumPaymentAmount": 218,
        "openDate": "2014-04-26",
        "originalLoanAmount": 7756.82,
        "tenDayPayoffQuoteAmount": 6152.95,
        "todayPayoffAmount": 6122.49,
        "totalAmountDue": 218,
        "totalInterestPaidAmount": 1214.82,
        "totalPrinPaidAmount": 1657.18,
        "unpaidLateFee": 0,
        "unpaidMiscellaneousFeeAmount": 0,
        "unpaidOtherFee": 0,
        "unpaidPastDueAmount": 0,
        "vehicleIdentificationNumber": "4A3AB26F44E135736",
        "vehicleMake": "MITSUBIS",
        "vehicleModel": "GALANT",
        "vehicleYear": "04"
    },
    "transactions": {
        "entries": [
        {
                "date": "2015-07-06T05:00:00.000Z",
                "transactionAmount": 25,
                "transactionDescription": "One-Time Payment",
                "transactionState": "Scheduled",
                "transactionType": "CREDIT"
            }
        ],
        "scheduled": [
            {
                "date": "2015-07-06T05:00:00.000Z",
                "transactionAmount": 25,
                "transactionDescription": "One-Time Payment",
                "transactionState": "Scheduled",
                "transactionType": "CREDIT",
                "effectiveDate": "Tuesday, June 24, 2015",
                "postedDate": "Tuesday, June 24, 2015",
                "fromAccount": "Bank of America…2020",
                "toAccount": "My Corvette…1234",
                "postedInterestAmount": 43.15,
                "postedPrincipalAmount": 469.05,
                "lateFees":0.00,
                "otherFees":0.00,
                "totalPayments":512.20,
                "transactionAmount": -371,
                "transactionDescription": "Payment Received",
                "transactionState": "scheduled",
                "transactionType": "CREDIT"

            },
            {
              "date": "2015-07-06T05:00:00.000Z",
              "transactionAmount": 245,
              "transactionDescription": "One-Time Payment",
              "transactionState": "Scheduled",
              "transactionType": "CREDIT",
              "effectiveDate": "March 28, 2015",
              "postedDate": "March 28, 2015",
              "fromAccount": "Capital One",
              "toAccount": "Cherokee",
              "postedInterestAmount": 51.79,
              "postedPrincipalAmount": 89.21,
              "transactionAmount": -671,
              "transactionDescription": "Payment Received",
              "transactionState": "scheduled",
              "transactionType": "CREDIT"
            },
            {
              "date": "2015-07-06T05:00:00.000Z",
              "transactionAmount": 25,
              "transactionDescription": "One-Time Payment",
              "transactionState": "Scheduled",
              "transactionType": "CREDIT",
              "effectiveDate": "March 28, 2015",
              "postedDate": "March 28, 2015",
              "fromAccount": "Capital One",
              "toAccount": "'15 Grand Cherokee",
              "postedInterestAmount": 66.79,
              "postedPrincipalAmount": 889.21,
              "transactionAmount": -71,
              "transactionDescription": "Payment Received",
              "transactionState": "scheduled",
              "transactionType": "CREDIT"
            }
        ],
        "Pending": [
        {
                "date": "2015-07-06T05:00:00.000Z",
                "transactionAmount": 25,
                "transactionDescription": "One-Time Payment",
                "transactionState": "Pending",
                "transactionType": "DEBIT"
            }
        ],
        "Posted": [
          {
            "date": "2015-07-06T05:00:00.000Z",
            "transactionAmount": 25,
            "transactionDescription": "One-Time Payment",
            "transactionState": "Posted",
            "transactionType": "DEBIT"
          }
        ]
    }
};

module.exports.autoLoanDetailsAndTransactions=data;
