import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Box,
  Button,
  TextField,
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
  CssAutocomplete,
} from '../../common/components/TextFields';

import {
  setSevenBreadItemDocument,
  clearAlarmDetail,
} from '../../state/slice';

const handlers = [
  { title: '기관', value: 'G' },
  { title: '외인', value: 'W' },
  { title: '기관/외인', value: 'B' },
];

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (`0${1 + date.getMonth()}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);

  return `${year}-${month}-${day}`;
}

export default function ReadyDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();
  const today = getToday();

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { sevenBreadItemDocument } = useSelector((state) => ({
    sevenBreadItemDocument: state.sevenBreadItemDocument,
  }));

  useEffect(() => {
    if (sevenBreadItemDocument.itemName === '' && sevenBreadItemDocument.itemCode === '') {
      history.push('/seven-bread/item/add');
    }
  }, []);

  const [itemInfo, setItemInfo] = React.useState({
    itemName: sevenBreadItemDocument.itemName,
    itemCode: sevenBreadItemDocument.itemCode,
    theme: sevenBreadItemDocument.theme,
    majorHandler: '',
    capturedDate: '',
  });

  function handleOnChange(event, v) {
    if (v) {
      setItemInfo({
        ...itemInfo,
        majorHandler: v.value,
      });
      return;
    }

    const { name, value } = event.target;

    setItemInfo({
      ...itemInfo,
      [name]: value,
    });
  }

  function handleOnClick(event, link) {
    if ((itemInfo.itemName === '' || itemInfo.itemCode === ''
    || itemInfo.majorHandler === '' || itemInfo.capturedDate === '')
    && (sevenBreadItemDocument.itemName === '' || sevenBreadItemDocument.itemCode === ''
    || sevenBreadItemDocument.majorHandler === '' || sevenBreadItemDocument.capturedDate === '')) {
      setOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        setSevenBreadItemDocument({
          itemName: sevenBreadItemDocument.itemName,
          itemCode: sevenBreadItemDocument.itemCode,
          majorHandler:
            itemInfo.majorHandler || sevenBreadItemDocument.majorHandler,
          capturedDate: itemInfo.capturedDate || sevenBreadItemDocument.capturedDate || today,
          theme: itemInfo.theme || sevenBreadItemDocument.theme,
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
              value={sevenBreadItemDocument.itemName}
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
              value={sevenBreadItemDocument.itemCode}
            />
          </Box>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssAutocomplete
              name="majorHandler"
              id="combo-box"
              options={handlers}
              getOptionLabel={(handler) => handler.title}
              getOptionSelected={(option, value) => option.title === value.title}
              renderInput={(params) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <TextField required {...params} label="수급주체" variant="outlined" />
              )}
              onChange={(event, value) => handleOnChange(event, value)}
            />
          </Box>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              name="capturedDate"
              label="포착일"
              type="date"
              defaultValue={today}
              variant="outlined"
              fullWidth
              onChange={(e, value) => handleOnChange(e, value)}
              InputLabelProps={{
                shrink: true,
              }}
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
                (itemInfo.theme ? itemInfo.theme : sevenBreadItemDocument.theme) || ''
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
