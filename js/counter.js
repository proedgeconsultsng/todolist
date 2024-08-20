let counter = 0;
document.getElementById('incrementBtn').addEventListener('click', function() {
  counter++;
  document.getElementById('counter').textContent = counter;
});

document.getElementById('decrementBtn').addEventListener('click', function() {
  counter--;
  document.getElementById('counter').textContent = counter;
});

document.getElementById('resetBtn').addEventListener('click', function() {
  counter = 0;
  document.getElementById('counter').textContent = counter;
});