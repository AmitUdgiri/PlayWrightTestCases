// Real QA Scenario: End-to-End Login for the App.vwo.com

// openbrowser()
// goToLoginPage()
// enterCredentials()
// clickLogin()

function openBrowser(callback) {
console.log("opening the chrome Browser");
setTimeout(function () {
callback();
}, 2000);
}

function goToLoginPage(callback) {
    console.log("Step 1: Navigating to Login Page");
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 1000);
}

function enterCredentials(callback) {
setTimeout(function () {
console.log("Step 3: Credentials entered");
callback();
}, 1000);
}

function ClickonLogin(callback) {
setTimeout(function () {
console.log("Step 4: Login button clicked");
callback();
}, 2000);
}

//This is called as callback hell

openBrowser(function () {
    goToLoginPage (function () {
        enterCredentials(function () {
            ClickonLogin (function () {
                console.log("Test case is passed, user is able to login successfully");
            })
        })
    })
})