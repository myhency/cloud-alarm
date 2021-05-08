import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MessageIcon from "@material-ui/icons/Message";
import CategoryIcon from "@material-ui/icons/Category";
import ScheduleIcon from "@material-ui/icons/Schedule";
import UpdateIcon from "@material-ui/icons/Update";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

import { Box, Typography, Divider } from '@material-ui/core';

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

export default function InboxModalContent({ comment, theme, createdAt, lastUpdatedAt, alarmStatus, alarmedAt, losscutAt }) {
  const classes = useStyles();

  return (
    <div className={classes.contactContentBox}>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ margin: "20px 0 0 0" }}
      >
        <EmojiPeopleIcon fontSize="large" />
        <Typography variant="body1">&nbsp;진행상태</Typography>
      </Box>
      <Box>
        <Typography variant="h5" style={{ color: "hotpink" }}>
          {alarmStatus === "" || alarmStatus == null ? "알람전" : alarmStatus}
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ margin: "20px 0 0 0" }}
      >
        <MessageIcon fontSize="large" />
        <Typography variant="body1">&nbsp;코멘트</Typography>
      </Box>
      <Box>
        <Typography>{comment === "" ? "Loading..." : comment}</Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ margin: "20px 0 0 0" }}
      >
        <CategoryIcon fontSize="large" />
        <Typography variant="body1">&nbsp;테마</Typography>
      </Box>
      <Box>
        <Typography>{theme === "" ? "Loading..." : theme}</Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ margin: "20px 0 0 0" }}
      >
        <ScheduleIcon fontSize="large" />
        <Typography variant="body1">&nbsp;최초 등록일</Typography>
      </Box>
      <Box>
        <Typography>{createdAt === "" ? "Loading..." : createdAt}</Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        style={{ margin: "20px 0 0 0" }}
      >
        <UpdateIcon fontSize="large" />
        <Typography variant="body1">&nbsp;마지막 수정일</Typography>
      </Box>
      <Box>
        <Typography>
          {lastUpdatedAt === "" ? "Loading..." : lastUpdatedAt}
        </Typography>
      </Box>
      <Divider />
    </div>
  );
}
