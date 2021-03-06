/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
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
import { Desktop } from '../../../utils/screenSelector';
import ProgressToolBar from '../components/ProgressToolBar';

import { NextButton, BackButton } from '../../../common/components/Buttons';
import { useStyles } from '../../../common/components/Styles';
import {
  CssTextField,
} from '../../../common/components/TextFields';

import {
  clearSevenBreadItemDocument,
  clearCreatedSevenBreadItem,
  clearSevenBreadItemId,
  createSevenBreadItemDocument,
} from '../../../state/sevenBreadSlice';

export default function ReviewDocumentContentContainer({ contentsLink }) {
  const history = useHistory();
  const classes = useStyles();

  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failOpen, setFailOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { sevenBreadItemDocument } = useSelector((state) => ({
    sevenBreadItemDocument: state.sevenBread.sevenBreadItemDocument,
  }));
  const { createdSevenBreadItem } = useSelector((state) => ({
    createdSevenBreadItem: state.sevenBread.createdSevenBreadItem,
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
      history.push('/service/seven-bread/item/add');
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
            ?????? ??? ??????
          </Typography>
          <Typography
            variant="h5"
            style={{ marginTop: '10px', marginBottom: '10px', color: '#303C6C' }}
          >
            {sevenBreadItemDocument.itemName}
            (
            {sevenBreadItemDocument.itemCode}
            )??? ?????? ??????
          </Typography>
          <Box style={{ margin: '10px 0 0 0' }}>
            <CssTextField
              required
              name="majorHandler"
              label="????????????"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={sevenBreadItemDocument.majorHandler === 'W' ? '??????'
                : sevenBreadItemDocument.majorHandler === 'G' ? '??????'
                  : '??????/??????'}
            />
          </Box>
          <Box style={{ margin: '10px 0 0px 0' }}>
            <CssTextField
              required
              name="capturedDate"
              label="?????????"
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
              label="??????"
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
              ??????
            </BackButton>
            <NextButton onClick={(e) => handleOnClick(e)}>
              ??????
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
          ????????? ????????? ????????? ????????????.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ???????????? ???????????? ????????? ???????????? ?????????????????? ????????? ???????????????
            ???????????? ????????????. ????????? ????????? ?????? ????????? ?????????.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            ??????
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
          ?????????????????? ?????? ????????? ???????????? ???????????????.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ??????????????? ??????????????? ????????? ?????? ????????? ?????????.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            ??????
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
          ??????????????? ?????????????????????.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ????????? ???????????? 007??? ??????????????? ????????? ????????? ???????????????.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} color="secondary" autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
