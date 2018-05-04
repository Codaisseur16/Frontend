import React, {PureComponent, Component} from 'react'
import {connect} from 'react-redux'
import {getResponse} from '../actions/questions'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  

class GetScore extends Component{

componentWillMount(props) {
    this.props.getResponse(this.props.currentUser.userId)
}

handleResponse=(e)=>{
    e.preventDefault()
    this.props.getResponse(this.props.currentUser.userId)
}

render() {
   
    let scores = this.props.GetResponse
    let score = '{"id":6,"user_id":3,"teacher":true,"quiz_id":1,"answers":null,"score":0}'
   // score = score.slice(1,-1)
    //const score_array  = score.split(",")
   // const json_response =  JSON.parse(JSON.stringify({score}))
//    let arrayofscores=score.split(",")
    // console.log("score", arrayofscores)
    score=JSON.parse(score)
    return (
        <div>
           <Table style={{
            width:'50%' }} >
             <TableHead>
               <TableRow>
                 <TableCell style={{width:'10px'}}>User ID</TableCell>
                 <TableCell style={{width:'10px'}}>Quiz ID</TableCell>
                 <TableCell style={{width:'10px'}}>Score</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
                   <TableRow key={score['id']}>
                     <TableCell style={{width:'10px'}}>{score['user_id']}</TableCell>
                     <TableCell style={{width:'10px'}}>{score['quiz_id']}</TableCell>
                     <TableCell style={{width:'10px'}}>{score['score']}</TableCell>
                   </TableRow>
             </TableBody>
           </Table>
           <br/>
           <Link to='/quizzes'><Button variant="raised" color="primary" >
         TAKE ANOTHER QUIZ
      </Button></Link>
        </div>
     )
   }
}

const mapStateToProps = (state) => ({
    GetResponse:state.GetResponse,
    currentUser:state.currentUser,
    
  })


export default connect(mapStateToProps, {getResponse})(GetScore)