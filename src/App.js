import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import QuizzesList from './containers/quizzeslist'
import Topbar from './components/Topbar'

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <Topbar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={QuizzesList} />
            <Route exact path="/logout" component={QuizzesList} />
            <Route exact path="/signup" component={QuizzesList} />
            <Route exact path="/quizzes" component={QuizzesList} /> 
            <Route exact path="/quizzes/:id" component={QuizzesList} />
            <Route exact path="/quizzes/edit/:id" component={QuizzesList} />
            <Route exact path="/" render={ () => <Redirect to="/quizzes" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
    
    //         <Route exact path="/login" component={LoginPage} />
    //         <Route exact path="/logout" component={LogoutPage} />
    //         <Route exact path="/signup" component={SignupPage} />
    //         <Route exact path="/quizzes" component={Homepage} /> 
    //         <Route exact path="/quizzes/:id" component={TakeQuiz} />
    //         <Route exact path="/quizzes/edit/:id" component={Quizdetails} />

export default App;
