/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 渲染D3绘制的图表组件
 * @Date: 2018-03-07 14:56:52 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-04-08 14:15:08
  */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { loadProductRequest } from '@/actions/productAction'
import FauxChart from './chart'
import './index.scss'

const mapStateToProps = ({ product }) => {
  debugger
  return {
    result: product.result
  }
}

@connect(mapStateToProps)
class ProductSubLayout extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    this.props.dispatch(loadProductRequest())
  }

  changeData = () => {
    this.props.dispatch(loadProductRequest())
  }
  
  render() {
    return (
      <div className="product-sub-layout">
        <Button type='primary' onClick={this.changeData}>更新数据</Button>
        <FauxChart data={this.props.result} />
      </div>
    )
  }
}
export default ProductSubLayout
