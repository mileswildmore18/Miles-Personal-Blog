//Add a Back Button to lead back to the index page
//Add a Light/Dark mode

//Add information from the form filled out from index
const displayNewPost = function () {
    const stringContent = localStorage.getItem('userPost');
    const newContent = JSON.parse(stringContent);

    for (i = 0; i < newContent.length; i++) {
        let div = document.createElement('div');
        let title = document.createElement('h1');
        let content = document.createElement('p');
        let author = document.createElement('h2');

        title.textContent = newContent[i].title;
        content.textContent = newContent[i].content;
        author.textContent = newContent[i].name;

        title.setAttribute('class', 'title');
        content.setAttribute('class', 'content');
        author.setAttribute('class', 'username');

        div.append(title);
        div.append(content);
        div.append(author);

        document.article.append(div);
    };
    console.log( allPosts)
    console.log(postContent);
}
displayNewPost()

function darkMode() {
    let mode = document.body;
    mode.classList.toggle("darkMode");
}

