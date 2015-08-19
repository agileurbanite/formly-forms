var express = require('express');
var authenticate = require('./loginService');

var router = express.Router();


router.route('/customer/login')
    .post(function(req, res){
        var userInfo = req.body;
        console.log(userInfo.uname + userInfo.upwd);
        res.json(authenticate.authenticateUser(userInfo.uname, userInfo.upwd));
    });

router.route('/customer/accountsummary/*')
  .get(function(req, res) {
    res.json(authenticate.getSummary());
  });

router.route('/customer/getMessages')
  .post(function(req, res){
    console.log('this is the getmessage service');
    res.json(authenticate.getMessage());
  });

router.route('/customer/respondToMessage')
  .post(function(req, res){
    console.log('this is the response service');
    res.json(true);
  });

router.route('/customer/transfer/submitMoneyTransfer')
  .post(function(req, res){
    var scheduleResponse = {
      moneyTransferReferenceId:'MMID',
      executionStatus:'success',
      moneyTransferID:'DD3NCMBBBD',
      transactionConfirmationNumber:'45',
      fromAccountEffectiveBalance:'5757.67',
      toAccountEffectiveBalance:'8878.7',
      effectiveDate:'2015-01-28T05:00:00.000Z',
      fundsAvailabilityDate:'2015-01-28T05:00:00.000Z',
      error:{
        errorCode:'error1',
        errorText:'error occured during transaction',
        additionalError:{
          additionalErrorCode:'',
          additionalErrorText:'',
          nativeErrorCode:'',
          nativeErrorText:''
        }
      }
    }

    var instantResponse ={
      executionStatus:'success',
      moneyTransferID:'DD3NCMBBBD',
      transactionConfirmationNumber:'45',
      fromAccountEffectiveBalance:'5757.67',
      toAccountEffectiveBalance:'8878.7',
      effectiveDate:'2015-01-28T05:00:00.000Z',
      fundsAvailabilityDate:'2015-01-28T05:00:00.000Z',
      error:{
        errorCode:'error1',
        errorText:'error occured during transaction',
        additionalError:{
          additionalErrorCode:'',
          additionalErrorText:'',
          nativeErrorCode:'',
          nativeErrorText:''
        }
      }
    }
    console.log('congrats your money has been transferred');
    res.json(instantResponse);
  });

router.route('/customer/answers')
    .post(function(req, res){
        var userInfo = req.body;
        var answer = userInfo.questionsList[0].answer;
        if(answer=="fail"){
          res.status(500).json(authenticate.authenticateMFA2());
        }else{
          res.json(authenticate.authenticateMFA());
        }
    });

module.exports = router;
