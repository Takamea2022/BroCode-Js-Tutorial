document.title = "My Website!";


const userName = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? " Guest!" : userName;
