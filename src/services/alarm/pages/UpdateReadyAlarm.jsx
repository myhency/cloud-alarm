import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import UpdateReadyAlarmContent from '../containers/UpdateReadyAlarmContent';

const items = [
  { title: '알리미 리스트', link: '/service/alarm?status=active' },
];

const contentsLink = { link: '/service/alarm/update/review' };

export default function UpdateReadyAlarm({ match }) {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={(
            <UpdateReadyAlarmContent
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
            <UpdateReadyAlarmContent
              contentsLink={contentsLink}
              id={match.params.id}
            />
          )}
        />
      </Mobile>
    </>
  );
}
