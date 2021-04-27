import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import DashboardPage from './dashboard/pages/DashboardPage';
import SamplePage from './sample/pages/SamplePage';
import ButtonSampleContainer from './sample/containers/ButtonSampleContainer';
import ContactsPage from './contacts/pages/ContactsPage';
import InboxPage from './inbox/pages/InboxPage';
import NewDocumentPage from './newdocs/pages/NewDocumentPage';
import AddDocumentPage from './newdocs/pages/AddDocumentPage';
import ReadyDocumentPage from './newdocs/pages/ReadyDocumentPage';
import ReviewDocumentPage from './newdocs/pages/ReviewDocumentPage';
import LoginPage from './login/pages/LoginPage';

// 라우팅, 인증 역할을 맡게 될 페이지
export default function RootPage({ localeText }) {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/review-docs">
          <ReviewDocumentPage />
        </Route>
        <Route path="/add-docs">
          <AddDocumentPage />
        </Route>
        <Route path="/ready-docs">
          <ReadyDocumentPage />
        </Route>
        <Route path="/newdocs">
          <NewDocumentPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/inbox">
          <InboxPage />
        </Route>
        <Route path="/sample/buttons">
          <ButtonSampleContainer />
        </Route>
        <Route path="/sample">
          <SamplePage />
        </Route>
        <Route path="/">
          <DashboardPage localeText={localeText} />
        </Route>
      </Switch>
    </Router>
  );
}
