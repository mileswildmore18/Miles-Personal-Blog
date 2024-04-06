//This will activate a alert message if submission form is not filled out
const userInput = document.querySelector('#username');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const warningMessage = document.getElementsByClassName('form');


//Show how long the alert message stays on failed submission

submitButton.addEventListener('click', function (event) {
    //Getting values from the form
    const userName = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    if (userName === '') {
        displayMessage('Please fill out the form before submitting');
    } else if (title === '') {
        displayMessage('Please fill out the form before submitting');
    } else if (content === '') {
        displayMessage('Please fill out the form before submitting');
    } else {
        function redirect() {
            window.location.replace("./blog.html");
            return false;

            
        }
    }       localStorage.setItem('username', userName);
            localStorage.setItem('title', title);
            localStorage.setItem('content', content)
})


function countdown() {
    let messageTime = 5;

    const message = setInterval(function () {

        //updating the page
        warningMessage.textContent = `Please fill out the form before submitting`;
        //updating the time of the message

        if (messageTime === 0) {
            //Stop the timer
            clearInterval(message);
            //empty the box
            warningMessage.textContent = '';
            displayMessage();
        }
    })

}
//This will activate dark mode and light mode
function darkMode() {
    let mode = document.body;
    mode.classList.toggle("darkMode");

}
