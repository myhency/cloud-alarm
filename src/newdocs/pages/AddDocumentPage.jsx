import * as React from 'react';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../inbox/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../inbox/containers/InBoxMenuListContainerSmall';
import AddDocumentContentContainer from '../containers/AddDocumentContentContainer';

const items = [
  { title: '문서함', link: '/inbox' },
  { title: '새 문서', link: '/newdocs' },
];

export default function AddDocumentPage() {
  return (
    <DrawerLayout
      pageTitleContainer={<PageTitleContainer items={items} />}
      menuList={<InBoxMenuListContainer />}
      menuListSmall={<InBoxMenuListContainerSmall />}
      content={<AddDocumentContentContainer />}
    />
  );
}
