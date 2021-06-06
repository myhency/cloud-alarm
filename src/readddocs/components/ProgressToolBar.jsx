import React from 'react';
import {
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'darkblue',
    margin: '0px',
  },
}));

export default function ProgressToolBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton aria-label="delete">
        <CloseIcon style={{ color: 'white' }} />
      </IconButton>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        <RadioButtonCheckedIcon style={{ color: 'white' }} />
        <Typography style={{ color: 'white', marginLeft: '5px' }}>손절알림 재등록</Typography>
        <Box display="flex" alignItems="center">
          <div style={{
            height: '1px',
            width: '15px',
            backgroundColor: 'white',
            margin: '0 10px 0 10px',
          }}
          />
        </Box>
        <RadioButtonCheckedIcon style={{ color: 'white' }} />
        <Typography style={{ color: 'white', marginLeft: '5px' }}>검토 및 저장</Typography>
      </Box>
      <IconButton aria-label="delete">
        <DoneIcon style={{ color: 'white' }} />
      </IconButton>
    </div>
  );
}
