import React, { Component } from 'react';
//import { DatePicker } from 'antd';
import './App.less';
import LeftSideMenu from './common/LeftSideMenu';
import MainContent from './common/MainContent';

class App extends Component {
  render() {
    return (
      <div className="ant-layout-aside">
        <LeftSideMenu/>
        <MainContent/>
      </div>
    )
  }
}

export default App;

