
const userInput = document.querySelector('#username');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('#submit');
const warningMessage = document.getElementsByClassName('form');


//This will activate a alert message if submission form is not filled out
submitButton.addEventListener('submit', function storeInput(submitted) {
    submitted.preventDefault();

    let name = [];
    
    if(userInput ==='' || userInput == null) {
        name.push('Please enter name');
    } else {
        localStorage.setItem('username', userInput.value);
    } 
    let title = [];

    if (userTitle==='' || userTitle == null) {
        title.push('Please enter title');
    } else {
        localStorage.setItem('title', userTitle.value);
    }
    let content = [];

    if (userContent==='' || userContent == null) {
        content.push('Please enter content');
    } else {
        localStorage.setItem('content', userContent.value);
    }
});
    
    
function showResponse(warningMessage) {
    submitButton.preventDefault();
    console.log(submitButton);
    const response =
    "Please have all content filled out ";
    warningMessage.textContent = response;
}

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
function reDirect() {
    location.replace("blog.html")
}
