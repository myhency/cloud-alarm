import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../common/containers/InBoxMenuListContainerSmall';
import VolumeDetailContentContainer from '../containers/VolumeDetailContentContainer';
// import MobileInBoxContentContainer from '../containers/MobileInBoxContentContainer';

const items = [
  { title: '유통주식수/거래량', link: '/analyze/volume' },
  { title: '상세', link: '/analyze/volume' },
];

export default function VolumeDetailPage({ match }) {
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
          content={(
            <VolumeDetailContentContainer
              date={match.params.date}
            />
          )}
        />
      )}
      {/* {isMobile && (
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<MobileInBoxContentContainer />}
        />
      )} */}
    </>
  );
}
