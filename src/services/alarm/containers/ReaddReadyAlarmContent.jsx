/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
import { Desktop } from '../../../utils/screenSelector';
import ProgressToolBar from '../components/ProgressToolBar';

import { useStyles } from '../../../common/components/Styles';
import { NextButton, BackButton } from '../../../common/components/Buttons';
import { CssTextField } from '../../../common/components/TextFields';

import {
  setReaddAlarm,
  loadHistoryAlarmDetail,
} from '../../../state/alarmSlice';

export default function ReaddReadyAlarmContent({ contentsLink, id }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { readdAlarm } = useSelector((state) => ({
    readdAlarm: state.alarm.alarmDetail,
  }));

  const [open, setOpen] = React.useState(false);

  const [itemInfo, setItemInfo] = React.useState({
    // TODO. Review에서 뒤로 버튼으로 넘어왔을 때 alarmDocument 내용으로 보여줘야 함
    ...readdAlarm,
  });

  useEffect(() => {
    dispatch(loadHistoryAlarmDetail(id));
  }, []);

  useEffect(() => {
    setItemInfo({ ...readdAlarm });
  }, [readdAlarm]);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  function handleOnClick(event) {
    if (!itemInfo.recommendPrice || !itemInfo.losscutPrice) {
      setOpen(true); // 필수항목 입력 알람
    } else {
      event.preventDefault();
      dispatch(
        setReaddAlarm({
          ...readdAlarm,
          result: undefined,
          itemName: itemInfo.itemName,
          itemCode: itemInfo.itemCode,
          recommendPrice: itemInfo.recommendPrice || readdAlarm.recommendPrice,
          losscutPrice: itemInfo.losscutPrice || readdAlarm.losscutPrice,
          comment: itemInfo.comment || readdAlarm.comment,
          theme: itemInfo.theme || readdAlarm.theme,
          alarmStatus: itemInfo.alarmStatus || readdAlarm.alarmStatus,
        }),
      );
      history.push(`/service/alarm/readd/review/${id}`);
    }
  }

  function handleOnBackClick() {
    history.goBack();
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
            style={{ marginTop: '10px', marginBottom: '10px' }}
          >
            손절알림 재등록
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
              value={itemInfo.itemName}
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
              value={itemInfo.itemCode}
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
              value={itemInfo.recommendPrice === '' ? itemInfo.recommendPrice
                : itemInfo.recommendPrice ? itemInfo.recommendPrice
                  : readdAlarm.recommendPrice}
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
              value={itemInfo.losscutPrice === '' ? itemInfo.losscutPrice
                : itemInfo.losscutPrice ? itemInfo.losscutPrice
                  : readdAlarm.losscutPrice}
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
              value={itemInfo.comment === '' ? itemInfo.comment
                : itemInfo.comment ? itemInfo.comment
                  : readdAlarm.comment}
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
              value={itemInfo.theme === '' ? itemInfo.theme
                : itemInfo.theme ? itemInfo.theme
                  : readdAlarm.theme}
            />
          </Box>
          <Box display="flex" justifyContent="space-between">
            <BackButton onClick={handleOnBackClick}>
              뒤로
            </BackButton>
            <NextButton onClick={(e) => handleOnClick(e, contentsLink.link)}>
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
