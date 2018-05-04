import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import CreateIcon from '@material-ui/icons/Create'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import './quizzeslist.css'
import {getQuizzes} from '../actions/quizzes'

// const currentUser = [
//     {
//         id: 1,
//         firstName: 'Anna',
//         lastName: 'Bol',
//         email: 'anna@bol.com',
//         teacher: false
//     }
// ]

class QuizzesList extends PureComponent {

    componentWillMount() {
          if (this.props.quizzes !== null) this.props.getQuizzes();
        }

    

renderQuiz = (quiz) => {
        const currentUser = this.props.currentUser

    return (<Card key={quiz.id} className="quiz-card">
      <CardContent>
        <CardHeader
         title={quiz.quizTitle}/>
      </CardContent>
        <CardActions>
        { currentUser.teacher && 
            <Button
                size="small"
                variant="raised"
                onClick={() => window.location.href=`/quizzes/edit/${quiz.id}`}
                > 
                    EDIT 
                <CreateIcon />
            </Button> }
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
        currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {getQuizzes})(QuizzesList)