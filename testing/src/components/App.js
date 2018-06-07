import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { connect } from 'react-redux'
import * as actions from 'actions'

class App extends Component {

  renderButton = () => (
    <button onClick={() => this.props.changeAuth(!this.props.auth)}>
      {this.props.auth ? 'Sign Out' : 'Sign In'}
    </button>
  )

  renderHeader = () => (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/post'>Post A Comment</Link>
      </li>
      <li>
        {this.renderButton()}
      </li>
    </ul>
  )

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox}/>
        <Route exact path='/' component={CommentList}/>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps, actions)(App)