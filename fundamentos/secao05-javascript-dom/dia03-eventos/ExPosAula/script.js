const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();

  // Escreva seu código abaixo.
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const populatingList = () => {
    let getDaysList = document.querySelector('#days');
  
    for (let i=0; i<decemberDaysList.length; i+=1) {      
      let dayItem = document.createElement('li');
      dayItem.innerText = decemberDaysList[i];
      getDaysList.appendChild(dayItem);
      
      if (decemberDaysList[i] === 24 || decemberDaysList[i] === 31) {
        dayItem.className = 'day holiday'; 
      } else if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
        dayItem.className = 'day friday';
      } else if (decemberDaysList[i] === 25) {
        dayItem.className = 'day holiday friday';
      } else {
        dayItem.className = 'day';
      }
    }
  }
  populatingList();

  const createHolidayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    
    buttonContainer.appendChild(newButton);
  }
  createHolidayButton('Feriados');

  const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', () => {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
  displayHolidays();

  const createFridayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton); //adiciona o botão como filho do container de botões
  }
  createFridayButton('Sexta-feira');

  const displayFridays = (fridaysArray) => {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
        }
      }
    });
  }
  let decemberFridays = [ 4, 11, 18, 25 ];
  displayFridays(decemberFridays);

  const dayMouseOver = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
    });
  }
  
  const dayMouseOut = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
    });
  }
  dayMouseOver();
  dayMouseOut();

  const newTaskSpan = (task) => {
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
  }
  newTaskSpan('projeto')

  const newTaskDiv = (color) => {
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
  }
  newTaskDiv('green');

  const setTaskClass = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', (event) => {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }
  setTaskClass();

  const setDayColor = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      }
    });
  }
  setDayColor();
  