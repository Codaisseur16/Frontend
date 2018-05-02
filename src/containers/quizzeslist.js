import React, {PureComponent} from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

class QuizzesList extends PureComponent {

    componentWillMount() {
          if (this.props.quizzes === null) this.props.getQuizzes()
        }
    

renderQuiz = (quiz) => {

    <Card key={quiz.id} className="quiz-card">
      <CardContent>
        <Typography>
          Quiz #{quiz.title}
        </Typography>
      </CardContent>
        <CardActions>
            <Button
            size="small"
            onClick={() => window.location.href=`/edit/${quiz.id}`}
            > 
            EDIT 
            </Button>
            <Button
            size="small"
            onClick={() => window.location.href=`/play/${quiz.id}`}
            >
            PLAY
            </Button>
        </CardActions>
    </Card>
}

    render() {
        const {quizzes} = this.props

        return(
            <div>
                <div>
                {quizzes.map(quiz => this.renderQuiz(quiz))}
                </div>
            </div>
        )
    }
}