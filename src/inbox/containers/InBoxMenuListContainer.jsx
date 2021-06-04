import React from 'react';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Typography,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Link,
} from '@material-ui/core';

// Icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddIcon from '@material-ui/icons/Add';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import PieChartIcon from '@material-ui/icons/PieChart';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  newDocumentBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5px',
  },
  newDocumentButton: {
    marginTop: '15px',
    marginBottom: '5px',
    borderRadius: '30px 30px 30px 30px',
  },
  inbox: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#000000',
  },
  listItem: {
    borderRadius: '0px 30px 30px 0px',
    marginRight: '10px',
  },
}));

const NewDocumentButton = withStyles(() => ({
  root: {
    marginTop: '15px',
    marginBottom: '5px',
    boxShadow: '0 1px 2px 0 grey',
    borderRadius: '30px 30px 30px 30px',
    paddingRight: '20px',
    paddingLeft: '15px',
  },
}))(Button);

export default function InBoxMenuListContainer({
  totalCount = 'redux',
  state1Count = 'redux',
  state2Count = 'redux',
  state3Count = 'redux',
  state4Count = 'redux',
}) {
  const classes = useStyles();
  const history = useHistory();
  function handleNewDocumentOnClick(event) {
    event.preventDefault();
    history.push('/add-docs');
  }

  function handleClick(event) {
    event.preventDefault();
    history.push('/inbox');
  }

  return (
    <>
      <Box className={classes.newDocumentBox}>
        <NewDocumentButton
          startIcon={<AddIcon style={{ fontSize: 40 }} />}
          onClick={handleNewDocumentOnClick}
        >
          <Typography>새 알림 만들기</Typography>
        </NewDocumentButton>
      </Box>
      <List>
        <Link
          key="alarmList"
          color="inherit"
          href="/inbox"
          onClick={(e) => handleClick(e)}
        >
          <ListItem className={classes.listItem} button key={1}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.inbox}>알리미 리스트</Typography>
              }
            />
            <ListItemSecondaryAction>
              <Typography variant="subtitle1">{totalCount}</Typography>
            </ListItemSecondaryAction>
          </ListItem>
        </Link>

        <ListItem className={classes.listItem} button key={2}>
          <ListItemIcon>
            <AlarmOnIcon />
          </ListItemIcon>
          <ListItemText primary="가격돌파 알림" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state1Count}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className={classes.listItem} button key={3}>
          <ListItemIcon>
            <CancelScheduleSendIcon />
          </ListItemIcon>
          <ListItemText primary="손절처리 알림" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className={classes.listItem} button key={3}>
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary="나의 포트폴리오" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        {/* <ListItem className={classes.listItem} button key={4}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="승인대기중" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className={classes.listItem} button key={5}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="완료" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state4Count}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className={classes.listItem} button key={6}>
          <ListItemIcon>
            <ViewCompactIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography className={classes.inbox}>템플릿</Typography>} />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </ListItem> */}
      </List>
    </>
  );
}
