console.log("Hello World");

const divRoot = document.getElementById("insertHere");

const divLeft = document.createElement("div");
divLeft.className = "divLeft";
const divMain = document.createElement("div");
divMain.className = "Main";
const divRight = document.createElement("div");
divRight.className ="divRight";

divRoot.appendChild(divLeft);
divRoot.appendChild(divMain);
divRoot.appendChild(divRight);

const divLinks = document.createElement("div");
divLeft.appendChild(divLinks);
