
const userInput = document.querySelector('#username');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('#submit');
const warningMessage = document.getElementsByClassName('form');


//This will activate a alert message if submission form is not filled out
submitButton.addEventListener('click', function storeInput() {
    if (userInput != null) {
         localStorage.setItem('Username', userInput.value);
    } else {
         alert('Please enter your username');
    } if (userTitle != null) {
         localStorage.setItem('Title', userTitle.value);
    } else {
         alert('Please enter a title for your post');
    } if (userContent != null) {
         localStorage.setItem('Content', userContent.value);
    } else {
         alert('Content cannot be blank');
    }
});


//Show how long the alert message stays on failed submission




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
