import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ListItemSecondaryAction, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

export default function HDrawer({
  totalCount,
  state1Count,
  state2Count,
  state3Count,
  state4Count,
}) {
  const classes = useStyles();

  return (
    <List>
      <ListItem className={classes.listItem} button key={1}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography className={classes.inbox}>문서함</Typography>} />
        <ListItemSecondaryAction>
          <Typography variant="subtitle1">{totalCount}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem className={classes.listItem} button key={2}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="서명대기중" />
        <ListItemSecondaryAction>
          <Typography variant="subtitle1">{state1Count}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem className={classes.listItem} button key={3}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="서명요청중" />
        <ListItemSecondaryAction>
          <Typography variant="subtitle1">{state2Count}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem className={classes.listItem} button key={4}>
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
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography className={classes.inbox}>템플릿</Typography>} />
        <ListItemSecondaryAction>
          <Typography variant="subtitle1">{totalCount}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
