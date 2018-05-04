import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {createQuiz} from '../actions/quizzes'
import store from '../store'
import './createQuizButton.js'
//import { userId } from '../jwt';

class CreateQuizButton extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(this.state);
        store.dispatch(createQuiz(this.state))   
    }


    handleChange = () => event => {
        this.setState({
          quizTitle: event.target.value,
          userId: 1
        });
      };

    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <form onSubmit={this.handleSubmit}>
              <TextField
                id='quizTitle'
                label='Title Quiz'
                value={this.state.quizTitle || initialValues.quizTitle || ''}
                onChange={this.handleChange('quizTitle')}
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