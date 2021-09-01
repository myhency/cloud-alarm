import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../common/containers/InBoxMenuListContainerSmall';
import BreadShuttleContentContainer from '../containers/BreadShuttleContentContainer';
import MobileBreadShuttleContentContainer from '../containers/MobileBreadShuttleContentContainer';
// import MobileInBoxContentContainer from '../containers/MobileInBoxContentContainer';

const items = [
  { title: '빅파이', link: '/bread/shuttle/home' },
];

export default function BreadPage() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 701px) and (max-width: 2048px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 280px) and (max-width: 700px)',
  });

  return (
    <>
      {isDesktop && (
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<BreadShuttleContentContainer />}
        />
      )}
      {isMobile && (
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<MobileBreadShuttleContentContainer />}
        />
      )}
    </>
  );
}
