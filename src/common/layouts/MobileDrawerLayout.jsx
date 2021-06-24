import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Typography,
  Box,
} from '@material-ui/core';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from '../components/Styles';

export default function MobileDrawerLayout({
  pageTitleContainer,
  menuList,
  content,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '9vh',
          }}
        >
          <Typography
            variant="h6"
            style={{ color: '#b4dfe5' }}
          >
            클라우드의 주식훈련소
          </Typography>
        </Box>
      </div>
      {menuList}
    </>
  );

  return (
    <Box>
      <Box
        style={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static" style={{ backgroundColor: '#303C6C' }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon style={{ color: '#b4dfe5' }} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {pageTitleContainer}
            </Typography>
            <IconButton
              className={classes.profileButton}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ color: '#b4dfe5' }}
            >
              <ExitToAppIcon style={{ color: '#b4dfe5' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        style={{ backgroundColor: '#f0f8ff99' }}
        BackdropProps={{ invisible: true }}
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {sideList('left')}
      </Drawer>
      {content}
    </Box>
  );
}
