import React from 'react';
import {
  makeStyles,
} from '@material-ui/core/styles';
import {
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px',
  },
  stepTitle: {
    '& > *': {
      margin: theme.spacing(0),
    },
    color: theme.palette.text.secondary,
    display: 'flex',
    alignContent: 'space-between',
    alignItems: 'center',
  },
}));

/**
 * step title 에서 가장 우측에 뭔가를 놓고 싶다면 children 으로 전달받는다
 */
export default function StepTitle({
  step,
  title,
  children,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.stepTitle}>
        <IconButton>
          <DirectionsRunIcon />
        </IconButton>
        <Typography>{step}</Typography>
        <Typography variant="h6" gutterBottom style={{ marginLeft: '15px' }}>
          {title}
        </Typography>
      </Box>
      <Box
        display="inline-flex"
        alignItems="center"
        ml="auto"
      >
        {children}
      </Box>
    </div>
  );
}
