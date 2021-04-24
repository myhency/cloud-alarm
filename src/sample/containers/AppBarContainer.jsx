import React from 'react';
import HAppBar from '../components/_AppBar';

export default function AppBarContainer({
  drawerOpen,
  handleDrawerOpen,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const profileMenuOpen = Boolean(anchorEl);

  const handleProfileButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HAppBar
      profileMenuOpen={profileMenuOpen}
      handleProfileMenuClose={handleProfileMenuClose}
      anchorEl={anchorEl}
      drawerOpen={drawerOpen}
      handleDrawerOpen={handleDrawerOpen}
      handleProfileButton={handleProfileButton}
    />
  );
}
