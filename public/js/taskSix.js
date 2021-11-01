//variables
let tableList = [];
const testingStuff = document.getElementById("testingStuff"),
      timeInterval = document.getElementById("timeInterval"),
      brokenStuff = document.getElementById("brokenStuff");
//values
const uptimeVariance = document.getElementById("uptimeVariance");
//DOM elements
const table = document.getElementById("table"),
      tableBtn = document.getElementById("tableBtn"),
      btn = document.getElementById('btn');


function addRowInTable(tableRowData) {
    const tableRow = document.createElement("tr"),
          rowTimeInterval = document.createElement("td"),
          rowBrokenStuff = document.createElement("td");
    rowTimeInterval.textContent = tableRowData.timeInterval;
    rowBrokenStuff.textContent = tableRowData.brokenStuff;
    tableRow.appendChild(rowTimeInterval);
    tableRow.appendChild(rowBrokenStuff);
    table.appendChild(tableRow);
}

function hasTableList(tableRowData) {
    tableList.map(tableRow => {
        if(tableRow.timeInterval == tableRowData.timeInterval) return true;
    });
    return false;
}

function calculateUptimeVariance() {
    let counter = 0;
    tableList.map(row => {
        temp = row.timeInterval.split("-").map(num => num = +num);
        counter += ((temp[1] + temp[0]) / 2)*row.brokenStuff;
    });
    return counter / (+testingStuff.value);
}

tableBtn.onclick = (e) => {
    e.preventDefault();
    const tableRowData = {timeInterval: timeInterval.value, brokenStuff: +brokenStuff.value};
    tableList.push(tableRowData);
    addRowInTable(tableRowData);
    uptimeVariance.textContent = calculateUptimeVariance();
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    post(
        'taskSix', 
        {
            testingStuff: (+testingStuff.value),
            tableList,
            uptimeVariance: calculateUptimeVariance(),
        }
    );
}); 