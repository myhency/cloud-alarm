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

import { NextButton } from '../../../common/components/Buttons';

import { CssAutocomplete } from '../../../common/components/TextFields';
import { useStyles } from '../../../common/components/Styles';

import {
  setSevenBreadItemDocument,
  loadSevenBreadItemByItemCode,
  clearSevenBreadItemId,
} from '../../../state/sevenBreadSlice';

import {
  loadStockItemList,
} from '../../../state/stockItemSlice';

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
    stockItems: state.stockItem.stockItems,
  }));

  const { sevenBreadItemId } = useSelector((state) => ({
    sevenBreadItemId: state.sevenBread.sevenBreadItemId,
  }));

  useEffect(() => {
    dispatch(loadStockItemList());
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
      // ????????? ????????? ????????? ???????????? ????????? ??????.
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
            ????????????
          </Typography>
          <Box style={{ margin: '30px 0 30px 0' }}>
            <CssAutocomplete
              id="combo-box"
              options={stockItems}
              getOptionLabel={(stockItem) => stockItem.itemName}
              getOptionSelected={(option, value) => option.itemName === value.itemName}
              renderInput={(params) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <TextField {...params} label="?????????" variant="outlined" />
              )}
              onChange={(event, value) => handleOnChange(event, value)}
            />
          </Box>
          <Box display="flex">
            <Box display="flex" flexDirection="row">
              <NextButton onClick={handleOnClick}>
                ??????
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
              ???????????? ???????????? ????????????????
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ????????? ???????????? ?????????????????? ????????? ?????????. ???????????? ????????????
                ???????????? ???????????? ?????? ???????????? ?????????????????? ??????????????? ?????????
                ??? ????????????.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" autoFocus>
                ??????
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
              ???????????? ????????? ?????? 007??? ???????????? ???????????? ????????????.
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ??????????????? ???????????? ???????????? ???????????? ???????????????. (??????????????? ?????????????????????)
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleExistClose} color="secondary" autoFocus>
                ??????
              </Button>
              <Button onClick={handleExistCancelClose} color="secondary">
                ??????
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
