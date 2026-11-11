/**
 * CHARTS VIEW - STUDENTS IMPLEMENT
 * Show patterns in your data as charts, using Chart.js
 *
 * This view has two parts:
 *   showCharts(data) returns the HTML: one <canvas> per chart, with a text alternative under each
 *   drawCharts(data) runs after that HTML is on the page, and draws a chart into each <canvas>
 *
 * Chart.js docs: https://www.chartjs.org/docs/latest/getting-started/
 */
function showCharts(data) {
  // TODO: Replace each TODO sentence below with text that says what that chart shows.
  // Charts are drawn as pictures, so screen readers can't read them.
  /*html*/
  return `
                <h2 class="view-title">📈 Charts View</h2>
                <p class="view-description">Patterns in the data at a glance</p>
                <div class="todo-implementation">
                    <h3>TODO: Implement Charts View</h3>
                    <p><strong>Your task:</strong> Draw at least two charts of different types, each answering a different question</p>
                    <p><strong>Good for:</strong> Spotting patterns, comparing groups, seeing distributions</p>
                    <p><strong>Records available:</strong> ${data.length} items to chart</p>
                </div>
                <div class="charts-grid">
                    <figure class="chart-figure">
                        <canvas id="chart-one"></canvas>
                        <figcaption class="chart-summary">This is a pie chart that shows 139 restaurants are in compliance with cold holding temperature, while 11 are not.</figcaption>
                    </figure>
                    <figure class="chart-figure">
                        <canvas id="chart-two"></canvas>
                        <figcaption class="chart-summary">This is a bar chart that shows, out of the 11 restaurants that aren't compliant with cold holding temperature, there are 10 with critial violations, one listed as facility reopened.</figcaption>
                    </figure>
                </div>
            `;
}

function drawCharts(data) {
  // Chart.js is loaded by a <script> tag in index.html. If it didn't load, say so instead of breaking.
  if (typeof Chart === 'undefined') {
    document.querySelector('.charts-grid').innerHTML =
      '<p class="error">Chart.js did not load, so the charts can\'t be drawn. Check the &lt;script&gt; tag in index.html.</p>';
    return;
  }

  

  // TODO 1: Reshape your data for the first chart.
  // Chart.js doesn't take your array of records.
  // It wants a list of labels and a matching list of numbers.
  // Example: count inspections by type of business.
  //
  //   const counts = {};
  //   data.forEach((item) => {
  //     counts[item.category] = (counts[item.category] || 0) + 1;
  //   });
  //   const labels = Object.keys(counts);
  //   const numbers = Object.values(counts);


  const counts1 = {};
  data.forEach((item) => {

    counts1[item.cold_holding_temperature] = (counts1[item.cold_holding_temperature] || 0) +1;

  })

  const labels1 = Object.keys(counts1);
  const numbers1 = Object.values(counts1);

  const counts2 = {};
  data.forEach((item) => {

    if(item.cold_holding_temperature === "Out of Compliance") {

      counts2[item.inspection_results] = (counts2[item.inspection_results] || 0) +1;

    }

  })

  const labels2 = Object.keys(counts2);
  const numbers2 = Object.values(counts2);

  // TODO 2: Draw the first chart into <canvas id="chart-one">.
  // Every chart needs a title, and every axis needs a label.
  //
  //   new Chart(document.querySelector('#chart-one'), {
  //     type: 'bar',
  //     data: {
  //       labels: labels,
  //       datasets: [{ label: 'Number of inspections', data: numbers }]
  //     },
  //     options: {
  //       plugins: { title: { display: true, text: 'Inspections by type of business' } },
  //       scales: {
  //         x: { title: { display: true, text: 'Type of business' } },
  //         y: { title: { display: true, text: 'Inspections' }, beginAtZero: true }
  //       }
  //     }
  //   });


new Chart(document.querySelector('#chart-one'), {
      
    type: 'pie',
    radius: '20%',
    data: {
      labels: labels1,
      datasets: [{label: 'Number of restaurants', data: numbers1}]
    },
    options: {
      plugins: { title: { display: true, text: 'Amount of resturants in or out of compliance with cold holding temperature'}},
    }
  }
);



  // TODO 3: Reshape your data again, and draw a second chart of a DIFFERENT type
  // (pie, line, scatter...) into <canvas id="chart-two">, answering a different question.
  // Ideas: inspection results as a pie, inspections per month as a line,
  // or how many "Out of Compliance" checks each type of business averages.

new Chart(document.querySelector('#chart-two'), {
      
    type: 'bar',
    data: {
      labels: labels2,
       datasets: [{ label: 'Number of restaurants', data: numbers2 }]
     },
     options: {
       plugins: { title: { display: true, text: 'Inspection results for resturaunts that are not compliant with cold holding temperature' } },
       scales: {
         x: { title: { display: true, text: 'Inspection Results' } },
         y: { title: { display: true, text: 'Restaurants' }, beginAtZero: true }
       }
     }
   }
);

}

export { showCharts, drawCharts };
