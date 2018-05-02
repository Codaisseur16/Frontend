//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import {addQuestion} from '../actions/QuizzDetails'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import { Radio, RadioGroup } from 'material-ui'
import './QuizzDetails.css'


class QuizzDetails extends PureComponent {

    render () {
        const {addQuestion} = this.props
        return (
            <Paper className="paper">
                <h1>Quizz # 1</h1> 
                {/* update with {quizz.id} */}
                <Button 
                variant="raised"
                className="add-question"
                onClick={addQuestion}
                > Add Question </Button>
            
            <Card className="quizz-card">
                <CardContent>
                    <TextField
                    hintText="Add your question here"
                    floatingLabelText="Question"
                    />
                    <RadioGroup>
                        <Radio/>
                        <Radio/>
                        <Radio/>
                        <Radio/>
                    </RadioGroup>
                    <CardActions>
                        <Button> Submit </Button>
                        <Button> Remove </Button>
                    </CardActions>
                </CardContent>
            </Card> 

            </Paper>

        )
    }


}

export default QuizzDetails