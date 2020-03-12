import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  async componentDidMount() {
    const bills2020Result = await fetch('/bills?session=2020A');
    const bills2020 = await bills2020Result.json();

    const bills2019Result = await fetch('/bills?session=2019A');
    const bills2019 = await bills2019Result.json();

    console.log('bills2020', bills2020);
    console.log('bills2019', bills2019);

    const peopleByLatLongResult = await fetch('/people?latitude=39.705040&longitude=-104.986620');
    const peopleByLatLong = await peopleByLatLongResult.json();

    console.log('peopleByLatLong', peopleByLatLong);
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
