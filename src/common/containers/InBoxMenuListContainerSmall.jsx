import React from 'react';
import {
  List,
  Badge,
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
import { SmallNewDocumentButton } from '../components/Buttons';
import MenuListItem from '../components/ListItems';

export default function InBoxMenuListContainerSmall({
  totalCount = 1,
}) {
  return (
    <BaseBox>
      <NewDocumentBox>
        <SmallNewDocumentButton>
          <AddIcon style={{ fontSize: 40, color: '#b4dfe5' }} />
        </SmallNewDocumentButton>
      </NewDocumentBox>
      <List>
        <MenuListItem alignItems="center" button key={1}>
          <Badge badgeContent={totalCount} color="error">
            <InboxIcon />
          </Badge>
        </MenuListItem>
        <MenuListItem alignItems="center" button key={2}>
          <Badge badgeContent={totalCount} color="error">
            <CancelScheduleSendIcon />
          </Badge>
        </MenuListItem>
        <MenuListItem alignItems="center" button key={3}>
          <Badge badgeContent={totalCount} color="error">
            <PieChartIcon />
          </Badge>
        </MenuListItem>
      </List>
    </BaseBox>
  );
}
