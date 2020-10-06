var settings = {
  rows: 5,
  cols: 10,
  rowCssPrefix: 'row-',
  colCssPrefix: 'col-',
  seatWidth: 25,
  seatHeight: 25,
  seatCss: 'seat',
  selectedSeatCss: 'selectedSeat',
  selectingSeatCss: 'selectingSeat'
};

var init = function(reservedSeat) {
  var str = [],
    seatNo, className;
  for (i = 0; i < settings.rows; i++) {
    for (j = 0; j < settings.cols; j++) {
      seatNo = 50 - (i + j * settings.rows);
      className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
      if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
        className += ' ' + settings.selectedSeatCss;
      }
      str.push('<li class="' + className + '"' +
        'style="font-size: 25px; top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
        '<a title="' + seatNo + '">' + seatNo + '</a>' +
        '</li>');
    }
  }
  $('#place').html(str.join(''));
};

// var username="bsm2ck324te000b24tvg";
// var password="38d5e4033edb461184f41ee2cbda7ac5";
// var projectId="bpl2svj0d6g000ei4ip0";
// var apiUrlBase="https://api.disruptive-technologies.com/v2";
// var request = new XMLHttpRequest(); 
// console.log('here')
// var seat1 = 'bjejr2e7gpvg00cjojsg';
// var seat1url = `${apiUrlBase}/projects/${projectId}/devices/${seat1}`;
// console.log(seat1url)
// request.open( "GET", seat1url, true );
// request.setRequestHeader("Authorization", "Basic " + window.btoa("bsm2ck324te000b24tvg:38d5e4033edb461184f41ee2cbda7ac5"));
// request.setRequestHeader("Content-type", "application/json");
// request.onreadystatechange = function () {
//     console.log('second here');
//     if (request.readyState == 4 && request.status == 200) {
//         var response = request.responseText;
//         var obj = JSON.parse(response); 
//         console.dir(obj);
//     }
// };
// $(document).ready(function() {

$(function(){
  getSeatData();
  setInterval(function(){
    getSeatData();
  }, 1000);
});

function getSeatData(){
  $.get('http://127.0.0.1:3000/state', {}, function(data){
    var occ_Seats = [];
    var count = 0;
    for (i = 0;i<42;i++) {
      if (data[i][1] == 'PRESENT') {
        occ_Seats.push(Number(data[i][0]));
        count++;
      }
    }
    init(occ_Seats);
    labmapstate(data[42][1],'frontdoor');
    labmapstate(data[43][1],'backdoor');
    labmapstate(data[44][1],'outdoor');
    labmapstate(data[45][1],'window1');
    labmapstate(data[46][1],'window2');
    labmapstate(data[47][1],'window3');
    labmapstate(data[48][1],'window4');
    console.dir(occ_Seats);
    document.getElementById("totalcount").innerHTML=occ_Seats.length;
  });
}



// init(test_Seats);
