import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Box,
  Button,
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
  setNewAlarm,
  clearAlarmDetail,
} from '../../../state/alarmSlice';

export default function ReadyItemContent({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { newAlarm } = useSelector((state) => ({
    newAlarm: state.alarm.newAlarm,
  }));

  useEffect(() => {
    if (newAlarm.itemName === '' && newAlarm.itemCode === '') {
      history.push('/service/alarm/new/add');
    }
  }, []);

  const [itemInfo, setItemInfo] = React.useState({
    ...newAlarm,
  });

  console.log(itemInfo);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  /**
   * 다음 버튼을 클릭할 때 실행됨.
   * @param {*} event
   * @param {*} link
   */
  function handleOnClick(event) {
    if (!itemInfo.recommendPrice || !itemInfo.losscutPrice) {
      setOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        setNewAlarm({
          ...newAlarm,
          ...itemInfo,
        }),
      );
      history.push('/service/alarm/new/review');
    }
  }

  function handleOnBackClick() {
    history.goBack();
    dispatch(clearAlarmDetail());
  }

  function handleClose() {
    setOpen(false);
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
        <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
          <Typography
            variant="h4"
            style={{ marginTop: '10px', marginBottom: '10px', color: '#303C6C' }}
          >
            정보입력
          </Typography>
          <Box style={{ margin: '30px 0 0 0' }}>
            <CssTextField
              required
              label="종목명"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={newAlarm.itemName}
            />
          </Box>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              label="종목코드"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={newAlarm.itemCode}
            />
          </Box>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              name="recommendPrice"
              label="돌파가격"
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={
                (itemInfo.recommendPrice
                  ? itemInfo.recommendPrice
                  : newAlarm.recommendPrice) || ''
              }
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              required
              name="losscutPrice"
              label="손절가격"
              variant="outlined"
              fullWidth
              onChange={handleOnChange}
              value={
                (itemInfo.losscutPrice
                  ? itemInfo.losscutPrice
                  : newAlarm.losscutPrice) || ''
              }
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
              onChange={handleOnChange}
              value={
                (itemInfo.comment ? itemInfo.comment : newAlarm.comment)
                || ''
              }
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
              onChange={handleOnChange}
              value={
                (itemInfo.theme ? itemInfo.theme : newAlarm.theme) || ''
              }
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <BackButton onClick={handleOnBackClick}>
              뒤로
            </BackButton>
            <NextButton onClick={handleOnClick}>
              다음
            </NextButton>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              필수항목을 입력하지 않으셨나요?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                필수항목 필드를 작성하지 않으셨다면 다음단계로 진행할 수
                없습니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
