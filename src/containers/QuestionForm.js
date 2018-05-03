//src/containers/QuestionForm.js
import React, {PureComponent} from 'react'
import {updateQuestionCard} from '../actions/QuizzDetails'

//styling
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent } from 'material-ui/Card'
// import './QuizzDetails.css'

class QuestionForm extends PureComponent {

    state = {}

	handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateQuestionCard(this.state) 
        // this.props.updateQuestionCard(question.id, this.state) // question id should be generated on post, so add new question  
        console.log(this.state)
	}

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
		  [name]: value
		})
	}

    render () {

        const initialValues = this.props.initialValues || {}

        return (
            
            <Card className="quizz-card">
                <CardContent>
                    <form>

                        <div className="question-field">
                            <label className="label-field">QUESTION: </label>
                            <input type="text" name="title" className="input-field"
                            id="title" 
                            value={this.state.title || initialValues.title || '' } 
                            onChange={ this.handleChange }/>
                        </div>

                        <div className="answers-field">
                            <label className="label-field" > ANSWERS: </label>
                            <input type="text" placeholder="Option 1" className="input-field" name="option1" id="option1"
                            value={this.state.option1 || initialValues.option1 || ''} 
                            onChange={ this.handleChange } />

                            <input type="text" placeholder="Option 2" className="input-field"
                            name="option2" id="option2" 
                            value={this.state.option2 || initialValues.option2 || ''} 
                            onChange={ this.handleChange } />

                            <input type="text" placeholder="Option 3" className="input-field"
                            name="option3" id="option3" 
                            value={this.state.option3 || initialValues.option3 || ''} 
                            onChange={ this.handleChange }/>

                            <input type="text" placeholder="Option 4" className="input-field"
                            name="option4" id="option4"
                            value={this.state.option4 || initialValues.option4 || ''} 
                            onChange={ this.handleChange } />
                        </div>

                        <div className="correct-field">
                            <label className="label-field">CORRECT: </label>
                            <input type="text" className="input-field"
                            name="correctAnswer" id="correctAnswer"
                            value={this.state.correctAnswer || initialValues.correctAnswer || ''} 
                            onChange={ this.handleChange }
                            />
                        </div>

                    <CardActions>
                        <Button className="question-action" onClick={this.handleSubmit}> Submit </Button>
                        <Button className="question-action"> Remove </Button>
                    </CardActions>
                    </form>

                </CardContent>
            </Card>

        )
    }
}

// const mapStateToProps = state => ({
//     // authenticated: state.currentUser !== null,
//     // users: state.users === null ? null : state.users,
//     quizzContent: state.QuizzDetails === null ?
//       null : Object.values(state.QuizzDetails).sort((a, b) => b.id - a.id)
// })

export default QuestionForm