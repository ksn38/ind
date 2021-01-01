let chart = document.getElementById("line-chart");
let chart2 = document.getElementById("line-chart2");
let vix = [25.35, 23.1 , 22.45, 22.71, 23.84, 23.11, 23.7 , 22.66, 21.64, 21.25, 20.84, 20.57, 20.77, 21.17, 21.28, 20.79, 21.3 , 20.68, 22.27, 22.52];
let sp500 = [3537.01, 3585.15, 3626.91, 3609.53, 3567.79, 3581.87, 3557.54, 3577.59, 3635.41, 3629.65, 3638.35, 3621.63, 3662.45, 3669.01, 3666.72, 3699.12, 3691.96, 3702.25, 3672.82, 3668.1];
let rollcorr = [];
let dayscount = document.getElementById('dayscount');


let cor = (list1, list2) => {
  let average = (list) => {
    return list.reduce((accum, curr) => accum + curr) / list.length;
  };

  let avgList1 = average(list1);
  let avgList2 = average(list2);

  let cov = (list1, avgList1, list2, avgList2) => {
    let list = [];
    for (let i = 0; i < list1.length; i++) {
      list[i] = (list1[i] - avgList1)*(list2[i] - avgList2);
    };
    return list;
  };

  let sum = (list) => {
    return list.reduce((accum, curr) => accum + curr);
  }

  let dif2 = (list, avg) => {
    let initialValue = 0;
    return list.reduce((accum, curr) => accum + ((curr - avg)**2), initialValue);
  }

  return (sum(cov(list1, avgList1, list2, avgList2)))/Math.sqrt(dif2(list1, avgList1)*dif2(list2, avgList2));
};

console.log(cor(vix, sp500));

for (let i = 0; i <= vix.length - 5; i++) {
  rollcorr.push(cor(vix.slice(i, i+ 5), sp500.slice(i, i+ 5)));
};

dayscount.onchange = () => {
  rollcorr = [];
  const period = dayscount.value;
  console.log(period);
  for (let i = 0; i <= vix.length - period; i++) {
    rollcorr.push(cor(vix.slice(i, i + parseInt(period)), sp500.slice(i, i + parseInt(period))));
  };
  //console.log(rollcorr);
  new Chart(chart2, {
    type: 'line',
    data: {
      labels: [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      datasets: [{ 
          data: rollcorr,
          label: "R",
          borderColor: "#3e95cd",
      }]
    },
    options: {
      scales: {
        yAxes : [{
          ticks : {
            max : 1,    
            min : -1
          }
        }]
      },
      animation: {
          duration: 0
      },
      events: [],
      title: {
        display: true,
        text: ''
      }
    }
  });
}

new Chart(chart2, {
  type: 'line',
  data: {
    labels: [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    datasets: [{ 
        data: rollcorr,
        label: "R",
        borderColor: "#3e95cd",
    }]
  },
  options: {
    scales: {
      yAxes : [{
        ticks : {
          max : 1,    
          min : -1
        }
      }]
    },
    animation: {
        duration: 0
    },
    events: [],
    title: {
      display: true,
      text: ''
    }
  }
});

new Chart(chart, {
  type: 'line',
  data: {
    labels: [0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    datasets: [{ 
      data: vix,
      borderColor: "#039000",
      fill: false,
      /*label: 'vix',*/
      yAxisID: 'vix',
    }, { 
      data: sp500,
      borderColor: "#8e5ea2",
      fill: false,
      /*label: 'sp500',*/
      yAxisID: 'sp500',
    }
    ]
  },
  options: {
    animation: {
      duration: 0
    },
    /*events: [],*/
    title: {
      display: true,
      text: ''
    },
    scales: {
      yAxes: [{
        id: 'vix',
        type: 'linear',
        position: 'left',
      }, {
        id: 'sp500',
        type: 'linear',
        position: 'right',
        
      }]
    }
  }
});
