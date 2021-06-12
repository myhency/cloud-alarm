import React from 'react';
import { useMediaQuery } from 'react-responsive';
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
    backgroundColor: '#f4976c',
    margin: '0px',
  },
}));

export default function ProgressToolBar() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 701px) and (max-width: 2048px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 280px) and (max-width: 700px)',
  });

  const classes = useStyles();

  return (
    <>
      {isDesktop && (
        <div className={classes.root}>
          <IconButton aria-label="delete">
            <CloseIcon style={{ color: '#D2FDFF' }} />
          </IconButton>
          <Box display="flex" flexDirection="row" p={1} m={1}>
            <RadioButtonCheckedIcon style={{ color: '#D2FDFF' }} />
            <Typography style={{ color: '#D2FDFF', marginLeft: '5px' }}>종목추가</Typography>
            <Box display="flex" alignItems="center">
              <div style={{
                height: '1px',
                width: '15px',
                backgroundColor: '#D2FDFF',
                margin: '0 10px 0 10px',
              }}
              />
            </Box>
            <RadioButtonCheckedIcon style={{ color: '#D2FDFF' }} />
            <Typography style={{ color: '#D2FDFF', marginLeft: '5px' }}>정보입력</Typography>
            <Box display="flex" alignItems="center">
              <div style={{
                height: '1px',
                width: '15px',
                backgroundColor: '#D2FDFF',
                margin: '0 10px 0 10px',
              }}
              />
            </Box>
            <RadioButtonCheckedIcon style={{ color: '#D2FDFF' }} />
            <Typography style={{ color: '#D2FDFF', marginLeft: '5px' }}>검토 및 저장</Typography>
          </Box>
          <IconButton aria-label="delete">
            <DoneIcon style={{ color: '#D2FDFF' }} />
          </IconButton>
        </div>
      )}
      {isMobile && (
        <div className={classes.root}>
          {/* <IconButton aria-label="delete">
            <CloseIcon style={{ color: '#D2FDFF' }} />
          </IconButton> */}
          <Box display="flex" flexDirection="row" flexGrow="1" justifyContent="center" p={1} m={1}>
            <RadioButtonCheckedIcon fontSize="small" style={{ color: '#D2FDFF' }} />
            <Typography style={{ color: '#D2FDFF', marginLeft: '5px', fontSize: '10px' }}>종목추가</Typography>
            <Box display="flex" alignItems="center">
              <div style={{
                height: '1px',
                width: '15px',
                backgroundColor: '#D2FDFF',
                margin: '0 10px 0 10px',
              }}
              />
            </Box>
            <RadioButtonCheckedIcon fontSize="small" style={{ color: '#D2FDFF' }} />
            <Typography style={{ color: '#D2FDFF', marginLeft: '5px', fontSize: '10px' }}>정보입력</Typography>
            <Box display="flex" alignItems="center">
              <div style={{
                height: '1px',
                width: '15px',
                backgroundColor: '#D2FDFF',
                margin: '0 10px 0 10px',
              }}
              />
            </Box>
            <RadioButtonCheckedIcon fontSize="small" style={{ color: '#D2FDFF' }} />
            <Typography style={{ color: '#D2FDFF', marginLeft: '5px', fontSize: '10px' }}>검토 및 저장</Typography>
          </Box>
          {/* <IconButton aria-label="delete">
            <DoneIcon style={{ color: '#D2FDFF' }} />
          </IconButton> */}
        </div>
      )}
    </>
  );
}
