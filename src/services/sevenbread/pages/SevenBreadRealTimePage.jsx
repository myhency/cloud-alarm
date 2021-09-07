import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import SevenBreadRealTimeContentContainer from '../containers/SevenBreadRealTimeContentContainer';
import MobileSevenBreadMainContentContainer from '../containers/MobileSevenBreadMainContentContainer';
// import MobileInBoxContentContainer from '../containers/MobileInBoxContentContainer';

const items = [
  { title: '007빵 실시간', link: '/service/seven-bread/realtime' },
];

export default function SevenBreadRealTimePage() {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<SevenBreadRealTimeContentContainer />}
        />
      </Desktop>
      <Mobile>
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<MobileSevenBreadMainContentContainer />}
        />
      </Mobile>
    </>
  );
}
