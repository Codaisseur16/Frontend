import React, { Component } from 'react'
import QuizzDetails from './containers/QuizzDetails'
// import AppBar from 'material-ui/AppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
          {/* <AppBar title="Create Your Quizz" /> */}
        </nav>
        <QuizzDetails/>
      </div>
    );
  }
}

export default App;
