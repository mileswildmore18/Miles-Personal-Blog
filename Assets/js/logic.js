
const userInput = document.querySelector('#userName');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const submitButton = document.getElementById('submit');
const warningMessage = document.getElementById('warningMessage');
let message;

//This will activate a alert message if submission form is not filled out
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    console.log(userContent.value);
    if ((userInput.value === null || userInput.value === '' ) || (userTitle.value === null || userTitle.value === '')) {

        //warningMessage.textContent = 'Please fill out the form';
        //updating the page
        warningMessage.textContent = 'Please fill out the form';
        message = setTimeout(function () {    
        warningMessage.textContent = '';   
    }, 5000)
    //clears the error message

    }else if(userContent.value === null || userContent.value.trim() === ''){

        //warningMessage.textContent = 'Please fill out the form';
        warningMessage.textContent = 'Please fill out the form';
        message = setTimeout(function () {    
        warningMessage.textContent = '';   
    }, 5000)
    } else { 
        //Build in the object with value form the form, add the oject to array, to localstorage
        const allPost = JSON.parse(localStorage.getItem('allPost')) || [];
        const userPost = {
            name: userInput.value,
            title: userTitle.value,
            content: userContent.value
        }
        allPost.push(userPost);
        localStorage.setItem('allPost', JSON.stringify(allPost));
        //Call the redirect
        reDirect();
    }//Take the user to the blog page
});

//Store information of the form information to the console
console.log(localStorage);


//Show how long the alert message stays on failed submission
function timer() {
    let messageTime = 5;
    
    warningMessage.textContent = 'Please fill out the form';
    message = setTimeout(function () {    
    warningMessage.textContent = '';   
    }, 5000)

        //updating the page
        //if (messageTime >= 1) {
            //warningMessage.textContent = 'Please fill out the form';
            //messageTime--;
        //}
        //updating the time of the message

        // if (messageTime <= 0) {
        //     //Stop the timer
        //     clearInterval(message);
        //     //empty the box
        //     warningMessage.textContent = '';
        //     displayMessage();
        // };
    

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
    timer();
    document.querySelector('form').reset()
})