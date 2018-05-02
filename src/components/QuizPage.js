import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions, updateScore} from '../actions/questions'

class QuizPage extends PureComponent {
    constructor(){
    super()
    this.state = {
        key:[],
        choice:[],
        answer:[]
    }
    this.handleChange = this
    .handleChange
    .bind(this)

    this.handleSubmit=this.handleSubmit.bind(this)
}

    componentWillMount() {
    this.props.fetchQuestions()
    }

    updateScore = () => {
        this.props.updateScore()
    }

    handleChange = (question, e) => {
        
        if(this.state.key.indexOf(question.id)>-1){
   

       const filteredkey = this
                .state
                .key
                .filter(eachkey=> eachkey !== question.id)
        
        const filteredchoice = this
                .state
                .choice
                .filter((eachchoice,index)=> 
                   
                    index!==question.id)

        const filteredanswer = this
                .state
                .answer
                .filter((eachanswer,index)=> index!==question.id)  
          
               
       this.setState({key:filteredkey,choice:filteredchoice, answer: filteredanswer})

       console.log(filteredkey,filteredchoice,filteredanswer)
    
        }
        
        this.setState({key:[...this.state.key,question.id],choice:[...this.state.choice,e.target.value], answer: [this.state.answer,question.answer]})
       
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.onSubmit(this.state)
       
        console.log('You have selected: ' + this.state.choice + '. The correct answer was: ' + this.state.answer);
        if (this.state.choice === this.state.answer) this.updateScore()
       console.log(this.state.key,this.state.choice,this.state.answer)
    }

    render() {
        const {questions} = this.props

        return (
          <div>
            <h1>Quiz #1</h1>
                { questions.map(question => (
                    <form key={question.id} onSubmit = {this.handleSubmit}>
                        <h3>{question.title}</h3>

                        <input  type="radio"  value= '1' name='quiz' onChange={(e) =>this.handleChange(question, e)}/>{question.option1}<br></br>

                        <input  type="radio"  value= '2' name='quiz' onChange={(e) =>this.handleChange(question, e)}/>{question.option2}<br></br>

                        <input  type="radio"  value= '3' name='quiz' onChange={(e) =>this.handleChange(question, e)}/>{question.option3}<br></br>

                        <input  type="radio"  value= '4' name='quiz' onChange={(e) =>this.handleChange(question, e)}/>{question.option4}<br></br>

                        <button type="submit">Submit</button>

                    </form> )
                )}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
      questions: state.questions,
      score: state.score
    })

    export default connect(mapStateToProps, {fetchQuestions, updateScore})(QuizPage)
