import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getResponse} from '../actions/questions'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
//import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom'

// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         overflowX: 'auto',
//       },
//       table: {
//         minWidth: 700,
//       },
//     button: {
//       margin: theme.spacing.unit,
//     },
//     input: {
//       display: 'none',
//     },
//   });
  
  
class GetScore extends Component{

componentWillMount(props) {
    this.props.getResponse(this.props.currentUser.userId)
}

handleResponse=(e)=>{
    e.preventDefault()
    this.props.getResponse(this.props.currentUser.userId)
}

async getJson(json){
    await json
    console.log('json received')
}

render() {
   
    console.log(this.props)
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
                   <TableRow key={1}>
                   {console.log(typeof this.props.GetResponse)}
                     <TableCell style={{width:'10px'}}>{this.props.GetResponse.user_id}</TableCell>
                     <TableCell style={{width:'10px'}}>{this.props.GetResponse.quiz_id}</TableCell>
                     <TableCell style={{width:'10px'}}>{this.props.GetResponse.score}</TableCell>
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