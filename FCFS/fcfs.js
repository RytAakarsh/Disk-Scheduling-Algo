// console.log("running...");

// function fcfsDiskScheduling(requests, head) {
//     let totalSeekTime = 0;
//     let currentPosition = head;

//     for (let request of requests) {
//         totalSeekTime += Math.abs(request - currentPosition);
//         currentPosition = request;
//     }
//     return totalSeekTime;
// }

// function scheduleprint ( numbers , head ){
//     console.log(head);
//     document.getElementById('sequencevalue').textContent = `${head}`;
//     for ( let i=0 ; i<numbers.length ; i++ ){
//         console.log(numbers[i]);
//         document.getElementById('sequencevalue').textContent += `  , ${numbers[i]}`;
//     }
// }
// const submitButton = document.querySelector('.submit');


// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();

//     const input1 = document.querySelector('.input1');
//     const input2 = document.querySelector('.input2');

//     const numbers1 = input1.value.split(',').map(Number);
//     const numbers2 = Number(input2.value);

//     console.log("Numbers from input1:", numbers1);
//     console.log("Initial head position (numbers2):", numbers2);

//     const seekValue = fcfsDiskScheduling(numbers1, numbers2);
//     document.getElementById('seekvalue').textContent = `${seekValue}`;
//     const ans = scheduleprint( numbers1  ,  numbers2)
//     console.log("Total Seek Time:", seekValue);
// });

console.log("running...");

function fcfsDiskScheduling(requests, head) {
    let totalSeekTime = 0;
    let currentPosition = head;

    for (let request of requests) {
        totalSeekTime += Math.abs(request - currentPosition);
        currentPosition = request;
    }
    return totalSeekTime;
}

function scheduleprint(numbers, head) {
    console.log(head);
    document.getElementById('sequencevalue').textContent = `${head}`;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        document.getElementById('sequencevalue').textContent += ` , ${numbers[i]}`;
    }
}

// Function to render the graph
function renderGraph(numbers, head) {
    let dataPoints = [{ y: head }]; // Start with head position

    numbers.forEach(num => {
        dataPoints.push({ y: num });
    });

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Disk Scheduling FCFS"
        },
        axisX: {
            title: "Sequence of Operations"
        },
        axisY: {
            title: "Disk Numbers",
            interval: 10,
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: dataPoints
        }]
    });

    chart.render();
}

const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementsByClassName("outputBox")[0].style.height = "65vh";


    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');

    const numbers1 = input1.value.split(',').map(Number);
    const numbers2 = Number(input2.value);

    console.log("Numbers from input1:", numbers1);
    console.log("Initial head position (numbers2):", numbers2);

    const seekValue = fcfsDiskScheduling(numbers1, numbers2);
    document.getElementById('seekvalue').textContent = ` ${seekValue}`;
    
    scheduleprint(numbers1, numbers2);
    renderGraph(numbers1, numbers2);

    console.log("Total Seek Time:", seekValue);
});
