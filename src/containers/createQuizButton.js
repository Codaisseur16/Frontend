import React, {PureComponent} from 'react'
//import Card, { CardActions, CardContent } from 'material-ui/Card'
//import Typography from 'material-ui/Typography'

class CreateQuizButton extends PureComponent {

    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.users === null) this.props.getUsers()
        }
      }

    render() {

        return(
            <Button
                color="primary"
                variant="raised"
                onClick={createQuiz}
                className="create-quiz"
            >
                Create Quiz
            </Button>
        )
    }
}