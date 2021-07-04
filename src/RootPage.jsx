import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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

const AuthedRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
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

          if (rest.path === '/') {
            return <Redirect to={{ pathname: '/inbox', state: { from: props.location } }} />;
          }
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
        <AuthedRoute exact path="/" component={() => (<Redirect to={{ pathname: '/inbox' }} />)} />
        <UnAuthedRoute path="/login" component={LoginPage} />
        <AuthedRoute path="/analyze/volume/:date" component={VolumeDetailPage} />
        <AuthedRoute path="/analyze/volume" component={VolumeListPage} />
        <AuthedRoute path="/review-docs/:id" component={ModifyReviewDocumentPage} />
        <AuthedRoute path="/review-docs" component={ReviewDocumentPage} />
        <AuthedRoute path="/add-docs" component={AddDocumentPage} />
        <AuthedRoute path="/ready-docs/:id" component={ModifyReadyDocumentPage} />
        <AuthedRoute path="/ready-docs" component={ReadyDocumentPage} />
        <AuthedRoute path="/readd-ready-docs/:id" component={ReaddReadyDocumentPage} />
        <AuthedRoute path="/review-readd-docs/:id" component={ReaddReviewDocumentPage} />
        <AuthedRoute exact path="/inbox" component={InboxPage} />
        <AuthedRoute exact path="/inbox/losscut" component={InboxLosscutPage} />
        <AuthedRoute exact path="/inbox/alarmed" component={InboxAlarmedPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
