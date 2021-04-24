import React from 'react';

import {
  AppBar, IconButton, Toolbar,
  Typography, makeStyles,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

// 이거 어떻게 관리할건지 방안 필요
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function DashboardAppBar({ onClick, localeText }) {
  const styles = useStyles();

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onClick}
          className={styles.menuButton}
          data-testid="hamburger-button"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {`${localeText.title} (${localeText.sub_title})`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
