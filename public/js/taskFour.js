//variables
const testingStuff = document.getElementById("testingStuff"),
timeIntervals = document.getElementById("timeIntervals");

//values
const MDBF = document.getElementById("MDBF");

//dom element
const btn = document.getElementById('btn');

function calculateTimeIntervalsSum() {
let counter = 0;
timeIntervals.value.split(",").map(timeInterval => counter += +timeInterval);
return counter;
}

function calculateMDBF() {
return calculateTimeIntervalsSum() / (+testingStuff.value);
}

function changeValues() {
MDBF.textContent = calculateMDBF();
}

testingStuff.onchange = changeValues;
timeIntervals.onchange = changeValues;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    post(
        'taskFour', 
        {
            testingStuff: (+testingStuff.value),
            timeIntervals,
            MDBF: calculateMDBF(),
        }
    );
}); 