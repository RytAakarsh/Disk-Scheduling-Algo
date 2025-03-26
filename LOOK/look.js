console.log("running...");

function lookDiskScheduling(requests, head) {
    let totalSeekTime = 0;
    let currentPosition = head;
    let left = [], right = [];
    let scheduledOrder = [];

    // Separate requests to the left and right of the head
    for (let request of requests) {
        if (request < head) left.push(request);
        else right.push(request);
    }

    // Sort the left in descending order and right in ascending order
    left.sort((a, b) => b - a);
    right.sort((a, b) => a - b);

    // First process the right side
    for (let r of right) {
        totalSeekTime += Math.abs(currentPosition - r);
        currentPosition = r;
        scheduledOrder.push(r);
    }

    // Then process the left side
    for (let l of left) {
        totalSeekTime += Math.abs(currentPosition - l);
        currentPosition = l;
        scheduledOrder.push(l);
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
            text: "Disk Scheduling LOOK"
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
    console.log("Initial head position:", numbers2);

    const { totalSeekTime, scheduledOrder } = lookDiskScheduling(numbers1, numbers2);
    document.getElementById('seekvalue').textContent = ` ${totalSeekTime}`;

    scheduleprint(scheduledOrder, numbers2);
    renderGraph(scheduledOrder, numbers2);

    console.log("Total Seek Time:", totalSeekTime);
});