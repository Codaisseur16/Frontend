import React, {PureComponent, Component} from 'react'
import {connect} from 'react-redux'
import {getResponse} from '../actions/questions'

class GetScore extends Component {

    componentWillMount(props) {
        // this.props.getResponse(this.props.currentUser.id)
        this
            .props
            .getResponse(this.props.match.params.id)
    }

    render() {
        const score = this.props.GetResponse
        console.log("score", score)
        return (
            <div>

                <div>{score}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({GetResponse: state.GetResponse})

export default connect(mapStateToProps, {getResponse})(GetScore)