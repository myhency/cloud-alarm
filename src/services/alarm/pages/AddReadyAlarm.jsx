import * as React from 'react';
import { Mobile, Desktop } from '../../../utils/screenSelector';
import DrawerLayout from '../../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../../common/containers/InBoxMenuListContainerSmall';
import ReadyItemContent from '../containers/AddReadyItemContent';

const items = [
  { title: '알리미 리스트', link: '/service/alarm?status=active' },
  { title: '새 알리미', link: '/service/alarm/new' },
];

const contentsLink = { link: '/service/alarm/new/review' };

export default function ReadyAlarm() {
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };

  React.useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<ReadyItemContent contentsLink={contentsLink} />}
        />
      </Desktop>
      <Mobile>
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<ReadyItemContent contentsLink={contentsLink} />}
        />
      </Mobile>
    </>
  );
}
