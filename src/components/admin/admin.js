import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 'dashboard'
    }
  }
  componentWillMount() {
  }

  isActive(menuItem) {
    console.log(menuItem, this.state.selected)
    return (menuItem === this.state.selected) ? 'active': '';
  }

  setSelected(menuItem) {
    this.setState({selected: menuItem})
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
              <li className={this.isActive('dashboard')}><a href="#">Dashboard <span className="sr-only">(current)</span></a></li>
              <li className={this.isActive('products')} onClick={this.setSelected.bind(this,'products')} ><Link to="/admin/products" >Products</Link></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Transactions</a></li>
            </ul>
          </div>
          <div className="col-sm-9  col-md-10 main">

            <h2 className="sub-header">Section title</h2>
              {this.props.children}
          </div>
        </div>
      </div>
    </div>

    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { })(Admin);
