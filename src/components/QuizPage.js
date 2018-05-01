import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions} from '../actions/questions'
import {Link} from 'react-router-dom'
import {quizQuestionsArray} from '../dummydata/questions'

class QuizPage extends PureComponent {
    state = {}

    componentWillMount() {
    this.props.fetchQuestions()
    }


    handleChange = (e) => {
        this.setState({name: e.target.name, price: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.onSubmit(this.state)
        console.log('You have selected:', this.state.name + this.state.price);
    }


  render() {
    const {questions} = this.props

    return (
      <div>
        <h1>Quiz #1</h1>
            { quizQuestionsArray.map(question => (
                <form key={question.id}>
                    <h3>{question.title}</h3>

                    <input type="radio" value= '1'/>{question.option1}<br></br>

                    <input type="radio" value= '2'/>{question.option2}<br></br>

                    <input type="radio" value= '3'/>{question.option3}<br></br>

                    <input type="radio" value= '4'/>{question.option4}<br></br>

                    <button type="submit">Submit</button>

                </form> )) }
                </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    questions: state.questions,
  }
}

export default connect(mapStateToProps, { fetchQuestions })(QuizPage)
