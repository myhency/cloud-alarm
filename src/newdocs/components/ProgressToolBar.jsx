import React from 'react';
import {
  Box,
  Button,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import { pink, indigo } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
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
        <Typography style={{ color: 'white', marginLeft: '5px' }}>종목추가</Typography>
        <Box display="flex" alignItems="center">
          <div style={{
            height: '1px',
            width: '15px',
            backgroundColor: 'white',
            margin: '0 10px 0 10px',
          }}
          />
        </Box>
        {/* <RadioButtonCheckedIcon style={{ color: 'white' }} />
        <Typography style={{ color: 'white', marginLeft: '5px' }}>선택</Typography>
        <Box display="flex" alignItems="center">
          <div style={{
            height: '1px',
            width: '15px',
            backgroundColor: 'white',
            margin: '0 10px 0 10px',
          }}
          />
        </Box> */}
        <RadioButtonCheckedIcon style={{ color: 'white' }} />
        <Typography style={{ color: 'white', marginLeft: '5px' }}>정보입력</Typography>
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
