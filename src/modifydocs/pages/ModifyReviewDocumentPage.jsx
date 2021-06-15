import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DrawerLayout from '../../common/layouts/DrawerLayout';
import MobileDrawerLayout from '../../common/layouts/MobileDrawerLayout';
import PageTitleContainer from '../../common/containers/PageTitleContainer';
import InBoxMenuListContainer from '../../common/containers/InBoxMenuListContainer';
import InBoxMenuListContainerSmall from '../../common/containers/InBoxMenuListContainerSmall';
import ModifyReviewDocumentContentContainer from '../containers/ModifyReviewDocumentContentContainer';

const items = [
  { title: '알리미 리스트', link: '/inbox' },
  { title: '새 알리미', link: '/add-docs' },
];

const contentsLink = { link: '/inbox' };

export default function ModifyReviewDocumentPage({ match }) {
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
          content={(
            <ModifyReviewDocumentContentContainer
              contentsLink={contentsLink}
              id={match.params.id}
            />
          )}
        />
      )}
      {isMobile && (
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
      )}
    </>
  );
}
