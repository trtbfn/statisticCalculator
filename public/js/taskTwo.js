 //variables
 const testingStuff = document.getElementById("testingStuff"),
 firstBrokenStuff = document.getElementById("firstBrokenStuff"),
 secondBrokenStuff = document.getElementById("secondBrokenStuff"),
 firstTimeInterval = document.getElementById("firstTimeInterval"),
 secondTimeInterval = document.getElementById("secondTimeInterval");

//values
const failureRateFreq = document.getElementById("failureRateFreq"),
 failureRateIntens = document.getElementById("failureRateIntens");

//dom element
const btn = document.getElementById('btn');

function calculateUnbrokenStuff() {
return (+testingStuff.value) - (+firstBrokenStuff.value); 
}

function calculateFailureRateFreq () {
return (+secondBrokenStuff.value) / ((+testingStuff.value) * (+secondTimeInterval.value)); 
}

function calculateFailureRateIntens () {
return (+secondBrokenStuff.value) /  (calculateUnbrokenStuff() * (+secondTimeInterval.value)); 
}



function changeValues() {
failureRateFreq.textContent = calculateFailureRateFreq();
failureRateIntens.textContent = calculateFailureRateIntens();
}

testingStuff.onchange = changeValues;
firstBrokenStuff.onchange = changeValues;
secondBrokenStuff.onchange = changeValues;
firstTimeInterval.onchange = changeValues;
secondBrokenStuff.onchange = changeValues;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    post(
        'taskTwo', 
        {
            testingStuff: (+testingStuff.value),
            firstBrokenStuff: (+firstBrokenStuff.value),
            secondBrokenStuff: (+secondBrokenStuff.value),
            firstTimeInterval: (+firstTimeInterval.value),
            secondTimeInterval: (+firstTimeInterval.value),
            feilureRateFreq: calculateFailureRateFreq(),
            failureRateIntens: calculateFailureRateIntens(),
        }
    );
}); 
