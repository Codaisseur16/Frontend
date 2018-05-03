import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addAnswer, updateAnswer} from '../actions/questions'
import Paper from 'material-ui/Paper'
import Card, {CardHeader, CardContent} from 'material-ui/Card';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel} from 'material-ui/Form';
import '../components/QuizPage.css'

function getChecked(questionId, answers) {
    console.log(questionId)
    const currentAnswer = answers.filter(answer => {return answer.questionId === questionId})
    console.log(currentAnswer)
}

class QuizQuestions extends PureComponent {

    addAnswer = (answer) => {
        this.props.addAnswer(answer)
    }

    updateAnswer = (answer) => {
        this.props.updateAnswer(answer)
    }

    handleChange = (e, question) => {
        const answer = {
            questionId: question.id,
            choice: Number(e.target.value),
            correct: question.correctAnswer
        }

        const questionsAnswered = this.props.answers.map(answer => answer.questionId)

        if (questionsAnswered.indexOf(question.id) > -1) { this.updateAnswer(answer)}
        else {this.addAnswer(answer)}

        e.target.checked

    }

    render() {
        const {questions, answers} = this.props

        return (
            <div>{ questions.map(question => (
                <FormControl component="fieldset" required>

                    <FormLabel>{question.title}</FormLabel>

                    <RadioGroup
                    name={question.id}
                    value={getChecked(question.id, answers)}
                    onChange={(e) => this.handleChange(e, question)}
                    key={question.id}>

                    <FormControlLabel value='1' control={<Radio checked={true}/>} label={question.option1} />
                    <FormControlLabel value='2' control={<Radio />} label={question.option2} />
                    <FormControlLabel value='3' control={<Radio />} label={question.option3} />
                    <FormControlLabel value='4' control={<Radio />} label={question.option4} />

                  </RadioGroup>

                </FormControl>
            ))}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
      questions: state.questions,
      currentUser: state.currentUser,
      answers: state.answers
    })

    export default connect(mapStateToProps, {addAnswer, updateAnswer})(QuizQuestions)
