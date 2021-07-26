import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';

import { useAuthed } from './hooks';

import InboxPage from './inbox/pages/InboxPage';
import InboxLosscutPage from './inbox-losscut/pages/InboxLosscutPage';
import InboxAlarmedPage from './inbox-alarmed/pages/InboxAlarmedPage';
import AddDocumentPage from './newdocs/pages/AddDocumentPage';
import ReadyDocumentPage from './newdocs/pages/ReadyDocumentPage';
import ReviewDocumentPage from './newdocs/pages/ReviewDocumentPage';
import ModifyReadyDocumentPage from './modifydocs/pages/ModifyReadyDocumentPage';
import ModifyReviewDocumentPage from './modifydocs/pages/ModifyReviewDocumentPage';
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

// const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 });
//   return isDesktop ? children : (<MobileLoginPage />);
// };

// const Mobile = ({ chilren }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   return isMobile ? chilren : (<MobileLoginPage />);
// };

// const LoginComponent = () => (
//   <>
//     <Desktop>
//       <LoginPage />
//     </Desktop>
//     <Mobile>
//       <MobileLoginPage />
//     </Mobile>
//   </>
// );

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
        <AllAuthedRoute exact path="/" component={() => (<Redirect to={{ pathname: '/inbox' }} />)} />
        <UnAuthedRoute path="/login" component={LoginPage} />
        <AllAuthedRoute path="/analyze/volume/:date" component={VolumeDetailPage} />
        <AllAuthedRoute path="/analyze/volume" component={VolumeListPage} />
        <AdminAuthedRoute path="/review-docs/:id" component={ModifyReviewDocumentPage} />
        <AdminAuthedRoute path="/review-docs" component={ReviewDocumentPage} />
        <AdminAuthedRoute path="/add-docs" component={AddDocumentPage} />
        <AdminAuthedRoute path="/ready-docs/:id" component={ModifyReadyDocumentPage} />
        <AdminAuthedRoute path="/ready-docs" component={ReadyDocumentPage} />
        <AdminAuthedRoute path="/readd-ready-docs/:id" component={ReaddReadyDocumentPage} />
        <AdminAuthedRoute path="/review-readd-docs/:id" component={ReaddReviewDocumentPage} />
        <AllAuthedRoute exact path="/inbox" component={InboxPage} />
        <AllAuthedRoute exact path="/inbox/losscut" component={InboxLosscutPage} />
        <AllAuthedRoute exact path="/inbox/alarmed" component={InboxAlarmedPage} />
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
