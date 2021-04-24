import React from 'react';

import {
  Divider, Drawer, Hidden,
  List, ListItem, useTheme,
  ListItemIcon, ListItemText,
  makeStyles,
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import LocaleSelectBoxContainer from '../containers/LocaleSelectBoxContainer';

// 이거 어떻게 관리할건지 방안 필요
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function DashboardNavBar({
  container, open, onClose, localeText,
}) {
  const theme = useTheme();
  const styles = useStyles();

  const drawer = (
    <div>
      <div className={styles.toolbar}>
        {/* 임시적으로 여기에 배치 */}
        <LocaleSelectBoxContainer />
      </div>
      <Divider />
      <List>
        {['menu1', 'menu2', 'menu3', 'menu4'].map((titleName, index) => (
          <ListItem button key={titleName}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={localeText[titleName]} data-testid="navbar-item" />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={styles.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={onClose}
          classes={{
            paper: styles.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: styles.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}
