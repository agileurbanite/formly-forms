var data=
{
	"accountDetails": {
		"bankNumberDescription": "LA",
		"stopPaymentsIndicator": false,
		"openingDepositAmount": 500000,
		"taxIdType": "SSN",
		"lastMaintenanceDate": "2014-10-09T00:00:00.000Z",
		"accountNumber": "4219176448",
		"restrictionsIndicator": false,
		"withholdingReason": "",
		"lastStatementBalance": 500092.47,
		"openMethod": "Face To Face",
		"openDate": "2014-05-19T00:00:00.000Z",
		"accountReferenceId": "KtJxBvyYR4%252BVEe72aacKhLtMhNld4T0mlmQmG9MPtlY%253D",
		"interestEarnedYTD": 97.95,
		"lastActivityDate": "2014-05-19T00:00:00.000Z",
		"accountTransactionsUrl": {
			"method": "GET",
			"href": "https://rtm-qsb3:8513/deposits/accounts/KtJxBvyYR4%2BVEe72aacKhLtMhNld4T0mlmQmG9MPtlY%3D/transactions"
		},
		"easeProductCategory": "dda",
		"withholdingAmountYTD": 0,
		"totalPendingDebits": 0,
		"taxId": "481687043",
		"branchCostCenter": "41401",
		"bankFloatAmount": 0,
		"branchName": "Carondelet Street",
		"interestAccruedAmount": 0,
		"interestEarnedLastYear": 0,
		"branchAreaCode": "81",
		"lastStatementDate": "2014-09-30T00:00:00.000Z",
		"interestRatePointer": "NONE",
		"branchAreaDescription": "Louisiana",
		"currentBalance": 500097.95,
		"easeDisplayName": "Regular Checking",
		"totalHoldAmount": 0,
		"collectedBalance": 500097.95,
		"statusCode": "200",
		"accountStatus": "Active",
		"totalPendingCredits": 0,
		"ledgerBalance": 500097.95,
		"accountTitle": {
			"accountTitleLine1": "BOK SHULTS"
		},
		"bankABANumber": "65000090",
		"currencyCode": "USD",
		"availableBalance": 500097.95,
		"customerFloat": {
			"totalFloatAmount": 0,
			"day1AvailableAmount": 0,
			"day7AvailableAmount": 0,
			"day3AvailableAmount": 0,
			"day5AvailableAmount": 0,
			"day2AvailableAmount": 0,
			"day6AvailableAmount": 0,
			"day4AvailableAmount": 0
		},
		"statementType": "Paper",
		"interestRate": 0,
		"bankNumber": "81",
		"holdsIndicator": false,
		"product": {
			"productClassDescription": "Deposit",
			"productTypeCode": "DDA",
			"productTypeDescription": "Checking",
			"productClassCode": "DP",
			"productName": "Regular Checking",
			"productId": "IM180"
		},
		"analysisCode": "Account Not Used for Analysis",
		"businessLine": "Deposit",
		"address": {
			"countryName": "United States",
			"postalCode": "23060",
			"countryCode": "US",
			"stateCode": "VA",
			"addressLine1": "7413 SEASAME ST",
			"city": "GLEN ALLEN"
		},
		"overdraftAccounts": [],
		"easeProductName": "_regular-checking",
		"retirementAccountIndicator": false
	},
	"transactions": {
		"statusCode": "200",
		"nextURL": {
      "href": 'next',
      "method": 'string'
    },
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
		}
		]
	}
};

module.exports.checkingDetailsAndTransactions=data;