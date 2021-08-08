import React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import ModifyReviewDocumentContentContainer from '../containers/ReaddReviewAlarmContent';

const items = [
  { title: '알리미 리스트', link: '/service/alarm?status=active' },
];

const contentsLink = { link: '/service/alarm?status=active' };

export default function ReaddReviewAlarm({ match }) {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={(
            <ModifyReviewDocumentContentContainer
              contentsLink={contentsLink}
              id={match.params.id}
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
            <ModifyReviewDocumentContentContainer
              contentsLink={contentsLink}
              id={match.params.id}
            />
          )}
        />
      </Mobile>
    </>
  );
}
