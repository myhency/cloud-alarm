import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Router
// import {
//   useHistory,
// } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import {
  AppBar,
  Toolbar,
  Drawer,
  // Menu,
  // MenuItem,
  IconButton,
  Typography,
  Paper,
  Divider,
} from '@material-ui/core';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TelegramIcon from '@material-ui/icons/Telegram';

// Images
// import LogoImage from '../../assets/images/bread-stock-logo.png';

// Drawer를 펼쳤을 때 가로길이
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundColor: '#303C6C',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: '#303C6C',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  menuIcon: {
    color: '#b4dfe5',
  },
  profileDiv: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  profileButton: {
    align: 'right',
  },
  paper: {
    width: '100%',
    border: 0,
    paddingLeft: '30px',
    backgroundColor: '#303C6C',
    color: '#b4dfe5',
    fontSize: 16,
  },
  logo: {
    height: '30px',
  },
}));

export default function DrawerLayout({
  pageTitleContainer,
  menuList,
  menuListSmall,
  content,
}) {
  const classes = useStyles();
  const theme = useTheme();
  // const history = useHistory();
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const profileMenuOpen = Boolean(anchorEl);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  // const handleProfileButton = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleProfileMenuClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleContactsMenuOnClick = (event) => {
  //   event.preventDefault();
  //   history.push('/contacts');
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar className={classes.profileDiv}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: drawerOpen,
            })}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{ marginRight: 'auto' }}
          >
            {pageTitleContainer}
          </Typography>
          <div>
            <a target="_blank" href="https://t.me/joinchat/CNWUmvadLcUxOWQ1" rel="noreferrer">
              <IconButton
                className={classes.profileButton}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{ color: '#b4dfe5', textAlign: 'center' }}
              >
                <TelegramIcon style={{ color: '#b4dfe5' }} />
              </IconButton>
            </a>
            <IconButton
              className={classes.profileButton}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleProfileButton}
              style={{ color: '#b4dfe5' }}
            >
              <ExitToAppIcon style={{ color: '#b4dfe5' }} />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={profileMenuOpen}
              onClose={handleProfileMenuClose}
            >
              <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleContactsMenuOnClick}>Contacts</MenuItem>
            </Menu> */}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
      >
        {/* 로고가 들어가는 곳 */}
        <div className={classes.toolbar}>
          <Paper variant="outlined" square className={classes.paper}>
            클라우드의 주식훈련소
          </Paper>
          <IconButton style={{ color: '#b4dfe5' }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* {menuList} */}
        {drawerOpen ? menuList : menuListSmall}
      </Drawer>
      {content}
    </div>
  );
}
