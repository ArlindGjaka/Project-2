const rootDiv = document.getElementById('root');
let userName = '';
let posts = [];

function renderSignUp() {
    rootDiv.innerHTML = `
        <h1>Sign Up</h1>
        <form id="signupForm">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email"><br>
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password"><br>
            <button type="button" onclick="handleSignUp()">Sign Up</button>
        </form>
    `;
}

function handleSignUp() {
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;
        if (nameInput && emailInput && passwordInput) {
            userName = nameInput; // Store the user's name in a global variable
            renderHomePage();     // Move to the next step in the app
        } else {
            alert('Please fill out all fields');
        }
    }

function renderHomePage() {
    rootDiv.innerHTML = `
        <h1>Welcome, ${userName}!</h1>
        <h2>Create a Post</h2>
        <textarea id="postContent" placeholder="What's on your mind?"></textarea><br>
        <button type="button" onclick="handleCreatePost()">Post</button>
        <h3>Your Posts</h3>
        <ul id="postList"></ul>
    `;
}

function handleCreatePost() {
    const postContent = document.getElementById('postContent').value;
    
    if (postContent) {
        posts.push(postContent); // Add the new post to the posts array
        renderPostList();        // Update the displayed post list
    } else {
        alert('Post content cannot be empty');
    }
}

function renderPostList() {
    const postListElement = document.getElementById('postList');
    postListElement.innerHTML = ''; // Clear the current list
    
    posts.forEach((post) => {
        const postItem = document.createElement('li');
        postItem.textContent = post;
        postListElement.appendChild(postItem);
    });
}



        /*
// Block of code that can be executed when it is called
function showMessage(){
    // do stuff
    // 1) See the value of the input
        // Look in the document and find the input
        let input = document.getElementById("name-input")
        console.log(input.value)

    // 2) Show a message with that name
    // Step 1 - Find the h1 element we want to show our message in
        let h1 = document.getElementById("message")
        h1.innerHTML = "Welcome Back " + input.value

        
}
        */