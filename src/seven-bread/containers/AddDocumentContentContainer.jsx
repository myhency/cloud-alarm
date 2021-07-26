import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import ProgressToolBar from '../components/ProgressToolBar';

import { NextButton } from '../../common/components/Buttons';

import { CssAutocomplete } from '../../common/components/TextFields';
import { useStyles } from '../../common/components/Styles';

import {
  loadStockItemList,
  setSevenBreadItemDocument,
  loadSevenBreadItemByItemCode,
  clearSevenBreadItemId,
  setSevenBreadItemId,
} from '../../state/slice';

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

  const { sevenBreadItemId } = useSelector((state) => ({
    sevenBreadItemId: state.sevenBreadItemId,
  }));

  useEffect(() => {
    dispatch(loadStockItemList());
    console.log(setSevenBreadItemId);
    if (sevenBreadItemId.sevenBreadItemId !== undefined
      && sevenBreadItemId.sevenBreadItemId !== 0
    ) {
      setExistOpen(true);
    } else if (sevenBreadItemId.sevenBreadItemId === undefined) {
      dispatch(
        setSevenBreadItemDocument({
          itemName: items.itemName,
          itemCode: items.itemCode,
          theme: items.theme,
        }),
      );
      history.push(contentsLink.link);
      dispatch(clearSevenBreadItemId());
    }
  }, [sevenBreadItemId]);

  function handleOnClick() {
    if (items.itemName === '') {
      setOpen(true);
    } else {
      // 입력한 종목이 알리미 리스트에 있는지 확인.
      dispatch(loadSevenBreadItemByItemCode(items.itemCode));
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleExistCancelClose() {
    setExistOpen(false);
  }

  function handleExistClose() {
    setExistOpen(false);
    console.log(sevenBreadItemId);
    console.log(`${contentsLink.link}/${sevenBreadItemId.sevenBreadItemId}`);
    history.push(`${contentsLink.link}/${sevenBreadItemId.sevenBreadItemId}`);
    dispatch(clearSevenBreadItemId());
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
              입력하신 종목은 이미 007빵 리스트에 등록되어 있습니다.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                확인버튼을 클릭하면 정보입력 화면으로 이동합니다. (기존종목이 업데이트됩니다)
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleExistClose} color="secondary" autoFocus>
                확인
              </Button>
              <Button onClick={handleExistCancelClose} color="secondary">
                취소
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
