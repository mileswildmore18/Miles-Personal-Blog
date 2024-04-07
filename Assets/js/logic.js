
const userInput = document.querySelector('#username');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('submit');
const warningMessage = document.getElementsByClassName('form');


//This will activate a alert message if submission form is not filled out
submitButton.addEventListener('submit', function storeInput() {
    submitted.preventDefault();

    let name = [];
    
    if(userInput ==='') {
        name.alert('Please enter name');
    } else {
        localStorage.setItem('username', userInput.value);
    } 
    let title = [];

    if (userTitle==='') {
        title.alert('Please enter title');
    } else {
        localStorage.setItem('title', userTitle.value);
    }
    let content = [];

    if (userContent==='') {
        content.alert('Please enter content');
    } else {
        localStorage.setItem('content', userContent.value);
    }
});
    console.log(localStorage);

//Save the information put in the form
    submitButton.addEventListener('click', function storeInfo(){
        const userPost = {
            name: userInput.value,
            title: userTitle.value,
            content: userContent.value,

        }
    })

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