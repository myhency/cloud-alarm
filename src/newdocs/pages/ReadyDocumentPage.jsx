import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../common/layouts/MobileDrawerLayout';
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
  const isDesktop = useMediaQuery({
    query: '(min-width: 701px) and (max-width: 2048px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 280px) and (max-width: 700px)',
  });

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
    <>
      {isDesktop && (
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<ReadyDocumentContentContainer contentsLink={contentsLink} />}
        />
      )}
      {isMobile && (
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<ReadyDocumentContentContainer contentsLink={contentsLink} />}
        />
      )}
    </>
  );
}
