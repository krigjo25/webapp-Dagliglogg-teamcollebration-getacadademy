// Initiate the login controller
function loginHandler(event) {
    /*
        This function is responsible for collecting login data 
        from the form and verifying it against the stored user data.
    */
    
    // Prevents the page from reloading
    event.preventDefault();

    // Collecting data from the form inputs in the model
    let username = model.input.login.username;
    let password = model.input.login.password;

    // Verify user credentials
    let user = model.data.users.find(u => u.username == username && u.password == password);

    if (user) {
        alert("Login successful!");
        model.app.currentpage = 'dashboard';  // Update the model's state to navigate to the main page
        model.session.id = user.id;  // Set the session id to the logged-in user's id
        updateView();  // Render the appropriate view based on the new state
    } else {
        alert("Incorrect login credentials");
    }
}
