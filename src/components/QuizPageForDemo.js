import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getQuestions, sendResponse} from '../actions/questions'
import Paper from 'material-ui/Paper'
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel} from 'material-ui/Form';
import Button from 'material-ui/Button'
import './QuizPage.css'

class QuizPageForDemo extends PureComponent {
    state =  {
        quizId: this.props.match.params.id,
        userId: this.props.currentUser.userId,
        teacher: this.props.currentUser.teacher,
        score: 0
    }

    componentWillMount() {
    this.props.getQuestions(this.props.match.params.id)
    }

    sendResponse = (response) => {
        this.props.sendResponse(response)
    }

    handleChange = (question, e) => {
       if (Number(e.target.value) === question.correctAnswer)
       this.setState({...this.state, score: this.state.score + 1})
   }

   handleSubmit = (e) => {
       e.preventDefault()
       this.sendResponse(this.state)
   }

   render() {
       const {questions} = this.props

       return (
         <Paper className="outer-paper">
           <h1>Quiz #{this.props.match.params.id}</h1>
               { questions.map(question => (
                   <form key={question.id}>
                       <h3>{question.title}</h3>

                       <input type="radio"  name='name' value= '1' onChange={(e) =>this.handleChange(question, e)}/>{question.option1}<br></br>

                       <input type="radio" name='name' value= '2' onChange={(e) =>this.handleChange(question, e)}/>{question.option2}<br></br>

                       <input type="radio" name='name' value= '3' onChange={(e) =>this.handleChange(question, e)}/>{question.option3}<br></br>

                       <input type="radio" name='name' value= '4' onChange={(e) =>this.handleChange(question, e)}/>{question.option4}<br></br>

                   </form> )
               )}
               <Button
                   type='submit'
                   color="secondary"
                   variant="raised"
                   className="submit"
                   onClick={this.handleSubmit}
               > Submit
               </Button>

           </Paper>
       )
   }
}


const mapStateToProps = (state) => ({
     questions: state.questions,
     currentUser: state.currentUser
   })

    export default connect(mapStateToProps, {getQuestions, sendResponse})(QuizPageForDemo)
