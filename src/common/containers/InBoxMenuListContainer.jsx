/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { List, ListItemSecondaryAction, Typography, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';

// Icons
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ViewListIcon from '@material-ui/icons/ViewList';
import Filter7Icon from '@material-ui/icons/Filter7';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TimelineIcon from '@material-ui/icons/Timeline';
import TelegramIcon from '@material-ui/icons/Telegram';

import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { BaseBox, NewDocumentBox } from '../components/Boxes';
import MenuListItem from '../components/ListItems';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function InBoxMenuListContainer({ totalCount = '', state2Count = '', state3Count = '' }) {
  const history = useHistory();
  const classes = useStyles();

  const { search } = history.location;

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [expandAlarm, setExpandAlarm] = React.useState(history.location.pathname.includes('/service/alarm'));
  const [expandSevenBread, setExpandSevenBread] = React.useState(
    history.location.pathname.includes('/service/seven-bread')
  );
  const [expandBookmark, setExpandBookmark] = React.useState(true);

  function handleClick(event, link, index) {
    event.preventDefault();
    setSelectedIndex(index);
    history.push(link);
  }

  function handleOnExpandAlarm() {
    setExpandAlarm(!expandAlarm);
  }

  function handleOnExpandSevenBread() {
    setExpandSevenBread(!expandSevenBread);
  }

  function handleOnExpandBookmark() {
    setExpandBookmark(!expandBookmark);
  }

  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    const initIndex =
      search === '?status=active'
        ? 1
        : search === '?status=alarmed'
        ? 2
        : search === '?status=losscut'
        ? 3
        : history.location.pathname.includes('/service/analyze/volume')
        ? 6
        : history.location.pathname === '/service/seven-bread'
        ? 7
        : history.location.pathname === '/service/bread-shuttle'
        ? 8
        : history.location.pathname === '/service/seven-bread/realtime'
        ? 9
        : history.location.pathname === '/service/seven-bread/members/statistics'
        ? 10
        : 0;
    setSelectedIndex(initIndex);
  }, []);

  return (
    <BaseBox>
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
          <ListItemText primary="?????????" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{totalCount}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem button onClick={handleOnExpandSevenBread}>
          <ListItemIcon>
            <Filter7Icon />
          </ListItemIcon>
          <ListItemText primary="007???" />
          {expandSevenBread ? <ExpandLess /> : <ExpandMore />}
        </MenuListItem>
        <Collapse in={expandSevenBread} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a
              target="_blank"
              href="https://www.evernote.com/shard/s408/sh/6791a237-1714-fc63-da31-d28d08a7fe4d/5d5d9714617de674fa9bf8952ad3877e"
              rel="noreferrer"
            >
              <MenuListItem
                className={classes.nested}
                button
                key={13}
                // onClick={(e) => handleClick(e, '/service/seven-bread', 7)}
              >
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="007??? ??????" />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1">{totalCount}</Typography>
                </ListItemSecondaryAction>
              </MenuListItem>
            </a>
            <MenuListItem
              className={classes.nested}
              button
              key={9}
              selected={selectedIndex === 9}
              onClick={(e) => handleClick(e, '/service/seven-bread/realtime', 9)}
            >
              <ListItemIcon>
                <CardMembershipIcon />
              </ListItemIcon>
              {/* ???????????? */}
              <ListItemText primary="007??? ?????????" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{state2Count}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
            <MenuListItem
              className={classes.nested}
              button
              selected={selectedIndex === 7}
              key={7}
              onClick={(e) => handleClick(e, '/service/seven-bread', 7)}
            >
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="007??? ?????????" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{totalCount}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
            <MenuListItem
              className={classes.nested}
              button
              selected={selectedIndex === 10}
              key={10}
              onClick={(e) => handleClick(e, '/service/seven-bread/members/statistics', 10)}
            >
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="007??? ??????" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{totalCount}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
          </List>
        </Collapse>
        <MenuListItem button onClick={handleOnExpandAlarm}>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="?????????" />
          {expandAlarm ? <ExpandLess /> : <ExpandMore />}
        </MenuListItem>
        <Collapse in={expandAlarm} timeout="auto" unmountOnExit>
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
              <ListItemText primary="????????? ?????????" />
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
              {/* ???????????? */}
              <ListItemText primary="???????????? ??????" />
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
              <ListItemText primary="???????????? ??????" />
              <ListItemSecondaryAction>
                <Typography variant="subtitle1">{state2Count}</Typography>
              </ListItemSecondaryAction>
            </MenuListItem>
          </List>
        </Collapse>
        <MenuListItem
          button
          selected={selectedIndex === 6}
          key={6}
          onClick={(e) => handleClick(e, '/service/analyze/volume', 6)}
        >
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="???????????????/?????????" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem button onClick={handleOnExpandBookmark}>
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="????????????" />
          {expandBookmark ? <ExpandLess /> : <ExpandMore />}
        </MenuListItem>
        <Collapse in={expandBookmark} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <a
              target="_blank"
              href="https://www.evernote.com/shard/s744/sh/a60e8d23-43c9-d4dc-29a9-b59f568748ea/af7e9d6722df0767219cd53891f07f68"
              rel="noreferrer"
            >
              <MenuListItem
                className={classes.nested}
                button
                key={12}
                // onClick={(e) => handleClick(e, '/service/seven-bread/realtime', 9)}
              >
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                {/* ???????????? */}
                <ListItemText primary="??????/??????" />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1">{state2Count}</Typography>
                </ListItemSecondaryAction>
              </MenuListItem>
            </a>
            <a target="_blank" href="http://www.paxnet.co.kr/stock/infoStock/issueCalendarMonth" rel="noreferrer">
              <MenuListItem
                className={classes.nested}
                button
                key={10}
                // onClick={(e) => handleClick(e, '/service/seven-bread/realtime', 9)}
              >
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                {/* ???????????? */}
                <ListItemText primary="???????????????" />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1">{state2Count}</Typography>
                </ListItemSecondaryAction>
              </MenuListItem>
            </a>
            <a target="_blank" href="https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101" rel="noreferrer">
              <MenuListItem
                className={classes.nested}
                button
                key={11}
                // onClick={(e) => handleClick(e, '/service/seven-bread', 7)}
              >
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="????????? ????????????" />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1">{totalCount}</Typography>
                </ListItemSecondaryAction>
              </MenuListItem>
            </a>
            <a
              target="_blank"
              href="http://comp.fnguide.com/SVO2/asp/SVD_comp_calendar.asp?pGB=1&gicode=A005930&gcd=&gnm=&curdt=&ctp=&cID=&MenuYn=Y&ReportGB=&NewMenuID=701&stkGb=701"
              rel="noreferrer"
            >
              <MenuListItem
                className={classes.nested}
                button
                key={13}
                // onClick={(e) => handleClick(e, '/service/seven-bread', 7)}
              >
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Company Guide" />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1">{totalCount}</Typography>
                </ListItemSecondaryAction>
              </MenuListItem>
            </a>
            <a target="_blank" href="https://t.me/+fotErv5hlb05ZWY1" rel="noreferrer">
              <MenuListItem
                className={classes.nested}
                button
                key={14}
                // onClick={(e) => handleClick(e, '/service/seven-bread', 7)}
              >
                <ListItemIcon>
                  <TelegramIcon />
                </ListItemIcon>
                <ListItemText primary="????????? ????????????" />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1">{totalCount}</Typography>
                </ListItemSecondaryAction>
              </MenuListItem>
            </a>
          </List>
        </Collapse>
        {/* <MenuListItem
          button
          selected={selectedIndex === 8}
          key={8}
          onClick={(e) => handleClick(e, '/bread/shuttle/home', 8)}
        >
          <ListItemIcon>
            <AirportShuttleIcon />
          </ListItemIcon>
          <ListItemText primary="?????????" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem> */}
      </List>
    </BaseBox>
  );
}

//http://comp.fnguide.com/SVO2/asp/SVD_comp_calendar.asp?pGB=1&gicode=A005930&gcd=&gnm=&curdt=&ctp=&cID=&MenuYn=Y&ReportGB=&NewMenuID=701&stkGb=701
