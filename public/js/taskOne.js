 
    //variables
    const testingStuff = document.getElementById("testingStuff"),
    firstBrokenStuff = document.getElementById("firstBrokenStuff"),
    firstTimeInterval = document.getElementById("firstTimeInterval");

    //values
    const uptimeProbability = document.getElementById("uptimeProbability"),
    failureProbability = document.getElementById("failureProbability");
    
    //btns
    const btn = document.getElementById('btn');

    function calculateUnbrokenStuff() {
    return (+testingStuff.value) - (+firstBrokenStuff.value); 
    }

    function calculateUptimeProbability() {
    return  calculateUnbrokenStuff() / (+testingStuff.value); 
    }

    function calculateFailureProbability() {
    return ((+testingStuff.value) - calculateUnbrokenStuff()) / (+testingStuff.value); 
    }



    function changeValues() {
    uptimeProbability.textContent = calculateUptimeProbability();
    failureProbability.textContent = calculateFailureProbability();
    }

    testingStuff.onchange = changeValues;
    firstBrokenStuff.onchange = changeValues;
    firstTimeInterval.onchange = changeValues;


    //hanlers
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        post(
            '', 
            {
                testingStuff: (+testingStuff.value),
                firstBrokenStuff: (+firstBrokenStuff.value),
                firstTimeInterval: (+firstTimeInterval.value),
                uptimeProbability: calculateUptimeProbability(),
                failureProbability: calculateFailureProbability()
            }
        );
    }); 
   
    
