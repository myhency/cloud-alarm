import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  inboxHeaderBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem 0rem',
  },
  profileBox: {
    fontSize: '1.2rem',
    width: '5em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroupBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default function InBoxModalHeader({ recommendPrice, losscutPrice }) {
  const classes = useStyles();

  return (
    <div className={classes.inboxHeaderBox}>
      <Box display="flex" flexDirection="column">
        {recommendPrice === 0 ? (
          "Loading..."
        ) : (
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="body1">돌파가격 : </Typography>
            <Typography variant="h6" style={{ color : 'red'}}>&nbsp;{recommendPrice}</Typography>
          </Box>
        )}
        {losscutPrice === 0 ? (
          "Loading..."
        ) : (
            <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="body1">손절가격 : </Typography>
            <Typography variant="h6" style={{ color : 'blue'}}>&nbsp;{losscutPrice}</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
}
