console.log("running...");

function sstfDiskScheduling(requests, head) {
    let totalSeekTime = 0;
    let currentPosition = head;
    let scheduledOrder = [];
    
    while (requests.length > 0) {
        let nearestIndex = 0;
        let minSeekTime = Math.abs(requests[0] - currentPosition);

        
        for (let i = 1; i < requests.length; i++) {
            let seekTime = Math.abs(requests[i] - currentPosition);
            if (seekTime < minSeekTime) {
                minSeekTime = seekTime;
                nearestIndex = i;
            }
        }

        
        currentPosition = requests[nearestIndex];
        totalSeekTime += minSeekTime;
        scheduledOrder.push(currentPosition);

        requests.splice(nearestIndex, 1);
    }

    return { totalSeekTime, scheduledOrder };
}


function scheduleprint(numbers, head) {
    console.log(head);
    document.getElementById('sequencevalue').textContent = `${head}`;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        document.getElementById('sequencevalue').textContent += ` , ${numbers[i]}`;
    }
}

function renderGraph(numbers, head) {
    let dataPoints = [{ y: head }]; 

    numbers.forEach(num => {
        dataPoints.push({ y: num });
    });

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Disk Scheduling SSTF"
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

    const { totalSeekTime, scheduledOrder } = sstfDiskScheduling(numbers1, numbers2);
    document.getElementById('seekvalue').textContent = ` ${totalSeekTime}`;
    
    scheduleprint(scheduledOrder, numbers2);
    renderGraph(scheduledOrder, numbers2);

    console.log("Total Seek Time:", totalSeekTime);
});