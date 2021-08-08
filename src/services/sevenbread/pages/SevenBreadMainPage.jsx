import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import SevenBreadMainContentContainer from '../containers/SevenBreadMainContentContainer';
import MobileSevenBreadMainContentContainer from '../containers/MobileSevenBreadMainContentContainer';
// import MobileInBoxContentContainer from '../containers/MobileInBoxContentContainer';

const items = [
  { title: '007빵', link: '/service/seven-bread' },
];

export default function SevenBreadMainPage() {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<SevenBreadMainContentContainer />}
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
