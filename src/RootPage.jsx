/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { useAuthed } from './hooks';

import LoginPage from './services/login/pages/LoginPage';
import AlarmServiceHome from './services/alarm/pages/AlarmServiceHome';
import AddNewAlarm from './services/alarm/pages/AddNewAlarm';
import AddReadyAlarm from './services/alarm/pages/AddReadyAlarm';
import AddReviewAlarm from './services/alarm/pages/AddReviewAlarm';
import UpdateReadyAlarm from './services/alarm/pages/UpdateReadyAlarm';
import UpdateReviewAlarm from './services/alarm/pages/UpdateReviewAlarm';
import ReaddReadyAlarm from './services/alarm/pages/ReaddReadyAlarm';
import ReaddReviewAlarm from './services/alarm/pages/ReaddReviewAlarm';
import VolumeListPage from './services/analyze-volume/pages/VolumeListPage';
import VolumeDetailPage from './services/analyze-volume/pages/VolumeDetailPage';
import SevenBreadMainPage from './services/sevenbread/pages/SevenBreadMainPage';
import SevenBreadRealTimePage from './services/sevenbread/pages/SevenBreadRealTimePage';
import AddSevenBreadItemPage from './services/sevenbread/pages/AddSevenBreadItemPage';
import ReadySevenBreadItemPage from './services/sevenbread/pages/ReadySevenBreadItemPage';
import ReviewSevenBreadItemPage from './services/sevenbread/pages/ReviewSevenBreadItemPage';
import BreadPage from './services/bread-shuttle/pages/BreadPage';
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
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
          }

          if (rest.path === '/') {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
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
        <UnAuthedRoute path="/login" component={LoginPage} />
        <AllAuthedRoute exact path="/" component={() => (<Redirect to={{ pathname: '/service/bread-shuttle' }} />)} />
        <AllAuthedRoute exact path="/service/alarm" component={AlarmServiceHome} />
        <AdminAuthedRoute exact path="/service/alarm/new/add" component={AddNewAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/new/ready" component={AddReadyAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/new/review" component={AddReviewAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/update/ready/:id" component={UpdateReadyAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/update/review/:id" component={UpdateReviewAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/readd/ready/:id" component={ReaddReadyAlarm} />
        <AdminAuthedRoute exact path="/service/alarm/readd/review/:id" component={ReaddReviewAlarm} />
        <AllAuthedRoute path="/service/analyze/volume/:date" component={VolumeDetailPage} />
        <AllAuthedRoute path="/service/analyze/volume" component={VolumeListPage} />
        <AllAuthedRoute exact path="/service/seven-bread" component={SevenBreadMainPage} />
        <AllAuthedRoute exact path="/service/seven-bread/realtime" component={SevenBreadRealTimePage} />
        <AdminAuthedRoute exact path="/service/seven-bread/item/add" component={AddSevenBreadItemPage} />
        <AdminAuthedRoute exact path="/service/seven-bread/item/ready" component={ReadySevenBreadItemPage} />
        <AdminAuthedRoute exact path="/service/seven-bread/item/review" component={ReviewSevenBreadItemPage} />
        <AllAuthedRoute exact path="/service/bread-shuttle" component={BreadPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
