//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import SendQuizz from './SendQuizz'
import QuestionForm from './QuestionForm'
// import {Redirect} from 'react-router-dom'
import {updateQuestionCard} from '../actions/QuizzDetails'

// Styling
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
// import Card, { CardActions, CardContent } from 'material-ui/Card'
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

// make a render question function with card content (see from Game List)
// should generate a question id 
    
    render () {
        
        const {createQuestionCard, question } = this.props

        return (
            <Paper className="paper">
                <h1> # Quizz </h1>
                {/*  add id of quizz */}
                <Button 
                variant="raised"
                className="add-question"
                onClick={createQuestionCard}
                > Add Question </Button>
            <QuestionForm initialValues={question} onSubmit={this.updateQuestionCard}/>
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

export default connect (mapStateToProps, {updateQuestionCard})(QuizzDetails)