import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  CssBaseline, makeStyles, Grid,
} from '@material-ui/core';

import {
  setMobileOpen,
  loadSignProgressStatus,
} from '../../state/slice';

import DashboardAppBar from '../components/DashboardAppBar';
import DashboardNavBar from '../components/DashboardNavBar';
import ContractBox from '../components/ContractBox';
import OfficialNoteBox from '../components/OfficialNoteBox';
import SignProgressBox from '../components/SignProgressBox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

/**
 * 박스간 간격 조정
 * @param {spacing} props
 *
 */

function DashboardPage({ window, localeText }) {
  const dispatch = useDispatch();
  const spacing = 2;
  const styles = useStyles();

  React.useEffect(() => {
    dispatch(loadSignProgressStatus());
  }, []);

  const { mobileOpen, signProgressStatus } = useSelector((state) => ({
    mobileOpen: state.mobileOpen,
    signProgressStatus: state.signProgressStatus,
  }));

  const progressBoxes = [
    { title: localeText.progress_card1, content: signProgressStatus.signWait },
    { title: localeText.progress_card2, content: signProgressStatus.signProgress },
    { title: localeText.progress_card3, content: signProgressStatus.confirmWait },
    { title: localeText.progress_card4, content: signProgressStatus.confirmComplete },
  ];

  const handleDrawerToggle = () => {
    dispatch(setMobileOpen(!mobileOpen));
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.root}>
      <CssBaseline />
      <DashboardAppBar
        localeText={localeText}
        onClick={handleDrawerToggle}
      />
      <DashboardNavBar
        localeText={localeText}
        container={container}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <Grid container className={styles.root} spacing={spacing}>
          <Grid item xs={12}>
            <Grid container justifycontent="center" spacing={spacing}>
              {progressBoxes.map((progressBox) => (
                <Grid item xs={6} sm={3} key={progressBox.title}>
                  <SignProgressBox
                    title={progressBox.title}
                    content={progressBox.content}
                    localeText={localeText}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifycontent="center" spacing={spacing}>
              <ContractBox localeText={localeText} />
              <OfficialNoteBox localeText={localeText} />
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default DashboardPage;
