const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Python', 'HTML', 'CSS', 'JavaScript','C++'],
    datasets: [{
      label: 'Language code',
      data: [3, 6, 5, 5, 3 ], 
      borderWidth: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)', 
        'rgba(54, 122, 123, 0.5)',
        'rgba(255, 126, 86, 0.5)', 
        'rgba(75, 192, 33, 0.5)', 
        'rgba(153, 12, 255, 0.5)'
  
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)', 
        'rgba(75, 192, 192, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(255, 15, 64, 1)', 
        'rgba(258, 94, 132, 1)', 
      ],
    }]
  },

  options: {
    scales: {
      y: {
        beginAtZero: false,
        max: 10,
        min: 0 
      }
    }
  }
});


const ctx_1 = document.getElementById('myChart_1');

new Chart(ctx_1, {
  type: 'radar',
  data: {
    labels: ['Premeium pro', 'Canva', 'capcut'],
    datasets: [{
      label: 'Skill',
      data: [7, 10, 5],
      backgroundColor: [
        'rgba(15, 15, 122, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 206, 86, 1)' 

      ],
    }]
  },
  options: {
    scales: {
      r: {
        beginAtZero: false,
        max: 10,
        min: 0 
      }
    }
  }
});
