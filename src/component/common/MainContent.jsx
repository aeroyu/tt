import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Icon } from 'antd';

import IssueIndex from '../issues/IssueIndex';

const MainContent = React.createClass({
  //getInitialState() {
  //  return {
  //    current: '1'
  //  };
  //},
  //handleClick(e) {
  //  console.log('click ', e);
  //  this.setState({
  //    current: e.key
  //  });
  //},
  render() {
    return (
      <div className="ant-layout-main">
        <div className="ant-layout-header"></div>
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div style={{ height: 590 }}>
              <IssueIndex/>
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
    );
  }
});

export default MainContent;
