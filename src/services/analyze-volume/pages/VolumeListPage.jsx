import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import VolumeListContentContainer from '../containers/VolumeListContentContainer';
import MobileVolumeListContentContainer from '../containers/MobileVolumeListContentContainer';
// import MobileInBoxContentContainer from '../containers/MobileInBoxContentContainer';

const items = [
  { title: '유통주식수/거래량', link: '/service/analyze/volume' },
];

export default function VolumeListPage() {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<VolumeListContentContainer />}
        />
      </Desktop>
      <Mobile>
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<MobileVolumeListContentContainer />}
        />
      </Mobile>
    </>
  );
}
