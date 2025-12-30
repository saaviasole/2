document.getElementById("firstparagraph").innerHTML="hello friends"
function myfunction() {
    var a=12;
        b=1
    document.getElementById("buttoncontent").innerHTML=a*b
}


    function validateForm() {
    const email = document.getElementById('email').value;
    const Pass = document.getElementById('Password').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('Address').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Enter an email.';
    msgBox.style.color = 'red';
      } else if (Pass === '') {
        message = 'Enter a Password.';
    msgBox.style.color = 'red';
      } else if (age === '') {
        message = 'Enter your age.';
    msgBox.style.color = 'red';
        } else if (Address === '') {
         message = 'Enter your age.';
        msgBox.style.color = 'red';
    
         } else {
        message = 'Login successful!';
    msgBox.style.color = 'green';
      }

    msgBox.innerText = message;
    }
