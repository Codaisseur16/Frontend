import React, {PureComponent} from 'react'
//import {connect} from 'react-redux'
import CreateQuizButton from '../containers/createQuizButton'
import QuizzesList from '../containers/quizzeslist'
import Paper from 'material-ui/Paper'
import './homepageTeacher.css'

class HomePageTeacher extends PureComponent {

    render() {
        return(
            <Paper className="outer-paper">
                <CreateQuizButton/>

                <QuizzesList/>
            </Paper>  
        )
    }
}

export default HomePageTeacher;