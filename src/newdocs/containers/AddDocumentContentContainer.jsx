import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import { indigo } from '@material-ui/core/colors';
import ProgressToolBar from '../components/ProgressToolBar';

import { NextButton } from '../components/Buttons';

import {
  loadStockItemList,
  setAlarmDocument,
  loadAlarmIdByItemCode,
  clearAlarmId,
} from '../../state/slice';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    // backgroundColor: '#FFFFFF',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    height: '60px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  contentRoot: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '5px',
  },
  exitButton: {
    marginLeft: '10px',
  },
  nextButton: {
    marginRight: '10px',
    backgroundColor: '#303C6C',
  },
  stepTitle: {
    '& > *': {
      margin: theme.spacing(0),
    },
    color: theme.palette.text.secondary,
    display: 'flex',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  stepContent: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  dropZone: {
    backgroundColor: 'pink',
    marginTop: theme.spacing(4),
    width: '30%',
    height: '50px',
    overflowX: 'auto',
    // marginBottom: theme.spacing(2),
    margin: 'auto',
  },
  formControl: {
    margin: theme.spacing(1, 2),
    minWidth: 170,
    display: 'flex',
    justifyContent: 'space-between',
    height: '5px',
  },
  baseBox: {
    display: 'flex',
    border: '1px solid',
    borderColor: '#D3D3D3',
    borderRadius: '5px 5px 5px 5px',
    margin: '0 15px 0 15px',
    padding: '10px',
    justifyContent: 'center',
  },
}));

const CssAutocomplete = withStyles({
  root: {
    '& label.Mui-focused': {
      color: indigo[700],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: indigo[700],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: indigo[700],
      },
      '&:hover fieldset': {
        borderColor: indigo[700],
      },
      '&.Mui-focused fieldset': {
        borderColor: indigo[700],
      },
    },
  },
})(Autocomplete);

export default function AddDocumentContentContainer({ contentsLink }) {
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
    stockItems: state.stockItems,
  }));

  console.log('items:', items);

  const { alarmId } = useSelector((state) => ({
    alarmId: state.alarmId,
  }));

  useEffect(() => {
    dispatch(loadStockItemList());
    console.log(alarmId.alarmId);
    if (alarmId.alarmId !== undefined && alarmId.alarmId !== 0) {
      setExistOpen(true);
    } else if (alarmId.alarmId === undefined) {
      dispatch(
        setAlarmDocument({
          itemName: items.itemName,
          itemCode: items.itemCode,
          theme: items.theme,
        }),
      );
      history.push(contentsLink.link);
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
    console.log(alarmId);
    console.log(`${contentsLink.link}/${alarmId.alarmId}`);
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
      <div className={classes.toolbar} />
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
