import * as React from "react";
import { Mobile, Desktop } from "../../../utils/screenSelector";
import DrawerLayout from "../../../common/layouts/DrawerLayout";
import MobileDrawerLayout from "../../../common/layouts/MobileDrawerLayout";
import PageTitleContainer from "../../../common/containers/PageTitleContainer";
import UnauthedMenuListContainer from "../../../common/containers/UnauthedMenuListContainer";
import InBoxMenuListContainerSmall from "../../../common/containers/InBoxMenuListContainerSmall";
import SevenBreadStatisticsContentContainer from "../containers/SevenBreadStatisticsContentContainer";
import SevenBreadStatisticsContentContainerWithDashboard from "../containers/SevenBreadStatisticsContentContainerWithDashboard";
// import MobileSevenBreadStatisticsContentContainer from "../containers/MobileSevenBreadStatisticsContentContainer";

const items = [
  { title: "007빵 통계", link: "/service/seven-bread/statistics" },
];

export default function SevenBreadStatisticsPage() {
  return (
    <>
      <Desktop>
        <DrawerLayout
          pageTitleContainer={<PageTitleContainer items={items} />}
          menuList={<UnauthedMenuListContainer />}
          content={<SevenBreadStatisticsContentContainerWithDashboard />}
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
