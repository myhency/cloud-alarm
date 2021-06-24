import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import ProgressToolBar from '../components/ProgressToolBar';

import { NextButton, BackButton } from '../../common/components/Buttons';
import { CssTextField } from '../../common/components/TextFields';
import { useStyles } from '../../common/components/Styles';

import {
  setAlarmDocument,
  loadAlarmDetail,
} from '../../state/slice';

export default function ModifyReadyDocumentContentContainer({ contentsLink, id }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { alarmDetail } = useSelector((state) => ({
    alarmDetail: state.alarmDetail,
  }));

  useEffect(() => {
    dispatch(loadAlarmDetail(id));
  }, []);

  const [open, setOpen] = React.useState(false);

  const [itemInfo, setItemInfo] = React.useState({
    // TODO. Review에서 뒤로 버튼으로 넘어왔을 때 alarmDocument 내용으로 보여줘야 함
    itemName: alarmDetail.itemName,
    itemCode: alarmDetail.itemCode,
    recommendPrice: alarmDetail.recommendPrice,
    losscutPrice: alarmDetail.losscutPrice,
    comment: alarmDetail.comment,
    theme: alarmDetail.theme,
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  function handleOnClick(event, link) {
    if (alarmDetail.itemName === '' || alarmDetail.itemCode === ''
    || (itemInfo.recommendPrice === '' && alarmDetail.recommendPrice === '') || (itemInfo.losscutPrice === '' && alarmDetail.losscutPrice === '')) {
      setOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        setAlarmDocument({
          itemName: alarmDetail.itemName,
          itemCode: alarmDetail.itemCode,
          recommendPrice: itemInfo.recommendPrice || alarmDetail.recommendPrice,
          losscutPrice: itemInfo.losscutPrice || alarmDetail.losscutPrice,
          comment: itemInfo.comment || alarmDetail.comment,
          theme: itemInfo.theme || alarmDetail.theme,
          alarmStatus: itemInfo.alarmStatus || alarmDetail.alarmStatus,
        }),
      );
      history.push(`${link}/${id}`);
    }
  }

  function handleOnBackClick() {
    history.goBack();
  }

  function handleClose() {
    setOpen(false);
  }

  const isDesktop = useMediaQuery({
    query: '(min-width: 701px) and (max-width: 2048px)',
  });

  return (
    <main className={classes.content}>
      {isDesktop && (
        <div className={classes.toolbar} />
      )}
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
            정보수정
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
              value={alarmDetail.itemName}
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
              value={alarmDetail.itemCode}
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
              value={itemInfo.recommendPrice ? itemInfo.recommendPrice : alarmDetail.recommendPrice}
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
              value={itemInfo.losscutPrice ? itemInfo.losscutPrice : alarmDetail.losscutPrice}
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
              value={itemInfo.comment ? itemInfo.comment : alarmDetail.comment}
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
              value={itemInfo.theme ? itemInfo.theme : alarmDetail.theme}
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
