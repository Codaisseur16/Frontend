import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createQuiz} from '../actions/quizzes'
import store from '../store'
import './createQuizButton.js'

class CreateQuizButton extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        store.dispatch(createQuiz(this.state))   
    }


    handleChange = title => event => {
        this.setState({
          [title]: event.target.value,
        });
      };

    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                id='title'
                label='Title Quiz'
                value={this.state.title || initialValues.title || ''}
                onChange={this.handleChange('title')}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-quiz"
                >
                    Create Quiz
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
		quizzes: state.quizzes,
	}
}

export default connect(mapStateToProps, {createQuiz})(CreateQuizButton)