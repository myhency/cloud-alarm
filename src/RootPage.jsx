import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import InboxPage from './inbox/pages/InboxPage';
import AddDocumentPage from './newdocs/pages/AddDocumentPage';
import ReadyDocumentPage from './newdocs/pages/ReadyDocumentPage';
import ReviewDocumentPage from './newdocs/pages/ReviewDocumentPage';
import ModifyReadyDocumentPage from './modifydocs/pages/ModifyReadyDocumentPage';
import ModifyReviewDocumentPage from './modifydocs/pages/ModifyReviewDocumentPage';
import LoginPage from './login/pages/LoginPage';

// 라우팅, 인증 역할을 맡게 될 페이지
export default function RootPage() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/review-docs/:id" component={ModifyReviewDocumentPage} />
        <Route path="/review-docs">
          <ReviewDocumentPage />
        </Route>
        <Route path="/add-docs">
          <AddDocumentPage />
        </Route>
        <Route path="/ready-docs/:id" component={ModifyReadyDocumentPage} />
        <Route path="/ready-docs">
          <ReadyDocumentPage />
        </Route>
        <Route path="/inbox">
          <InboxPage />
        </Route>
      </Switch>
    </Router>
  );
}
