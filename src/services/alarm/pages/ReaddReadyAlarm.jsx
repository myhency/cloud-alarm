import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import ReaddReadyAlarmContent from '../containers/ReaddReadyAlarmContent';

const items = [
  { title: '알리미 리스트', link: '/service/alarm?status=active' },
];

const contentsLink = { link: '/service/alarm/readd/review' };

export default function ReaddReadyAlarm({ match }) {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={(
            <ReaddReadyAlarmContent
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
            <ReaddReadyAlarmContent
              contentsLink={contentsLink}
              id={match.params.id}
            />
          )}
        />
      </Mobile>
    </>
  );
}
