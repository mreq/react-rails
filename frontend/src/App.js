import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fruits</h1>

        <ul>
          {this.props.fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
