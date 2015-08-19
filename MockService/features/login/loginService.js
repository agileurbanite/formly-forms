var newDataUI = require('./mock_data/users').userNew;
var newSingleData = require('./mock_data/users').userSinglePrdView;
var singleAlData = require('./mock_data/users').userSingleAutoloan;
var singleHlData = require('./mock_data/users').userSingleHomeloan;
var singleSaData = require('./mock_data/users').userSingleSaving;
var singleSaDataMsg = require('./mock_data/users').userSingleSavingMsg;
var singleCcData = require('./mock_data/users').userSingleCreditcard;
var userSingleAcctRestrict = require('./mock_data/users').userSingleAcctRestrict;
var userSingleAcctClosed = require('./mock_data/users').userSingleAcctClosed;
var newHomeLoans = require('./mock_data/users').userHomeLoans;
var messages = require('./mock_data/getmessage').message;
var userMfa = require('./mock_data/users').user2;
var summary = require('./mock_data/getsummary').accounts;

var authenticate = {
    authenticateUser: function(uname, upwd) {
        console.log('checking data for :' + uname);
        switch (uname) {
            case 'new':
                return newDataUI;
            case 'single':
                return newSingleData;
            case 'singleal':
                return singleAlData;
            case 'singlehl':
                return singleHlData;
            case 'singlear':
                return userSingleAcctRestrict;
            case 'singlesa':
                return singleSaData;
            case 'singlesam':
                return singleSaDataMsg;
            case 'singlecc':
                return singleCcData;
            case 'singleac':
                return userSingleAcctClosed;
            case 'homeLoans':
                return newHomeLoans;
            case 'userMf':
                return userMfa;
            default:
                return newDataUI;
        }
    },
    authenticateMFA: function() {
        return newDataUI;
    },
    authenticateMFA2: function() {
        return newDataUI;
    },
    getMessage: function(){
      return messages;
    },
    getSummary: function() {
      return summary;
    }
};

module.exports = authenticate;
