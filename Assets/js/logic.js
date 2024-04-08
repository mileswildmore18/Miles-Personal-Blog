
const userInput = document.querySelector('#userName');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('submit');
const warningMessage = document.getElementsByClassName('form');
const allPost = [];

//This will activate a alert message if submission form is not filled out
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    submitButton.value = '';

    for (let i = 0; i < warningMessage.length; i++) {
        warningMessage[i].textContent = '';
    }

    if (userInput === '' || userTitle === '' || userContent === '') {

        alert('Please enter name');

    } else { 
        //Build in the oject with value form the form, add the oject to array, to localstorage
        const userPost = {
            name: userInput.value,
            title: userTitle.value,
            content: userContent.value
        }
        allPost.push(userPost);
        localStorage.setItem('user', JSON.stringify(userPost));
    }
});
//Store information of the form information to the console
console.log(localStorage);
//Take the user to the blog page
function reDirect() {
    location.replace("blog.html")
}
//Save the information put in the form


function showResponse(warningMessage) {
    submitButton.preventDefault();
    console.log(submitButton);
    const response =
        "Please have all content filled out ";
    warningMessage.textContent = response;
}

//Show how long the alert message stays on failed submission

function timer() {
    let messageTime = 5;

    const message = setInterval(function () {

        //updating the page
        if (messageTime >= 1) {
            warningMessage.textContent = `Please fill out the form before submitting`;
            messageTime--;
        }
        //updating the time of the message

        if (messageTime === 0) {
            //Stop the timer
            clearInterval(message);
            //empty the box
            warningMessage.textContent = '';
            displayMessage();
        };
    }, 1000)


}

//This will activate dark mode and light mode
function darkMode() {
    let mode = document.body;
    mode.classList.toggle("darkMode");

}
//Goes to the blog page after information is submitted
function reDirect() {
    location.replace("blog.html")
}
//Reset the form
submitButton.addEventListener('click', function () {
    document.querySelector('form').reset()
})