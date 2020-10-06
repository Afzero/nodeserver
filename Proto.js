// array for IEQ parameters
var occ = createArray(864,2);
var tem = createArray(864,2);
var co2 = createArray(864,2);
var hum = createArray(864,2);
var pre = createArray(864,2);
var noi = createArray(864,2);

var plot_occ = [];
var plot_tem = [];
var plot_co2 = [];
var plot_hum = [];
var plot_pre = [];
var plot_noi = [];

// doors and windows
var frontdoor = createArray(864,2);
var frontdoor_state = [];
var backdoor = createArray(864,2);
var backdoor_state = [];
var outdoor = createArray(864,2);
var outdoor_state = [];
var window_1 = createArray(864,2);
var window_1_state = [];
var window_2 = createArray(864,2);
var window_2_state = [];
var window_3 = createArray(864,2);
var window_3_state = [];
var window_4 = createArray(864,2);
var window_4_state = [];


// chart options
var occ_options = {
  series :[],
  chart: {
    id: 'ch_oc',
    height: 350,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  yaxis: {
    title: {
      text: 'Occupancy'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var tem_options = {
  series :[],
  chart: {
    height: 350,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
    },
  yaxis: {
    title: {
      text: 'Temperature'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var co2_options = {
  series :[],
  chart: {
    height: 350,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
    },
  yaxis: {
    title: {
      text: 'CO2 level'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var hum_options = {
  series :[],
  chart: {
    height: 350,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
    },
  yaxis: {
    title: {
      text: 'Humidity'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var pre_options = {
  series :[],
  chart: {
    height: 350,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
    },
  yaxis: {
    title: {
      text: 'Air pressure'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var noi_options = {
  series :[],
  chart: {
    height: 350,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    title: {
      text: 'Noise'
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var doorstatus_options = {
  series: [],
  chart: {
    id : 'doors',
    type: 'line',
    height: 150,
    width : '95%',
    toolbar :{
      show: false,
      tools : {
        zoom :false
      }
    }
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'doors',
    align: 'left'
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    min : 0,
    max : 1,
    tickAmount: 1,
    labels :{
      minWidth : 40,
      formatter: function (value) {
        if (value == 1){
          return "open";
        } else {
          return "closed";
        }
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var windowstatus_options = {
  series: [],
  chart: {
    id : 'windows',
    type: 'line',
    height: 150,
    width : '95%',
    toolbar :{
      show: false,
      tools : {
        zoom :false
      }
    }
  },
  stroke: {
    curve: 'stepline',
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'windows',
    align: 'left'
  },
  markers: {
    hover: {
      sizeOffset: 4
    }
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    min : 0,
    max : 1,
    tickAmount: 1,
    labels :{
      minWidth : 40,
      formatter: function (value) {
        if (value == 1){
          return "open";
        } else {
          return "closed";
        }
      }
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var compare_option1 = {
  series :[],
  chart: {
    id: 'chart1',
    group: 'compare',
    height: 200,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var compare_option2 = {
  series :[],
  chart: {
    id: 'chart2',
    group: 'compare',
    height: 200,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var compare_option3 = {
  series :[],
  chart: {
    id: 'chart3',
    group: 'compare',
    height: 200,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var compare_option4 = {
  series :[],
  chart: {
    id: 'chart4',
    group: 'compare',
    height: 200,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var compare_option5 = {
  series :[],
  chart: {
    id: 'chart5',
    group: 'compare',
    height: 200,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};

var compare_option6 = {
  series :[],
  chart: {
    id: 'chart6',
    group: 'compare',
    height: 200,
    width: '95%',
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: true,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    type: 'datetime'
  },
  tooltip: {
    enabled: true,
    offsetX: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  },
  noData: {
    text: 'Loading...'
  }
};



// chart creating
var occ_chart = new ApexCharts(document.querySelector("#occ_chart"), occ_options);
occ_chart.render();
var tem_chart = new ApexCharts(document.querySelector("#tem_chart"), tem_options);
tem_chart.render();
var co2_chart = new ApexCharts(document.querySelector("#co2_chart"), co2_options);
co2_chart.render();
var hum_chart = new ApexCharts(document.querySelector("#hum_chart"), hum_options);
hum_chart.render();
var pre_chart = new ApexCharts(document.querySelector("#pre_chart"), pre_options);
pre_chart.render();
var noi_chart = new ApexCharts(document.querySelector("#noi_chart"), noi_options);
noi_chart.render();
var doorstatus_chart = new ApexCharts(document.querySelector("#doorstatus_chart"), doorstatus_options);
doorstatus_chart.render();
var windowstatus_chart = new ApexCharts(document.querySelector("#windowstatus_chart"), windowstatus_options);
windowstatus_chart.render();

var compare_chart1 = new ApexCharts(document.querySelector("#compare_chart1"), compare_option1);
compare_chart1.render();
var compare_chart2 = new ApexCharts(document.querySelector("#compare_chart2"), compare_option2);
compare_chart2.render();
var compare_chart3 = new ApexCharts(document.querySelector("#compare_chart3"), compare_option3);
compare_chart3.render();
var compare_chart4 = new ApexCharts(document.querySelector("#compare_chart4"), compare_option4);
compare_chart4.render();
var compare_chart5 = new ApexCharts(document.querySelector("#compare_chart5"), compare_option5);
compare_chart5.render();
var compare_chart6 = new ApexCharts(document.querySelector("#compare_chart6"), compare_option6);
compare_chart6.render();


// gaugechart creating (random inital value)
var temgauge_element = document.querySelector('#temgauge');
var temgauge_Value = 22;
var co2gauge_element = document.querySelector('#co2gauge');
var co2gauge_Value = 400;
var humgauge_element = document.querySelector('#humgauge');
var humgauge_Value = 47;
var pregauge_element = document.querySelector('#pregauge');
var pregauge_Value = 1017.9;
var noigauge_element = document.querySelector('#noigauge');
var noigauge_Value = 76;

occ_chart.updateSeries([{name: 'occupied seats',
      data: [],
      animate: false}]);
    document.getElementById("defaultOpen").style.visibility = "visible";


$(document).ready(function() {
  $.get('http://127.0.0.1:3000/data', {}, function(data){
    
      // get occupancy/temperature/co2/ ...
      getData(occ, data, 0);
      getData(tem, data, 1);
      getData(co2, data, 2);
      getData(hum, data, 3);
      getData(pre, data, 4);
      getData(noi, data, 5);

      // get doors
      getData(frontdoor, data, 6);
      getData(backdoor, data, 7);
      getData(outdoor, data, 8);
      // get windows
      getData(window_1, data, 9);     
      getData(window_2, data, 10);      
      getData(window_3, data, 11);
      getData(window_4, data, 12);

      // print lab map
      // labmapstate(frontdoor[0][1],'frontdoor');
      // labmapstate(backdoor[0][1],'backdoor');
      // labmapstate(outdoor[0][1],'outdoor');
      // labmapstate(window_1[0][1],'window1');
      // labmapstate(window_2[0][1],'window2');
      // labmapstate(window_3[0][1],'window3');
      // labmapstate(window_4[0][1],'window4');

      console.log('mapready');

      // send data to gauge charts
      temgauge_Value = tem[0][1];
      co2gauge_Value = co2[0][1];
      humgauge_Value = hum[0][1];
      pregauge_Value = pre[0][1];
      noigauge_Value = noi[0][1];

      gaugePlotting();
      console.log('gaugeready');      

      dataUpdate(144);
  });
});

function dataUpdate(leng){
  // occ_chart.updateSeries([{name: 'occupied seats',
  //   data: [],
  //   animate: false}]);

  var delta = Math.round(leng/144);

  
  // get target sets
  plot_occ = [];
  var sliced_occ = occ.slice(0,leng);
  plot_tem = [];
  var sliced_tem = tem.slice(0,leng);
  plot_co2 = [];
  var sliced_co2 = co2.slice(0,leng);
  plot_hum = [];
  var sliced_hum = hum.slice(0,leng);
  plot_pre = [];
  var sliced_pre = pre.slice(0,leng);
  plot_noi = [];
  var sliced_noi = noi.slice(0,leng);
  var plot_frontdoor = [];
  var sliced_frontdoor = frontdoor.slice(0,leng);
  var plot_backdoor = [];
  var sliced_backdoor = backdoor.slice(0,leng);
  var plot_outdoor = [];
  var sliced_outdoor = outdoor.slice(0,leng);
  var plot_window_1 = [];
  var sliced_window_1 = window_1.slice(0,leng);
  var plot_window_2 = [];
  var sliced_window_2 = window_2.slice(0,leng);
  var plot_window_3 = [];
  var sliced_window_3 = window_3.slice(0,leng);
  var plot_window_4 = [];
  var sliced_window_4 = window_4.slice(0,leng);

  for (i = 0; i < leng; i=i+delta) {
    plot_occ.push(sliced_occ[i]);
    plot_tem.push(sliced_tem[i]);
    plot_co2.push(sliced_co2[i]);
    plot_hum.push(sliced_hum[i]);
    plot_pre.push(sliced_pre[i]);
    plot_noi.push(sliced_noi[i]);
    plot_frontdoor.push(sliced_frontdoor[i]);
    plot_backdoor.push(sliced_backdoor[i]);
    plot_outdoor.push(sliced_outdoor[i]);
    plot_window_1.push(sliced_window_1[i]);
    plot_window_2.push(sliced_window_2[i]);
    plot_window_3.push(sliced_window_3[i]);
    plot_window_4.push(sliced_window_4[i]);
  }

  frontdoor_state = openperiod(plot_frontdoor);
  backdoor_state = openperiod(plot_backdoor);
  outdoor_state = openperiod(plot_outdoor);
  window_1_state = openperiod(plot_window_1);
  window_2_state = openperiod(plot_window_2);
  window_3_state = openperiod(plot_window_3);
  window_4_state = openperiod(plot_window_4);

  // get status sets for doors/windows
  var frontdoor_number = statustonumber(plot_frontdoor);
  var backdoor_number = statustonumber(plot_backdoor);
  var outdoor_number = statustonumber(plot_outdoor);
  var window1_number = statustonumber(plot_window_1);
  var window2_number = statustonumber(plot_window_2);
  var window3_number = statustonumber(plot_window_3);
  var window4_number = statustonumber(plot_window_4);

  console.log('data ready');

  // send data to chart
  occ_chart.updateSeries([{
      name: 'occupied seats',
      data: plot_occ,
      animate: false
  }]);
  occ_chart.updateOptions({
      title: {
          text: 'Occupancy in past ' + Math.round(leng/12) + ' hours',
          align: 'left'
      },
  });
  tem_chart.updateSeries([{
      name: 'temperature',
      data: plot_tem,
      animate: false
  }]);
  tem_chart.updateOptions({
      title: {
          text: 'Temperature in past ' + Math.round(leng/12) + ' hours; current value: ' + tem[0][1] + '°C',
          align: 'left'
      },
  });
  co2_chart.updateSeries([{
      name: 'co2 level',
      data: plot_co2
  }]);
  co2_chart.updateOptions({
      title: {
          text: 'CO2 level in past ' + Math.round(leng/12) + ' hours; current value: ' + co2[0][1] + 'ppm',
          align: 'left'
      },
  });
  hum_chart.updateSeries([{
      name: 'humidity',
      data: plot_hum
  }]);
  hum_chart.updateOptions({
      title: {
          text: 'Humidity level in past ' + Math.round(leng/12) + ' hours; current value: ' + hum[0][1] + '%',
          align: 'left'
      },
  });
  pre_chart.updateSeries([{
      name: 'air pressure',
      data: plot_pre
  }]);
  pre_chart.updateOptions({
      title: {
          text: 'Air pressure in past ' + Math.round(leng/12) + ' hours; current value: ' + pre[0][1] + 'mb',
          align: 'left'
      },
  });
  console.log('prechart ready');
  noi_chart.updateSeries([{
      name: 'noise level',
      data: plot_noi
  }]);
  noi_chart.updateOptions({
      title: {
          text: 'Noise level in past ' + Math.round(leng/12) + ' hours; current value: ' + noi[0][1] + 'dB',
          align: 'left'
      },
  });

  doorstatus_chart.updateSeries([
    {
      name: "frontdoor",
      data: frontdoor_number
    },
    {
      name: "backdoor",
      data: backdoor_number
    },
    {
      name: "outdoor",
      data: outdoor_number
    }
  ]);
  windowstatus_chart.updateSeries([
    {
      name: "window-1",
      data: window1_number
    },
    {
      name: "window-2",
      data: window2_number
    },
    {
      name: "window-3",
      data: window3_number
    },
    {
      name: "window-4",
      data: window4_number
    }
  ]);
  document.getElementById("defaultOpen").click();
}
  
// create the 2d-array for data
function createArray(length, width){
    var arr = new Array(length);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(width);
    }
    return arr;

}
// get data from server for each parameter
function getData(arr, data, data_id){
    for (var i = 0; i < data.length; i++){
        arr[i][0] = Date.parse(data[i][13].value) + (2*60*60*1000);
        arr[i][1] = data[i][data_id].value;
    }

}
// calculate the open/closed moment of door/window
function openperiod(data){
    var arr = [];
    var currentstate = 'closed';
    for (var i = 0; i < data.length; i++){
        if (currentstate == 'closed'){
            if (data[i][1] == 'open'){
                arr.push(data[i][0]);
                currentstate = 'open';
            }
            continue;
        }
        else {
            if (data[i][1] == 'closed'){
                arr.push(data[i][0]);
                currentstate = 'closed';
            }
        }
    }
    return arr;
}
// print the annotations on figure
function annotationsPrint(chart, sensorstate, sensorname){
    if (chart != null){
        var randomColor = Math.floor(Math.random()*15000000).toString(16);
        if (sensorstate.length % 2 === 0){
            for (var i = 0; i < sensorstate.length/2; i++){
                chart.addXaxisAnnotation({
                    id : sensorname + `${i}`,
                    x: sensorstate[i*2],
                    x2:sensorstate[i*2 + 1],
                    fillColor: '#'+randomColor,
                    label: {
                        text: sensorname + ' opening'
                    },
                }, false);
            }
        } else {
            for (var i = 0; i < (sensorstate.length - 1)/2; i++){
                chart.addXaxisAnnotation({
                    id : sensorname + `${i}`,
                    x: sensorstate[i*2],
                    x2:sensorstate[i*2 + 1],
                    fillColor: '#'+randomColor,
                    label: {
                    text: sensorname + ' opening'
                    },
                }, false);
            }
        }
    }
}

// remove a kind of annotations
function annotationRemove(chart,sensorname){
  for (i = 0; i < 5; i++) {
    try {
      chart.removeAnnotation(sensorname+`${i}`);
    }
    catch(err) {
        if (err){
          break;
        }
    }
  }
}

// convert open/closed to 0-1
function statustonumber(arr){
  var arr_n = createArray(arr.length,2);
  for (var i = 0; i < arr.length; i++){
    arr_n[i][0] = arr[i][0];
    if (arr[i][1] == 'open'){
      arr_n[i][1] = 1;
    } else {
      arr_n[i][1] = 0;
    }
  }
  return arr_n;
}

function chartDisplay(e, chart) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("charts");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.visibility = "hidden";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
//   clearfortabswitch();
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(chart).style.visibility = "visible";
  e.currentTarget.className += " active";
}

// functions for checkbox
function frontdoorCheck(){
  var frontdoorcheckBox = document.getElementById("frontdoorCheck");
  if (frontdoorcheckBox.checked == true){
    annotationsPrint(occ_chart, frontdoor_state, 'Frontdoor');
    annotationsPrint(tem_chart, frontdoor_state, 'Frontdoor');
    annotationsPrint(co2_chart, frontdoor_state, 'Frontdoor');
    annotationsPrint(hum_chart, frontdoor_state, 'Frontdoor');
    annotationsPrint(pre_chart, frontdoor_state, 'Frontdoor');
    annotationsPrint(noi_chart, frontdoor_state, 'Frontdoor');
  } else {
    annotationRemove(occ_chart, 'Frontdoor');
    annotationRemove(tem_chart, 'Frontdoor');
    annotationRemove(co2_chart, 'Frontdoor');
    annotationRemove(hum_chart, 'Frontdoor');
    annotationRemove(pre_chart, 'Frontdoor');
    annotationRemove(noi_chart, 'Frontdoor');
  }
}

function backdoorCheck(){
  var backdoorcheckBox = document.getElementById("backdoorCheck");
  if (backdoorcheckBox.checked == true){
    annotationsPrint(occ_chart, backdoor_state, 'Backdoor');
    annotationsPrint(tem_chart, backdoor_state, 'Backdoor');
    annotationsPrint(co2_chart, backdoor_state, 'Backdoor');
    annotationsPrint(hum_chart, backdoor_state, 'Backdoor');
    annotationsPrint(pre_chart, backdoor_state, 'Backdoor');
    annotationsPrint(noi_chart, backdoor_state, 'Backdoor');
  } else {
    annotationRemove(occ_chart, 'Backdoor');
    annotationRemove(tem_chart, 'Backdoor');
    annotationRemove(co2_chart, 'Backdoor');
    annotationRemove(hum_chart, 'Backdoor');
    annotationRemove(pre_chart, 'Backdoor');
    annotationRemove(noi_chart, 'Backdoor');
  }
}

function outdoorCheck(){
  var outdoorcheckBox = document.getElementById("outdoorCheck");
  if (outdoorcheckBox.checked == true){
    annotationsPrint(occ_chart, outdoor_state, 'Outdoor');
    annotationsPrint(tem_chart, outdoor_state, 'Outdoor');
    annotationsPrint(co2_chart, outdoor_state, 'Outdoor');
    annotationsPrint(hum_chart, outdoor_state, 'Outdoor');
    annotationsPrint(pre_chart, outdoor_state, 'Outdoor');
    annotationsPrint(noi_chart, outdoor_state, 'Outdoor');
  } else {
    annotationRemove(occ_chart, 'Outdoor');
    annotationRemove(tem_chart, 'Outdoor');
    annotationRemove(co2_chart, 'Outdoor');
    annotationRemove(hum_chart, 'Outdoor');
    annotationRemove(pre_chart, 'Outdoor');
    annotationRemove(noi_chart, 'Outdoor');
  }
}

function window1Check(){
  var window1checkBox = document.getElementById("window1Check");
  if (window1checkBox.checked == true){
    annotationsPrint(occ_chart, window_1_state, 'Window-1');
    annotationsPrint(tem_chart, window_1_state, 'Window-1');
    annotationsPrint(co2_chart, window_1_state, 'Window-1');
    annotationsPrint(hum_chart, window_1_state, 'Window-1');
    annotationsPrint(pre_chart, window_1_state, 'Window-1');
    annotationsPrint(noi_chart, window_1_state, 'Window-1');
  } else {
    annotationRemove(occ_chart, 'Window-1');
    annotationRemove(tem_chart, 'Window-1');
    annotationRemove(co2_chart, 'Window-1');
    annotationRemove(hum_chart, 'Window-1');
    annotationRemove(pre_chart, 'Window-1');
    annotationRemove(noi_chart, 'Window-1');
  }
}

function window2Check(){
  var window2checkBox = document.getElementById("window2Check");
  if (window2checkBox.checked == true){
    annotationsPrint(occ_chart, window_2_state, 'Window-2');
    annotationsPrint(tem_chart, window_2_state, 'Window-2');
    annotationsPrint(co2_chart, window_2_state, 'Window-2');
    annotationsPrint(hum_chart, window_2_state, 'Window-2');
    annotationsPrint(pre_chart, window_2_state, 'Window-2');
    annotationsPrint(noi_chart, window_2_state, 'Window-2');
  } else {
    annotationRemove(occ_chart, 'Window-2');
    annotationRemove(tem_chart, 'Window-2');
    annotationRemove(co2_chart, 'Window-2');
    annotationRemove(hum_chart, 'Window-2');
    annotationRemove(pre_chart, 'Window-2');
    annotationRemove(noi_chart, 'Window-2');
  }
}

function window3Check(){
  var window3checkBox = document.getElementById("window3Check");
  if (window3checkBox.checked == true){
    annotationsPrint(occ_chart, window_3_state, 'Window-3');
    annotationsPrint(tem_chart, window_3_state, 'Window-3');
    annotationsPrint(co2_chart, window_3_state, 'Window-3');
    annotationsPrint(hum_chart, window_3_state, 'Window-3');
    annotationsPrint(pre_chart, window_3_state, 'Window-3');
    annotationsPrint(noi_chart, window_3_state, 'Window-3');
  } else {
    annotationRemove(occ_chart, 'Window-3');
    annotationRemove(tem_chart, 'Window-3');
    annotationRemove(co2_chart, 'Window-3');
    annotationRemove(hum_chart, 'Window-3');
    annotationRemove(pre_chart, 'Window-3');
    annotationRemove(noi_chart, 'Window-3');
  }
}

function window4Check(){
  var window4checkBox = document.getElementById("window4Check");
  if (window4checkBox.checked == true){
    annotationsPrint(occ_chart, window_4_state, 'Window-4');
    annotationsPrint(tem_chart, window_4_state, 'Window-4');
    annotationsPrint(co2_chart, window_4_state, 'Window-4');
    annotationsPrint(hum_chart, window_4_state, 'Window-4');
    annotationsPrint(pre_chart, window_4_state, 'Window-4');
    annotationsPrint(noi_chart, window_4_state, 'Window-4');
  } else {
    annotationRemove(occ_chart, 'Window-4');
    annotationRemove(tem_chart, 'Window-4');
    annotationRemove(co2_chart, 'Window-4');
    annotationRemove(hum_chart, 'Window-4');
    annotationRemove(pre_chart, 'Window-4');
    annotationRemove(noi_chart, 'Window-4');
  }
}

function clearfortabswitch() {
    try {
        occ_chart.clearAnnotations();
        tem_chart.clearAnnotations();
        co2_chart.clearAnnotations();
        hum_chart.clearAnnotations();
        pre_chart.clearAnnotations();
        noi_chart.clearAnnotations();
    }
    catch(err) {
        if (err){
            console.log(err);
        }
    }

    var statecheckbox = document.getElementsByClassName("statecheckbox");
    for (var i = 0; i < statecheckbox.length; i++) {
        statecheckbox[i].checked = false;
    }
}

function labmapstate(state, sensorname){
    var element_c = document.getElementById(sensorname+'_closed');
    var element_o = document.getElementById(sensorname+'_open');
    if (state == "PRESENT") {
        element_c.style.display = "block";
        element_o.style.display = "none";
    } else {
        element_o.style.display = "block";
        element_c.style.display = "none";
    }
}

function gaugePlotting(){ 
  var temgauge_needleValue = Math.round((temgauge_Value-15)/0.15);
  var temgauge_Options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: "rgb(19, 86, 135)",
    needleStartValue: 0,
    arcColors: [colorforgauge(temgauge_needleValue),"lightgray"],
    arcDelimiters: [temgauge_needleValue],
    rangeLabel: ["15","30"],
    centralLabel: temgauge_Value + " ℃",
  }
  GaugeChart.gaugeChart(temgauge_element, 200, temgauge_Options).updateNeedle(temgauge_needleValue);

  var co2gauge_needleValue = Math.round((co2gauge_Value)/12);
  var co2gauge_Options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: "rgb(19, 86, 135)",
    needleStartValue: 0,
    arcColors: [colorforgauge(co2gauge_needleValue),"lightgray"],
    arcDelimiters: [co2gauge_needleValue],
    rangeLabel: ["0","1200"],
    centralLabel: co2gauge_Value + " ppm",
  }
  GaugeChart.gaugeChart(co2gauge_element, 200, co2gauge_Options).updateNeedle(co2gauge_needleValue);
  
  var humgauge_needleValue = humgauge_Value;
  var humgauge_Options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: "rgb(19, 86, 135)",
    needleStartValue: 0,
    arcColors: [colorforgauge(humgauge_needleValue),"lightgray"],
    arcDelimiters: [humgauge_needleValue],
    rangeLabel: ["0","100"],
    centralLabel: humgauge_Value + " %",
  }
  GaugeChart.gaugeChart(humgauge_element, 200, humgauge_Options).updateNeedle(humgauge_needleValue);
  
  var pregauge_needleValue = Math.round((pregauge_Value-800)/4);
  var pregauge_Options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: "rgb(19, 86, 135)",
    needleStartValue: 0,
    arcColors: [colorforgauge(pregauge_needleValue),"lightgray"],
    arcDelimiters: [pregauge_needleValue],
    rangeLabel: ["800","1200"],
    centralLabel: pregauge_Value + " mB",
  }
  GaugeChart.gaugeChart(pregauge_element, 200, pregauge_Options).updateNeedle(pregauge_needleValue);
  
  var noigauge_needleValue = noigauge_Value;
  var noigauge_Options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: "rgb(19, 86, 135)",
    needleStartValue: 0,
    arcColors: [colorforgauge(noigauge_needleValue),"lightgray"],
    arcDelimiters: [noigauge_needleValue],
    rangeLabel: ["0","100"],
    centralLabel: noigauge_Value + " dB",
  }
  GaugeChart.gaugeChart(noigauge_element, 200, noigauge_Options).updateNeedle(noigauge_needleValue);
}

// color generator for gauge chart
function colorforgauge(percent){
  if (percent < 20) {
      return "rgb(12, 26, 182)";
  } else if (percent < 40) {
      return "rgb(100, 149, 192)";
  } else if (percent < 60) {
      return "rgb(245, 180, 1)";
  } else if (percent < 80) {
      return "rgb(207, 111, 2)";
  } else {
      return "rgb(255, 36, 40)";
  }
}


// function getmore(){
//   postToServer(288);
//   dataUpdate();
// }

function compare(){
  occ_chart.updateSeries([{
    name: 'occupied seats',
    data: [],
    animate: false
}]);
}

function compareCheck(){
  var comparecheckBox = document.getElementById("compareCheck");
  var comparecontent = document.getElementsByClassName("com_charts");
  var tablinks = document.getElementsByClassName("tablinks");
  var tabs_copy = document.getElementsByClassName("tablinks_copy");
  var tabcontent = document.getElementsByClassName("charts");

  if (comparecheckBox.checked == true) {
    document.getElementById("com_chart_area").style.visibility = "visible";
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.visibility = "hidden";
    }
    for (i = 0; i < tabs_copy.length; i++) {
      tabs_copy[i].style.visibility = "visible";
    }
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.visibility = "hidden";
    }
    for (i = 0; i < comparecontent.length; i++) {
      comparecontent[i].style.visibility = "hidden";
    }

    tabs_copy[0].className = 'tablinks_copy active';
    tabs_copy[2].className = 'tablinks_copy active';

    com_chartsPrint();
    
  } else {
    for (i = 0; i < comparecontent.length; i++) {
      comparecontent[i].style.visibility = "hidden";
    }
    for (i = 0; i < tabs_copy.length; i++) {
      tabs_copy[i].style.visibility = "hidden";
    }
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.visibility = "visible";
    }
    document.getElementById("com_chart_area").style.visibility = "hidden";
    document.getElementById("defaultOpen").click();
  }
}

function compareElement(e){
  if (e.currentTarget.className == 'tablinks_copy'){
    e.currentTarget.className += " active";
  } else {
    e.currentTarget.className = e.currentTarget.className.replace(" active", "");
  }
  com_chartsPrint();
}

function com_chartsPrint(){
  var chartset = [compare_chart1,compare_chart2,compare_chart3,compare_chart4,compare_chart5,compare_chart6];
  var chartshowingnumber = 0;
  var tabs_copy = document.getElementsByClassName("tablinks_copy");
  var comparecontent = document.getElementsByClassName("com_charts");

  for (i = 0; i < comparecontent.length; i++) {
    comparecontent[i].style.visibility = "hidden";
  }

  if (tabs_copy[0].className == 'tablinks_copy active') {
    comparecontent[chartshowingnumber].style.visibility = "visible";
    chartset[chartshowingnumber].updateSeries([{
      name: 'occupancy',
      data: plot_occ
    }]);
    chartshowingnumber++;
  }

  if (tabs_copy[1].className == 'tablinks_copy active') {
    comparecontent[chartshowingnumber].style.visibility = "visible";
    chartset[chartshowingnumber].updateSeries([{
      name: 'temperature',
      data: plot_tem
    }]);
    chartshowingnumber++;
  }

  if (tabs_copy[2].className == 'tablinks_copy active') {
    comparecontent[chartshowingnumber].style.visibility = "visible";
    chartset[chartshowingnumber].updateSeries([{
      name: 'co2 level',
      data: plot_co2
    }]);
    chartshowingnumber++;
  }

  if (tabs_copy[3].className == 'tablinks_copy active') {
    comparecontent[chartshowingnumber].style.visibility = "visible";
    chartset[chartshowingnumber].updateSeries([{
      name: 'humidity',
      data: plot_hum
    }]);
    chartshowingnumber++;
  }

  if (tabs_copy[4].className == 'tablinks_copy active') {
    comparecontent[chartshowingnumber].style.visibility = "visible";
    chartset[chartshowingnumber].updateSeries([{
      name: 'air pressure',
      data: plot_pre
    }]);
    chartshowingnumber++;
  }

  if (tabs_copy[5].className == 'tablinks_copy active') {
    comparecontent[chartshowingnumber].style.visibility = "visible";
    chartset[chartshowingnumber].updateSeries([{
      name: 'noise',
      data: plot_noi
    }]);
  }
}