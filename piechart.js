const pieChart = document.querySelector('.piechart');

document.querySelector('#inputHandler').addEventListener('input', (e) => {
  console.log(e.target.value);
  pieChart.style = `--percentage: ${e.target.value}%`;
});
