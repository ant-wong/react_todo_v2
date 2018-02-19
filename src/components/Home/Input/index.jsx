import React, { Component } from 'react'

class Input extends Component {
  render() {
    const styles = {
      inputForm: {
        margin: '5%',
      },
      form: {
        padding: '1.5% 1%'
      },
      addButton: {
        background: '#F8BBD0'
      }
    }

    return (
      <div className="container">
        <form action="" style={styles.inputForm} onSubmit={this.props.prevent}>
          <div className="input-group">
            <input type="text" 
                   value={this.props.input}
                   className="form-control" 
                   placeholder="ADD SOME THINGS TO DO"
                   style={styles.form}
                   onChange={(event) => {this.props.textHandler(event)}}/>
            <div className="input-group-append">
              <button type="submit" 
                      className="btn btn-default" 
                      style={styles.addButton}
                      onClick={() => {this.props.addTask(this.props.input)}}
                      >ADD IT</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Input