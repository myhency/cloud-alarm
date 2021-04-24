import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HAppBarContainer from '../containers/AppBarContainer';
import HDrawerContainer from '../containers/DrawerContainer';
import DrawerButtonGroup from '../components/DrawerButtonGroup';

/**
 * children container 에서 공용으로 사용되는 state 들을 관리한다
 * 이 page 의 layout 을 잡아준다
 */
function SampleDrawerPage(props) {
  const { children } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing(3),
      backgroundColor: '#FFFFFF',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HAppBarContainer
        drawerOpen={drawerOpen}
        handleDrawerOpen={handleDrawerOpen}
      />
      <HDrawerContainer
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
      >
        <DrawerButtonGroup />
      </HDrawerContainer>
      { children }
    </div>
  );
}

export default SampleDrawerPage;
