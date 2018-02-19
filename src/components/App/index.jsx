import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home'
import History from '../History'
import Overdue from '../Overdue'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { task: "Eat stuff", done: false, id: 0 },
        { task: "Sleep at 5pm", done: false, id: 1 },
        { task: "Go out dancing", done: false, id: 2 }
      ],
      input: "",
      idCounter: 3
    }
  }

  // FUNCTIONS

  // INPUT FORM
  textHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // SUBMIT TASK
  addTask = (value) => {
    let newTodo = {
      task: value,
      done: false,
      id: this.state.idCounter
    }
    this.setState({
      todos: this.state.todos.concat(newTodo),
      idCounter: this.state.idCounter + 1
    })
  }

  
  // TOGGLE CHECKBOX
  toggleCheck = (i) => {
    this.state.todos[i].done = !this.state.todos[i].done
    this.setState({
      todos: this.state.todos
    })
  }
  
  // DELETE TODOS
  deleteDone = () => {
    console.log('test')
    let notDone = this.state.todos.filter((task) => {
      return !task.done
    })
    this.setState({
      todos: notDone
    })
  }
  
  // PREVENT
  prevent = (e) => {
    e.preventDefault()
    this.setState({
      input: ""
    })
  }

  render() {

    const styles = {
      app: {
        textAlign: 'center',
        fontFamily: "'Cardo', serif"
      }
    }

    return (
      <div className="App" style={styles.app}>
        
        <Switch>
          <Route exact path="/" render={() => {
            return <Home todos={this.state.todos}
                         input={this.state.input}
                         textHandler={this.textHandler}
                         addTask={this.addTask}
                         toggleCheck={this.toggleCheck}
                         deleteDone={this.deleteDone}
                         prevent={this.prevent} />
          }} />
          <Route path="/history" render={() => {
            return <History todos={this.state.todos} />
          }} />
          <Route path="/overdue" render={() => {
            return <Overdue todos={this.state.todos} />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App
