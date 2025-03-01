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

const submitButton = document.querySelector('.submit');


submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');

    const numbers1 = input1.value.split(',').map(Number);
    const numbers2 = Number(input2.value);

    console.log("Numbers from input1:", numbers1);
    console.log("Initial head position (numbers2):", numbers2);

    const seekValue = fcfsDiskScheduling(numbers1, numbers2);
    console.log("Total Seek Time:", seekValue);
});