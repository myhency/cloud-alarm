import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { pink, indigo } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import ProgressToolBar from '../components/ProgressToolBar';

import {
  clearAlarmDetail,
  clearCreatedAlarm,
  createAlarmDocument,
  clearAlarmDocument,
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
    backgroundColor: '#FFFFFF',
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  contentRight: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    borderLeft: '1px solid lightgrey',
    height: '89vh',
  },
}));

const NextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: indigo[700],
    '&:hover': {
      backgroundColor: indigo[900],
    },
  },
}))(Button);

const BackButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[700]),
    backgroundColor: pink[700],
    '&:hover': {
      backgroundColor: pink[900],
    },
  },
}))(Button);

const CssTextField = withStyles({
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
})(TextField);

export default function ReaddReviewDocumentContentContainer({ contentsLink, id }) {
  const history = useHistory();
  const classes = useStyles();

  const [successOpen, setSuccessOpen] = React.useState(false);
  const [failOpen, setFailOpen] = React.useState(false);
  const [warningOpen, setWarningOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { alarmDocument } = useSelector((state) => ({
    alarmDocument: state.alarmDocument,
  }));
  const { createdAlarm } = useSelector((state) => ({
    createdAlarm: state.createdAlarm,
  }));

  function handleOnClick(event) {
    if (
      alarmDocument.itemName === ''
      || alarmDocument.itemCode === ''
      || alarmDocument.recommendPrice === ''
      || alarmDocument.losscutPrice === ''
    ) {
      setWarningOpen(true);
    } else {
      event.preventDefault();
      dispatch(
        createAlarmDocument({
          // alarmId: id,
          itemName: alarmDocument.itemName,
          itemCode: alarmDocument.itemCode,
          recommendPrice: alarmDocument.recommendPrice,
          losscutPrice: alarmDocument.losscutPrice,
          comment: alarmDocument.comment,
          theme: alarmDocument.theme,
        }),
      );
    }
  }

  useEffect(() => {
    if (!createdAlarm.result) {
      setFailOpen(true);
    }

    if (createdAlarm.result && createdAlarm.createdDate) {
      setSuccessOpen(true);
    }
    return () => {};
  }, [createdAlarm]);

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
    dispatch(clearCreatedAlarm());
    dispatch(clearAlarmDetail());
    dispatch(clearAlarmDocument());
  }

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <ProgressToolBar />
      <Grid lg={12} xs={12} item>
        <Grid container justify="center">
          <Grid lg={8} xs={8} item>
            <div
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <Typography
                  variant="h4"
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                >
                  검토 및 저장
                </Typography>
                <Typography
                  variant="h5"
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                >
                  {alarmDocument.itemName}
                  (
                  {alarmDocument.itemCode}
                  )에 대한 요약
                </Typography>
                <Box style={{ margin: '10px 0 0 0' }}>
                  <CssTextField
                    required
                    name="recommendPrice"
                    label="돌파가격"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.recommendPrice}
                  />
                </Box>
                <Box style={{ margin: '10px 0 0px 0' }}>
                  <CssTextField
                    required
                    name="losscutPrice"
                    label="손절가격"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.losscutPrice}
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
                    InputProps={{
                      readOnly: true,
                    }}
                    value={alarmDocument.comment}
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
                    value={alarmDocument.theme}
                  />
                </Box>
                <Box display="flex">
                  <Box display="flex" flexDirection="row">
                    <BackButton
                      style={{
                        backgroundColor: 'hotpink',
                        margin: '0 5px 0 0',
                      }}
                      onClick={(e) => handleOnBackClick(e)}
                    >
                      뒤로
                    </BackButton>
                    <NextButton onClick={(e) => handleOnClick(e)}>
                      저장
                    </NextButton>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row-reverse"
                    flexGrow="1"
                  />
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
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
          시스템오류로 인해 알람이 수정되지 않았습니다.
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
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          알람수정이 성공하였습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            확인을 클릭하여 알리미 리스트에서 수정한 알람을 확인하세요.
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
