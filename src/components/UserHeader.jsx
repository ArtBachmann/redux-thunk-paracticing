import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }
  render() {
    // ------- Legacy code, but explains some core concepts.--------
    // userId comes as props from PostList component => userId={post.userId}
    // user.id comes from Action Creator => .get(`/users/${id}`)
    //const user = this.props.users.find(user => user.id === this.props.userId)

    const { user } = this.props // pulls out just user from props sent by parents.

    if (!user) {
      return null
    }

    return <div className="header">{user.name}</div>     
  }      
}

// ownProps is a reference to properties sent to UserHeader component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)
