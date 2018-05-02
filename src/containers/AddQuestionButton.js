//src/containers/AddQuestionButton.js
import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
import Button from 'material-ui/Button'

class AddQuestionButton extends PureComponent {

// make a render question function with card content (see from Game List)


    render () {

        const {createQuestionCard} = this.props

        return (

                <Button 
                variant="raised"
                className="add-question"
                onClick={createQuestionCard}
                > Add Question </Button>
        )
    }
}

export default AddQuestionButton