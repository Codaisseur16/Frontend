import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import CreateIcon from '@material-ui/icons/Create'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import './quizzeslist.css'

import {getQuizzes} from '../actions/quizzes'

// const quizzes =[
//     {
//     id: 1,
//     title: 'Codaisseur: How do you like us?'
//     },
//     {
//     id: 2,
//     title: 'React/Redux: What do you know?'
//     },
//     {
//     id: 3,
//     title: 'Can you build an app with your group?'
//     }
// ]

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
            variant="raised"
            onClick={() => window.location.href=`/quizzes/edit/${quiz.id}`}
            > 
            EDIT 
            <CreateIcon />
            </Button>
            <Button
            size="small"
            variant="raised"
            onClick={() => window.location.href=`/quizzes/${quiz.id}`}
            >
            PLAY
             <PlayCircleOutline/>
            </Button>
        </CardActions>
    </Card>
    )}

    render() {
        const {quizzes} = this.props

        return(
            <div>
                {quizzes.map(quiz => this.renderQuiz(quiz))}
            </div>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
		quizzes: state.quizzes,
	}
}

export default connect(mapStateToProps, {getQuizzes})(QuizzesList)