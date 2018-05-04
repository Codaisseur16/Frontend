import React, {PureComponent, Component} from 'react'
import {connect} from 'react-redux'
import {getResponse} from '../actions/questions'

class GetScore extends Component{



componentWillMount(props) {
    this.props.getResponse(this.props.currentUser.userId)
    
}

handleResponse=(e)=>{
    e.preventDefault()
    this.props.getResponse(this.props.currentUser.userId)
   
}


render() {
    const score = this.props.GetResponse
    console.log("score",score)
    return (
      <div>
           
            <button type="submit" onClick={this.handleResponse}>Get Score</button>
           <div>{score}</div>
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    GetResponse:state.GetResponse,
    currentUser:state.currentUser
  })


export default connect(mapStateToProps, {getResponse})(GetScore)