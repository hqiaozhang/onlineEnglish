import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { logout } from '@/actions/loginAction'

@connect(null)
class AppHomeContainer extends Component {
  logout = () => {
    const { dispatch } = this.props
    dispatch(logout())
  }

  render() {
    return (
      <div>
        App Home Page
        <br /><br />
        <Button type='danger' onClick={ this.logout }>Logout</Button>
      </div>
    )
  }
}

export default AppHomeContainer
