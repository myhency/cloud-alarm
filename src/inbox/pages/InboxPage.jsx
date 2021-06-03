import * as React from 'react';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../containers/InBoxMenuListContainer';
import InBoxContentContainer from '../containers/InBoxContentContainer';
import InBoxMenuListContainerSmall from '../containers/InBoxMenuListContainerSmall';

const items = [
  { title: '알리미 리스트', link: '/inbox' },
];

export default function InboxPage() {
  return (
    <DrawerLayout
      pageTitleContainer={<PageTitleContainer items={items} />}
      menuList={<InBoxMenuListContainer />}
      menuListSmall={<InBoxMenuListContainerSmall />}
      content={<InBoxContentContainer />}
    />
  );
}
