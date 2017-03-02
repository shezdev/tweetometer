// Chart definition
const CHART = document.getElementById("displayLineChart");

let myLineChart = new Chart(CHART, {
    type: 'line',
    data: {
      // x axis labels added here
      labels: [],
      datasets: [{
              label: "Frequency of Tweets",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              // y axis labels added here
              data: [],
              spanGaps: false,
          }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
});

// Test data
var label = "2017-03-02T12:02:54.340Z"
var freq = 1;
addData(label, freq);


// Add test data using a for loop
for ( var i=0; i<10; i++) {
  label = "2017-03-02T12:02:54.340Z";
  addData(label, freq);
  freq += 10;
}

//Function to add data dynamically to the chart
function addData(label, freq){
  myLineChart.data.labels.push(label);
  myLineChart.data.datasets[0].data.push(freq);
  myLineChart.update();
}

function testAddData() {}
