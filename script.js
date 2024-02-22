//your JS code here. If required.
// Function to create a Promise that resolves after a random time between 1 and 3 seconds
function createPromise() {
  const randomTime = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
}

// Array to hold the three promises
const promises = [createPromise(), createPromise(), createPromise()];

// Add a row with Loading... to the table
const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
document.getElementById('tableBody').appendChild(loadingRow);

// Wait for all promises to resolve
Promise.all(promises)
  .then(results => {
    // Remove the loading text
    document.getElementById('tableBody').removeChild(loadingRow);

    // Populate the table with the results
    results.forEach((time, index) => {
      const row = document.createElement('tr');
      const col1 = document.createElement('td');
      const col2 = document.createElement('td');
      col1.textContent = `Promise ${index + 1}`;
      col2.textContent = `${time}`;
      row.appendChild(col1);
      row.appendChild(col2);
      document.getElementById('tableBody').appendChild(row);
    });

    // Calculate total time taken
    const totalTime = results.reduce((acc, curr) => acc + curr, 0);
    const totalRow = document.createElement('tr');
    const totalCol1 = document.createElement('td');
    const totalCol2 = document.createElement('td');
    totalCol1.textContent = 'Total';
    totalCol2.textContent = `${totalTime.toFixed(3)}`;
    totalRow.appendChild(totalCol1);
    totalRow.appendChild(totalCol2);
    document.getElementById('tableBody').appendChild(totalRow);
  });
