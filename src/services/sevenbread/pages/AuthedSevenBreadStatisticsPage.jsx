import * as React from "react";
import { Mobile, Desktop } from "../../../utils/screenSelector";
import DrawerLayout from "../../../common/layouts/DrawerLayout";
import MobileDrawerLayout from "../../../common/layouts/MobileDrawerLayout";
import PageTitleContainer from "../../../common/containers/PageTitleContainer";
import InBoxMenuListContainer from "../../../common/containers/InBoxMenuListContainer";
import InBoxMenuListContainerSmall from "../../../common/containers/InBoxMenuListContainerSmall";
import SevenBreadStatisticsContentContainer from "../containers/SevenBreadStatisticsContentContainer";
import AuthedSevenBreadStatisticsContentContainerWithDashboard from "../containers/AuthedSevenBreadStatisticsContentContainerWithDashboard";
// import MobileSevenBreadStatisticsContentContainer from "../containers/MobileSevenBreadStatisticsContentContainer";

const items = [
  { title: "007빵 통계", link: "/service/seven-bread/members/statistics" },
];

export default function AuthedSevenBreadStatisticsPage() {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          content={<AuthedSevenBreadStatisticsContentContainerWithDashboard />}
        />
      </Desktop>
      {/* <Mobile>
        <MobileDrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<InBoxMenuListContainer />}
          menuListSmall={<InBoxMenuListContainerSmall />}
          content={<MobileSevenBreadStatisticsContentContainer />}
        />
      </Mobile> */}
    </>
  );
}
