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
  clearCreatedAlarm,
  createAlarmDocument,
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
  const { createdAlarm } = useSelector((state) => ({
    createdAlarm: state.alarm.createdAlarm,
  }));

  function handleOnClick(event) {
    if (
      alarmDocument.itemName === ''
      || alarmDocument.itemCode === ''
      || alarmDocument.recommendPrice === ''
      || alarmDocument.losscutPrice === ''
    ) {
      setWarningOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        createAlarmDocument({
          itemName: alarmDocument.itemName,
          itemCode: alarmDocument.itemCode,
          recommendPrice: alarmDocument.recommendPrice,
          losscutPrice: alarmDocument.losscutPrice,
          comment: alarmDocument.comment,
          theme: alarmDocument.theme,
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
    if (!createdAlarm.result) {
      setFailOpen(true);
    }

    if (createdAlarm.result && createdAlarm.createdDate) {
      setSuccessOpen(true);
    }
    return () => {
    };
  }, [createdAlarm]);

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
    dispatch(clearCreatedAlarm());
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
            검토 및 저장
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: '10px', marginBottom: '10px', color: '#303C6C' }}
          >
            {alarmDocument.itemName}
            (
            {alarmDocument.itemCode}
            )에 대한 요약
          </Typography>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              name="recommendPrice"
              label="돌파가격"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDocument.recommendPrice}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              required
              name="losscutPrice"
              label="손절가격"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDocument.losscutPrice}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              name="comment"
              label="코멘트"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDocument.comment}
            />
          </Box>
          <Box style={{ margin: '10px 0 30px 0' }}>
            <CssTextField
              name="theme"
              label="테마"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={alarmDocument.theme}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <BackButton onClick={handleOnBackClick}>
              뒤로
            </BackButton>
            <NextButton onClick={(e) => handleOnClick(e)}>
              저장
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
          입력한 내용에 문제가 있습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            필수항목 필드값이 없거나 페이지가 새로고침되어 내용이 삭제되었을
            가능성이 있습니다. 입력한 내용을 다시 확인해 주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            확인
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
          시스템오류로 인해 알람이 저장되지 않았습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            관리자에게 문의하거나 잠시후 다시 시도해 주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            확인
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
          알람저장이 성공하였습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            확인을 클릭하여 알리미 리스트에서 등록한 알람을 확인하세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} color="secondary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
