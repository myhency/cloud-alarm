import React from 'react';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import ContactsMenuListContainer from '../containers/ContactsMenuListContainer';
import ContactsMenuListContainerSmall from '../containers/ContactsMenuListContainerSmall';
import ContactsContentContainer from '../containers/ContactsContentContainer';
import PageTitleContainer from '../../common/containers/PageTitleContainer';

const items = [
  { title: '문서함', link: '/inbox' },
  { title: '주소록', link: '/contacts' },
];

export default function ContactsPage() {
  return (
    <DrawerLayout
      pageTitleContainer={<PageTitleContainer items={items} />}
      menuList={<ContactsMenuListContainer />}
      menuListSmall={<ContactsMenuListContainerSmall />}
      content={<ContactsContentContainer />}
    />
  );
}
