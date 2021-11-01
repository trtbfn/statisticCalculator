 //variables
 const firstBrokenStuff = document.getElementById("firstBrokenStuff"),
 timeIntervals = document.getElementById("timeIntervals");

//values
const uptimeVariance = document.getElementById("uptimeVariance");

//btns
const btn = document.getElementById('btn');

function calculateTimeIntervalsSum() {
let counter = 0;
timeIntervals.value.split(",").map(timeInterval => counter += +timeInterval);
return counter;
}


function calculateUptimeVariance() {
return calculateTimeIntervalsSum() / (+firstBrokenStuff.value);
}

function changeValues() {
uptimeVariance.textContent = calculateUptimeVariance();
}

firstBrokenStuff.onchange = changeValues;
timeIntervals.onchange = changeValues;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    post(
        'taskFive', 
        {
            firstBrokenStuff: (+firstBrokenStuff.value),
            timeIntervals,
            uptimeVariance: calculateUptimeVariance(),
        }
    );
}); 

