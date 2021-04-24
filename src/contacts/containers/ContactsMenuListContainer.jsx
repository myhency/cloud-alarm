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
} from '@material-ui/core';

import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';

// Icons
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  newContactBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5px',
  },
  newContactButton: {
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

const NewContactButton = withStyles(() => ({
  root: {
    marginTop: '15px',
    marginBottom: '5px',
    boxShadow: '0 1px 2px 0 grey',
    borderRadius: '30px 30px 30px 30px',
    paddingRight: '20px',
    paddingLeft: '15px',
  },
}))(Button);

export default function ContactsMenuListContainer({
  totalCount = 'redux',
}) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.newContactBox}>
        <NewContactButton startIcon={<AddIcon style={{ fontSize: 40 }} />}>
          <Typography>연락처 만들기</Typography>
        </NewContactButton>
      </Box>
      <List>
        <ListItem className={classes.listItem} button key={1}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={<Typography className={classes.inbox}>연락처</Typography>} />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
}
