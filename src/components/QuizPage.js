import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions, updateScore} from '../actions/questions'

class QuizPage extends PureComponent {
    state = {}

    componentWillMount() {
    this.props.fetchQuestions()
    }

    updateScore = () => {
        this.props.updateScore()
    }

    handleChange = (question, e) => {
        this.setState({choice: e.target.value, answer: question.answer})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.onSubmit(this.state)
        console.log('You have selected: ' + this.state.choice + '. The correct answer was: ' + this.state.answer);
        if (this.state.choice == this.state.answer) this.updateScore()
    }

    render() {
        const {questions} = this.props

        return (
          <div>
            <h1>Quiz #1</h1>
                { questions.map(question => (
                    <form key={question.id} onSubmit = {this.handleSubmit}>
                        <h3>{question.title}</h3>

                        <input type="radio" value= '1' onChange={(e) =>this.handleChange(question, e)}/>{question.option1}<br></br>

                        <input type="radio" value= '2' onChange={(e) =>this.handleChange(question, e)}/>{question.option2}<br></br>

                        <input type="radio" value= '3' onChange={(e) =>this.handleChange(question, e)}/>{question.option3}<br></br>

                        <input type="radio" value= '4' onChange={(e) =>this.handleChange(question, e)}/>{question.option4}<br></br>

                        <button type="submit">Submit</button>

                    </form> )
                )}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
      questions: state.questions,
      score: state.score
    })

    export default connect(mapStateToProps, {fetchQuestions, updateScore})(QuizPage)
