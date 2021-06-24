import React from 'react';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import { Typography, Box } from '@material-ui/core';
import { useStyles } from '../../common/components/Styles';

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
