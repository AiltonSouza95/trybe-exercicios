const header = document.querySelector('#header-container');
header.style.backgroundColor = "green";

const emergency = document.querySelectorAll('.emergency-tasks h3');
for(let i=0; i<emergency.length; i+=1){
emergency[i].style.backgroundColor = "purple";
};

const emergencyDiv = document.querySelectorAll('.emergency-tasks div');
for(let i=0; i<emergencyDiv.length; i+=1){
    emergencyDiv[i].style.backgroundColor = "pink";
};

const noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for(let i=0; i<noEmergency.length; i+=1){
    noEmergency[i].style.backgroundColor = "black";
};

const noEmergencyDiv = document.querySelectorAll('.no-emergency-tasks div');
for(let i=0; i<noEmergencyDiv.length; i+=1){
    noEmergencyDiv[i].style.backgroundColor = "yellow";
};

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = "rgb(0, 53, 51)"