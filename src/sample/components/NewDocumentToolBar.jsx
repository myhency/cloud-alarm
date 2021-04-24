import React from 'react';
import {
  Box,
  Button,
} from '@material-ui/core';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import { pink, indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    padding: theme.spacing(3, 2, 3, 2),
  },
}));

const ExitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[400],
    '&:hover': {
      backgroundColor: pink[900],
    },
  },
}))(Button);

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

export default function NewDocumentToolBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <ExitButton
          variant="contained"
          color="primary"
          className={classes.exitButton}
        >
          나가기
        </ExitButton>
      </Box>
      <Box
        display="inline-flex"
        alignItems="center"
        ml="auto"
      >
        <NextButton
          variant="contained"
          color="primary"
          className={classes.nextButton}
        >
          다음
        </NextButton>
      </Box>
    </div>
  );
}
