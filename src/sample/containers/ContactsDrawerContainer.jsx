import React from 'react';
import HDrawer from '../components/_Drawer';

export default function ContactsDrawerContainer({
  drawerOpen,
  handleDrawerClose,
  children,
}) {
  const {
    totalCount,
    state1Count,
  } = {
    totalCount: 1,
    state1Count: 2,
  };

  return (
    <HDrawer
      drawerOpen={drawerOpen}
      handleDrawerClose={handleDrawerClose}
      totalCount={totalCount}
      state1Count={state1Count}
    >
      {children}
    </HDrawer>
  );
}
