import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'
import './quizzeslist.css'

import {getQuizzes} from '../actions/quizzes'

const quizzes =[
    {
    id: 1,
    title: 'Quiz1'
    },
    {
    id: 2,
    title: 'Quiz2'
    },
    {
    id: 3,
    title: 'Quiz3'
    }
]

class QuizzesList extends PureComponent {

    componentWillMount() {
          if (this.props.quizzes === null) this.props.getQuizzes()
        }
    

renderQuiz = (quiz) => {

    return (<Card key={quiz.id} className="quiz-card">
      <CardContent>
        <CardHeader
         title={quiz.title}/>
      </CardContent>
        <CardActions>
            <Button
            size="small"
            onClick={() => window.location.href=`/quizzes/edit/${quiz.id}`}
            > 
            EDIT 
            </Button>
            <Button
            size="small"
            onClick={() => window.location.href=`/quizzes/${quiz.id}`}
            >
            PLAY
            </Button>
        </CardActions>
    </Card>
    )}

    render() {
       // const {quizzes} = this.props

        return(
            <Paper className="outer-paper">
                <div>
                {quizzes.map(quiz => this.renderQuiz(quiz))}
                </div>
            </Paper>
        )
    }
}

const mapStateToProps = function (state) {
	return {
		quizzes: state.quizzes,
	}
}

export default connect(mapStateToProps, {getQuizzes})(QuizzesList)