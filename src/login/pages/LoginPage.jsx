import React from 'react';
import {
  useHistory,
} from 'react-router-dom';
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
} from '@material-ui/core';

import { indigo } from '@material-ui/core/colors';

import HMGLogoImage from '../../assets/images/bread-stock-logo.png';

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

  function handleLoginButtonOnClick(event) {
    event.preventDefault();
    history.push('/inbox');
  }

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
          alignItems="center"
          justifyContent="center"
          style={{ margin: '0 0 20px 0' }}
        >
          <img className={classes.logo} src={HMGLogoImage} alt="logo" />
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
          전자 서명 시스템으로 이동
        </Typography>
        <LoginInput
          placeholder="아이디를 입력하세요"
          style={{ margin: '10px 0 10px 0' }}
        />
        <LoginInput
          placeholder="패스워드를 입력하세요"
          type="password"
          style={{ margin: '0 0 10px 0' }}
        />
        <Box>
          <LoginButton
            onClick={handleLoginButtonOnClick}
          >
            <Typography
              variant="h6"
            >
              로그인
            </Typography>
          </LoginButton>
        </Box>
      </Box>
    </Box>
  );
}
