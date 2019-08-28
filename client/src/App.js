import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null,
    cityInput: '',
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  cityInputOnChangeHandler = (e) => {
    this.setState({cityInput: e.target.value})
  }
  submitButtonHandler = async () => {
    const response = await fetch(`http://localhost:5000/weatherAPI/${this.state.cityInput}`)
    const body = await response.json();
    // if (response.status !== 200) {
    //   throw Error(body.message)
    // }
    console.log(body);
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.cityInputOnChangeHandler}/>
        <button onClick={this.submitButtonHandler}>Request Weather</button>
      </div>
    );
  }
}

export default App;