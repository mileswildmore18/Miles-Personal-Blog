//This will activate a alert message if submission form is not filled out
const userInput = document.querySelector('#username');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const warningMessage = document.getElementsByClassName('form');

//Show how long the alert message stays on failed submission
function validateForm() {
    let empty =document.getElementById(username).value;
    if (empty==""){
        alert(`${warningMessage}`)
        return false;
    }
} 

submitButton.addEventListener('click', function (event){
    let userName = localStorage.getItem('')
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
    mode.classList.toggle("dark-mode");
}
