import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AdminDashboard extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        Test
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { })(AdminDashboard);
