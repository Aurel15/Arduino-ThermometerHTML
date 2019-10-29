var options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    series: [{
        name: "Temperatur",
        data: [20, 23, 26, 30, 38, 38, 39, 37, 34, 28, 25, 27, 26, 22, 19, 18, 16, 15, 13,
              10, 7, 0, -5, -2, 0, 1, 3, 1, 4, 7]
      },
      {
        name: "Feuchtigkeit",
        data: [74, 51, 62, 82, 93, 76, 69, 73, 76, 84, 80, 100, 98, 90, 86, 80, 81, 83, 79,
              80, 78, 70, 50, 60, 59, 62, 58, 60, 62, 67]
      },
      
    ],
    title: {
      text: '',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 6,

      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09',
        '10', '11', '12','13','14','15','16','17','18','19','20','21',
        '22','23','24','25','26','27','28','29','30'
      ],
    },
      yaxis: [
        {
          max: 45,
          min: -5,
          labels:{
              formatter: function (value) {return value + "°C"}
          }
      },
      {
          options: true,
          max: 100,
          min:0,
          labels:{
              formatter: function (value) {return value + "%"}
          },
      },
    ],
    grid: {
      borderColor: 'black',
    }
  }

  var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
  );

  chart.render();
