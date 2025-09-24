const body = document.querySelector("body")

const footer = document.createElement("footer");
body.appendChild(footer)

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Smeh Niki ${thisYear}`;
footer.appendChild(copyright);

footer.style.textAlign = "center";

const skills = ["Solidworks", "Javascript", "Matlab", "PCR", "Microscopy"]

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
const skill = document.createElement("li");
skill.innerText = skills[i];
skillsList.appendChild(skill);
}

