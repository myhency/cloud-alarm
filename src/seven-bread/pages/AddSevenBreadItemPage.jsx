import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../common/containers/InBoxMenuListContainerSmall';
import AddDocumentContentContainer from '../containers/AddDocumentContentContainer';

const items = [
  { title: '007빵', link: '/seven-bread/main' },
  { title: '종목추가', link: '/seven-bread/item/add' },
];

const contentsLink = { link: '/seven-bread/item/ready' };

export default function AddSevenBreadItemPage() {
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
          content={<AddDocumentContentContainer contentsLink={contentsLink} />}
        />
      )}
      {isMobile && (
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<AddDocumentContentContainer contentsLink={contentsLink} />}
        />
      )}
    </>
  );
}
