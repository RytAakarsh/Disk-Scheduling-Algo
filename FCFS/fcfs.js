console.log("running...");


const submitButton = document.querySelector('.submit');


submitButton.addEventListener('click', function(e) {
   
    e.preventDefault();

   
    const input = document.querySelector('.input1').value;

   
    const numberStrings = input.split(',');

    
    const numbers = numberStrings.map(Number);

    
    console.log(numbers);


    //document.getElementById('output').textContent = `Stored Numbers: ${numbers.join(', ')}`;
});
