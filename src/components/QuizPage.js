import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions, sendResponse} from '../actions/questions'

class QuizPage extends PureComponent {
    state = {
        quizId: 1,
        userId: 1,
        teacher: false,
        score: 0
    }

    componentWillMount() {
    this.props.fetchQuestions()
    }

    sendResponse = (response) => {
        this.props.sendResponse(response)
    }

    handleChange = (question, e) => {
        console.log('Before: ' , this.state)
        if (e.target.value == question.answer)
        this.setState({...this.state, score: this.state.score + 1})
        console.log('After: ', this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.sendResponse(this.state)
        // this.props.onSubmit(this.state)
        // console.log('You have selected: ' + this.state.choice + '. The correct answer was: ' + this.state.answer);
        // if (this.state.choice == this.state.answer) this.sendResponse(this.state)
    }

    render() {
        const {questions} = this.props

        return (
          <div>
            <h1>Quiz #1</h1>
                { questions.map(question => (
                    <form key={question.id}>
                        <h3>{question.title}</h3>

                        <input type="radio"  name='name' value= '1' onChange={(e) =>this.handleChange(question, e)}/>{question.option1}<br></br>

                        <input type="radio" name='name' value= '2' onChange={(e) =>this.handleChange(question, e)}/>{question.option2}<br></br>

                        <input type="radio" name='name' value= '3' onChange={(e) =>this.handleChange(question, e)}/>{question.option3}<br></br>

                        <input type="radio" name='name' value= '4' onChange={(e) =>this.handleChange(question, e)}/>{question.option4}<br></br>

                    </form> )
                )}
                <button type="submit" onClick = {this.handleSubmit} >Submit</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
      questions: state.questions,
      score: state.score
    })

    export default connect(mapStateToProps, {fetchQuestions, sendResponse})(QuizPage)
