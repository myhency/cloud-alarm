/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import ProgressToolBar from '../components/ProgressToolBar';

import { NextButton, BackButton } from '../../common/components/Buttons';
import { useStyles } from '../../common/components/Styles';
import {
  CssTextField,
} from '../../common/components/TextFields';

import {
  clearSevenBreadItemDocument,
  clearCreatedSevenBreadItem,
  clearSevenBreadItemId,
  // clearSevenBreadItem,
  createSevenBreadItemDocument,
} from '../../state/slice';

export default function ReviewDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failOpen, setFailOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { sevenBreadItemDocument } = useSelector((state) => ({
    sevenBreadItemDocument: state.sevenBreadItemDocument,
  }));
  const { createdSevenBreadItem } = useSelector((state) => ({
    createdSevenBreadItem: state.createdSevenBreadItem,
  }));

  function handleOnClick(event) {
    if (
      sevenBreadItemDocument.itemName === ''
      || sevenBreadItemDocument.itemCode === ''
      || sevenBreadItemDocument.majorHandler === ''
      || sevenBreadItemDocument.capturedDate === ''
    ) {
      setWarningOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        createSevenBreadItemDocument({
          itemName: sevenBreadItemDocument.itemName,
          itemCode: sevenBreadItemDocument.itemCode,
          majorHandler: sevenBreadItemDocument.majorHandler,
          capturedDate: sevenBreadItemDocument.capturedDate,
          theme: sevenBreadItemDocument.theme,
        }),
      );
    }
  }

  useEffect(() => {
    if (sevenBreadItemDocument.itemName === '' && sevenBreadItemDocument.itemCode === '') {
      history.push('/seven-bread/item/add');
    }
  }, []);

  useEffect(() => {
    if (!createdSevenBreadItem.result) {
      setFailOpen(true);
    }

    if (createdSevenBreadItem.result && createdSevenBreadItem.id) {
      setSuccessOpen(true);
    }
    return () => {
    };
  }, [createdSevenBreadItem]);

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
    dispatch(clearCreatedSevenBreadItem());
    dispatch(clearSevenBreadItemDocument());
    dispatch(clearSevenBreadItemId());
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
            {sevenBreadItemDocument.itemName}
            (
            {sevenBreadItemDocument.itemCode}
            )에 대한 요약
          </Typography>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              name="majorHandler"
              label="수급주체"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={sevenBreadItemDocument.majorHandler === 'W' ? '외인'
                : sevenBreadItemDocument.majorHandler === 'G' ? '기관'
                  : '외인/기관'}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              required
              name="capturedDate"
              label="포착일"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={sevenBreadItemDocument.capturedDate}
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
              value={sevenBreadItemDocument.theme}
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
          종목저장이 성공하였습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            확인을 클릭하여 007빵 리스트에서 등록한 종목을 확인하세요.
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
