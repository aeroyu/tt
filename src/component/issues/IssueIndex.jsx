import React from 'react';

import IssueFilter from './IssueFilter';
import IssueList from './IssueList';

const IssueIndex = React.createClass({
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
      <div>
        <h3>问题</h3>
        <IssueFilter/>
        <IssueList/>
      </div>
    );
  }
});

export default IssueIndex;
