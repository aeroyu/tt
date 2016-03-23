import React from 'react';
import $ from 'jquery';
import { Spin,Table } from 'antd';
const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '标题',
  dataIndex: 'subject',
  key: 'subject',
}];
const pagination = {
  total: 0,
  current: 1,
  showSizeChanger: true,
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    this.getIssues(current)
  }
}
var getIssues = function () {

}
const IssueList = React.createClass({
  pagination (current, total, pageSize) {
    var _self = this
    return {
      total: total,
      current: current,
      showSizeChanger: true,
      pageSize: pageSize,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        _self.getIssues(current)
      }
    }
  },
  getInitialState() {
    return {
      loading: true,
      query: null,
      data: null,
      currentPage: 1,
      totalCount: 1,
      pageSize: 1
    };
  },
  getIssues(page){
    var _self = this,
      page = page || 1
    $.ajax({
      url: 'http://127.0.0.1:3000/projects/redmine-system-builder/issues.json',
      data: {
        key: 'amHpXaTWBmQlm1Mk1Cw3xFfRWYgfyJRdLhObrJSjflzL9vVRDHHLk14wWFtYsrsU0vrHHFcseudzx_B_mQLUMg',
        page: page
      }
    }).done(function (response) {
      console.log(response.issues)
      _self.setState({
        data: response.issues,
        loading: false,
        totalCount: response.total_count,
        currentPage: page,
        pageSize: response.limit
      })
    }).fail(function () {
      console.log('!!!')
    })
  },
  componentDidMount() {
    this.getIssues()
  },
  render() {
    return <Table dataSource={this.state.data} columns={columns} rowKey={record => record.id}
                  loading={this.state.loading}
                  pagination={this.pagination(this.state.currentPage,this.state.totalCount,this.state.pageSize)}
                  size="small" useFixedHeader/>
  }
});

export default IssueList;
