const express = require('express');
const { Connection, Request } = require("tedious");
const app = express();
const request = require('request');

var username="bsm2ck324te000b24tvg";
var password="38d5e4033edb461184f41ee2cbda7ac5";
var projectId="bpl2svj0d6g000ei4ip0";
var apiUrlBase="https://api.disruptive-technologies.com/v2";
var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

var doorsandwindows = [
  'bj9vdjj1or1g00e49dq0',
  'bj9u2ik1bddg00fbmkgg',
  'bjej3btp0jt000aqcfmg',
  'bj9vdm3fvtng00a96j7g',
  'bj9vdpcounqg009msorg',
  'bj9vfhv7cdlg00ba0a20',
  'bj9s3qj1or1g00e48fvg'
];

var seats = [
  'bjejr2e7gpvg00cjojsg',
  'bjek5lvbluqg00dlu6q0',
  'bj9u7kjfvtng00a9699g',
  'bjek5lvbluqg00dlu6qg',
  'bjek5f67gpvg00cjomvg',
  'bjek5j0pismg008hqvsg',
  'bj9u7frfvtng00a96980',
  'bj9u7ff7cdlg00b9vvgg',
  'bj9u7lc1bddg00fbmm1g',
  'bjek5ju7gpvg00cjon0g',
  'bjejr0m7kro000cp12s0',
  'bjek5ie7kro000cp15v0',
  'bjejr05ntbig00e43ve0',
  'bj9u7hae27fg00a7f3dg',
  'bj9u4cqe27fg00a7f2f0',
  'bjejqpgpismg008hqsn0',
  'bjek5mlntbig00e442gg',
  'bj9u7m2e27fg00a7f3eg',
  'bjejr38pismg008hqsq0',
  'bjejrtfbluqg00dlu3v0',
  'bjek5n67kro000cp160g',
  'bjejr2e7gpvg00cjojs0',
  'bj9u7lc1bddg00fbmm20',
  'bj9s5n77cdlg00b9vcd0',
  'bja09oj1or1g00e49m1g',
  'bja09ijfvtng00a96r90',
  'bj9vdnie27fg00a7fdd0',
  'bj9s3mcounqg009mrr10',
  'bj9vfoqe27fg00a7fe00',
  'bj9s3sv7cdlg00b9vbs0',
  'bja09fae27fg00a7fli0',
  'bja09l3fvtng00a96rag',
  'bj9vfjqe27fg00a7fdv0',
  'bja09ls1bddg00fbn860',
  'bja09g31or1g00e49m0g',
  'bja09jc1bddg00fbn84g',
  'bja09k2e27fg00a7fljg',
  'bja09g31or1g00e49m00',
  'bj9s5g4ounqg009mrrjg',
  'bj9vfeae27fg00a7fdtg',
  'bj9vr7r1or1g00e49hmg',
  'bj9s5jae27fg00a7efv0',
  // windows and doors
  'bj9vdjj1or1g00e49dq0',
  'bj9u2ik1bddg00fbmkgg',
  'bjej3btp0jt000aqcfmg',
  'bj9vdm3fvtng00a96j7g',
  'bj9vdpcounqg009msorg',
  'bj9vfhv7cdlg00ba0a20',
  'bj9s3qj1or1g00e48fvg'
];
var sensor_state = new Array(49);




var i = 0;
var j = 0;
function intervalFunc() {
  var seat_url = seat1url = `${apiUrlBase}/projects/${projectId}/devices/${seats[i]}`;
  // var dandw_url = seat1url = `${apiUrlBase}/projects/${projectId}/devices/${doorsandwindows[i]}`;

    request.get({
      url: seat_url,
      json: true,
      headers: {'Authorization': auth}
    }, (err, res, data) => {
      if (err) {
        console.log('Error:', err);
      } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
      } else {
        sensor_state[i] =[data['labels']['ID'], data['reported']['objectPresent']['state']];  
        console.log(sensor_state[i]);
        i++;
      }
    });

    
    if (i == 49){
      i = 0;
    }
}

setInterval(intervalFunc, 300);

console.log('End')



var totalrecords=864;
var data_hours = [];

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "smartctlab", // update me
      password: "SmartCTl@b" // update me
    },
    type: "default"
  },
  server: "smartctlab-server.database.windows.net", // update me
  options: {
    database: "SmartCTlab", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase(totalrecords);
    app.get('/state', function(req, res){
      // j++;
      // if (j>10){
      //   seat_state[j] = 'PRESENT'
      // }
      res.json(sensor_state); 
      console.log('seat yes');
    });
    app.get('/data', function(req, res){
      res.json(data_hours); 
      console.log(totalrecords+'yes');
    });
    // app.post('/api', (req,res)=>{
    //   console.log('got'+ req.body.value);
    //   res.json({
    //     status: 'success'
    //   });
    //   data_hours = [];
    //   var postpromise = new Promise(function(resolve,reject){
    //     var status = queryDatabase(req.body.value);
    //   });
    //   postpromise.then(d =>{
    //     console.log(d);
    //     app.get('/data', function(req, res){
    //       res.json(data_hours); 
    //       console.log(totalrecords+'yes');
    //     });
    //   });

    // });



    // router.post('/api', (request, response) => {
    //   data_hours = [];
    //   console.log(request.body);
    //   new Promise((resolve, reject) => {
    //     totalrecords = request.body.value;
    //     console.log(totalrecords);
    //     resolve(totalrecords);
    //   }).then(val => {
    //     queryDatabase(val);
    //     router.get('/data', function(req, res){
    //       res.json(data_hours); 
    //       console.log(val+'yes');
    //     });
    //   });

    // });
    app.listen(3000, () => {
      console.log("Server is running on port 3000.");
    });
      
  }
});

function queryDatabase(totalrecords) {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT TOP ${totalrecords} * FROM [dbo].[IEQ_data]
    ORDER BY time_record DESC;`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.dir(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    data_hours.push(columns);
    // columns.forEach(column => {
    //   data_hours.push
    //   console.log("%s\t%s", column.metadata.colName, column.value);
    // });
  });

  
  connection.execSql(request);
  return true;
}


