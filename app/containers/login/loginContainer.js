/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 登录测试页面
 * @Date: 2018-03-07 14:43:06 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-03-13 14:45:57
  */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { loginRequest } from '@/actions/loginAction'

@connect(null)
class LoginContainer extends Component {
  /**
   * @description 点击登录按钮，触发action
   * @memberof LoginPage
   */
  login = () => {
    const { dispatch } = this.props
    dispatch(loginRequest())
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <p>
        For this example application, we cannot visit <Link to='/app'>/app</Link> until we are logged in.
        Clicking the "Login" button will simulate a login by setting Redux state. This example compliments
        the CSS-Tricks article I wrote for <a target='_blank' href='https://css-tricks.com/react-router-4/'>React Router 4</a>.
        </p>
        <Button type='primary' onClick={ this.login }>Login</Button>
      </div>
    )
  }
}

export default LoginContainer
