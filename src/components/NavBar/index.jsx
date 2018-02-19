import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {

    const styles = {
      navBar: {
        background: '#F8BBD0',
        padding: '1.2%'
      },
      navLink: {
        fontSize: '2.2em',
        margin: '0% 0% 0% 35%',
      }
    }

    return (
      <div className="container-fluid" style={styles.navBar}>
        <div className="navbar navbar-expand-lg navbar-light">
          <Link to="/">
            <img src="img/axe.svg" width="120" height="120" className="d-inline-block align-top" alt="home" />
          </Link>
          <div className="navbar-nav">
           <Link to="/history" className="nav-item nav-link" style={styles.navLink}>History</Link>
           <Link to="/overdue" className="nav-item nav-link" style={styles.navLink}>Overdue</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar