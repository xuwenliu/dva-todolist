import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Index/IndexPage';
import TodoList from './routes/TodoList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/todolist" component={TodoList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
