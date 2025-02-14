var options = {
    series: [
      {
        name: "Fingerprint",
        data: [0, -0.2, -0.3, -0.4, -0.5, -0.6, -0.8, -1.0, -1.2],
      },
      {
        name: "Competitors",
        data: [0, -5, -10, -15, -20, -25, -28, -30, -35],
      },
    ],
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#ff5722", "#7966ff"],
    tooltip: {
      shared: true,
      y: {
        formatter: (val) => `${val.toFixed(1)}%`,
      },
    },
    legend: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    xaxis: {
      categories: [0, 10, 20, 30, 40, 50, 60, 90, 120],
      tickAmount: 3,
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: "#c1c1be",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}%`,
        show: false,
      },
      axisBorder: {
        show: true,
      },
    },
    grid: {
      borderColor: "#ddd",
      strokeDashArray: 5,
      yaxis: {
        lines: { show: false },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();