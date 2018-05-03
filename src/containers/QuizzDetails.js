//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import SendQuizz from './SendQuizz'
import QuestionForm from './QuestionForm'
import {fetchQuestions} from '../actions/questions'
import {deleteQuestionCard} from '../actions/QuizzDetails'

// Styling
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import './QuizzDetails.css'
import { Typography } from 'material-ui';

class QuizzDetails extends PureComponent {
    state = {
        clicked: false
    }

    componentWillMount() {
        // const quizId = (window.location.href).split('/').pop()
        this.props.fetchQuestions(this.props.match.params.id)
    }

    delete = () => {
        this.props.deleteQuestionCard(this.props.match.params.id)
    }

    changeState = () => {
        this.setState({clicked: true})
    }

    renderQuestion = (question) => {
        return (
            <div>
            <Card>
                <CardContent>
                    <Typography>Question: {question.title}</Typography>
                    <br/>
                    <Typography>Option 1: {question.option1}</Typography>
                    <Typography>Option 2: {question.option2}</Typography>
                    <Typography>Option 3: {question.option3}</Typography>
                    <Typography>Option 4: {question.option4}</Typography>
                    <br/>
                    <Typography>Correct Answer: {question.correctAnswer}</Typography>
                    <Button
                    variant="raised"
                    className="delete-question"
                    onClick={this.delete}
                    > Delete </Button>
                </CardContent>
            </Card>
            </div>
        )
    }


    render () {
        const quizId = (window.location.href).split('/').pop()
        const {questions} = this.props
        console.log(this.props)
        console.log(this.state)
        if (this.state.clicked === false) {
            return (
                <Paper className="paper">
                <h1> Quiz #{quizId} </h1>
                <Button
                variant="raised"
                className="add-question"
                onClick={this.changeState}
                > Add Question </Button>

                {questions.map(question => (this.renderQuestion(question)))}
                <SendQuizz/>

                </Paper>
            )
        } else {
            return (
                <Paper className="paper">
                <h1> Quiz #{quizId} </h1>
                <Button
                variant="raised"
                className="add-question"
                onClick={this.changeState}
                > Add Question </Button>

                <QuestionForm/>
               
                {questions.map(question => (this.renderQuestion(question)))}
                
                <SendQuizz/>

            </Paper>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
      questions: state.questions
    }
}

export default connect (mapStateToProps, {fetchQuestions, deleteQuestionCard})(QuizzDetails)
