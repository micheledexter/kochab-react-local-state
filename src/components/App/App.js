import React, { Component } from 'react';

const emptyUser = { name: '', city: '', zip: '', }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        { name: 'Shely', city: 'Minneapolis', zip: '55422' }
      ],
      user: emptyUser,
    };
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
    this.setState({
      userList: [...this.state.userList, this.state.user],
      user: emptyUser,
    });
  }

  render() {
    const peopleList = this.state.userList.map((user, i) => {
      return (
        <div key={i} style={{display:"inline-block", textAlign:"center", border:"solid", margin:"5px"}}>
          <h1>{user.name}</h1> is from <h2>{user.city}</h2> in zip code <h3>{user.zip}</h3>
        </div>
      )
    });
    return (
      <div className="App">
        <p>
          {this.state.user.name} is from {this.state.user.city} in zip code {this.state.user.zip}
        </p>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="Name" /><br />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder="City" /><br />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip Code" /><br />
          <input type="submit" value="Click me to submit form!" />
          <ul>
            {peopleList}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
