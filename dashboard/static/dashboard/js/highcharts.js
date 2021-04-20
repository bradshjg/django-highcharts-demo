async function requestBarChartData() {
  const result = await fetch('/barchart-data');
  if (result.ok) {
    const data = await result.json();
    // update data
    barChart.update(data)
    // call it again after one second
    setTimeout(requestBarChartData, 5000);
  }
}

async function requestPieChartData() {
  const result = await fetch('/piechart-data');
  if (result.ok) {
    const data = await result.json();
    pieChart.update(data);
    // call it again after one second
    setTimeout(requestPieChartData, 5000);
  }
}

window.addEventListener('load', function () {
  barChart = new Highcharts.Chart({
    chart: {
        type: 'bar',
        renderTo: 'barchart-container',
        events: {
          load: requestBarChartData
        }
    },
    title: {
        text: 'Historic World Population by Region'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{},{},{},{}]
  });

  pieChart = new Highcharts.Chart({
    chart: {
        type: 'pie',
        renderTo: 'piechart-container',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        events: {
          load: requestPieChartData
        }
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{}]
  });
});
