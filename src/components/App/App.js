import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        city: '',
        zip: '',
      }
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  }

  handleClick = () => {
    console.log(this.state.user);
    this.setState({
      user: {
        name: '',
        city: '',
        zip: '',
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/* The current user is {this.state.user} */}
        <p>
          {this.state.user.name} is from {this.state.user.city} in zip code {this.state.user.zip}
        </p>
        User: <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="Name" />
        City: <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder="City" />
        Zip Code: <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip Code" />
        <button onClick={this.handleClick}>Log the state!</button>
      </div>
    );
  }
}

export default App;
