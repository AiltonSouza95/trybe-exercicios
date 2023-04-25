import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleFirstButton = this.handleFirstButton.bind(this);
    this.handleSecondButton = this.handleSecondButton.bind(this);
    this.handlethirdButton = this.handlethirdButton.bind(this);

    this.state = {
      firstBtnClicks: 0,
      secondBtnClicks: 0,
      thirdBtnClicks: 0,
    };
  }

handleFirstButton() {
  this.setState((prevState) => ({
    firstBtnClicks: prevState.firstBtnClicks + 1,
  }));
}

handleSecondButton() {
  this.setState((prevState) => ({
    secondBtnClicks: prevState.secondBtnClicks + 1,
  }));
}

handlethirdButton() {
  this.setState(({ thirdBtnClicks }) => ({
    thirdBtnClicks: thirdBtnClicks + 1,
  }));
}

  render() {
  const { firstBtnClicks, secondBtnClicks, thirdBtnClicks } = this.state;
  return (
    <div>
      <button
        type="button"
        onClick={ this.handleFirstButton }
      >
        {`Cliques botão 1: ${firstBtnClicks}`}
      </button>
      <button
        type="button"
        onClick={ this.handleSecondButton }
      >
        {`Cliques botão 2: ${secondBtnClicks}`}
      </button>
      <button
        type="button"
        onClick={ this.handlethirdButton }
      >
        {`Cliques botão 3: ${thirdBtnClicks}`}
      </button>
    </div>
    );
  }
}

export default App;