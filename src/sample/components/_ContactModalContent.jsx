import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
  contactContentBox: {
    fontSize: '1.2rem',
    margin: '1rem 0rem',
  },
  flexRowBox: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.4rem 0.4rem',
    width: '100%',
  },
  rowContent: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  rowType: {
    width: '8rem',
    fontSize: '0.8rem',
    color: 'grey',
  },
}));

export default function HContactModalContent({ email, phoneNumber }) {
  const classes = useStyles();

  return (
    <div className={classes.contactContentBox}>
      <p>연락처 세부정보</p>
      <div className={classes.flexRowBox}>
        <PhoneIcon fontSize="large" />
        <p className={classes.rowContent}>
          {phoneNumber === '' ? 'Loading...' : phoneNumber}
        </p>
        <p className={classes.rowType}>휴대전화</p>
      </div>
      <div className={classes.flexRowBox}>
        <EmailIcon fontSize="large" />
        <p className={classes.rowContent}>
          {email === '' ? 'Loading...' : email}
        </p>
        <p className={classes.rowType}>이메일</p>
      </div>
    </div>
  );
}
