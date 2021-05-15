import * as React from 'react';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../inbox/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../inbox/containers/InBoxMenuListContainerSmall';
import AddDocumentContentContainer from '../containers/AddDocumentContentContainer';

const items = [
  { title: '알리미 리스트', link: '/inbox' },
  { title: '새 알리미', link: '/add-docs' },
];

const contentsLink = { link: '/ready-docs' };

export default function AddDocumentPage() {
  return (
    <DrawerLayout
      pageTitleContainer={<PageTitleContainer items={items} />}
      menuList={<InBoxMenuListContainer />}
      menuListSmall={<InBoxMenuListContainerSmall />}
      content={<AddDocumentContentContainer contentsLink={contentsLink} />}
    />
  );
}
