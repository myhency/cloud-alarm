import * as React from 'react';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../inbox/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../inbox/containers/InBoxMenuListContainerSmall';
import ModifyReadyDocumentContentContainer from '../containers/ModifyReadyDocumentContentContainer';

const items = [
  { title: '알리미 리스트', link: '/inbox' },
  { title: '새 알리미', link: '/add-docs' },
];

const contentsLink = { link: '/review-docs' };

export default function ModifyReadyDocumentPage({ match }) {
  return (
    <DrawerLayout
      pageTitleContainer={<PageTitleContainer items={items} />}
      menuList={<InBoxMenuListContainer />}
      menuListSmall={<InBoxMenuListContainerSmall />}
      content={(
        <ModifyReadyDocumentContentContainer
          contentsLink={contentsLink}
          id={match.params.id}
        />
      )}
    />
  );
}
