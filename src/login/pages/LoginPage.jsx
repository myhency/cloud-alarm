import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  withStyles,
  fade,
} from '@material-ui/core/styles';

import {
  Box,
  Typography,
  InputBase,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import { indigo } from '@material-ui/core/colors';

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

const LoginInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: 'white',
    border: '1px solid darkgrey',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: 'darkgrey',
      backgroundColor: 'white',
    },
  },
}))(InputBase);

const LoginButton = withStyles((theme) => ({
  root: {
    width: '100%',
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

export default function LoginPage() {
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: '#1D519A', height: '100vh' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        style={{
          width: '25vw',
          // height: '40vh',
          borderRadius: '10px',
          backgroundColor: 'white',
          padding: '50px 20px 50px 20px',
        }}
      >
        <Box
          display="flex"
          // alignItems="center"
          justifyContent="center"
        >
          <img className={classes.logo} src={BreadStockLogoImage} alt="logo" style={{ width: '15vw', height: 'auto'}} />
        </Box>
        <Typography
          variant="h4"
          align="center"
          style={{ margin: '40px 0 0 0' }}
        >
          로그인
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ marginBottom: '60px' }}
        >
          알리미 리스트로 이동
        </Typography>
        {/* <LoginInput
          placeholder="아이디를 입력하세요"
          style={{ margin: '10px 0 10px 0' }}
        /> */}
        <LoginInput
          placeholder="패스워드를 입력하세요"
          type="password"
          style={{ margin: '0 0 10px 0' }}
          onChange={handleOnChangePassword}
          value={password}
        />
        <Box>
          <LoginButton onClick={handleLoginButtonOnClick}>
            <Typography variant="h6">로그인</Typography>
          </LoginButton>
        </Box>
      </Box>
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
    </Box>
  );
}
