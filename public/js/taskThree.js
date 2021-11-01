const testingStuff = document.getElementById("testingStuff"),
firstBrokenStuff = document.getElementById("firstBrokenStuff"),
secondBrokenStuff = document.getElementById("secondBrokenStuff"),
firstTimeInterval = document.getElementById("firstTimeInterval"),
secondTimeInterval = document.getElementById("secondTimeInterval");

//values
const firstUnbrokenStuff = document.getElementById("firstUnbrokenStuff"),
uptimeProbability = document.getElementById("uptimeProbability"),
failureProbability = document.getElementById("failureProbability"),
failureRateFreq = document.getElementById("failureRateFreq");

//dom element
const btn = document.getElementById('btn');

function calculateUnbrokenStuff() {
return (+testingStuff.value) - (+firstBrokenStuff.value); 
}

function calculateUptimeProbability() {
return calculateUnbrokenStuff() / (+testingStuff.value); 
}

function calculateFailureProbability() {
return ((+testingStuff.value) - (+firstBrokenStuff.value)) / (+testingStuff.value); 
}

function calculateFailureRateFreq () {
return (+secondBrokenStuff.value) / ((+testingStuff.value) * (+secondTimeInterval.value)); 
}

function changeValues() {
uptimeProbability.textContent = calculateUptimeProbability();
failureProbability.textContent = calculateFailureProbability();
failureRateFreq.textContent = calculateFailureRateFreq();
}

testingStuff.onchange = changeValues;
firstBrokenStuff.onchange = changeValues;
secondBrokenStuff.onchange = changeValues;
firstTimeInterval.onchange = changeValues;
secondTimeInterval.onchange = changeValues;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    post(
        'taskThree', 
        {
            testingStuff: (+testingStuff.value),
            firstBrokenStuff: (+firstBrokenStuff.value),
            secondBrokenStuff: (+secondBrokenStuff.value),
            firstTimeInterval: (+firstTimeInterval.value),
            secondTimeInterval: (+firstTimeInterval.value),
            uptimeProbability: calculateUptimeProbability(),
            failureProbability: calculateFailureProbability(),
            failureRateFreq: calculateFailureRateFreq(),
        }
    );
}); 