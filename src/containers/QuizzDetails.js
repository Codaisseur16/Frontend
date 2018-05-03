//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import SendQuizz from './SendQuizz'
import QuestionForm from './QuestionForm'
// import {Redirect} from 'react-router-dom'
import {createQuestionCard ,updateQuestionCard} from '../actions/QuizzDetails'

// Styling
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import './QuizzDetails.css'

class QuizzDetails extends PureComponent {

    // componentWillMount() {
    //     if (this.props.authenticated) {
    //       if (this.props.quizz === null) this.props.getQuizz()
    //       if (this.props.users === null) this.props.getUsers()
    //     }
    // }
    // componentWillMount(props) {
    //     this.props.fetchQuizz(this.props.match.params.id)
    //     this.props.fetchQuestion(this.props.match.params.id)
    // }

    
    // updateQuestionCard = (question) => {
    //     this.props.updateQuestionCard(this.props.match.params.id, question)
    // }

    renderQuestionForm = (questionForm) => {

        this.props.createQuestionCard(questionForm)
        //need to send a request (post) with question Number and get back an unique id 
        return (
        <QuestionForm initialValues= ''/>
        // key={question.id}
        )
    }
    

// should generate a question id 
    
    render () {
        const quizId = (window.location.href).split('/').pop()
        const { questions, quiz } = this.props

        return (
            <Paper className="paper">
                {<h1> #Quiz {quizId} </h1> }
                {/*  add id of quizz */}
                <Button 
                    variant="raised"
                    className="add-question"
                    onClick={this.renderQuestionForm}
                    >
                 Add Question 
                </Button>

            {/* <div>
            {questions.map(question => this.renderQuestionForm(question))}
            </div> */}

            <QuestionForm initialValues={questions} onClick={this.updateQuestionCard}/>
            <SendQuizz/>

            </Paper>

        )
    }
}

const mapStateToProps = (state, props) => {
    return {
      question: state.QuizzDetails
    }
  }

export default connect (mapStateToProps, {updateQuestionCard, createQuestionCard })(QuizzDetails)