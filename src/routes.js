import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Admin from './components/admin/admin';
import AdminDashboard from './components/admin/dashboard'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
    <Route path="/admin" component={Admin}>
  		<IndexRoute component={AdminDashboard} />
  	</Route>
  </Route>

  
);
