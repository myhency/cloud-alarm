import React from 'react';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

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

export default function InBoxModalHeader({ recommendPrice }) {
  const classes = useStyles();

  return (
    <div className={classes.inboxHeaderBox}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ margin: '20px 0 0 0' }}
      >
        <EmojiPeopleIcon fontSize="large" />
        <Typography variant="body1">&nbsp;진행상태</Typography>
      </Box>
      <Box>
        <Typography variant="h5" style={{ color: 'hotpink' }}>
          {recommendPrice === '' || recommendPrice == null
            ? '알람전'
            : recommendPrice}
        </Typography>
      </Box>
    </div>
  );
}
