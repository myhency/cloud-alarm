import React from 'react';
import {
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { Mobile, Desktop } from '../../../utils/screenSelector';

import { useStyles } from '../../../common/components/Styles';

export default function ProgressToolBar() {
  const classes = useStyles();

  return (
    <>
      <Desktop>
        <div className={classes.progressToolBarRoot}>
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
      </Desktop>
      <Mobile>
        <div className={classes.progressToolBarRoot}>
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
        </div>
      </Mobile>
    </>
  );
}
