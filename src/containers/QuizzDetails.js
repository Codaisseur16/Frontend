//src/containers/QuizzDetails.js
import React, {PureComponent} from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import './QuizzDetails.css'


class QuizzDetails extends PureComponent {

    render () {
        return (
            <Paper className="paper">
                <h1>Quizz # 1</h1> 
                {/* update with {quizz.id} */}
                <RaisedButton label="Add Question" className="add-question" primary={true}/>

            </Paper>

        )
    }


}

export default QuizzDetails