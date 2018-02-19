import React, { Component } from 'react'

import NavBar from '../NavBar'
import Input from './Input'
import TaskList from './TaskList'
import Delete from './Delete'

class Home extends Component {
  render() {

    const styles = {
      welcomeText: {
        margin: '5% 0%'
      }
    }

    return (
      <div>
        <NavBar />
          <h1 style={styles.welcomeText}>WELCOME TO YOUR TASK MANAGER <small>Let's get things done</small></h1>
          <hr/>
        <Input textHandler={this.props.textHandler} 
               addTask={this.props.addTask} 
               input={this.props.input}
               prevent={this.props.prevent}/>
        <TaskList todos={this.props.todos}
                  toggleCheck={this.props.toggleCheck}/>
        <Delete deleteDone={this.props.deleteDone}/>
      </div>
    )
  }
}

export default Home