import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  List,
  ListItemSecondaryAction,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

// Icons
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddIcon from '@material-ui/icons/Add';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import PieChartIcon from '@material-ui/icons/PieChart';

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
      : history.location.pathname === '/inbox/losscut' ? 2
        : 0;
    setSelectedIndex(initIndex);
  }, []);

  return (
    <BaseBox>
      <NewDocumentBox>
        <NewDocumentButton
          startIcon={<AddIcon style={{ fontSize: 40, color: '#b4dfe5' }} />}
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
            <InboxIcon />
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
          onClick={(e) => handleClick(e, '/inbox/losscut', 2)}
        >
          <ListItemIcon>
            <CancelScheduleSendIcon />
          </ListItemIcon>
          <ListItemText primary="손절처리 알림" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state2Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
        <MenuListItem
          button
          key={3}
        >
          <ListItemIcon>
            <PieChartIcon />
          </ListItemIcon>
          <ListItemText primary="나의 포트폴리오" />
          <ListItemSecondaryAction>
            <Typography variant="subtitle1">{state3Count}</Typography>
          </ListItemSecondaryAction>
        </MenuListItem>
      </List>
    </BaseBox>
  );
}
