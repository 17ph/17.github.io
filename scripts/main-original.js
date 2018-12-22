//Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo-300x310.png') {
        myImage.setAttribute('src', 'images/switch-to-firefox.fb1c114dfd84.png');
    }else {
        myImage.setAttribute('src', 'images/firefox-logo-300x310.png');
    }
}

//Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    //myHeading.textContent = 'Hello, ' + myName + '!';
    myHeading.innerHTML = 'Hello, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    //myHeading.textContent = 'Hello, ' + storedName + '!';
    myHeading.innerHTML = 'Hello, ' + storedName + '!';
}

myButton.onclick = function(){
    setUserName();
}