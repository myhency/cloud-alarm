import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contactHeaderBox: {
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

export default function ContactModalHeader({ userName }) {
  const classes = useStyles();

  return (
    <div className={classes.contactHeaderBox}>
      <div className={classes.profileBox}>
        <AccountCircleIcon fontSize="large" />
        { userName === '' ? 'Loading...' : <p>{userName}</p> }
      </div>
      <div className={classes.buttonGroupBox}>
        <CreateIcon />
        <MoreVertIcon />
        <CloseIcon />
      </div>
    </div>
  );
}
