import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import { Desktop } from '../../../utils/screenSelector';
import ProgressToolBar from '../components/ProgressToolBar';

import { useStyles } from '../../../common/components/Styles';
import { NextButton, BackButton } from '../../../common/components/Buttons';
import { CssTextField } from '../../../common/components/TextFields';

import {
  clearNewAlarm,
  clearAlarmId,
  createAlarm,
} from '../../../state/alarmSlice';

export default function ReviewDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failOpen, setFailOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { newAlarm } = useSelector((state) => ({
    newAlarm: state.alarm.newAlarm,
  }));

  function handleOnClick(event) {
    if (!newAlarm.itemName
      || !newAlarm.itemCode
      || !newAlarm.recommendPrice
      || !newAlarm.losscutPrice
    ) {
      setWarningOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        createAlarm({
          ...newAlarm,
        }),
      );
    }
  }

  useEffect(() => {
    if (!newAlarm.itemName || !newAlarm.itemCode) {
      history.push('/service/alarm/new/add');
    }
  }, []);

  useEffect(() => {
    if (newAlarm.result === undefined) return;

    if (!newAlarm.result) {
      setFailOpen(true);
    }

    if (newAlarm.result && newAlarm.alarmId) {
      setSuccessOpen(true);
    }
  }, [newAlarm]);

  function handleOnBackClick() {
    history.goBack();
  }

  function handleClose() {
    setWarningOpen(false);
    setFailOpen(false);
  }

  function handleSuccessClose() {
    setSuccessOpen(false);
    history.push(contentsLink.link);
    dispatch(clearNewAlarm());
    dispatch(clearAlarmId());
  }

  return (
    <main className={classes.content}>
      <Desktop>
        <div className={classes.toolbar} />
      </Desktop>
      <ProgressToolBar />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
          }}
        >
          <Typography
            variant="h4"
            style={{ marginTop: '10px', marginBottom: '10px', color: '#303C6C' }}
          >
            ?????? ??? ??????
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: '10px', marginBottom: '10px', color: '#303C6C' }}
          >
            {newAlarm.itemName}
            (
            {newAlarm.itemCode}
            )??? ?????? ??????
          </Typography>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              name="recommendPrice"
              label="????????????"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={newAlarm.recommendPrice}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              required
              name="losscutPrice"
              label="????????????"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={newAlarm.losscutPrice}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              name="comment"
              label="?????????"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={newAlarm.comment}
            />
          </Box>
          <Box style={{ margin: '10px 0 30px 0' }}>
            <CssTextField
              name="theme"
              label="??????"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={newAlarm.theme}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <BackButton onClick={handleOnBackClick}>
              ??????
            </BackButton>
            <NextButton onClick={(e) => handleOnClick(e)}>
              ??????
            </NextButton>
          </Box>
        </div>
      </div>
      <Dialog
        open={warningOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ????????? ????????? ????????? ????????????.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ???????????? ???????????? ????????? ???????????? ?????????????????? ????????? ???????????????
            ???????????? ????????????. ????????? ????????? ?????? ????????? ?????????.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={failOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ?????????????????? ?????? ????????? ???????????? ???????????????.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ??????????????? ??????????????? ????????? ?????? ????????? ?????????.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={successOpen}
        onClose={handleSuccessClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ??????????????? ?????????????????????.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ????????? ???????????? ????????? ??????????????? ????????? ????????? ???????????????.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} color="secondary" autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
