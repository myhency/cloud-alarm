import React from 'react';
import {
  List,
  ListItem,
  Box,
  IconButton,
  Badge,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  newContactBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    marginBottom: '5px',
  },
  inbox: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#000000',
  },
  listItem: {
    borderRadius: '30px 30px 30px 30px',
    justifyContent: 'center',
  },
}));

const NewContactButton = withStyles(() => ({
  root: {
    marginTop: '15px',
    marginBottom: '5px',
    boxShadow: '0 1px 2px 0 grey',
    borderRadius: '30px 30px 30px 30px',
  },
}))(IconButton);

export default function ContactsMenuListContainerSmall({
  totalCount = 1,
}) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.newContactBox}>
        <NewContactButton>
          <AddIcon style={{ fontSize: 40, color: 'black' }} />
        </NewContactButton>
      </Box>
      <List>
        <ListItem className={classes.listItem} alignItems="center" button key={1}>
          <Badge badgeContent={totalCount} color="error">
            <AccountCircleIcon />
          </Badge>
        </ListItem>
      </List>
    </>
  );
}
