import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';

import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import {
  LoginBaseBox,
  LoginContentsBox,
  LoginContentsSmallBox,
  LogoImageBox,
} from '../../common/components/Boxes';
import { LoginButton } from '../../common/components/Buttons';
import LoginInput from '../components/Inputs';

import BreadStockLogoImage from '../../assets/images/bread-stock-logo.png';

import {
  getLoginToken,
  clearAccessToken,
} from '../../state/slice';

const useStyles = makeStyles(() => ({
  logo: {
    height: '30px',
  },
}));

export default function LoginPage() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 701px) and (max-width: 2048px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 280px) and (max-width: 700px)',
  });
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  const [password, setPassword] = React.useState('');
  const [alertOpen, setAlertOpen] = React.useState(false);

  function handleOnChangePassword(e) {
    const { value } = e.target;

    setPassword(value);
  }

  function handleLoginButtonOnClick() {
    dispatch(getLoginToken({
      userName: 'cloud',
      password,
    }));
  }

  function handleAlertClose() {
    setPassword('');
    setAlertOpen(false);
  }

  useEffect(() => {
    if (accessToken === 'FAIL') {
      setAlertOpen(true);
      return;
    }
    if (accessToken !== null) {
      history.push('/inbox');
      dispatch(clearAccessToken());
    }
  }, [accessToken]);

  return (
    <>
      {isDesktop && (
        <LoginBaseBox>
          <LoginContentsBox>
            <LogoImageBox>
              <img
                className={classes.logo}
                src={BreadStockLogoImage}
                alt="logo"
                style={{ width: '15vw', height: 'auto' }}
              />
            </LogoImageBox>
            <Typography
              variant="h4"
              align="center"
              style={{
                margin: '40px 0 0 0',
                color: '#e3e2df',
              }}
            >
              훈련소 알리미
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{
                marginBottom: '60px',
                color: '#e3e2df',
              }}
            >
              알리미 리스트로 이동
            </Typography>
            <LoginInput
              placeholder="패스워드를 입력하세요"
              type="password"
              style={{ margin: '0 20px 10px 20px' }}
              onChange={handleOnChangePassword}
              value={password}
            />
            <Box style={{ margin: '0 20px 40px 20px' }}>
              <LoginButton onClick={handleLoginButtonOnClick}>
                <Typography variant="h6">로그인</Typography>
              </LoginButton>
            </Box>
          </LoginContentsBox>
          <Dialog
            open={alertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              로그인에 실패하였습니다.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                패스워드를 정확하게 입력하였는지 확인해 주세요.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertClose} color="secondary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </LoginBaseBox>
      )}
      {isMobile && (
        <LoginBaseBox>
          <LoginContentsSmallBox>
            <LogoImageBox>
              <img
                className={classes.logo}
                src={BreadStockLogoImage}
                alt="logo"
                style={{ width: '60vw', height: 'auto' }}
              />
            </LogoImageBox>
            <Typography
              variant="h4"
              align="center"
              style={{
                margin: '40px 0 0 0',
                color: '#e3e2df',
              }}
            >
              훈련소 알리미
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{
                marginBottom: '60px',
                color: '#e3e2df',
              }}
            >
              알리미 리스트로 이동
            </Typography>
            <LoginInput
              placeholder="패스워드를 입력하세요"
              type="password"
              style={{ margin: '0 20px 10px 20px' }}
              onChange={handleOnChangePassword}
              value={password}
            />
            <Box style={{ margin: '0 20px 40px 20px' }}>
              <LoginButton onClick={handleLoginButtonOnClick}>
                <Typography variant="h6">로그인</Typography>
              </LoginButton>
            </Box>
          </LoginContentsSmallBox>
          <Dialog
            open={alertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              로그인에 실패하였습니다.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                패스워드를 정확하게 입력하였는지 확인해 주세요.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAlertClose} color="secondary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </LoginBaseBox>
      )}
    </>
  );
}
