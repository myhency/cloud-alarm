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
  const { pathname } = history.location;

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { alarmDocument } = useSelector((state) => ({
    alarmDocument: state.alarm.alarm,
  }));

  console.log(alarmDocument);

  useEffect(() => {
    if (alarmDocument.itemName === '' && alarmDocument.itemCode === '' && !pathname.includes('update')) {
      history.push('/service/alarm/new');
    }
  }, []);

  const [itemInfo, setItemInfo] = React.useState({
    itemName: alarmDocument.itemName,
    itemCode: alarmDocument.itemCode,
    recommendPrice: '',
    losscutPrice: '',
    comment: '',
    theme: alarmDocument.theme,
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  function handleOnClick(event, link) {
    if ((itemInfo.itemName === '' || itemInfo.itemCode === ''
    || itemInfo.recommendPrice === '' || itemInfo.losscutPrice === '')
    && (alarmDocument.itemName === '' || alarmDocument.itemCode === ''
    || alarmDocument.recommendPrice === '' || alarmDocument.losscutPrice === '')) {
      setOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        setNewAlarm({
          itemName: alarmDocument.itemName,
          itemCode: alarmDocument.itemCode,
          recommendPrice:
            itemInfo.recommendPrice || alarmDocument.recommendPrice,
          losscutPrice: itemInfo.losscutPrice || alarmDocument.losscutPrice,
          comment: itemInfo.comment || alarmDocument.comment,
          theme: itemInfo.theme || alarmDocument.theme,
        }),
      );
      history.push(link);
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
              value={alarmDocument.itemName}
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
              value={alarmDocument.itemCode}
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
                  : alarmDocument.recommendPrice) || ''
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
                  : alarmDocument.losscutPrice) || ''
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
                (itemInfo.comment ? itemInfo.comment : alarmDocument.comment)
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
                (itemInfo.theme ? itemInfo.theme : alarmDocument.theme) || ''
              }
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
