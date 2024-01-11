var options = {
  series: [78],
  chart: {
    height: 160,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "55%",
      },
      dataLabels: {
        style: {
          colors: ["#20EEA9"], // Specify the color you want
        },
      },
    },
  },
  labels: ["Average"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Chart2 :-

var option2 = {
  series: [95],
  chart: {
    height: 160,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "55%",
      },
    },
  },
  labels: ["Top"],
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), option2);
chart2.render();

// Chart3:
var option3 = {
  series: [59],
  chart: {
    height: 160,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "55%",
      },
      fill: {
        colors: ["#20EEA9"], // Specify the color you want
      },
    },
  },
  labels: ["Me"],
};

var chart3 = new ApexCharts(document.querySelector("#chart3"), option3);
chart3.render();
