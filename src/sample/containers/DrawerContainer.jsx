import React from 'react';
import HDrawer from '../components/_Drawer';

export default function DrawerContainer({
  drawerOpen,
  handleDrawerClose,
  children,
}) {
  console.log(children);
  const {
    totalCount,
    state1Count,
    state2Count,
    state3Count,
    state4Count,
  } = {
    totalCount: 1,
    state1Count: 2,
    state2Count: 3,
    state3Count: 4,
    state4Count: 5,
  };

  return (
    <HDrawer
      drawerOpen={drawerOpen}
      handleDrawerClose={handleDrawerClose}
      totalCount={totalCount}
      state1Count={state1Count}
      state2Count={state2Count}
      state3Count={state3Count}
      state4Count={state4Count}
    >
      {children}
    </HDrawer>
  );
}
