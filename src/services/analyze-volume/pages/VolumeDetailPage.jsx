import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import VolumeDetailContentContainer from '../containers/VolumeDetailContentContainer';
import MobileVolumeDetailContentContainer from '../containers/MobileVolumeDetailContentContainer';
// import MobileInBoxContentContainer from '../containers/MobileInBoxContentContainer';

export default function VolumeDetailPage({ match }) {
  const items = [
    { title: '유통주식수/거래량', link: '/service/analyze/volume' },
    { title: `상세 - ${match.params.date}`, link: `/service/analyze/volume/${match.params.date}` },
  ];

  return (
    <>
      <Desktop>
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
      </Desktop>
      <Mobile>
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={(
            <MobileVolumeDetailContentContainer
              date={match.params.date}
            />
          )}
        />
      </Mobile>
    </>
  );
}
