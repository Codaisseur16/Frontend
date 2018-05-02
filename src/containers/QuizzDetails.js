//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
import {createQuestionCard} from '../actions/QuizzDetails'

// Styling
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import './QuizzDetails.css'

class QuizzDetails extends PureComponent {

    // componentWillMount() {
    //     if (this.props.authenticated) {
    //       if (this.props.quizz === null) this.props.getQuizz()
    //       if (this.props.users === null) this.props.getUsers()
    //     }
    // }

    // make a render question function with card content (see from Game List)

    render () {
        const {createQuestionCard} = this.props

        return (
            <Paper className="paper">
                <h1>Quizz # 1</h1> 
                {/* update with {quizz.id} */}
                <Button 
                variant="raised"
                className="add-question"
                onClick={createQuestionCard}
                > Add Question </Button>
            
            <Card className="quizz-card">
                <CardContent>
                    <form>
                        <div className="question-field">
                            <label className="label-field">QUESTION:
                            <br/><input type="text" name="question" className="input-field"/>
                            </label>
                        </div>
                        <div className="answers-field">
                            <label className="label-field" > ANSWERS: 
                            <br/><input type="text" placeholder="Option 1" name="answer1" id="1" className="input-field"/>
                            <br/><input type="text" placeholder="Option 2" name="answer2" id="2" className="input-field"/>
                            <br/><input type="text" placeholder="Option 3" name="answer3" id="3" className="input-field"/>
                            <br/><input type="text" placeholder="Option 4" name="answer4" id="4" className="input-field"/>
                            </label>
                        </div>
                        <div className="correct-field">
                            <label className="label-field">CORRECT:
                            <br/><input type="text" name="correctAnswer" className="input-field"/>
                            </label>
                        </div>
                    </form>
                    
                    <CardActions>
                        <Button className="question-action"> Submit </Button>
                        <Button className="question-action"> Remove </Button>
                    </CardActions>
                </CardContent>
            </Card> 

            <div>
                <input type="text" placeholder="Type your webhook URL"name="correctAnswer" className="input-field"/>
                <Button className="send-quizz-content"> Send </Button>
            </div>
            </Paper>

        )
    }
}

const mapStateToProps = state => ({
    // authenticated: state.currentUser !== null,
    // users: state.users === null ? null : state.users,
    quizzContent: state.QuizzDetails === null ?
      null : Object.values(state.QuizzDetails).sort((a, b) => b.id - a.id)
  })

export default connect (mapStateToProps, {createQuestionCard })(QuizzDetails)