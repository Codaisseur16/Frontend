//src/containers/SendQuizz.js (+ webhook url)
import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
import Button from 'material-ui/Button'

class SendQuizz extends PureComponent {
    
    
    render () {
        return (
            <div>
                <input type="text" placeholder="Type your webhook URL"name="correctAnswer" className="input-field"/>
                <Button className="send-quizz-content"> Send </Button>
            </div>
        )

    }

}

export default SendQuizz