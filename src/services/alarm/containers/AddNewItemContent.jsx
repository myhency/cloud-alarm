import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Desktop } from '../../../utils/screenSelector';
import ProgressToolBar from '../components/ProgressToolBar';

import { useStyles } from '../../../common/components/Styles';
import { NextButton } from '../../../common/components/Buttons';
import { CssAutocomplete } from '../../../common/components/TextFields';

import {
  loadStockItemList,
} from '../../../state/stockItemSlice';

import {
  setNewAlarm,
  loadAlarmIdByItemCode,
  clearAlarmId,
} from '../../../state/alarmSlice';

export default function NewItemContent({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [items, setItems] = React.useState({
    itemName: '',
    itemCode: '',
    theme: '',
  });
  const [open, setOpen] = React.useState(false);
  const [existOpen, setExistOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { stockItems } = useSelector((state) => ({
    stockItems: state.stockItem.stockItems,
  }));

  const { alarmId } = useSelector((state) => ({
    alarmId: state.alarm.alarmId,
  }));

  const { newAlarm } = useSelector((state) => ({
    newAlarm: state.alarm.newAlarm,
  }));

  useEffect(() => {
    dispatch(loadStockItemList());
    if (alarmId.alarmId !== undefined && alarmId.alarmId !== 0) {
      setExistOpen(true);
    } else if (alarmId.alarmId === undefined) {
      dispatch(
        setNewAlarm({
          ...newAlarm,
          ...items,
        }),
      );
      history.push('/service/alarm/new/ready');
      dispatch(clearAlarmId());
    }
  }, [alarmId]);

  function handleOnClick() {
    if (items.itemName === '') {
      setOpen(true);
    } else {
      // 입력한 종목이 알리미 리스트에 있는지 확인.
      dispatch(loadAlarmIdByItemCode(items.itemCode));
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleExistClose() {
    setExistOpen(false);
    history.push(`${contentsLink.link}/${alarmId.alarmId}`);
    dispatch(clearAlarmId());
  }

  function handleOnChange(e, value) {
    if (value === null) {
      setItems({
        itemName: '',
        itemCode: '',
        theme: '',
      });
    } else {
      setItems({
        itemName: value.itemName,
        itemCode: value.itemCode,
        theme: value.theme,
      });
    }
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
            종목추가
          </Typography>
          <Box style={{ margin: '30px 0 30px 0' }}>
            <CssAutocomplete
              id="combo-box"
              options={stockItems}
              getOptionLabel={(stockItem) => stockItem.itemName}
              getOptionSelected={(option, value) => option.itemName === value.itemName}
              renderInput={(params) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <TextField {...params} label="종목명" variant="outlined" />
              )}
              onChange={(event, value) => handleOnChange(event, value)}
            />
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="row">
              <NextButton onClick={handleOnClick}>
                다음
              </NextButton>
            </Box>
            <Box display="flex" flexDirection="row-reverse" flexGrow="1" />
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              종목명을 입력하지 않으셨나요?
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                정확한 종목명을 입력하였는지 확인해 주세요. 종목명을 입력하지
                않았거나 정확하지 않은 종목명을 입력하셨다면 다음단계로 진행할
                수 없습니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={existOpen}
            onClose={handleExistClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              입력하신 종목은 이미 알리미 리스트에 등록되어 있습니다.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                확인버튼을 클릭하면 알람 수정화면으로 이동합니다.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleExistClose} color="secondary" autoFocus>
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
