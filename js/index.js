const body = document.querySelector("body")

const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Smeh Niki ${thisYear}`;
footer.appendChild(copyright);

footer.style.textAlign = "center";

const skills = ["Solidworks", "Javascript", "Matlab", "PCR", "Microscopy"];

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
const skill = document.createElement("li");
skill.innerText = skills[i];
skillsList.appendChild(skill);
}

const messageForm = document.querySelector("form[name=leave_message]");

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    
    console.log("Name: ", userName);
    console.log("Email: ", userEmail);
    console.log("Message: ", userMessage);

    const messageSection = document.getElementById("Messages");

    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    
    messageList.appendChild(newMessage);

    messageForm.reset();
});

//Lesson 13 Fetch API, Project
fetch("https://api.github.com/users/NaanoViz/repos")
    .then((response) => {
        if (!response.ok){
            throw new Error("Unable to get data... ");
            }
    return response.json(); // Can do a response.json instead, but its okay. return response.json() Safer for security? Why?
    })

    .then((repositories) => {
    //repositories = JSON.parse(this.repositories); //This line isn't required if you do response.json(), didn't work for some reason...
        console.log("The Repositories values- ", repositories);
        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector("ul");
        projectList.innerHTML = "";

        for (let i = 0; i < repositories.length; i++){
            const project = document.createElement("li");
            const createLink = document.createElement("a");
            createLink.href = repositories[i].html_url; // TO set innert text to Array element Name
            createLink.textContent = repositories[i].name;
            project.appendChild(createLink); // can Use if (!repositories[i].fork) {} If want to private vs public
            projectList.appendChild(project);
        }
    })

    .catch((error) => {
        console.error("Failed to get repositories", error);
        
        const projectSection = document.getElementById("Projects");
        const messageError = document.createElement("p");
        messageError.innerHTML = 'Failed to load, Reload please.';
        projectSection.appendChild(messageError);
    });