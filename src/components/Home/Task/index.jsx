import React, { Component } from 'react'

class Task extends Component {
  render() {

    const styles = {
      items: {
        fontSize: '2em',
        marginLeft: '5%'
      },
      checkbox: {
        width: 25,
        height: 25,
        position: 'relative',
        top: 10
      },
      text: {
        marginLeft: '5%'
      }
    }

    return (
      <div className="row" style={styles.items}>
        <input type="checkbox"
               checked={this.props.done}
               onChange={() => {this.props.toggleCheck(this.props.index)}}
               style={styles.checkbox}/>
        <div style={styles.text}>
          {this.props.task}
        </div>
      </div>
    )
  }
}

export default Task