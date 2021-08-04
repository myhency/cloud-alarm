import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { useAuthed } from './hooks';

import AlarmServiceHome from './services/alarm/pages/AlarmServiceHome';
import AddNewAlarm from './services/alarm/pages/AddNewAlarm';
import AddReadyAlarm from './services/alarm/pages/AddReadyAlarm';
import AddReviewAlarm from './services/alarm/pages/AddReviewAlarm';
import UpdateReadyAlarm from './services/alarm/pages/UpdateReadyAlarm';
import UpdateReviewAlarm from './services/alarm/pages/UpdateReviewAlarm';
import ReaddReadyDocumentPage from './readddocs/pages/ReaddReadyDocumentPage';
import ReaddReviewDocumentPage from './readddocs/pages/ReaddReviewDocumentPage';
import VolumeListPage from './analyze-volume/pages/VolumeListPage';
import VolumeDetailPage from './analyze-volume/pages/VolumeDetailPage';
import SevenBreadMainPage from './seven-bread/pages/SevenBreadMainPage';
import AddSevenBreadItemPage from './seven-bread/pages/AddSevenBreadItemPage';
import ReadySevenBreadItemPage from './seven-bread/pages/ReadySevenBreadItemPage';
import ReviewSevenBreadItemPage from './seven-bread/pages/ReviewSevenBreadItemPage';
import BreadPage from './bread/pages/BreadPage';
import LoginPage from './login/pages/LoginPage';
import NotFoundPage from './NotFoundPage';

const AllAuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthed.authed) {
          return <Component {...rest} {...props} />;
        }
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }}
    />
  );
};

const UnAuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthed.authed) {
          if (rest.path === '/login') {
            alert('이미 로그인이 되어 있습니다.');
            return <Redirect to={{ pathname: '/inbox', state: { from: props.location } }} />;
          }

          if (rest.path === '/') {
            return <Redirect to={{ pathname: '/inbox', state: { from: props.location } }} />;
          }
        }
        return <Component {...props} />;
      }}
    />
  );
};

const AdminAuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthed.authed && isAuthed.role === 'ROLE_ADMIN') {
          if (rest.path === '/login') {
            return <Component {...rest} {...props} />;
          }

          if (rest.path === '/') {
            return <Redirect to={{ pathname: '/inbox', state: { from: props.location } }} />;
          }
        } else {
          alert('관리자만 접근할 수 있습니다.');
          return history.goBack();
        }
        return <Component {...props} />;
      }}
    />
  );
};

// 라우팅, 인증 역할을 맡게 될 페이지
export default function RootPage() {
  return (
    <Router>
      <Switch>
        <AllAuthedRoute exact path="/" component={() => (<Redirect to={{ pathname: '/bread/shuttle/home' }} />)} />
        <AllAuthedRoute exact path="/service/alarm" component={AlarmServiceHome} />
        <AdminAuthedRoute exact path="/service/alarm/new/add" component={AddNewAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/new/ready" component={AddReadyAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/new/review" component={AddReviewAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/update/ready/:id" component={UpdateReadyAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/update/review/:id" component={UpdateReviewAlarm} />
        <UnAuthedRoute path="/login" component={LoginPage} />
        <AllAuthedRoute path="/analyze/volume/:date" component={VolumeDetailPage} />
        <AllAuthedRoute path="/analyze/volume" component={VolumeListPage} />
        <AdminAuthedRoute path="/readd-ready-docs/:id" component={ReaddReadyDocumentPage} />
        <AdminAuthedRoute path="/review-readd-docs/:id" component={ReaddReviewDocumentPage} />
        <AllAuthedRoute exact path="/seven-bread/main" component={SevenBreadMainPage} />
        <AllAuthedRoute exact path="/bread/shuttle/home" component={BreadPage} />
        <AdminAuthedRoute exact path="/seven-bread/item/add" component={AddSevenBreadItemPage} />
        <AdminAuthedRoute exact path="/seven-bread/item/ready" component={ReadySevenBreadItemPage} />
        <AdminAuthedRoute exact path="/seven-bread/item/review" component={ReviewSevenBreadItemPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
