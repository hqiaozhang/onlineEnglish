import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd'
import { loadUserRequest } from '@/actions/userAction'
const { Column } = Table

// 引入样式文件
import './list.scss'

/**
 * @description 筛选state
 * @param {object} loggedUser 从reducer中筛选的对象
 * @return {object} state对象
 */
const mapStateToProps = ({ loggedUser }) => ({
    user: loggedUser.user
});

/**
 * @description 展示从github加载用户的组件
 * @export {listContainer}
 * @class listContainer
 * @extends {Component}
 */
@connect(mapStateToProps)
export default class listContainer extends Component {

  /**
   * @description 点击按钮，获取github对应的用户
   * @memberof listContainer
   */
  handleUser = () => {
    this.props.dispatch(loadUserRequest('baizn', 1))
  }

  /**
   * @description 渲染用户信息组件
   * @returns  {document} jsx片段，用户信息
   * @memberof listContainer
   */
  render() {
    return (
      <div className="list-layout">
        <Button
          type='primary'
          onClick={this.handleUser}
        >
          Reload
        </Button>
        <Table dataSource={this.props.user.result}>
          <Column title='ID' dataIndex='id' key='id' />
          <Column title='详情' dataIndex='detail' key='detail' />
        </Table>
      </div>
    )
  }
}
