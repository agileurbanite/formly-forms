var data={
  "statusCode"    : "200",
  "duePaymentDate": "June 30, 2015 11:13:00",
  "defaultBlankAccount":true,
  "availableAmounts":[
    {"type":"totalDue", "value": "761.40"},
    {"type":"currentDue", "value": "400.50"},
    {"type":"pastDue", "value": "200.07"},
    {"type":"fees", "value": "365.40"},
    {"type":"principalOnly", "value": ""},
    {"type":"otherAmnt", "value": ""},
  ],
  "availableAccounts":[
    {
      "referenceId"   : "nZCs4vllnL%252BqOia2dH6TgnzkShfbKOV%252Bkeou3k1h3Iq%252Flicav%252BLABynaWgrWplEq",
      "subCategory"   : "360",
      "displayBalance": 11541.07,
      "displayName"   : "360 Checking",
      "category"      : "DDA",
      "accountNumber" : "36000015049",
      "abaNumber"     : "11100001111"
    },{
      "displayName"   : "VISA PLATINUM",
      "subCategory"   : "",
      "accountNumber" : "XXXX-XXXX-XXXX-3519",
      "referenceId"   : "XqLuxBTABbIDvpw56ba34sThn9M8ukAc6MRRn%252Fwmgpo%253D",
      "category"      : "CC",
      "displayBalance": 15247.4,
      "abaNumber"     : "11100002222"
    },{
      "referenceId"   : "nZCs4vllnL%252BqOia2dH6Tgjye5jJLFoKOKNo9Fj9TRxgIuoAWeOFfpcHlOmBzlXd6",
      "subCategory"   : "360",
      "displayBalance": 5006.33,
      "displayName"   : "CD",
      "category"      : "CD",
      "accountNumber" : "36000030211",
      "abaNumber"     : "11100003333"
    },{
      "referenceId"   : "KtJxBvyYR4%252BVEe72aacKhLtMhNld4T0mlmQmG9MPtlY%253D",
      "subCategory"   : "retail",
      "displayBalance": 500097.95,
      "displayName"   : "Regular Checking",
      "category"      : "DDA",
      "accountNumber" : "4219176448",
      "abaNumber"     : "11100004444"
    }
  ],
  "availableDates":
  {
    "type":"paymentDateCollectionResponse",
    "entries":[]
  }
};

var nextDay = function(date){
  date.setDate(date.getDate()+1);
  return date;
}

var isSunday = function(date){
  return date.getDay() == 0;
}

var formatDate = function(date){
  var month = date.getMonth() + 1;
  if (month < 10){
    month = '0' + month;
  }
  var day = date.getDate();
  if (day < 10){
    day = '0' + day;
  }
  return date.getFullYear() + "-" + month + "-" + day;
}

var amount = 8240.16;
var date = new Date();
for (var day = 0; day < 10; day ++){
  data.availableDates.entries.push(
    {
      "payOffAmount": amount,
      "paymentDate": formatDate(date),
      "type:": "paymentDate"
    });
  amount = (Math.round(amount * 1.01 * 100))/100;
  date = nextDay(date);
  if ( isSunday(date)){
    date = nextDay(date);
  }
}
module.exports.ummPaymentsInfo=data;
