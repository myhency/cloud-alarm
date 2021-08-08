/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import {
  List,
  ListItemSecondaryAction,
  Typography,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';

// Icons
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ViewListIcon from '@material-ui/icons/ViewList';
import Filter7Icon from '@material-ui/icons/Filter7';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ListAltIcon from '@material-ui/icons/ListAlt';

import { ExpandLess, ExpandMore } from '@material-ui/icons';
import {
  BaseBox,
  NewDocumentBox,
} from '../components/Boxes';
import MenuListItem from '../components/ListItems';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function InBoxMenuListContainer({
  totalCount = '',
  state2Count = '',
  state3Count = '',
}) {
  const history = useHistory();
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [expand, setExpand] = React.useState(true);

  function handleClick(event, link, index) {
    event.preventDefault();
    setSelectedIndex(index);
    history.push(link);
  }

  function handleOnExpand() {
    setExpand(!expand);
  }

  const { search, pathname } = history.location;

  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    const initIndex = pathname === '/service/alarm' ? 1
      : search === '?status=alarmed' ? 2
        : search === '?status=losscut' ? 3
          : history.location.pathname.includes('/service/analyze/volume') ? 6
            : history.location.pathname === '/service/seven-bread' ? 7
              : history.location.pathname === '/service/bread-shuttle' ? 8
                : 0;
    setSelectedIndex(initIndex);
  }, []);

  return (
    <BaseBox>
      <NewDocumentBox>
        {/* <NewDocumentButton
          startIcon={<TelegramIcon style={{ fontSize: 40, color: '#b4dfe5' }} />}
          onClick={handleNewDocumentOnClick}
        >
          <Typography style={{ color: '#b4dfe5' }}>
            새 알림 만들기
          </Typography>
        </NewDocumentButton> */}
      </NewDocumentBox>
      <List>
        <MenuListItem
          button
          key={8}
          selected={selectedIndex === 8}
          onClick={(e) => handleClick(e, '/service/bread-shuttle', 8)}
        >
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="빵셔틀" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem
          button
          onClick={handleOnExpand}
        >
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="알리미" />
          {expand ? <ExpandLess /> : <ExpandMore />}
        </MenuListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuListItem
              className={classes.nested}
              button
              selected={selectedIndex === 1}
              key={1}
              onClick={(e) => handleClick(e, '/service/alarm?status=active', 1)}
            >
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="알리미 리스트" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{totalCount}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
            <MenuListItem
              className={classes.nested}
              button
              key={2}
              selected={selectedIndex === 2}
              onClick={(e) => handleClick(e, '/service/alarm?status=alarmed', 2)}
            >
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              {/* 알림완료 */}
              <ListItemText primary="알람완료 알림" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{state2Count}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
            <MenuListItem
              className={classes.nested}
              button
              key={3}
              selected={selectedIndex === 3}
              onClick={(e) => handleClick(e, '/service/alarm?status=losscut', 3)}
            >
              <ListItemIcon>
                <TrendingDownIcon />
              </ListItemIcon>
              <ListItemText primary="손절처리 알림" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{state2Count}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
          </List>
        </Collapse>
        {/* <MenuListItem
          button
          selected={selectedIndex === 1}
          key={1}
          onClick={(e) => handleClick(e, '/inbox', 1)}
        >
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="알리미 리스트" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem> */}
        {/* <MenuListItem
          button
          key={2}
          selected={selectedIndex === 2}
          onClick={(e) => handleClick(e, '/inbox/alarmed', 2)}
        >
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="알람완료 알림" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem
          button
          key={3}
          selected={selectedIndex === 3}
          onClick={(e) => handleClick(e, '/inbox/losscut', 3)}
        >
          <ListItemIcon>
            <TrendingDownIcon />
          </ListItemIcon>
          <ListItemText primary="손절처리 알림" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem
          button
          key={4}
        >
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText primary="종목 리스트" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem> */}
        {/* <Divider />
        <MenuListItem
          button
          key={5}
        >
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary="Comming soon" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem> */}
        <MenuListItem
          button
          selected={selectedIndex === 6}
          key={6}
          onClick={(e) => handleClick(e, '/service/analyze/volume', 6)}
        >
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="유통주식수/거래량" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem
          button
          selected={selectedIndex === 7}
          key={7}
          onClick={(e) => handleClick(e, '/service/seven-bread', 7)}
        >
          <ListItemIcon>
            <Filter7Icon />
          </ListItemIcon>
          <ListItemText primary="007빵" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        {/* <MenuListItem
          button
          selected={selectedIndex === 8}
          key={8}
          onClick={(e) => handleClick(e, '/bread/shuttle/home', 8)}
        >
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="빵셔틀" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem> */}
      </List>
    </BaseBox>
  );
}
