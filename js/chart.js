const ctx = document.getElementById("myChart").getContext("2d");

          const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [
              {
                label: "Dataset 1",
                data: [10, 20, 30, 40, 50],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                yAxisID: "y",
              },
            ],
          };

          const config = {
            type: "line",
            data: data,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                mode: "index",
                intersect: false,
              },
              plugins: {
                legend: {
                  labels: {
                    font: {
                      weight: "normal", // Default weight
                    },
                  },
                  onHover: (event, legendItem, legend) => {
                    legend.chart.options.plugins.legend.labels.font.weight =
                      "bold";
                    legend.chart.update();
                  },
                  onLeave: (event, legendItem, legend) => {
                    legend.chart.options.plugins.legend.labels.font.weight =
                      "normal";
                    legend.chart.update();
                  },
                },
              },
              scales: {
                y: {
                  type: "linear",
                  display: true,
                  position: "left",
                },
                y1: {
                  type: "linear",
                  display: true,
                  position: "right",
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
            },
          };

          const myChart = new Chart(ctx, config);