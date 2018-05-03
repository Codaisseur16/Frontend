//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import SendQuizz from './SendQuizz'
import QuestionForm from './QuestionForm'
import {fetchQuestions} from '../actions/questions'

// Styling
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import './QuizzDetails.css'

class QuizzDetails extends PureComponent {
    state = {
        clicked: false
    }

    componentWillMount() {
        if (this.props.questions !== null) this.props.fetchQuestions()
    }

    renderCard = () => {
        this.setState({clicked: true})
    }


    render () {
        const quizId = (window.location.href).split('/').pop()
        console.log(this.state)
        if (this.state.clicked === false) {
            return (
                <Paper className="paper">
                <h1> # Quiz {quizId} </h1>
                <Button
                variant="raised"
                className="add-question"
                onClick={this.renderCard}
                > Add Question </Button>

                <SendQuizz/>

                </Paper>
            )
        } else {
            return (
                <Paper className="paper">
                <h1> # Quiz {quizId} </h1>
                <Button
                variant="raised"
                className="add-question"
                onClick={this.renderCard}
                > Add Question </Button>

                <QuestionForm/>
                <SendQuizz/>

            </Paper>
            )
        }

        return (
            <Paper className="paper">
                <h1> # Quiz {quizId} </h1>
                <Button
                variant="raised"
                className="add-question"
                onClick={this.renderCard}
                > Add Question </Button>

            <SendQuizz/>

            </Paper>

        )
    }
}

const mapStateToProps = (state, props) => {
    return {
      questions: state.QuizzDetails
    }
}

export default connect (mapStateToProps)(QuizzDetails)
