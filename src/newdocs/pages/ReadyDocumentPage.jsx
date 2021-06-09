import * as React from 'react';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../common/containers/InBoxMenuListContainerSmall';
import ReadyDocumentContentContainer from '../containers/ReadyDocumentContentContainer';

const items = [
  { title: '알리미 리스트', link: '/inbox' },
  { title: '새 알리미', link: '/add-docs' },
];

const contentsLink = { link: '/review-docs' };

export default function ReadyDocumentPage() {
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  return (
    <DrawerLayout
      pageTitleContainer={<PageTitleContainer items={items} />}
      menuList={<InBoxMenuListContainer />}
      menuListSmall={<InBoxMenuListContainerSmall />}
      content={<ReadyDocumentContentContainer contentsLink={contentsLink} />}
    />
  );
}
