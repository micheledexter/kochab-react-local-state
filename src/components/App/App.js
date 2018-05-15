import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        place: '',
      }
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleUserChange = (event) => {
    console.log('event.target.value:', event.target.value);

    // this.state.user = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      }
    });
  }

  handlePlaceChange = (event) => {
    console.log('event.target.value:', event.target.value);

    this.setState({
      user: {
        ...this.state.user,
        place: event.target.value,
      }
    });
  }

  handleClick = (event) => {
    console.log(this.state.user);
  };

  render() {
    return (
      <div className="App">
        {/* The current user is {this.state.user} */}
        {this.state.user.name} is from {this.state.user.place}<br />
        User: <input onChange={this.handleUserChange} placeholder="Username" />
        Place: <input onChange={this.handlePlaceChange} placeholder="Place" />
        <button onClick={this.handleClick}>Press me... i dare you...</button>
      </div>
    );
  }
}

export default App;
