var options0 = {
  series: [
    {
      name: "Net Profit",
      data: [40, 45, 50, 55, 60, 65, 70, 75, 80],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 5,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["20", "25", "30", "35", "40", "50", "60", "70", "80"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart0 = new ApexCharts(document.querySelector("#chart0"), options0);
chart0.render();

// RadialChart

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
