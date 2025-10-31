document.getElementById("firstparagraph").innerHTML="hello friends"
function myfunction() {
    var a=4;
    document.getElementById("buttoncontent").innerHTML=a*a
}


    function validateForm() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('Password').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Enter an email.';
    msgBox.style.color = 'red';
      } else if (pass === '') {
        message = 'Enter a Password.';
    msgBox.style.color = 'red';
      } else if (age === '') {
        message = 'Enter your age.';
    msgBox.style.color = 'red';
      } else {
        message = 'Login successful!';
    msgBox.style.color = 'green';
      }

    msgBox.innerText = message;
    }
