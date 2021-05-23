import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuthed } from './hooks';

import InboxPage from './inbox/pages/InboxPage';
import AddDocumentPage from './newdocs/pages/AddDocumentPage';
import ReadyDocumentPage from './newdocs/pages/ReadyDocumentPage';
import ReviewDocumentPage from './newdocs/pages/ReviewDocumentPage';
import ModifyReadyDocumentPage from './modifydocs/pages/ModifyReadyDocumentPage';
import ModifyReviewDocumentPage from './modifydocs/pages/ModifyReviewDocumentPage';
import LoginPage from './login/pages/LoginPage';
// import { Component } from 'react';

const AuthedRoute = ({ component: Component, ...rest }) => {
  console.log('AuthedRoute');
  const isAuthed = useAuthed();
  return (
    <Route
      render={(props) => {
        if (isAuthed) {
          return <Component {...rest} {...props} />;
        }
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }}
    />
  );
};

const UnAuthedRoute = ({ component: Component, ...rest }) => {
  console.log('UnAuthedRoute');
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthed) {
          if (rest.path === '/login') {
            alert('이미 로그인이 되어 있습니다.');
            return <Redirect to={{ pathname: '/inbox', state: { from: props.location } }} />;
          }
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

// 라우팅, 인증 역할을 맡게 될 페이지
export default function RootPage() {
  return (
    <Router>
      <Switch>
        <UnAuthedRoute path="/login" component={LoginPage} />
        <AuthedRoute path="/review-docs/:id" component={ModifyReviewDocumentPage} />
        <AuthedRoute path="/review-docs" component={ReviewDocumentPage} />
        <AuthedRoute path="/add-docs" component={AddDocumentPage} />
        <AuthedRoute path="/ready-docs/:id" component={ModifyReadyDocumentPage} />
        <AuthedRoute path="/ready-docs" component={ReadyDocumentPage} />
        <AuthedRoute path="/inbox" component={InboxPage} />
      </Switch>
    </Router>
  );
}
