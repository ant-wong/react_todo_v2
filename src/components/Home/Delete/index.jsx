import React, { Component } from 'react'

class Delete extends Component {
  render() {

    const styles = {
      deleteMe: {
        background: '#F8BBD0',
        margin: '5% 0%',
        width: '70%',
        marginLeft: '15%'
      }
    }

    return (
      <div className="container">
        <button type="button" 
                className="btn btn-default btn-lg btn-block"
                onClick={this.props.deleteDone}
                style={styles.deleteMe}
                >All done!</button>
      </div>
    )
  }
}

export default Delete