import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getQuestions, sendResponse, addAnswer, updateAnswer} from '../actions/questions'
import Paper from 'material-ui/Paper'
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel} from 'material-ui/Form';
import Button from 'material-ui/Button'
import QuizQuestions from '../containers/QuizQuestions'
import './QuizPage.css'

function calculateScore(answers) {
    let score = 0
    answers.map(answer => {
        if (answer.choice === answer.correct) return score += 1
        else return score
    })
    return score
}

class QuizPage extends PureComponent {

    componentWillMount() {
    this.props.getQuestions(this.props.match.params.id)
    }

    sendResponse = (response) => {
        this.props.sendResponse(response)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const score = calculateScore(this.props.answers)
        const response = {
            quizId: Number(this.props.match.params.id),
            userId: this.props.currentUser.userId,
            teacher: this.props.currentUser.teacher,
            score: score
        }
        console.log(response)

        this.sendResponse(response)
    }

    render() {
        const {questions} = this.props

        return (
          <Paper className="outer-paper">
            <h1>Quiz #1</h1>
                <QuizQuestions />
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
      score: state.score,
      currentUser: state.currentUser,
      answers: state.answers
    })

    export default connect(mapStateToProps, {getQuestions, sendResponse, addAnswer, updateAnswer})(QuizPage)
