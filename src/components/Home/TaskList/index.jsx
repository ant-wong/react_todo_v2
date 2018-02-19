import React, { Component } from 'react'
import Task from '../Task'

class TaskList extends Component {
  render() {
    console.log(this.props.todos)
    let tasksJSX = this.props.todos.map((task, i) => {
      return <Task task={task.task} 
                   done={task.done}
                   index={i}
                   toggleCheck={this.props.toggleCheck}
                   key={i} />
    })

    return (
      <div className="container">
        {tasksJSX}
      </div>
    )
  }
}

export default TaskList