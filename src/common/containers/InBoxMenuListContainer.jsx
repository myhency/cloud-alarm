import React, { useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Typography,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

// Icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddIcon from '@material-ui/icons/Add';
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
  totalCount = '',
  state2Count = '',
  state3Count = '',
}) {
  const classes = useStyles();
  const history = useHistory();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleNewDocumentOnClick(event) {
    event.preventDefault();
    history.push('/add-docs');
  }

  function handleClick(event, link, index) {
    event.preventDefault();
    setSelectedIndex(index);
    history.push(link);
  }

  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    const initIndex = history.location.pathname === '/inbox' ? 1
      : history.location.pathname === '/inbox/losscut' ? 2
        : 0;
    setSelectedIndex(initIndex);
  }, []);

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
        <ListItem
          className={classes.listItem}
          button
          selected={selectedIndex === 1}
          key={1}
          onClick={(e) => handleClick(e, '/inbox', 1)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="알리미 리스트" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          className={classes.listItem}
          button
          key={2}
          selected={selectedIndex === 2}
          onClick={(e) => handleClick(e, '/inbox/losscut', 2)}
        >
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
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
}
