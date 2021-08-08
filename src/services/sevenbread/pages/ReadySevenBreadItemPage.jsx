import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import ReadyDocumentContentContainer from '../containers/ReadyDocumentContentContainer';

const items = [
  { title: '007빵', link: '/service/seven-bread' },
  { title: '종목추가', link: '/service/seven-bread/item/add' },
];

const contentsLink = { link: '/service/seven-bread/item/review' };

export default function ReadySevenBreadItemPage() {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<ReadyDocumentContentContainer contentsLink={contentsLink} />}
        />
      </Desktop>
      <Mobile>
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<ReadyDocumentContentContainer contentsLink={contentsLink} />}
        />
      </Mobile>
    </>
  );
}
