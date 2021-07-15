/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  List,
  ListItemSecondaryAction,
  Typography,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

// Icons
import PieChartIcon from '@material-ui/icons/PieChart';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import Filter7Icon from '@material-ui/icons/Filter7';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

import {
  BaseBox,
  NewDocumentBox,
} from '../components/Boxes';
import { NewDocumentButton } from '../components/Buttons';
import MenuListItem from '../components/ListItems';

export default function InBoxMenuListContainer({
  totalCount = '',
  state2Count = '',
  state3Count = '',
}) {
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
      : history.location.pathname === '/inbox/alarmed' ? 2
        : history.location.pathname === '/inbox/losscut' ? 3
          : history.location.pathname === '/analyze/volume' ? 6
            : history.location.pathname === '/seven-bread/main' ? 7
              : history.location.pathname === '/bread/shuttle/home' ? 8
                : 0;
    setSelectedIndex(initIndex);
  }, []);

  return (
    <BaseBox>
      <NewDocumentBox>
        <NewDocumentButton
          startIcon={<TelegramIcon style={{ fontSize: 40, color: '#b4dfe5' }} />}
          onClick={handleNewDocumentOnClick}
        >
          <Typography style={{ color: '#b4dfe5' }}>
            새 알림 만들기
          </Typography>
        </NewDocumentButton>
      </NewDocumentBox>
      <List>
        <MenuListItem
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
        </MenuListItem>
        <MenuListItem
          button
          key={2}
          selected={selectedIndex === 2}
          onClick={(e) => handleClick(e, '/inbox/alarmed', 2)}
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
          {/* 종목등록 */}
          <ListItemText primary="종목 리스트" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <Divider />
        <MenuListItem
          button
          key={5}
        >
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          {/* 나의 포트폴리오 */}
          <ListItemText primary="Comming soon" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem
          button
          selected={selectedIndex === 6}
          key={6}
          onClick={(e) => handleClick(e, '/analyze/volume', 6)}
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
          onClick={(e) => handleClick(e, '/seven-bread/main', 7)}
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
